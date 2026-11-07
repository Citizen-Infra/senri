# SENRI

The shared build repository for the Super El Niño Response Initiative (SENRI). We use it to
build tools that help communities prepare for, and respond to, possible severe El Niño impacts.
The first prototypes map problems, needs and offers.

## Start here

- People: this README explains the repository and its safety boundary.
- Agents and people working with agents: read [`AGENTS.md`](AGENTS.md) before
  acting. It is a first draft that everyone is invited to co-create.
- El Niño product work: begin with the
  [App Spec map](el-nino/docs/spec/README.md), the
  [questions and decision register](el-nino/docs/process/QUESTIONS-AND-DECISIONS.md),
  and the [shared collaboration process](el-nino/docs/process/COLLABORATION.md).

## Repository map

| Path | What it contains |
|---|---|
| `index.html` | GitHub Pages entry point |
| `.github/workflows/` | Repository automation |
| `el-nino/` | El Niño impact calendar, problem map, research, funders, and scoped product work |
| `el-nino/docs/spec/` | Six sequential product-specification documents and review gates |
| `el-nino/docs/process/` | Collaboration, decision memory, and Potato/PStack handoff guidance |

## How we work

- Ideas and tasks go in [Issues](../../issues).
- Prototypes and code go here, each in its own folder until the group decides what to merge.
- Product decisions are summarized in issues and reflected in the canonical
  specification. Pull requests are the reviewable way to change documents or
  code.
- Substantive sessions end with a short, sanitized decision digest. Raw notes
  and transcripts stay out.

## Prototypes

Published at https://citizen-infra.github.io/senri/ once GitHub Pages is on.

- [`el-nino/`](el-nino/): impact calendar, problem map, research reading list and coordination funders for the 2026–27 El Niño ([live](https://citizen-infra.github.io/senri/el-nino/)). Code MIT, data CC BY 4.0.

## What stays out

- **Personal data about real people or households**, including needs, offers, locations and
  contact details. Use made-up data for development.
- **Notes or transcripts from SENRI conversations.**
- **Forecasts stated as fact.** Name the source and its date.

## Licence

The code is under the [MIT licence](LICENSE).

- Code reused from other projects keeps its original notice. For example, Osiris is MIT.
- Data and text in `el-nino/data/` and `el-nino/docs/` are under CC BY 4.0, see [`el-nino/LICENSE-DATA.md`](el-nino/LICENSE-DATA.md).
- Map data from OpenStreetMap is © OpenStreetMap contributors and is available under the
  [Open Database License](https://www.openstreetmap.org/copyright), whatever licence the code uses.
