# SENRI El Niño response: project strategy

Version 0.2 · 7 November 2026 · draft by Max Semenchuk, based on the group's first call on 6 November 2026, with the focus recommendation (section 10) added.

Call participants: Max Semenchuk, Artem Zhiganov, Graham, Robin Sverd.
Recording: <https://fathom.video/calls/889662581> (55 min, access limited to participants). Timestamps such as [12:34] point to the moment in the recording.

> This is a draft for the group to discuss. Points that sounded like shared agreement on the call are marked **Agreed**. Everything else is marked **Proposal** or **Open question**. The note-taker sometimes attributes lines to the wrong speaker, so some attributions below were reconstructed from context: please correct anything that misstates your view.

---

## 1. Why we are doing this

The 2026–27 very strong El Niño is peaking now (November 2026 to January 2027, decaying by about May 2027). The bottleneck is not a lack of organisations. It is weak connection: plans that live on paper, needs and offers that never meet, and loss data that nobody collects consistently. We are a small group of people who build with AI agents. Our niche is **open coordination infrastructure** (shared data, maps, agent access) that helps people already working on the ground act faster, and that makes gaps visible.

## 2. The key shift: from anticipation to response

Max [49:21]: we are at the peak and "major problems are starting yesterday". Ideally this work would have started a year ago, but at this point our best contribution is probably not anticipatory action but **response and recovery**.

**Proposal.** Prioritise what is useful in the next 3–6 months:

- connecting needs with offers for affected communities;
- showing where impacts are happening now and where they come next (the impact calendar and its "Where it hits" map already exist);
- keeping anticipatory work for regions with late impacts (spring 2027) and for a possible La Niña in late 2027.

