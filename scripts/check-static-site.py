"""Validate the assembled Pages tree using only stdlib and Node's syntax parser.

Source snapshots are preserved as files, never imported, built, or executed.
External URLs and fragment identifiers are outside this local file check.
"""

import json
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


def check_site(root):
    root = root.resolve()
    for name in ("index.html", ".nojekyll"):
        if not (root / name).is_file():
            raise ValueError(f"Pages artifact missing {name}")
    for name in (".git", ".github", "_site"):
        if (root / name).exists():
            raise ValueError(f"Pages artifact contains excluded path {name}")

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
