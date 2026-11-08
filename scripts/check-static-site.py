"""Validate the assembled Pages tree using only stdlib and Node's syntax parser.

Source snapshots are preserved as files, never imported, built, or executed.
External URLs and fragment identifiers are outside this local file check.
"""

import json
import re
import subprocess
import sys
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlsplit


class LocalLinks(HTMLParser):
    def __init__(self):
        super().__init__()
        self.links = []

    def handle_starttag(self, tag, attrs):
        self.links.extend(value for name, value in attrs if name in {"href", "src"} and value)


def reject_json_constant(value):
    raise ValueError(f"non-standard numeric constant {value}")


def check_research_data(root):
    path = root / "el-nino" / "data" / "research.json"
    try:
        data = json.loads(path.read_text(encoding="utf-8"), parse_constant=reject_json_constant)
    except (ValueError, UnicodeError, OSError) as error:
        raise ValueError(f"Invalid research data: {error}") from error

    items = data.get("items")
    resources = data.get("resources")
    if not isinstance(items, list) or not isinstance(resources, list):
        raise ValueError("Research data must contain items and resources arrays")

    item_ids = [entry.get("id") for entry in items if isinstance(entry, dict)]
    if len(item_ids) != len(items) or any(not value for value in item_ids):
        raise ValueError("Every research item must be an object with an id")
    if len(item_ids) != len(set(item_ids)):
        raise ValueError("Research item ids must be unique")

    required = {
        "id", "kind", "reviewStatus", "title", "description", "origin",
        "sourcePath", "sourceCommit", "sourceDate", "rights",
    }
    allowed_statuses = {"method-only", "held-for-verification"}
    resource_ids = []
    for resource in resources:
        if not isinstance(resource, dict):
            raise ValueError("Every research resource must be an object")
        missing = sorted(required.difference(resource))
        if missing:
            raise ValueError(
                f"Research resource {resource.get('id', '<missing id>')} lacks: {', '.join(missing)}"
            )
        blank = sorted(
            field for field in required
            if not isinstance(resource[field], str) or not resource[field].strip()
        )
        if blank:
            raise ValueError(
                f"Research resource {resource.get('id', '<missing id>')} has blank or invalid fields: {', '.join(blank)}"
            )
        if not re.fullmatch(r"[0-9a-f]{40}", resource["sourceCommit"]):
            raise ValueError(f"Research resource {resource['id']} has an invalid sourceCommit")
        if resource["reviewStatus"] not in allowed_statuses:
            raise ValueError(
                f"Research resource {resource['id']} has unknown reviewStatus {resource['reviewStatus']}"
            )
        if resource["reviewStatus"] == "method-only" and not resource.get("url"):
            raise ValueError(f"Research method {resource['id']} must link to its shared copy")
        if resource["reviewStatus"] == "held-for-verification" and resource.get("url"):
            raise ValueError(f"Held research resource {resource['id']} must not have a public-library link")
        if resource.get("url"):
            if not isinstance(resource["url"], str):
                raise ValueError(f"Research resource {resource['id']} has an invalid URL")
            url = urlsplit(resource["url"])
            if url.scheme or url.netloc or url.path.startswith("/"):
                raise ValueError(f"Research resource {resource['id']} must use a local shared-library URL")
            resource_root = (root / "el-nino" / "research-library" / "resources").resolve()
            target = (root / "el-nino" / "research-library" / unquote(url.path)).resolve()
            if not target.is_relative_to(resource_root) or not target.is_file():
                raise ValueError(f"Research resource {resource['id']} links to a missing local file")
        resource_ids.append(resource["id"])

    if len(resource_ids) != len(set(resource_ids)):
        raise ValueError("Research resource ids must be unique")
    if set(item_ids).intersection(resource_ids):
        raise ValueError("Research item and resource ids must not overlap")


def check_site(root):
    root = root.resolve()
    for name in ("index.html", ".nojekyll"):
        if not (root / name).is_file():
            raise ValueError(f"Pages artifact missing {name}")
    for name in (".git", ".github", "_site"):
        if (root / name).exists():
            raise ValueError(f"Pages artifact contains excluded path {name}")

    check_research_data(root)

    counts = {"JavaScript": 0, "JSON": 0, "HTML": 0, "local links": 0}
    for path in sorted(root.rglob("*")):
        relative = path.relative_to(root)
        if path.is_symlink():
            raise ValueError(f"Pages artifact contains symlink: {relative}")
        forbidden = {"node_modules", "__pycache__", ".next", ".wrangler", ".sites-runtime", ".gitnexus"}
        if forbidden.intersection(relative.parts) or path.suffix in {".pyc", ".pyo", ".tsbuildinfo", ".log"}:
            raise ValueError(f"Pages artifact contains runtime material: {relative}")
        if path.name.startswith(".env") and path.name not in {".env.example", ".env.sample"}:
            raise ValueError(f"Pages artifact contains environment values: {relative}")
        if relative.parts[:4] in {
            ("el-nino", "osiris", "source", "runs"),
            ("el-nino", "osiris", "source", "scratch"),
        }:
            raise ValueError(f"Pages artifact contains runtime material: {relative}")
        if not path.is_file() or "source" in relative.parts or any(
            part.startswith(".") for part in relative.parts
        ):
            continue
        if path.suffix in {".js", ".mjs", ".cjs"}:
            # --check parses without evaluating the file or loading its imports.
            subprocess.run(["node", "--check", str(path)], check=True, timeout=15)
            counts["JavaScript"] += 1
        elif path.suffix == ".json":
            try:
                json.loads(path.read_text(encoding="utf-8"), parse_constant=reject_json_constant)
            except (ValueError, UnicodeError) as error:
                raise ValueError(f"Invalid JSON in {relative}: {error}") from error
            counts["JSON"] += 1
        elif path.suffix == ".html":
            parser = LocalLinks()
            parser.feed(path.read_text(encoding="utf-8"))
            counts["HTML"] += 1
            for link in parser.links:
                url = urlsplit(link)
                if url.scheme or url.netloc or not url.path:
                    continue
                # Absolute URLs start at the domain root, outside this project site.
                # /senri/ is the project's deployed base path.
                target_path = unquote(url.path)
                if target_path.startswith("/senri/"):
                    target = root / target_path.removeprefix("/senri/")
                elif target_path.startswith("/"):
                    raise ValueError(f"Link outside project base in {relative}: {link}")
                else:
                    target = path.parent / target_path
                target = target.resolve()
                if not target.is_relative_to(root):
                    raise ValueError(f"Link escapes Pages artifact in {relative}: {link}")
                if target.is_dir():
                    target = target / "index.html"
                if not target.is_file():
                    raise ValueError(f"Broken local link in {relative}: {link}")
                counts["local links"] += 1
    print("Static site passed: " + ", ".join(f"{n} {kind}" for kind, n in counts.items()))


if __name__ == "__main__":
    try:
        check_site(Path(sys.argv[1]))
    except (ValueError, OSError, subprocess.SubprocessError) as error:
        sys.exit(str(error))
