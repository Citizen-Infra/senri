# SENRI human–agent collaboration guide

**Status: first draft for co-creation.** This guide applies across the repository
unless a nearer `AGENTS.md` adds more specific instructions. People and agents
are invited to improve it through issues and pull requests.

SENRI is a shared build space. Agents are collaborators that investigate,
draft, implement, and verify bounded work; they do not replace community
judgment, maintainer review, or explicit authority for consequential actions.

## Start here

Before acting in this repository:

1. Read [`README.md`](README.md), then the nearest folder README,
   `CONTRIBUTING.md`, and `AGENTS.md` if one exists.
2. Inspect the current branch, worktree status, related issue, open pull
   requests, and recent changes. Existing or untracked work belongs to someone
   unless proven otherwise.
3. State the intended outcome, paths in scope, evidence required, and stopping
   point: investigation, proposal, prototype, draft pull request, ready for
   review, deployment, or merge.
4. Distinguish discussion, diagnosis, planning, implementation, deployment, and
   merge. Permission for one does not imply permission for the next.
5. Work in an isolated branch or worktree. Use one writer per branch and avoid
   unrelated edits.

## Repository map

| Path | Purpose |
|---|---|
| `README.md` | Repository purpose, navigation, privacy boundary, and licensing |
| `index.html` | GitHub Pages entry point |
| `.github/workflows/` | Repository automation |
| `el-nino/` | Current El Niño problem-map prototype and its scoped documentation |
| `el-nino/docs/spec/` | Proposed six-part product specification and approval gates |
| `el-nino/docs/process/` | Proposed collaboration, decision-memory, and PStack process |

Keep projects in separate folders until the group explicitly approves an
integration boundary. A folder's README should explain its purpose, source,
license, run instructions, and status.

## Shared-repository guardrails

- Do not push directly or force-update `main`.
- Do not merge, deploy, archive a source repository, move production data, or
  contact external parties without explicit authorization for that action.
- Do not overwrite unrelated files, flatten independent applications, broadly
  delete content, rewrite shared history, or discard another contributor's
  uncommitted work.
- Preserve original history where practical, attribution, licenses, and exact
  upstream version pins for reused projects.
- Prefer small pull requests with one reviewable outcome, clear dependencies,
  deterministic checks, direct behavior evidence, and rollback notes where
  relevant.
- Treat generated output, dependencies, caches, logs, secrets, credentials, and
  local tool state as untracked runtime material unless the repository
  explicitly documents otherwise.

When scope or authority is unclear, continue with read-only investigation and
ask for the smallest decision that unblocks safe progress.

## Issues, decisions, and product truth

- Use an issue for one bounded question or outcome. Put the recommended answer
  first, explain why, name an owner, and link the evidence.
- Use pull requests to propose changes to tracked documents or code.
- Record durable product decisions in the relevant decision issue, then update
  the canonical specification. Do not leave an accepted decision only in chat.
- Capture a sanitized session digest when a conversation changes project state.
  Do not commit raw meeting notes or transcripts.
- GitHub must never contain private participant data, exact private locations,
  contact details, credentials, private reports, or sensitive moderation cases.

The El Niño product's detailed source-of-truth and decision process lives in
[`el-nino/docs/spec/README.md`](el-nino/docs/spec/README.md) and
[`el-nino/docs/process/QUESTIONS-AND-DECISIONS.md`](el-nino/docs/process/QUESTIONS-AND-DECISIONS.md).

## Build and verification

Before changing code, understand the current behavior and identify the smallest
safe boundary. For every change:

1. run the repository's relevant deterministic checks;
2. add direct proof for user-visible behavior, data changes, integrations, or
   migrations rather than relying only on a generic test suite;
3. run `git diff --check` and review the complete diff for unrelated changes;
4. report checks that were not run and why;
5. keep the pull request in draft while material questions remain.

Documentation-only changes do not need runtime tests, but links, paths,
formatting, and claims should still be checked. Security, authentication,
permissions, personal-data handling, moderation, migrations, deployment, and
shared infrastructure need extra human and integration review.

## Human and agent handoff

A useful handoff is short and reproducible:

- outcome and current status;
- changed paths and linked issue or specification;
- decisions made and open questions;
- checks and direct evidence;
- risks, rollback, and unverified assumptions;
- the exact next approval or action required.

Do not claim work is ready or safe merely because an agent completed it or CI
is green. The responsible people decide whether the evidence is sufficient.

## Improve this guide

This document should evolve from real collaboration. Propose changes through a
focused pull request, explain the failure or ambiguity the change addresses,
and invite maintainers and community contributors to review it. Add local
`AGENTS.md` files only when a folder genuinely needs more specific rules; do not
copy this file into every directory.

