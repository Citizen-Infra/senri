# Shared skills and plugins

This directory tells people and agents which methods and optional tools the
repository recognizes. It does not contain executable skill implementations.
The machine-readable inventory is [`registry.yaml`](registry.yaml).

Skills support the repository process; they never override `AGENTS.md`, expand
task authority, permit a merge or deployment, or grant access to credentials
and external systems.

## Current capability map

| Entry | Role | Required? |
|---|---|---|
| App Spec | Six sequential product documents and approval gates | Required for the El Niño product |
| Wayfinder | Shared decision map with one durable question per issue | Required planning method for current El Niño decisions |
| PStack and `/poteto-mode` | Evidence-driven prototypes, multi-phase plans, implementation, and PR preparation | Optional host tool |
| Create PRD | General drafting method absorbed by App Spec document 1 | No separate workflow |

The project contracts linked from `registry.yaml` remain usable even when an
optional plugin is unavailable.

## Install PStack

PStack is Cursor-native and is referenced rather than copied into this
repository.

In Cursor:

```text
/add-plugin pstack
/setup-pstack
```

In Claude Code:

```text
/plugin marketplace add cursor/plugins
/plugin install pstack@cursor-plugins
/pstack:setup-pstack
```

Keep marketplace auto-update off unless a maintainer has reviewed the new
version. Verify the installed version against `registry.yaml` before a project
run. Other agent hosts should follow the linked project playbook rather than
pretending Cursor-only custom modes or subagents are available.

## Version, license, and provenance policy

- Reference external tools at an exact version and commit.
- Record the upstream URL, declared license, project contract, and update
  process.
- Do not copy or vendor an external skill merely for convenience.
- Vendoring requires a compatible license, preserved attribution, a reason the
  reference model is insufficient, and maintainer review.
- Installation or upgrade is a local tool change and needs explicit approval.
- Registry changes go through a pull request and state what behavior changed.

## Propose another capability

Open an issue describing the problem, why the existing project contracts are
insufficient, the upstream source and license, the minimum permissions needed,
and how the capability will be evaluated. Prefer a method documented in the
repository over a dependency on one person's machine.

Do not add a SENRI `SKILL.md` yet. First run the documented workflow across
several real specification, prototype, feature, adapter, and privacy or
migration cases. Then use PStack's `/automate-me` flow to draft a project mode
and evaluate it before proposing it here.
