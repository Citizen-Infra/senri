# SENRI documentation

This directory is the shared entry point for repository and product
documentation. Product material is namespaced so SENRI can host more than one
prototype or initiative without mixing their decisions.

## Current map

| Path | Status | Purpose |
|---|---|---|
| [`el-nino/spec/`](el-nino/spec/) | Proposed; only document 1 is drafted | Six sequential product-specification documents |
| [`el-nino/process/`](el-nino/process/) | Proposed | Collaboration, decision memory, and Potato/PStack handoff |
| [`el-nino/TEAM.md`](el-nino/TEAM.md) | Draft | Working group members, backgrounds, roles and commitments |

Documentation that explains a source folder itself stays beside that source.
For example, `el-nino/docs/METHODOLOGY.md` and `el-nino/docs/SOURCES.md` explain
the published problem-map prototype and remain under `el-nino/`.

## Add another product

Create `docs/<product>/README.md` and explain:

- the product owner and current status;
- its canonical specification and decision tracker;
- which source folders it governs;
- its privacy, license, and review boundaries;
- how a human or agent can verify proposed changes.

Do not create a second source of truth for an existing product. Link to the
canonical document and propose changes through a pull request.
