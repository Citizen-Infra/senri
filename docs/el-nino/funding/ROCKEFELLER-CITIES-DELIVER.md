# Rockefeller "Cities Deliver: AI Solutions for Public Services": fit and draft

**Status:** Working draft, 10 November 2026. Prepared by Claude at Max
Semenchuk's request. Applying is a commitment that needs a group decision
(D-008). Nothing here has been submitted.

**Call:** https://www.rockefellerfoundation.org/cities-deliver-ai-solutions-for-public-services/
(Rockefeller Foundation and OpenAI Foundation, managed by RF Catalytic Capital).
Portal and question list: https://citiesdeliver.rockefellerfoundation.org/ ·
contact citiesdeliver@rockfound.org (the team does not review concept notes or
help find partners).

## 1. The call in brief

| Item | Value |
|---|---|
| Funds | Frontier-AI solutions that improve **city** public services for vulnerable or underserved residents. Conventional ML alone, research-only or national-scale projects do not qualify |
| Focus area that fits us | **Environmental resilience** (includes public safety and emergency services) |
| Tracks | Seed USD 500k to <1M (concept ready for a first city pilot); Scale USD 1–2M (already piloted) |
| Term | 24 months, May 2027 to April 2029; 50% upfront, 50% at a mid-term milestone; indirect costs max 15% |
| Awards | Up to 50; USD 50M total |
| Lead applicant | A legal organization: nonprofit, university lab, fiscally sponsored project, PBC, or (with conditions) for-profit. **Not** individuals, unincorporated groups or governments |
| Government partner | **Required.** A city of 50,000+ with its own municipal government. Round 1 needs a signed **letter of intent** from an official with authority over the service (mayor, CDO, CTO, agency head) |
| Open licensing | Required for grant-funded software, models and docs (fits our MIT / CC BY 4.0) |
| Round 1 deadline | **29 November 2026, 23:59 US Eastern** (19 days from today) |
| Later | Interviews January 2027; Round 2 by 1 March 2027; decisions April 2027 |
| Round 1 content | Eligibility screen, about 45 questions (most 100–400 words), legal-status documents, letter of intent, video up to 5 minutes |

## 2. Fit

**Strong fit**

- Environmental resilience and emergency services is an explicit focus.
- Our concepts are generative-AI-native: action briefs, readiness board
  facilitator, needs/offers broker with delegate agents
  ([AI coordination concepts](../strategy/AI-COORDINATION-CONCEPTS.md)).
- Open licensing is required, and we already work open by default.
- Seed track is meant for "early concepts ready for a first city pilot",
  which is where we are.

**Weak points that reviewers will see**

- **No city relationship.** Criteria weigh "trusted government relationships"
  and "deep contextual experience with the community". This is our biggest gap.
- **No legal entity** that we know of for the group or Citizen-Infra.
- **No track record** of public-sector deployment; prototypes only.
- **Timing.** The grant starts in May 2027, after the El Niño peak. The
  proposal must be about the city's **recurring climate-shock coordination**
  (El Niño decay, a possible La Niña in late 2027, the next rainy or dry
  season), with the 2026–27 event as motivation and first evidence, not as the
  thing being funded.

## 3. Blockers to clear by 29 November

| # | Blocker | Options | Recommendation |
|---|---|---|---|
| 1 | City partner with a signed letter of intent | (a) a city one of us already knows; (b) a city hit by El Niño where a local NGO or university already works with the municipality | Pick the city by **who already has a relationship**, not by hazard. Ask each team member and the El Niño Atlas contact this week |
| 2 | Legal lead applicant | (a) a local NGO or university in that city leads, we are the technical partner; (b) a team member's existing nonprofit or lab; (c) a fiscal sponsor for SENRI | (a) is strongest: it fixes blockers 1 and 2 together and scores on context |
| 3 | Team capacity for a USD 0.5–1M, 24-month project | Paid roles become possible with the grant; Round 1 itself needs about 3–5 days of work | Decide who writes; NLnet (3 January) can reuse most of the text |

