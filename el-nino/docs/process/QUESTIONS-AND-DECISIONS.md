# Questions and decision register

This living index lets people and agents resume the project without replaying a
chat transcript. It points to the durable discussion and evidence; it does not
duplicate the full resolution text held in Wayfinder issues or the current
product truth held in [`../spec/`](../spec/).

## How to use the register

- Give durable decisions IDs `D-###` and open questions IDs `Q-###`.
- Discuss a meaningful question in one linked issue. Small wording changes may
  stay in the specification pull request.
- Put the recommended answer first, with the reason and decision owner.
- When accepted, record a resolution in the issue, update the affected spec,
  mark the register entry accepted, and close the issue only if no work remains.
- If new evidence changes an accepted decision, reopen or create a successor
  issue and record which documents must be reviewed again.
- Never store participant data, private reports, credentials, or sensitive
  moderation details in the register or its linked issues.

## Accepted decisions

| ID | Decision | Durable record | Affects |
|---|---|---|---|
| D-001 | SENRI is the canonical product home; shared content and separate source boundaries are preserved | [Issue 11](https://github.com/Citizen-Infra/senri/issues/11) | All documents |
| D-002 | Version one centers local coordinators and mutual-aid organizers completing the need-to-outcome journey | [Issue 12](https://github.com/Citizen-Infra/senri/issues/12) | Product, flow, plan |
| D-003 | The coordination platform remains authoritative and publishes a versioned, privacy-safe public-map projection to a pinned OSIRIS integration | [Issue 13](https://github.com/Citizen-Infra/senri/issues/13) | Tech, data, plan |
| D-004 | Accounts, profiles, communities, contributions, matches, plans, tasks, assignments, and locations are distinct durable entities | [Issue 14](https://github.com/Citizen-Infra/senri/issues/14) | Product, flow, data |
| D-005 | Identity is private by default; trust and moderation are contextual, consent-based, distributed, appealable, and GDPR-aligned | [Issue 15](https://github.com/Citizen-Infra/senri/issues/15) | Product, flow, data, design |
| D-006 | One routed product keeps separate OSIRIS and coordination runtimes, independent pins, additive migration, and independent rollback | [Issue 17](https://github.com/Citizen-Infra/senri/issues/17) | Tech, plan |
| D-007 | The six App Spec documents are approved sequentially; Wayfinder holds decisions and pull requests change the shared truth | [Draft foundation PR](https://github.com/Citizen-Infra/senri/pull/20) | Collaboration process |

## Open questions

| ID | Question and recommended answer | Owner | Needed by | Discussion |
|---|---|---|---|---|
| Q-001 | **Pilot budget:** set no amount until the technical requirements are known; minimize recurring cost and require explicit approval for paid commitments | Product and technical stewards | Product approval | [Draft foundation PR](https://github.com/Citizen-Infra/senri/pull/20) |
| Q-002 | **Pilot communities:** name two or three communities and one or more local stewards for each | Product steward and community representatives | Product approval | [Issue 19](https://github.com/Citizen-Infra/senri/issues/19) |
| Q-003 | **Languages and accessibility:** choose first-release languages and accessibility-testing participants with the pilot communities | Community and design representatives | Product approval | [Issue 19](https://github.com/Citizen-Infra/senri/issues/19) |
| Q-004 | **Concrete journeys:** validate the smallest map, list, contribution, match, plan, task, contact, and moderation flows with disposable prototypes | Product and design stewards | App Flow approval | [Issue 16](https://github.com/Citizen-Infra/senri/issues/16) |
| Q-005 | **Technical thresholds:** set the exact stack, EU or EEA processors, performance, reliability, observability, cost, and rollback targets | Technical and privacy stewards | Technical approval | [Issue 18](https://github.com/Citizen-Infra/senri/issues/18) |
| Q-006 | **Data schedule:** specify field-level purpose, legal basis, access, retention, export, deletion, anonymization, and backup behavior | Privacy and technical stewards | Data approval | [Issue 15](https://github.com/Citizen-Infra/senri/issues/15) |
| Q-007 | **Visual system:** choose the map and coordination hierarchy, accessible tokens, interaction states, and mobile treatments | Design and community representatives | Design approval | [Issue 16](https://github.com/Citizen-Infra/senri/issues/16) |
| Q-008 | **Delivery slices:** derive independently verifiable pull requests, ownership, dependencies, evidence, and rollback from the five approved design documents | Product and technical stewards | Plan approval | [Issue 18](https://github.com/Citizen-Infra/senri/issues/18) |

## Session-digest template

Post this as one comment on the Wayfinder map or the child issue that owns the
session's main question:

```markdown
## Session digest — YYYY-MM-DD — <focus>

### Accepted decisions
- D-###: <decision and short reason>

### Open questions
- Q-###: <question> — **Recommendation:** <answer and reason> — **Owner:** <role>

### Evidence and artifacts
- <spec, prototype, research, or pull-request link>

### Affected specifications
- <file and section>

### Next gate
- <one observable approval or evidence requirement>
```

