# AI coordination products for El Niño: concepts

**Status:** Proposal for group discussion, 10 November 2026. Prepared by
Claude at Max Semenchuk's request. Not a decision; nothing here changes the
product specification or the focus in [strategy section 10](STRATEGY.md).

**Starting point.** A ChatGPT answer described existing tools as more
ambitious than they are (see the
[fact check](../research/EXISTING-TOOLS-CHECK.md)). What it imagined is still
worth building. This note turns the imagined capabilities into product
concepts that a small volunteer group with no cash budget (D-008) could build
on top of what we already have: the problem map, impact calendar, funder map,
research list, the planned open base with MCP (option A) and the needs/offers
pilot (option B).

## 1. What the "hallucination" promised, and what exists

| Promised capability | What really exists (Nov 2026) | Gap we could fill |
|---|---|---|
| AI turns El Niño forecasts into concrete actions | IWMI ENSO Outlook does this for governments and agencies, at country level | The same for **local intermediaries and small NGOs**, at district level, joined with who-does-what and who-funds |
| A standing forum where sectors (farming, water, energy, health, aid) plan together | National forums exist in some countries; no shared tool | A **lightweight shared readiness board** per region that shows overlaps and unclaimed problems |
| Many organizations' AI agents negotiate resources and joint actions | Nothing operational that we know of | **Machine-readable organization cards** plus a **broker** that proposes cross-organization bundles, confirmed by humans |
| An experiment comparing AI-assisted and traditional coordination | Not run anywhere we found | A **coordination simulator**, then a small tabletop exercise with real organizations |
| Insurers and funders plug in the same data | Bilateral, closed deals | Funder entries in the open base (already started); out of scope beyond that |

ChatGPT's three levels are a useful frame:

1. **Intelligent forecasting:** exists (NOAA, WMO, IWMI, FEWS NET). We should
   consume it, not build it.
2. **AI support for coordination between organizations:** emerging (ENSO
   Outlook for one organization's decisions; nothing shared across
   organizations).
3. **Distributed agent coordination:** essentially absent. This is where our
   open base and MCP give us a real, unoccupied niche.

## 2. Design principles (from our spec and strategy)

- **Humans decide.** Agents propose; a named person accepts every commitment
  (spec F3). No automatic assignment or dispatch.
- **Open, agent-readable data first.** Everything is in the open base with
  stable IDs and an MCP, so any assistant (Claude, ChatGPT, local models) can
  take part. No lock-in to one AI vendor.
- **Consume, don't duplicate.** ENSO Outlook, FEWS NET and the El Niño Atlas
  are data sources, not competitors.
- **Privacy by default.** Organization data can be public; personal data of
  residents never enters the shared layer (spec F6, D-005).
- **Measurable.** Each concept states what we would count.

## 3. Product concepts

### P1. Organization cards ("agent cards" for El Niño actors)

**What.** A small open JSON format that any organization publishes about
itself: regions, hazards and sectors it works on, what it can offer
(resources, skills, capacity, lead time), what it needs, its triggers or
planned actions, the problem-map IDs it addresses, and a human contact. Cards
live in our open base (submitted by pull request or form) or on the
organization's own site, like `funding.json`.

**Why first.** Every level-3 idea needs agents to know who has what. Today
this knowledge sits in PDFs and people's heads. Cards are cheap, immediately
useful to humans (a better "who does what where"), and are the substrate for
P3 and P4.

**Builds on.** The 27 actors and 66 problems already in
`el-nino/data/problems.json`; option A (base, MCP, index of indexes).

**Measure.** Number of cards, share written by the organizations themselves
rather than by us, number of MCP queries that return a card.

**Effort.** Low: schema, 20–30 seed cards from our map, a form, MCP tool
`find_actors(region, hazard, offer)`.

### P2. Local action brief ("forecast to action" for intermediaries)

**What.** An assistant flow, exposed through our MCP and a simple web page,
that writes a one- or two-page brief for a district or community: what is
expected and when (calendar, FEWS NET, ENSO Outlook, with source and date),
which problems apply, who is already active there (cards), which funders
cover it, and a short list of preparedness actions with their evidence. It
always states uncertainty and links sources.

**Why.** This is the ChatGPT promise of "AI that answers which crops are at
risk and when to start preparing", but for the people ENSO Outlook does not
serve: local coordinators, small NGOs, diaspora and online groups. It also
replaces the hand-written monthly note (option C) with something that scales.

**Builds on.** Option A and C; ENSO Outlook and FEWS NET API as inputs.

**Measure.** Briefs generated for outside users; at least two intermediaries
saying a brief changed what they did; error reports.

**Effort.** Low to medium. Main risk is wrong numbers; mitigate with citations
and "verify before acting" rules like IWMI's.

### P3. Regional readiness board (the "standing forum" as a tool)

**What.** A shared page for one region and season (for example southern
Africa, December 2026 to April 2027). Rows are the problems and impacts on the
calendar; columns are the organizations with cards there. Each organization
(or its agent) posts planned actions and commitments. An AI facilitator
highlights:

- **unclaimed problems** (high impact, nobody acting);
- **duplication** (three groups planning the same water trucking in one
  district);
- **conflicting claims** on the same scarce resource (water for irrigation vs
  drinking vs hydropower);
- **sequencing gaps** (food aid planned, but no transport after floods).

A human moderator turns these into questions at a short weekly call.

**Why.** It is the UNDRR idea of cross-sector coordination, made concrete and
cheap. It also tests our main thesis: the gap is weak connection, not a lack
of organizations (strategy 10.2).

**Builds on.** P1 cards; the impact calendar; problem map links.

**Measure.** Duplications and unclaimed problems found; how many led to a
changed plan; time from issue raised to decision.

