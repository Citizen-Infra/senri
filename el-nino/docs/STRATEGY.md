# SENRI El Niño response: project strategy

Version 0.1 · 7 November 2026 · draft by Max Semenchuk, based on the group's first call on 6 November 2026.

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

Estimating the scale of damage and our potential influence on these indicators is a separate piece of work.

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