If no city official agrees to sign by about **22 November**, do not apply in
this round; reuse the material for NLnet and for partner-led proposals.

## 4. Where to look for a city

Cities of 50,000+ where El Niño hits between now and mid-2027 (from our impact
calendar), and where municipal services are directly involved. These are
places to look, not contacts we have.

| Region | Example cities | City service the project would support |
|---|---|---|
| Peru and Ecuador coast (rain, floods, mudslides, dengue; December 2026 to April 2027) | Piura, Tumbes, Chiclayo, Trujillo; Guayaquil, Portoviejo, Manta | Municipal risk-management office: shelters, water, debris, dengue control, volunteer coordination |
| Southern Africa (drought, water rationing; then food stress from April 2027) | Bulawayo, Lusaka, Harare, Blantyre | Water utility and social services: rationing schedules, water points, vulnerable households |
| Philippines and SE Asia (dry spells, water and heat) | Davao, Iloilo, Cebu | City disaster risk reduction and management office (CDRRMO) |
| Pacific | Port Moresby, Suva (check population thresholds) | Water supply and community liaison |
| Anywhere a team member has strong local ties | Any city of 50,000+ facing a recurrent climate shock | Same pattern |

## 5. Project concept (draft)

**Working title (10 words max):** City Readiness Copilot: AI coordination for
climate shocks.

**One-paragraph summary.** When a drought, flood or heat wave is forecast, a
city's emergency office, water utility, health department, community
organizations and volunteers each prepare on their own. Needs go unmatched,
efforts are duplicated and the most vulnerable residents are reached last.
We will build, with the city's risk-management office and local community
organizations, an open-source AI copilot that (1) turns official forecasts
into district-level action briefs in local languages, (2) keeps a shared
readiness board where the city and partners post planned actions and the AI
flags gaps, duplicates and conflicts over scarce resources, and (3) matches
residents' needs to offers from community organizations through a broker,
with every commitment confirmed by a person. Built on our published El Niño
problem map, impact calendar and open data base.

**Components** (from the concepts note): P1 organization cards, P2 local
action brief, P3 readiness board, P4 needs/offers broker, P5 simulator for
tabletop exercises with city staff before each season.

**Why generative AI.** Forecasts, bulletins and partner plans are unstructured
text in several languages; turning them into district-specific, cited actions
and spotting conflicts between many organizations' plans is a language and
reasoning task, not a classification task. Models are swappable (open-weight
and commercial) behind an MCP layer.

## 6. Draft answers to the main Round 1 questions

Placeholders in `[brackets]` need the city partner. Word limits are the
call's.

**Q27 Problem statement (250 words).** `[City]` faces `[hazard]` that recurs
with El Niño and La Niña cycles; in `[year]` it `[impact with source]`. The
2026–27 El Niño, one of the strongest on record, is already `[local effect]`.
During such events `[municipal office]` must coordinate shelters, water,
health and volunteer help across `[n]` districts with `[staff]` staff, while
community organizations hold much of the local capacity. Information arrives
as national bulletins that are not district-specific; partner plans live in
chats and spreadsheets; needs from informal settlements reach the city late.
The result is duplicated deliveries in some districts and none in others, and
the most vulnerable residents (`[groups, numbers]`) wait longest. Previous
efforts (`[e.g. WhatsApp groups, paper registers]`) did not give a shared
picture. `[Evidence links]`.

**Q29 Goal and outcomes (100 words).** The overall goal of our work is that
people in `[city]` most exposed to climate shocks get the help they need
before and during a shock. The project will contribute by giving the city and
its partners one shared, AI-assisted picture of risks, plans, needs and
offers. This will support `[agency]` by cutting the time from a forecast to a
coordinated plan, and from a reported need to a confirmed response. By the end
of the 24-month grant we will achieve `[n]` matched needs and `[n]` seasonal
plans across `[n]` districts, reaching `[n]` people.

