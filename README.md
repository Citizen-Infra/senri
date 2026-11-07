# SENRI

The shared build repository for the Super El Niño Response Initiative (SENRI). We use it to
build tools that help communities prepare for, and respond to, possible severe El Niño impacts.
The first prototypes map problems, needs and offers.

## Start here

- People: this README explains the repository and its safety boundary.
- People and agents working together: read the proposed
  [`AGENTS.md`](AGENTS.md) collaboration guide.
- Shared documentation: use [`docs/README.md`](docs/README.md) to find the
  correct product namespace and source of truth.
- Shared methods and optional tools: use [`skills/README.md`](skills/README.md)
  and [`skills/registry.yaml`](skills/registry.yaml).

## Repository map

| Path | What it contains |
|---|---|
| `index.html` | GitHub Pages entry point |
| `.github/workflows/` | Repository automation |
| `docs/` | Repository and product documentation, namespaced by product |
| `skills/` | Capability registry and installation guidance; no vendored implementations |
| `el-nino/` | El Niño impact calendar, problem map, research, funders, and source-adjacent documentation |

## How we work

- Ideas and tasks go in [Issues](../../issues).
- Prototypes and code go here, each in its own folder until the group decides what to merge.
- Product decisions are summarized in issues and reflected in the matching
  specification under `docs/`. Pull requests are the reviewable way to change
  documents or code.
- Substantive sessions may produce a short, sanitized decision digest. Raw notes
  and transcripts stay out.

## Prototypes

Published at https://citizen-infra.github.io/senri/ once GitHub Pages is on.

- [`el-nino/`](el-nino/): a folder-per-tool collection for the 2026–27 El Niño: impact calendar, problem map, research library, coordination funders, the Super El Niño community-platform source, and an OSIRIS source snapshot ([live](https://citizen-infra.github.io/senri/el-nino/)). Imported projects retain their upstream licensing state and notices; SENRI data is CC BY 4.0.

## What stays out

- **Personal data about real people or households**, including needs, offers, locations and
  contact details. Use made-up data for development.
- **Notes or transcripts from SENRI conversations.**
- **Forecasts stated as fact.** Name the source and its date.

## Licence

The code is under the [MIT licence](LICENSE).

- Code reused from other projects keeps its original notice. For example, Osiris is MIT.
- Data and text in `el-nino/data/` and `el-nino/docs/` are under CC BY 4.0, see [`el-nino/LICENSE-DATA.md`](el-nino/LICENSE-DATA.md).
- El Niño product specification and process text in `docs/el-nino/` are also
  under CC BY 4.0, see [`el-nino/LICENSE-DATA.md`](el-nino/LICENSE-DATA.md).
- Map data from OpenStreetMap is © OpenStreetMap contributors and is available under the
  [Open Database License](https://www.openstreetmap.org/copyright), whatever licence the code uses.
