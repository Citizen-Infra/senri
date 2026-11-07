# Potato/PStack handoff playbook

This is the project-level operating contract for applying PStack after the six
App Spec documents are approved. It does not vendor PStack or replace its
upstream playbooks.

The command is spelled `/poteto-mode`. In Claude Code it is
`/pstack:poteto-mode`. PStack is Cursor-native; other agents may follow this
document as a runbook when they cannot execute PStack's subagents or custom
modes directly.

## What a playbook does

A playbook is a reusable sequence for performing work and proving the result.
It is not a requirements document. `/poteto-mode` matches a goal to an upstream
playbook, copies the selected steps into the task list, invokes specialist
skills as needed, and keeps skipped steps visible with a reason.

The six specifications define **what and why**. The selected playbook defines
**how this particular task will proceed and what evidence finishes it**.

## SENRI El Niño sequence

### 1. Resolve unknowns with prototypes

Use the Prototype playbook for a question that can be answered more reliably by
trying an interaction or integration seam than by debating it. Prototype output
is disposable; preserve the decision and evidence, not prototype code.

Example prompt:

```text
/poteto-mode new task. Read docs/el-nino/spec/ and prototype the smallest
coordination-over-map journey that resolves <issue link>. Work in an isolated
scratch area. Do not change product source. Compare variants with screenshots
and accessibility notes, then recommend one and stop for review.
```

### 2. Turn approved specifications into a multi-phase plan

Only after all six documents are approved, run the Multi-phase Plan playbook.
The plan is the deliverable; this step must not implement it.

```text
/poteto-mode new task. Read all six files in docs/el-nino/spec/ and the linked
Wayfinder map. Produce a multi-phase plan of small, independently verifiable
pull requests. Preserve the separate OSIRIS and coordination boundaries. Give
each PR one owner, exact scope, dependencies, deterministic checks, direct
behavior proof, rollback, and an explicit approval gate. Do not implement or
merge anything.
```

### 3. Implement one approved slice

Use the Feature playbook for one issue derived from `06-plan.md`. The branch
owner designs, implements, verifies, and hands off only that slice.

```text
/poteto-mode new task. Implement <issue link>, which is slice <S#> from
docs/el-nino/spec/06-plan.md. Use a fresh branch and worktree. Do not change
unrelated SENRI content. Prove every listed acceptance criterion and stop at a
draft pull request. Do not merge.
```

### 4. Review and open the pull request

The Opening a PR playbook produces a focused branch, ordered commits, direct
verification evidence, and a clear review brief. Privacy, authentication,
moderation, data migrations, permissions, deployment, or shared infrastructure
also require the repository's advisory integration-review checkpoint.

### 5. Prepare or ship only when explicitly authorized

Babysitting drives a pull request to merge-ready and stops. Shipping may merge,
so phrases such as “prepare for review” or “babysit” never imply permission to
merge. Preserve SENRI's explicit approval gate at every stage.

## Create a custom mode only after learning

Run the manual workflow across several real slices first. Record repeated steps,
failure modes, approval points, and useful evidence. Then use `/automate-me` to
create a SENRI-specific mode and evaluate it against at least:

- a docs-only specification change;
- a disposable interaction prototype;
- a coordination-platform feature;
- an OSIRIS adapter change;
- a privacy or migration change that must stop for additional review.

The custom mode should reference upstream PStack rather than copying its full
playbooks, so upstream improvements remain available.

## Task-level done check

Every PStack prompt for this project should name:

- the user-visible goal;
- a pass/fail completion check;
- the proof the reviewer should inspect;
- the relevant spec and issue links;
- repository boundaries and privacy constraints;
- the allowed stopping point: investigation, prototype, draft PR, ready for
  review, or explicitly authorized merge.