Where to focus first, and what effect to expect, is in [section 10](#10-focus-recommendation-where-to-put-our-effort-and-what-effect-to-expect).

## 3. How each of us defined success

| Who | Definition of success | How it could be measured |
|---|---|---|
| Max [13:52, 16:24] | Someone managed to reduce their losses. Our tools are adopted by larger partners. The effort is financially sustainable, at least covering our own AI costs | Reports from users of what they kept; number of organisations using our data or tools |
| Artem [14:45–18:00, 48:04] | Lives saved and less suffering in the wide sense (hunger, illness). The share of an affected city's population that got what it needed (shelter, medicine). Impact verified by end users or experts | Share of needs covered; verified cases |
| Graham [18:00–19:22, 38:30] | When a need appears, an offer is already in place and the two sides connect without friction. People actually use what we build | Time from request to connection; number of connections that would not have happened otherwise |
| Robin [22:17–25:25] | Supporting even one person. The map or database is used. We learn to collaborate openly and emergently in one repository | Users and outside contributors; queries to the database or MCP |

**Shared core (Proposal):** *connect needs with resources faster where El Niño hits, and show credibly that it worked.*

Max and Artem both noted that losses and lives saved are almost impossible to attribute ("we don't know how many people were not affected thanks to the intervention" [14:45]). So:

- the **top level** (losses, deaths, illness) is tracked as context, not as our KPI;
- **our level** is measured by what we can count: need↔offer connections, speed, use, adoption by partners, verified cases.

The scale of damage and our potential influence on these indicators are estimated in [the damage and impact-potential analysis](../analysis/DAMAGE-AND-IMPACT.md).

## 4. How we work together: a portfolio on a shared foundation

Max's question [07:21]: do we merge our efforts into one thing, or keep a portfolio of solutions for different problems?

**Agreed (in substance):** both.

- A **portfolio** of approaches, because the problem runs from local to global [08:31]: Max's tools (problem map, impact calendar, research library, funders), Robin's prototype (globe, needs/offers, MCP), Graham's local OpenStreetMap ideas, Artem's impact-to-funding skill.
- A **shared foundation**: one repository, one backlog, shared data [36:47, 50:30].

### 4.1 One repository, issues as the backlog

**Agreed.** Work in one repository in the citizen-infra organisation, with issues for ideas and code and GitHub Projects for tasks [36:47–38:00]. Anyone can hand an idea to their agent and have it work in the background.

- Status on 7 November: the El Niño work lives in `citizen-infra/senri` under `el-nino/`, published at <https://citizen-infra.github.io/senri/el-nino/>. Robin's Super El Niño platform and OSIRIS are already included as pinned source snapshots (`community-platform/`, `osiris/`).
- **Open question:** stay in `senri` or start a new repository from scratch, as Artem offered? Proposal: stay in `senri/el-nino/` so nothing already published is lost.

### 4.2 Headless shared database and MCP

**Proposal (Robin) [22:17–25:25, 32:09].** The main asset is not a map or a dashboard but an **open shared database**: resources, needs and offers, datasets, initiatives. Any interface can sit on top. Access goes through an MCP server so people can read and write from Claude or ChatGPT. Robin has already moved the prototype's backend to Cloudflare.

- First layer: an **index of indexes** [25:25], a catalogue of existing databases, research and initiatives. We already have a base for it: the problems, organisations and open-source projects in `data/problems.json`, the annotated sources in `data/research.json` and the funders in `data/funders.json`.
- Next layer: geotagged needs and offers.

### 4.3 Maps: OpenStreetMap and open layers

**Proposal (Robin, Graham) [25:25–36:36].** Add geotags to the problems and show them on a map; use OpenStreetMap and Overpass Turbo for an El Niño-specific layer (shelters, generators, free food points); connect open hazard layers (floods, fires, drought). A reference point: a flood map built for the recent Thailand floods that government teams used.

- **Open question:** where does live impact data already exist that we can connect to? Start by listing it in the index of indexes.

### 4.4 Impact-to-funding skill

**Proposal (Artem) [39:31–47:58].** An agent skill ([zhiganov/impact-to-funding](https://github.com/zhiganov/impact-to-funding)) that links what we build to a theory of change, well-known frameworks (for example planetary boundaries) and funding. Artem committed to using it on Artem's own contributions to the El Niño work. The aim is impact that someone else can check, which makes small grants easier to get.

- **Proposal:** each significant feature gets a short impact note: which problem on the map it addresses, which indicator it should move, and what would show it is not working.

## 5. Reaching people: start small, through intermediaries

Graham [02:13–06:46] described Shelburne Falls, Massachusetts: a paper system with pins on a board, a 2023 state-funded study with no follow-up, a potential shelter with no generator. This is probably common. Graham also judged it a poor pilot site: there is no sense of urgency and no one in a position to lead it [27:57].

**Agreed (in substance):** start with one small pilot, show that it works, then expand [26:14–27:20].

Pilot criteria (Proposal):

1. The community has already been hit or is directly exposed in the coming months, so the motivation is real [27:20].
2. There is a local leader or intermediary who will adopt the tool and spread it [27:57–29:43].
3. One or two tools from the portfolio are enough (for example needs/offers plus a map).

Channels to intermediaries (Proposal):

- online communities: relevant subreddits and climate groups [28:34–29:53];
- networks such as the Global Ecovillage Network (in Ukraine, ecovillages hosted displaced people) [30:00];
- large institutions: ask about their plans and what they think of our work [30:31];
- networks already active in anticipation and response: Anticipation Hub, Start Network, Red Cross Red Crescent Climate Centre, El Niño Atlas (Max has written to Dr Alaa Al Khourdajie);
- the climate activist Artem found, whose NOAA programme was closed [30:31].

The problem map and the impact calendar show who is hit first, and those places are the first pilot candidates.

## 6. Funding

- Artem [13:12]: link funders to problems to make the case for a modest budget. **Done** on 6 November: the funders page, and a "who could fund work on it" block on each problem.
- Minimum goal: cover our own AI costs [16:24]. Graham offered spare capacity on Graham's AI subscriptions and help with writing and reviewing grant applications [44:00, 51:03].
- Realistic paths (from the funders map): NLnet (EUR 5–50k, next deadline 3 January 2027, outputs must be free and open source), `funding.json` plus GitHub Sponsors or Open Collective, and partnering with an operational organisation instead of applying directly to pooled funds (CERF and similar funds give money only to agencies).
- A grant database from one foundation was mentioned [51:56] without a clear name, and climate did not appear among its areas. To be confirmed.
- Impact that has been checked (through the impact-to-funding skill) makes small grants easier [48:04].

## 7. Next steps

| Who | What | Suggested timing |
|---|---|---|
| Max | Share recent news on the El Niño (Artem had not seen any for weeks) [49:21] | Now |
| Max | Share this document with the group and collect corrections | Before the next call |
| Artem | Settle the repository question with the group (`senri` or new) and grant access | 1 week |
| Artem | Scan foundations in disaster response and climate beyond the World Bank and UN [51:18] | 2 weeks |
| Artem | Apply the impact-to-funding skill to Artem's own contributions [47:26] | Ongoing |
| Robin | Bring the working prototype (globe, needs/offers, MCP on Cloudflare) into the shared repository beyond the source snapshot | 2 weeks |
| Graham | Think through a local OpenStreetMap layer; help with an NLnet application | Before 3 January 2027 |
| Everyone | Open the issues backlog; each person adds their ideas and research | 1 week |
| Everyone | Pick 2–3 pilot candidates using the criteria in section 5 | 2–3 weeks |

## 8. Open questions for the next call

1. One repository: `senri/el-nino/` or a new one from scratch?
2. What is the first joint product: needs/offers on a map, an MCP server over the shared database, or both on one database?
3. Who is our first pilot, and through which intermediary?
4. How exactly do we check impact: who confirms it (users, experts) and in what form?
5. Do we apply to NLnet by 3 January, and who writes the application (NLnet asks for a human-written proposal)?
6. Rhythm: how often do we meet, and where do we discuss asynchronously?

## 9. Principles

- Open by default: code under MIT, data and text under CC BY 4.0.
- We do not compete with organisations. We show who is doing what and help them do it better [09:48–10:02].
- Build what people use, not what looks good [38:30].
- Learn to collaborate: this is a sandbox where we learn to produce impact, even a small one [53:19].

---

## 10. Focus recommendation: where to put our effort and what effect to expect

**Status:** Proposal for group discussion, 7 November 2026.
Prepared by Claude at Max Semenchuk's request. It is not a decision; the group
decides at the next call. Expected effects below are forecasts, not results.

**Method:** structured with the
[impact-to-funding](https://github.com/zhiganov/impact-to-funding) (ItF) skill
by Artem Zhiganov, v0: purpose and alternatives (importance, neglectedness,
fixability), theory of change, claims and evidence, proportionate evaluation
plan, funding brief, and next decision. ItF does not certify impact and this
document awards no "verified impact" label.

**Inputs:**

- Sections 1–9 of this strategy, from the first group call on 6 November 2026
  (Max, Artem Zhiganov, Graham, Robin Sverd).
- [Damage and impact-potential estimate](../analysis/DAMAGE-AND-IMPACT.md),
  7 November 2026.
- [Problem map](../../../el-nino/data/problems.json) (66 problems, 27 actors),
  [impact calendar](../../../el-nino/data/impacts.json),
  [funder map](../../../el-nino/data/funders.json).
- [Product specification, document 1](../spec/01-product.md) and the
  [decision register](../process/QUESTIONS-AND-DECISIONS.md), in particular
  D-002 (version one serves local coordinators and mutual-aid organizers) and
  D-008 (no cash budget).

---

### 10.1 Profile and decision

| Field | Value |
|---|---|
| Subject | The SENRI El Niño group as a portfolio: Max (problem map, calendar, funders), Robin (globe, needs/offers, MCP on Cloudflare), Graham (local and OSM layers, grant review), Artem (ItF, repository and funding scan) |
| Stage | Prospective, with prototypes already published |
| Decision | Which one to three directions get the group's limited time for the next 3 to 6 months (November 2026 to April 2027) |
| Period | Peak of the event now (November 2026 to January 2027); decay by about May 2027; worst hunger later (East Africa March to August 2027, southern Africa from April 2027) |
| Who defines success | People and local organizations in affected places; the group's own definitions are in section 3 above |
| Disclosure | Public; contains no personal data |

#### Plain-language summary

Focus on **one shared open base and one real pilot**, and use the event
calendar to pick where.

1. **Build the open base first (A).** Turn what we already publish (problems,
   actors, impacts by region and month, research, funders) into one open data
   set with an MCP and simple API, and add the datasets and initiatives other
   people already run ("index of indexes"). This is the part we can finish,
   it helps every other tool, and it is fundable by NLnet before 3 January 2027.
2. **Prove use in one place (B).** Run one needs-and-offers pilot through one
   local intermediary in a community hit between December 2026 and April 2027,
   using existing tools where possible and our base underneath.
3. **Use the calendar to choose the place (C, light).** A short "where it hits
   next" note per month for intermediaries, focusing on places where acting
   early still works (southern Africa before the 2027 harvest failure).

Do not, for now, build a new global platform from scratch, work on trigger
design or financing politics, or try to measure lives saved as our own metric.

Realistic effect, if it goes well: a base that a few organizations and agents
actually query, and one pilot where tens to a few hundred needs are matched to
offers faster than before, reaching hundreds to low thousands of people. In the
best plausible case this informs decisions worth USD 1 to 5 million. All of
this is below 0.01% of the event's global damage, which the estimate puts at
about USD 1 trillion of GDP in 2027 alone. Our contribution is speed and
connection, not scale.

### 10.2 Purpose and alternatives

#### The specific gap

The problem map shows the gap is not a lack of organizations but weak
connection between them. Problems that score critical or high and that no
mapped actor addresses include:

| Problem | Impact | Mapped actors working on it |
|---|---|---|
| 0.3 The window to act is closing | Critical | none |
| X1 A forecast is not a decision | Critical | none |
| 9.2 Compounding crises | Critical | none |
| 3.4 Proof of need arrives after the window | High | none |
| 5.4 Stale vulnerability baselines | High | none |
| 6.6 Heat extremes; 6.7 Water and energy stress; 6.10 Displacement | High | none |
| 8.5 Accessibility of warnings | High | none |
| X3 Cascading and sequential hazards; X4 Single points of trust | High | none |

Problems that are addressed but thinly (one actor) and fit what we build:
5.3 fragmented, non-interoperable data (2 actors); 7.4 separate calendars and
silos (1); X5 lessons decay between events (1); 1.5 forecasts do not reach
decision makers in usable form (1); 8.3 messages must reach communities (1);
4.2 last-mile delivery (1); 4.4 local actors implement but rarely lead (1).

Scores are Max's judgement and about a third of facts are still marked VERIFY.
Coverage counts only the 27 actors we mapped, not the whole field.

#### Options compared

Importance, neglectedness and fixability are qualitative judgements, as ItF
requires; no numbers are invented.

| Option | Importance | Neglectedness | Fixability for us (3 to 6 months, no budget) | Verdict |
|---|---|---|---|---|
| **A. Open base + MCP ("index of indexes")** | Medium directly, high as an enabler: every tool and partner reuses it (5.3, 7.4, X5, 1.5) | High: no shared, agent-readable El Niño 2026–27 inventory exists that we know of | **High:** most content exists; Robin has a Cloudflare backend; low dependency on others | **Focus** |
| **B. Needs/offers pilot in one community** | High for the people reached (4.2, 4.4, 8.3) | High locally (Graham's pin-board example) | **Medium to low:** depends on finding an intermediary fast; the peak is now | **Focus, but small and time-boxed** |
| **C. "Where it hits next" notes for intermediaries** | Medium to high where the anticipation window is still open (0.3, X1, 1.5) | Medium: FEWS NET, Anticipation Hub and others publish, but scattered | High: the calendar and map exist | **Light support, mainly to pick the pilot** |
| D. Evidence layer "did early action work" (5.5, X5) | High long term | High | Low now: needs partner data we don't have | Later (after May 2027) |
| E. Trigger design, finance gaps, political will (2.1, 3.1, 3.2, 9.1) | Critical | Low (2.1 has 6 actors) or political | Very low for a small volunteer group | Do not pursue |
| F. Build a new global coordination platform | High if adopted | Medium: many platforms exist | Low before the peak passes | Do not pursue now; fold the spec work into B |
| G. Do nothing new; support existing actors | Varies | n/a | High | Partly built in: A and C feed existing actors |

#### Why A + B rather than either alone

A alone risks a well-built base nobody uses (Graham's and Robin's success
definitions are about use). B alone risks a pilot that depends on luck and
leaves nothing reusable. A gives B its data and makes B's lessons portable; B
gives A a real user and evidence that funders and partners ask for.

### 10.3 Theory of change

| Activities | Outputs | Expected outcomes | Intended impact | Mechanism and material assumptions |
|---|---|---|---|---|
| A1. Publish problems, actors, impacts, research and funders as one versioned open data set (CC BY 4.0) | Data set with stable IDs and change log | Partners and researchers reuse it instead of re-collecting | Less duplicated work across actors (5.3, X5) | Assumes data is accurate enough; a third of facts still VERIFY |
| A2. MCP server and simple read API on Robin's Cloudflare backend | Agents in Claude or ChatGPT can query "what hits where, who works on it, who funds it" | Intermediaries and analysts get answers in minutes, not days | Faster, better-informed decisions (1.5, X1) | Assumes people use AI assistants for this work; usage must be observed, not assumed |
| A3. "Index of indexes": catalogue of existing datasets, maps and initiatives with links | Catalogue entries with source and date | People find the existing tool instead of building a new one | Fewer silos (7.4) | Depends on others' tools staying online |
| B1. Find one intermediary in a place hit December 2026 to April 2027 | Signed-off pilot plan with the intermediary | The intermediary uses the tool with their own network | Needs reach offers faster (4.2, 4.4, 8.3) | **Biggest risk:** no intermediary found in time; the intermediary, not us, owns the relationship with residents |
| B2. Run needs/offers on existing open tools where possible, backed by the base | Working pilot, privacy-safe (spec rules F5, F6) | Matched needs, shorter time to match | Fewer people left without shelter, water, medicine or food in that place | Assumes the people affected have phones and connectivity; offline fallback required |
| C1. Monthly "where it hits next" note, 1 page, from the calendar and map | Notes per region and month | Intermediaries prepare before impact | Some early action happens inside the window (0.3) | Assumes notes reach people who can act; forecasts must name source and date |

**Control and dependencies.** We control A and C. B depends on an intermediary,
on residents' consent and on local conditions. Funding depends on NLnet or a
partner. Everyone is a volunteer with limited time (D-008).

**Other contributors and counterfactual.** Many actors already do the operational
work (WFP, IFRC, Start Network, Anticipation Hub, FEWS NET). Without us, the
intermediary would still help people, more slowly. Our counterfactual
contribution is the difference in speed and reach, not the help itself.
Do not count the partner's results as ours.

**Harms, burden and missing perspectives.** Collecting needs creates privacy and
safety risks; follow the product spec's rules (private identity and location,
consent, no emergency-dispatch claim). A pilot can raise expectations it cannot
meet. Affected people are not yet part of the group; the pilot intermediary
must be able to say no and to change the design.

**Evidence that would change the theory or justify stopping.**

- No intermediary agrees by mid-December 2026: drop B for this event, keep A
  and C, and prepare B for the next hazard season or the possible La Niña in
  late 2027.
- The MCP and API get no outside use by end of January 2027: stop adding
  features to A, shift effort to C or to contributing data to existing
  platforms.
- The intermediary reports the tool adds work rather than saving it: stop or
  simplify.

### 10.4 Expected effect

Ranges are Claude's order-of-magnitude judgement built on the damage and impact
estimate (7 November 2026). Confidence is low. They are planning targets for
the group to argue with, not claims.

| Level | Indicator | Plausible by April 2027 | Notes |
|---|---|---|---|
| Our outputs (A) | Open data set, MCP and API live; datasets and initiatives catalogued | Live; 50 to 150 catalogue entries | Fully in our control |
| Our use (A) | Outside organizations or people using the base; MCP or API calls | 3 to 10 organizations; hundreds to low thousands of queries | Count only identified outside users |
| Our use (B) | Needs matched to offers in the pilot | Tens to a few hundred | Depends entirely on the intermediary |
| Our use (B) | Median time from need posted to match | Under 48 hours, against a baseline the intermediary gives us | Baseline must be measured before launch |
| Outcome (B) | People who received something they needed through the pilot | Hundreds to low thousands | Verified by the intermediary or the people themselves |
| Adoption | A larger partner cites, links or integrates our data | 1 to 2 | Anticipation Hub, Start Network member, El Niño Atlas are the likeliest |
| Money influenced | Decisions or allocations informed by our work | Up to USD 1 to 5 million in a good case | Contribution, not attribution |
| Global context (not our KPI) | GDP loss in 2027; extra people acutely food insecure | About USD 1 trillion (PIIE); about 49 million more by end of 2027 (WFP) | We track these as context only |

### 10.5 Claims and evidence

| Claim | Type | Evidence | Limits |
|---|---|---|---|
| C1. Many critical or high problems have no mapped actor | Observed, our data | `el-nino/data/problems.json`, links table, 7 November 2026 | Only 27 mapped actors; scores are judgement |
| C2. Southern Africa's harvest failure and hunger fall in April to December 2027, so early action is still possible | Forecast from climatology | Impact calendar; FEWS NET outlook in the research list | Risk map, not a forecast; check FEWS NET monthly |
| C3. Peru and Ecuador coastal floods, Western Pacific water shortage, SE Asia drought and dengue hit December 2026 to mid-2027 | Forecast from climatology | Impact calendar | Same |
| C4. An open base is fundable by NLnet | Proposal | Funder map; NLnet rules (FOSS outputs, human-written proposal, deadline 3 January 2027) | Not yet applied; competitive |
| C5. Expected effect ranges in section 10.4 | Forecast | Damage and impact estimate | Low confidence; no baseline yet |

### 10.6 Proportionate evaluation plan

| Question | Evidence | Method | Owner (proposed) | Checkpoint and stop rule |
|---|---|---|---|---|
| Is the base used by anyone outside the group? | Server logs (no personal data), named partner uses | Count and short notes | Robin | End of January 2027: no outside use, stop adding features |
| Does the pilot match needs faster? | Time to match before and after | Intermediary keeps a simple log | Pilot intermediary, with Graham | Baseline before launch; review after 4 weeks |
| Did people get what they needed? | Short follow-up with consent | 5 to 10 conversations or a 3-question form | Intermediary | After pilot; stop if burden is too high |
| Are the "where it hits next" notes read and used? | Replies, forwards, one call with a reader | Ask | Max | After 2 notes |
| Is the method honest? | This document's claims table (section 10.5) | ItF review by Artem | Artem | Each new version |

Owners are proposals; nobody has agreed yet.

### 10.7 Funding brief (draft, for NLnet NGI Zero, deadline 3 January 2027)

- **What funding would enable:** the open base (A): versioned data set, MCP and
  read API, catalogue, documentation, and a privacy-safe needs/offers module
  reusable by local groups. Funds pay contributors' time and hosting so the work
  does not depend on spare evenings (D-008 says there is no budget today).
- **Why this rather than alternatives:** fills thinly covered data and
  coordination gaps (5.3, 7.4, X5, 1.5) that larger actors do not fund as
  shared public infrastructure; all outputs are FOSS (MIT code, CC BY 4.0 data).
- **Past results:** published problem map, impact calendar with world map,
  research list and funder map at https://citizen-infra.github.io/senri/el-nino/.
  No usage evidence yet.
- **Amount, currency, period:** TBD. NLnet range is EUR 5,000 to 50,000. Cost
  basis (hours times rate, hosting) is not yet supplied; the group must set it.
- **Existing support:** none in cash; contributors' own AI subscriptions.
  Graham offered spare AI capacity and grant review.
- **Milestones:** (1) data set and schema published; (2) MCP and API live;
  (3) catalogue of 50+ entries; (4) needs/offers module used in one pilot;
  (5) public report of what worked and what did not.
- **Risks and stop rules:** see section 10.3. Applying for money is a paid
  commitment and needs a separate group decision under D-008.
- **Writing:** NLnet requires a human-written proposal; Claude can prepare
  facts and structure only. Graham offered to help.
- **Funding destination:** not supplied.

### 10.8 Review and next decision

- **Supported:** the gap analysis from our own data (C1) and the timing of
  upcoming impacts (C2, C3) as climatology-based risk.
- **Proposals:** focus on A + B with C as support; all owners, numbers and the
  funding ask.
- **Unknown:** whether an intermediary exists and agrees; whether anyone outside
  the group will use the base; the cost basis.
- **Smallest next decision for the group:** agree A + B (yes or no), name one
  owner for each, and pick two or three pilot candidates from section 10.9 to
  contact by 1 December 2026.

### 10.9 Pilot candidates to discuss

Chosen with the pilot criteria in section 5 (already hit or hit soon, a local
intermediary exists, one or two tools are enough). Names of intermediaries are
not yet known; this list is where to look, not who.

| Place and hazard | When (calendar) | Why it fits | Concern |
|---|---|---|---|
| Southern Africa: drought, then maize failure and hunger | Drought December 2026 to March 2027; hunger April to December 2027 | The anticipation window is still open; strong existing networks (Start Network, Anticipation Hub) | Large scale; risk of duplicating agencies |
| Peru and Ecuador coast: downpours, mudslides | December 2026 to April 2027 | Hits soon, high confidence; clear needs (shelter, water, transport) | Language and local contacts needed |
| Western Pacific islands: drought, drinking-water shortage | November 2026 to June 2027 | Small communities, concrete needs; one intermediary can cover a whole island | Connectivity; very small teams |
| Online communities in any affected region (subreddits, climate groups, ecovillage networks) | Any | Fastest to reach; Robin's and Artem's leads | Weak link to the people most affected |

Graham's Shelburne Falls example is useful for design but not a pilot now,
because it lacks urgency and a local lead (section 5 above).
