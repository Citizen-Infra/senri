# SENRI El Niño — Product requirements

**Status:** Draft for stakeholder review. This document defines product intent;
it does not authorize implementation, deployment, archival, or merge.

## Problem

Local coordinators and mutual-aid organizers can see risks and community needs,
but the information, offers of help, plans, and follow-through are fragmented
across maps, spreadsheets, chats, and personal networks. They need a shared,
privacy-respecting way to move from understanding local context to completing
real work, without presenting community contributions as official alerts or
emergency dispatch.

## Users

| User | Wants to | Today they |
|---|---|---|
| Local community coordinator or mutual-aid organizer | Turn needs and offers into safe, completed plans | Reconcile maps, chats, forms, and spreadsheets manually |
| Resident or volunteer | Find relevant ways to ask for or offer support | Depend on personal networks and scattered channels |
| NGO, local authority, researcher, or emergency-service observer | Understand community-provided context and activity | Assemble partial reports from disconnected sources |
| Community moderator or steward | Keep participation safe under locally chosen rules | Moderate informal channels with weak provenance and appeal paths |

The first release gives secondary users no special verification authority,
dispatch workflow, or privileged operational dashboard.

## Goal and success

- **Goal:** Help a real community move from a visible need to a safely matched
  offer, shared plan, completed tasks, and communicated outcome on one globally
  viewable, OSIRIS-backed product.
- **We know it works when:** two or three pilot communities complete the full
  journey and establish credible baselines for response time, successful
  matches, plans started, tasks completed, retention, and safety or privacy
  incidents.

Traffic, registrations, and map views are diagnostic measures, not primary
success outcomes. Expansion requires both quantitative evidence and structured
interviews with participants and local stewards.

## Features

| # | Feature | User | Priority | Done when |
|---|---|---|---|---|
| F1 | Public context map plus accessible list and search | Everyone | Must | A person can discover active, consent-safe community contributions without relying on a map alone |
| F2 | Needs, offers, resources, events, and updates | Participant | Must | A person can create, edit, pause, fulfil, expire, or withdraw an appropriate contribution |
| F3 | Human-confirmed matching | Coordinator, participant | Must | Suggested need/offer matches become commitments only after the relevant people accept |
| F4 | Communities, plans, tasks, and consent-bearing assignments | Coordinator, volunteer | Must | A community can create a plan, assign accepted work, track it, and mark an outcome |
| F5 | Consent-based coordination and contact controls | Participant | Must | Each person can choose who may contact them and can block, mute, report, or individually allow another person |
| F6 | Privacy-safe identity and location | Participant | Must | Identity, contact details, and precise location remain private unless each is separately and revocably shared |
| F7 | Contextual trust with clear provenance | Participant, steward | Must | A trust signal states what was checked, who checked it, and when, without exposing private identity |
| F8 | Distributed governance and moderation | Community steward | Must | Communities apply their own published rules above a small common safety floor, with proportionate action and an appeal path |
| F9 | User-controlled notifications | Participant | Should | Digest is the default; immediate notifications occur only for user-selected events and never imply emergency alerting |
| F10 | Mobile, low-bandwidth, and degraded-network use | Participant | Should | Core discovery and coordination work on mobile, with offline drafts that can synchronize later |
| F11 | Portable signed trust evidence | Participant, steward | Later | Trust records can be exported and independently checked without requiring a blockchain |
| F12 | Optional blockchain anchoring | Ecosystem steward | Later | A separately approved privacy and governance case demonstrates practical value before integration |

## Product rules

- OSIRIS is the core planet-map renderer. The coordination platform remains
  authoritative for identity, consent, communities, contributions, matches,
  plans, tasks, messages, trust, and moderation.
- OSIRIS receives only a versioned, deny-by-default public-map projection. It
  never receives private identity, contact details, messages, memberships,
  reports, moderation notes, or internal task details.
- Public participation may use a display name or pseudonym. Verified private
  identity may contribute a scoped trust signal but is not publicly revealed.
- Trust is contextual and community-based, not one universal reputation score.
- Communities self-organize and moderate locally. Platform-level stewards act
  only on appeals, cross-community abuse, common-safety-floor violations, or
  legal obligations.
- Serious reports may temporarily hide content for rapid review. Authorities
  are not contacted automatically except where legally required or an imminent
  threat demands it.
- Accounts are adult-only in version one. Participation involving minors must
  be mediated by a guardian or trusted organization.
- Consent is revocable. Private account data can be exported and deleted;
  necessary shared history is retained only in anonymized form.
- Personal data is hosted in the EU or EEA by default with GDPR-compliant
  processors, documented retention, least-privilege access, encryption, audit
  logs, and a breach-response process.
- Every contribution is visibly community-provided and unverified. The product
  is not an official alert, guaranteed offer of help, or emergency-dispatch
  system.

## Pilot boundary

- Pilot with two or three communities, each represented by named local
  stewards, for roughly eight to twelve weeks.
- Emphasize preparedness and non-urgent mutual aid. Response and recovery
  contributions may be visible, but the product makes no real-time dispatch
  promise.
- Exclude payments, professional medical or legal advice, emergency dispatch,
  and unsupervised accounts for minors.
- Require a go/no-go review using coordination outcomes, retention, safety and
  privacy incidents, and participant interviews before expansion.

## Out of scope

- Merging or flattening the OSIRIS and coordination codebases in the first
  stage.
- Replacing official emergency, weather, health, or government information.
- Automatically assigning people, publishing people as map markers, or
  exposing precise location or contact data by default.
- A universal reputation score, cryptocurrency, token economics, or blockchain
  dependency in version one.
- Special operational privileges for NGOs, authorities, researchers, or
  emergency services in version one.
- Archiving the source repository, moving production data, or changing OSIRIS
  upstream without a separately reviewed cutover decision.

## Constraints and open decisions

- Canonical home: `Citizen-Infra/senri/el-nino/`; existing shared SENRI content
  must not be overwritten.
- Initial source boundaries remain separate under
  `el-nino/community-platform/source/` and `el-nino/osiris/source/` when their
  migration is separately approved.
- The coordination platform and D1 remain the durable system of record; OSIRIS
  is pinned and connected through a versioned public-map adapter.
- Budget: `TBD(approve a pilot operating and infrastructure budget)`.
- Pilot participants: `TBD(name two or three communities and their local stewards)`.
- First-release languages and accessibility testing participants:
  `TBD(select these with the pilot communities)`.

