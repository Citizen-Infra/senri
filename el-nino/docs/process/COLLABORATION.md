# El Niño collaboration process

This process lets product stakeholders, community representatives, maintainers,
and agents collaborate in the shared SENRI repository without overwriting one
another or confusing planning with implementation.

## One home for each kind of information

- Product truth lives in [`../spec/`](../spec/).
- Decision history and unresolved product questions live in the
  [Wayfinder map](https://github.com/Citizen-Infra/senri/issues/10) and its child
  issues.
- Bounded research, prototype, and implementation work lives in GitHub issues.
- Proposed changes live in branches and pull requests until separately approved
  and merged.
- Private participant data, reports, contact details, and sensitive moderation
  cases live only in the product's protected operational systems.

Do not maintain competing PRDs in issue bodies, chat transcripts, external
documents, or source repositories. Those artifacts may propose a change, but
the accepted result must be reflected in `docs/spec/`.

## Roles

| Role | Responsibility |
|---|---|
| Product steward | Maintains product coherence and accepts specification gates |
| Community representative | Validates real needs, language, consent, and local operating fit |
| Technical maintainer | Validates feasibility, contracts, migration, verification, and rollback |
| Privacy or moderation steward | Validates GDPR, safeguarding, trust, reporting, and appeals |
| Work owner | Is the only writer on a task branch and carries its pull request to handoff |

One person may hold several roles, but approval should state which perspective
they reviewed from. Pilot communities choose their own representatives and
moderators.

## Issue types

Every issue should have one observable outcome and link to the affected
specification section.

| Type | Use it for | Completion evidence |
|---|---|---|
| Decision | A choice that changes product behavior or governance | Resolution comment and updated spec PR |
| Research | An external or technical uncertainty | Cited findings, recommendation, and limitations |
| Prototype | An interaction or architecture question best answered by trying it | Disposable artifact plus screenshots, measurements, or user feedback |
| Implementation | One thin product slice | Tests and behavior evidence named by `06-plan.md` |
| Operations | Deployment, migration, incident, or maintenance work | Runbook evidence and rollback state |

Issues contain links and sanitized summaries, not private operational records.
Use GitHub's native parent and dependency relationships for ordering rather than
copying checklists between multiple issues.

## Branch and pull-request rules

1. Start from the approved base in an isolated worktree.
2. Use one work owner and one narrow outcome per branch.
3. Touch only the El Niño paths required by that outcome. Do not flatten source
   trees, broadly delete files, or rewrite shared history.
4. Keep specification changes separate from implementation unless the pull
   request's explicit purpose is to reconcile an implementation discovery.
5. Run deterministic checks appropriate to the change and attach direct proof
   of behavior for code or interaction changes.
6. Open drafts when review is still needed. No issue resolution, approved spec,
   green check, or agent recommendation grants permission to merge.
7. Update affected Wayfinder decisions and specifications before declaring a
   product change complete.

Docs-only changes may skip CodeRabbit because they do not change runtime
behavior. Authentication, permissions, personal-data handling, moderation,
database migrations, deployments, and shared core infrastructure should receive
the full integration review in addition to deterministic checks and human
judgment.

## Specification review

For each of the six documents:

1. Open one focused draft pull request.
2. Summarize what is decided, what is assumed, and each remaining `TBD`.
3. Gather comments from the roles affected by the document.
4. Resolve disagreements in a Wayfinder issue rather than burying them in a
   long pull-request thread.
5. Update the document and request explicit approval.
6. Merge only with separate authorization, then begin the next document.

If an approved early document changes, reopen review for every later document
whose conclusions depend on it.

