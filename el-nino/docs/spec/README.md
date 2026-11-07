# SENRI El Niño app specification

This directory is the canonical product specification for the OSIRIS-backed
community coordination product. It is deliberately separate from the existing
El Niño problem map, the imported coordination application, and the pinned
OSIRIS source. A specification decision does not authorize implementation,
deployment, repository archival, or a merge.

## Source-of-truth model

| Artifact | Purpose | Must not contain |
|---|---|---|
| [`docs/spec/`](./) | Current approved product behavior and delivery boundary | Private participant or moderation data |
| [Wayfinder map](https://github.com/Citizen-Infra/senri/issues/10) | Decision history, dependencies, and unresolved questions | Duplicate product specifications |
| SENRI issues | One bounded decision, research task, prototype, or implementation slice | Personal data, private reports, or sensitive cases |
| Pull requests | Reviewable proposals to change specifications or code | Unrelated changes or implicit merge authorization |

If artifacts disagree, pause work. Resolve the decision in Wayfinder, update the
earliest affected specification through a pull request, and then propagate the
change through later documents.

## The six documents

The documents are written and approved in order. Later documents may not
silently change an earlier decision.

| # | File | Question answered | Status |
|---|---|---|---|
| 1 | [`01-product.md`](01-product.md) | What does the product do, for whom, and how do we know it works? | Draft for review |
| 2 | `02-app-flow.md` | What happens in each journey, screen, action, and failure state? | Waiting for document 1 approval |
| 3 | `03-tech.md` | Which runtimes, services, integrations, and quality targets are fixed? | Waiting for document 2 approval |
| 4 | `04-data.md` | What data exists, who can see it, and how is it retained or deleted? | Waiting for document 3 approval |
| 5 | `05-design.md` | How should each screen and component look and behave? | Waiting for document 4 approval |
| 6 | `06-plan.md` | Which thin, independently verifiable slices should be built, and in what order? | Waiting for document 5 approval |

## Review gates

1. Gather facts from the repository and Wayfinder issues.
2. Draft only the next document. Mark unknowns as `TBD(<question>)` rather
   than inventing an answer.
3. Review the draft in a dedicated pull request. Community representatives,
   product stewards, technical maintainers, and privacy or moderation stewards
   comment from their areas of responsibility.
4. Record any durable decision in the relevant Wayfinder issue.
5. Update the draft, obtain explicit approval, and merge only when separately
   authorized.
6. Start the next document from the approved predecessor.

After document 6, run a consistency pass:

- every product feature appears in the app flow and implementation plan;
- every screen has required data and a design treatment;
- every tool or service is declared in the technical requirements;
- every piece of personal data has an owner, purpose, legal basis, access rule,
  retention period, and deletion behavior;
- every unresolved `TBD` has an owner and a resolution gate in the plan.

## Working together safely

The shared-repository workflow is defined in
[`../process/COLLABORATION.md`](../process/COLLABORATION.md). The handoff from an
approved specification to Potato/PStack is defined in
[`../process/PSTACK-PLAYBOOK.md`](../process/PSTACK-PLAYBOOK.md).