**Effort.** Medium, plus a facilitator's time. Needs 5+ organizations willing
to post plans, which is the hard part.

### P4. Needs-and-offers broker with delegate agents (level 3)

**What.** Each participating organization or intermediary has a delegate agent
(any assistant connected to our MCP) that knows its card, current needs and
spare capacity. A broker service collects open needs and offers and proposes
**bundles** that no single organization would see, for example: community
needs drinking water in a district → utility has spare tanks → NGO has a truck
on that route next Tuesday → local group can distribute. Each party's human
accepts or rejects; only then does it become a commitment (spec F3, F4).
Proposals carry the reasoning, sources and uncertainty.

**Protocol sketch.** `post_need`, `post_offer` (with location at district
level, quantity, time window, constraints), `propose_bundle`,
`accept/decline` by a human, `report_outcome`. Delegate agents can ask
clarifying questions of each other, but cannot commit their organization.

**Why.** This is the most direct version of "independent AI agents agree on
resources and joint actions", and it is the natural engine for pilot B.

**Builds on.** Pilot B, the product spec (F2–F5), P1 cards, Robin's
Cloudflare backend.

**Measure.** Bundles proposed, accepted, completed; time from need to match
against the intermediary's baseline; bundles involving 3+ organizations
(the part only coordination can produce).

**Effort.** Medium to high. Start inside one pilot only; never expose
residents' identity or exact location to other organizations' agents.

### P5. Coordination simulator ("El Niño tabletop with agents")

**What.** A sandbox that runs the ChatGPT experiment cheaply and safely,
before involving real people:

1. Generate 30–50 synthetic organizations from real cards and map data (met
   service, farmer groups, water utility, municipalities, NGOs, insurer,
   funders), each played by an LLM agent with its own resources, mandate and
   blind spots.
2. Run a scripted season from the impact calendar (forecast updates, a rain
   failure, a flood, a wrong forecast).
3. Compare coordination modes: each alone; shared board only (P3); board plus
   broker (P3 + P4).
4. Measure: problems covered, duplicated efforts, resources left idle, time to
   joint decision, number of 3+ party bundles, and robustness when the
   forecast is wrong.

Then run the same scenario as a 2-hour **tabletop exercise** with 5–10 real
organizations whose agents are seeded from their own cards, and compare.

**Why.** It is fully in our control, needs no field partner, produces a
publishable result about collective intelligence (a strong funding and
research story), and de-risks P3 and P4 before real people rely on them.
Caveat: simulated agents are not real organizations; results are hypotheses
to test, not evidence of impact.

**Measure.** The metrics above, plus whether real participants say the
tabletop revealed something they did not know.

**Effort.** Medium; mostly prompts, scenario data and logging.

### P6. Lessons memory (later)

After the event, an agent interviews participants and links what happened to
loss data (UNDRR DELTA, DesInventar) and to our problems, so the next El Niño
or La Niña starts from evidence (problems 5.5, X5). This is option D in the
strategy and belongs after May 2027.

## 4. How the concepts fit together

```
Forecasts (NOAA, WMO, IWMI ENSO Outlook, FEWS NET)      <- consume, don't build
        │
Open base + MCP (option A): problems, impacts, research, funders
        │
P1 Organization cards  ─────────────┐
        │                           │
P2 Local action brief          P3 Readiness board  (level 2)
        │                           │
        └────────── P4 Needs/offers broker with delegate agents (level 3, inside pilot B)
                                    │
P5 Simulator tests P3 and P4 before and alongside real use
P6 Lessons memory after the event
```

## 5. Comparison

| Concept | Level | Problems addressed | In our control? | Effort | Value if it works |
|---|---|---|---|---|---|
| P1 Organization cards | Base for 3 | 5.3, 7.4, 4.4 | Yes | Low | High as enabler |
| P2 Local action brief | 2 | X1, 1.5, 0.3, 8.3 | Yes | Low–medium | Medium–high |
| P3 Readiness board | 2 | 7.4, 9.2, X3, 6.7 | Partly (needs 5+ orgs) | Medium | High |
| P4 Delegate-agent broker | 3 | 4.2, 4.4, 3.4 | Partly (needs pilot) | Medium–high | High locally |
| P5 Simulator + tabletop | Research for 2–3 | X1, X3, 9.2 | Yes | Medium | Medium; high as evidence and funding story |
| P6 Lessons memory | Later | 5.5, X5 | Partly | Medium | Long term |

## 6. Recommendation

1. **Now (November–December 2026):** build P1 inside option A, and P2 as the
   first MCP use case. Both are in our control and useful even if nothing else
   happens.
2. **In parallel, as the research track:** P5 simulator, seeded from P1 cards.
   It answers the ChatGPT question ("can AI raise a network's collective
   ability, not just one organization's?") without waiting for a field partner,
   and is a strong element for the NLnet proposal (deadline 3 January 2027).
3. **With the pilot intermediary (option B):** P4 as the engine of the
   needs/offers pilot, and P3 if 5+ organizations in that region agree to share
   plans.
4. **After the event:** P6.

**Stop rules.** If no outside organization writes or corrects its own card by
end of January 2027, cards stay a catalogue and P3/P4 wait. If the simulator
shows no gain from the broker over the board alone, do not build P4 beyond the
pilot.

## 7. Open questions for the group

- Do we accept P1 cards as the shared format, and who owns the schema
  (proposed: Robin, with the MCP)?
- Is P5 worth one person's time now, or only after the base is live?
- Should P4 be part of the product specification (it touches F3–F5), which
  would need the spec process (D-007)?
- Which existing standards should cards align with (for example HXL tags,
  IATI organization IDs, A2A agent cards, `funding.json`)?