**Q32 How the AI works (100 words).** Inputs: official forecasts and bulletins
(national met service, FEWS NET, IWMI ENSO Outlook), the city's district data,
partner organization cards and plans, and residents' needs submitted through
intermediaries. A frontier language model, grounded in these sources through
retrieval and tool calls, produces cited district action briefs, flags gaps,
duplicates and conflicts on a shared board, and proposes need-to-offer
matches. People review every output; nothing is dispatched automatically.

**Q33 One real use (150 words).** Draft: The national met service raises the
heavy-rain alert for the next ten days. The copilot generates a brief for each
district: expected rain, flood-prone streets, shelters, who is active there.
The city's risk officer reviews and shares it with partners. A community
kitchen in district 4 posts that it can cook 300 meals a day; a church in
district 7 reports 40 families without dry shelter. The board shows nobody
has claimed district 7 and two partners plan water trucking in district 2.
The broker proposes moving one truck to district 7 and linking the kitchen
with the shelter. The risk officer and each partner accept. The outcome is
logged and the brief updated.

**Q35 Languages (100 words).** `[Spanish / Shona and Ndebele / Bisaya]` plus
English. We will build a small evaluation set of real bulletins and messages
in each language with local reviewers, measure accuracy and factual
consistency of briefs and matches per language, and keep human review where
scores fall below a threshold.

**Q36–37 Evidence for Seed (400 words).** Published and open: a problem map of
66 El Niño problems and 27 actors, an impact calendar by region and month, a
research library and a funder map at
https://citizen-infra.github.io/senri/el-nino/; a product specification for a
privacy-safe needs-and-offers platform; concepts for agent-based coordination.
Pilot plan: one season with `[city]`, starting with a tabletop exercise
(simulator) in month 3, live use in the next rainy or dry season, evaluation
after it. Decision at the end: whether the city adopts the tool as part of its
standard preparedness process and whether to extend to another city.

**Q39 Data (2 × 100 words).** External data: public forecasts and bulletins
(no agreement needed), FEWS NET public API, city district boundaries and
facility lists (from the city), partner cards (self-published). Residents'
data: collected only through intermediaries with consent, kept at district
level in shared views, identity and exact location private by default,
stored in `[region]`, deleted after `[period]` (product spec F5, F6).

**Q41 Risks (250 words).** Wrong or invented figures (citations required,
"verify before acting" warnings, human sign-off); bias toward districts with
better connectivity (track coverage by district, offline intake via
intermediaries); privacy of vulnerable residents (minimization, consent,
no personal data in prompts sent to external models where avoidable);
over-reliance during emergencies (the tool is not an alert or dispatch
system); security (least privilege, audit logs).

**Q42–43 Sustainability and ownership.** Open-source code and open data owned
by the community; the city owns its own data. Running cost after the grant
estimated at `[USD x per month]` for hosting and model use, covered by
`[city budget line / partner]`. Model providers are swappable.

**Video (5 minutes).** Problem in 30 seconds (city footage, no personal data),
walkthrough of the published El Niño map and calendar, a clickable prototype
of the brief and the board, architecture slide.

## 7. Letter of intent (fields to fill with the city)

Use the call's template on the city's letterhead, signed by an official with
authority over the service. It must state: signatory name and title; office
and city; applicant organization; service area (emergency preparedness and
response); the office's goals; project purpose; alignment; intent to work
together if selected; acknowledgement of frontier AI use; that the grant term
is May 2027 to April 2029; that it is non-binding and given without payment.
Add the signatory's contact details. English preferred; otherwise original
plus an informal translation.

## 8. Timeline to 29 November

| By | Step |
|---|---|
| 13 Nov | Group decides go / no-go; each member names city or NGO contacts |
| 17 Nov | Lead organization and city chosen; first call with the city office |
| 22 Nov | Letter of intent signed (otherwise stop for this round) |
| 25 Nov | Answers final; budget estimate; video recorded |
| 28 Nov | Submit (one day of margin) |
