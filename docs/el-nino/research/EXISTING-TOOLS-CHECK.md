# Existing El Niño tools: fact check and hands-on access

**Status:** Research note, 10 November 2026. Prepared by Claude at Max
Semenchuk's request.

**Why:** Max received a ChatGPT answer naming four existing solutions as
examples of "AI for collective El Niño coordination". This note checks each
claim against the organizations' own pages, says whether we can try the tool
ourselves, and how it relates to our [problem map](../../../el-nino/data/problems.json)
and [strategy section 10](../strategy/STRATEGY.md).

**Method and limits:** official pages read on 10 November 2026. The live web
apps (enso.iwmi.org, fdw.fews.net) are JavaScript apps that could not be
rendered from our research environment, so "can we try it" is based on the
organizations' documentation; a person should open them in a browser to
confirm. UNDRR's DELTA pages could not be fetched; the DELTA facts come from a
UNDRR slide deck (November 2025).

## Summary

| Tool | Exists? | ChatGPT claims that are wrong or unsupported | Try it ourselves? | Relation to our work |
|---|---|---|---|---|
| IWMI ENSO Outlook | Yes, launched 18 June 2026 | Sri Lanka national forum, Bajaj Allianz, "used by Sri Lanka and Zambia governments": not on IWMI pages | **Yes**, open web app, "Open Access", no login documented | Closest existing tool to problems X1, 1.5, 0.3. A source for base A; not a competitor to needs/offers B |
| CGIAR 2026 El Niño response | Yes, as a "response" coordinated by CGIAR Climate Action | "Separate programme" with climate modelling, yield forecasts, recommendations: not supported | **No tool to try.** Pages, a June 2026 webinar, partner routes | Already mapped as P_CGIAR. ENSO Outlook is its main public product |
| UNDRR DELTA Resilience | Yes, new losses-and-damages tracking system (from DesInventar lineage) | "Vulnerability analysis with UNDP and WMO for El Niño": partners and El Niño not in UNDRR's deck | **Not yet.** Software for national governments, rolling out in waves over ~24 months from late 2025 | After-the-event evidence (5.5, X5, 3.4). Long-term, option D |
| FEWS NET | Yes, operating, dedicated 2026–27 El Niño page | Mostly correct; ChatGPT only cites its blog | **Yes**: reports, and a public API for food-security phases, prices, boundaries | Already mapped as P_FEWS. Best ready data source for base A and calendar C |

## 1. IWMI ENSO Outlook

**What it is.** A web platform by the International Water Management Institute
(IWMI, a CGIAR centre) that "turns El Niño and La Niña climate signals into
timely, actionable measures" for water, agriculture and food security. IWMI
calls it "a first-of-its-kind ENSO Digital Public Infrastructure". Launched at
the CGIAR/IWMI "2026 El Niño" webinar on 18 June 2026 (the data catalogue entry
says published 15 May 2026).

**Modules** (from IWMI's blog of 3 July 2026):

- Map: precipitation probability, rainfall, dry spells, soil moisture,
  vegetation, exposure.
- Dashboard: Oceanic Niño Index, Niño 3.4 anomalies, model plumes, comparison
  with past El Niño years.
- Country bulletins: outlook, confidence, exposure, sector implications,
  recommended preparedness actions.
- Anticipatory action timelines (example: Zambia Ready/Set/Go triggers).
- **Ask AI**: plain-language questions "grounded in IWMI datasets"; IWMI advises
  users to verify figures against source data. An "Anticipatory Action Agentic
  Engine" is built on Google Gemini Flash.

**ChatGPT claims checked.**

- AI assistant and practical questions (which regions, when to prepare): supported.
- Zambia: appears as a worked example, with a quote from Zambia's Ministry of
  Agriculture; operational government use is not stated.
- Sri Lanka government use, a Sri Lankan national El Niño forum, and Bajaj
  Allianz integrating the data: **not found** on IWMI's pages. Treat as
  unverified until a source appears.

**Can we try it?** Yes. Open https://enso.iwmi.org/ (subpages /map,
/dashboard, /bulletin, /action, /askai). The catalogue entry says "Access
rights: Open Access". No API, download or licence terms are documented on the
pages we read; check the app itself and IWMI's terms of use.

**Learn more / contact.**

- Catalogue entry: https://www.iwmi.org/data/enso-outlook/
- Launch news (22 July 2026): https://www.iwmi.org/news/iwmi-launches-enso-outlook-to-turn-el-nino-forecasts-into-anticipatory-action/
- Blog with module walkthrough: https://www.iwmi.org/blogs/the-enso-outlook-helps-people-turn-climate-information-into-anticipatory-action/
- Contact person: Giriraj Amarnath, IWMI (https://www.iwmi.org/people/giriraj-amarnath/)
- Funded through CGIAR Science Programs (Climate Action, Sustainable Farming,
  Food Frontiers and Security).

**Relation to our work.** This is the most direct existing answer to problem
X1 "a forecast is not a decision" and 1.5 "forecasts do not reach decision
makers in usable form", both of which our map currently shows with no or one
actor. We should:

1. Add IWMI ENSO Outlook as an actor against X1, 1.5 and 0.3 (it changes the
   "no mapped actor" claim in strategy 10.2).
2. List it in the "index of indexes" of base A, and test whether our MCP can
   point agents to its bulletins.
3. Not build our own forecast-to-action layer (consistent with option F).
4. Ask whether it covers community-level needs and offers; from its pages, it
   serves governments and agencies, so our pilot B remains distinct.

## 2. CGIAR 2026 El Niño response

**What it is.** CGIAR has a page "CGIAR's 2026 El Niño response": "CGIAR
Climate Action is helping coordinate CGIAR's El Niño response", with CGIAR
teams "studying the risks and setting out options for 2026/27" with national
and local partners. The June 2026 webinar aimed "to convene CGIAR Centers,
Programs and Accelerators, NARS, NMHSs, regional climate institutions,
disaster-management agencies and development partners" and mentioned periodic
"CGIAR risk updates".

**ChatGPT claims checked.** The coordinated response exists. A "separate
programme" that links climate modelling, local agronomy, yield forecasts, water
management and recommendations is **not supported** by CGIAR's pages; it reads
as ChatGPT's elaboration. The concrete public product is IWMI's ENSO Outlook.

**Can we try it?** No standalone tool. The webinar (18 June 2026) has passed;
the event page is unfinished (placeholder text and a placeholder contact
address). Engagement is through CGIAR partner channels and newsletters.

**Learn more.**

- Response page: https://www.cgiar.org/cgiar-research-portfolio-2025-2030/climate-action/cgiars-2026-el-nino-response
- Webinar: https://www.iwmi.org/events/the-2026-el-nino-1/
- Partnering: https://www.cgiar.org/partners · news sign-up: https://www.cgiar.org/sign-up-for-news-and-updates

**Relation to our work.** Already in the map as P_CGIAR. Worth noting that
CGIAR names Zambia, Malawi, Mozambique, Zimbabwe, Ethiopia and Kenya among
countries in scope, which overlaps our southern Africa and East Africa pilot
candidates (strategy 10.9). A CGIAR or IWMI country team could be a route to a
local intermediary for pilot B.

## 3. UNDRR DELTA Resilience

**What it is.** "DELTA Resilience: the new disaster losses and damages
tracking system" from the UN Office for Disaster Risk Reduction. It builds on
DesInventar (113 countries with sub-national loss databases since 1994). UNDRR
says the software is open source and "will be made available to Member States
to establish country-owned, institutionalized tracking systems", in "three
implementation waves in 24 months" (deck dated 6 November 2025). Use cases
include "informing early warning systems, early action preparedness and
response" and linking agricultural losses to hazardous event data.

**ChatGPT claims checked.** DELTA exists and is UNDRR's. The claims that it is
developed "with UNDP and WMO" and is being used to coordinate El Niño
responses across sectors are **not supported** by the UNDRR deck we read (no
partners named, no mention of El Niño). The general UNDRR point about
cross-sector impacts of drought is reasonable but is not DELTA.

**Can we try it?** Not as outsiders today: it is installed by national
governments (Sendai Framework focal points, statistics offices). No public
demo or repository link was found; ask UNDRR Bonn (undrr-bonn@un.org) for the
code repository and open data endpoints. Historical DesInventar data is public
at https://www.desinventar.net.

**Learn more.**

- https://www.undrr.org/building-risk-knowledge/disaster-losses-and-damages-tracking-system-delta-resilience
- Deck: https://unstats.un.org/sdgs/files/meetings/iaeg-sdgs-meeting-16/5c_DELTA-Resilience.pdf

**Relation to our work.** DELTA records damage after the event. It maps to
problems 5.5 (did early action work), X5 (lessons decay between events) and
3.4 (proof of need arrives late), i.e. our deferred option D. Not useful for
the current peak; worth revisiting after May 2027 for post-event evidence.

## 4. FEWS NET

**What it is.** The Famine Early Warning Systems Network. It is publishing in
2026 and has a dedicated page "El Niño 2026–27" with monthly global El Niño
briefings (June to October 2026), a special report (6 October 2026), regional
seasonal monitors and weekly global weather hazards. Its regional concern
table rates East Africa and southern Africa "High".

**Can we try it?** Yes.

- Reports: https://fews.net/topics/el-nino-2026-2027
- Data Explorer: https://fdw.fews.net/data-explorer/
- Public API: https://fdw.fews.net/api (Swagger docs:
  https://fdw.fews.net/api/schema/swagger-ui/). Requests without login return
  public data; restricted data needs a partner account. Endpoints cover IPC-
  compatible food-security phases (current and 3–6 month projections),
  population estimates, market prices, cross-border trade, and admin and
  livelihood-zone boundaries (GeoJSON/KML). Example:
  `https://fdw.fews.net/api/marketpricefacts.csv?country_code=ET`
- Terms: attribution required; no endorsement implied; third-party data needs
  the original provider's consent (https://help.fews.net/fdp/data-and-information-use-and-attribution-policy).

**Relation to our work.** Already mapped as P_FEWS and in our research list.
It is the best ready-made data feed for base A (food-security phases by admin
area and month) and for the "where it hits next" notes (C). A small next step:
pull FEWS NET projected phases into our impact calendar for southern Africa.

## 5. On the "three levels" framing

ChatGPT's framing (AI forecasting → AI decision support → distributed agent
coordination) is a useful lens, and matches what we found: ENSO Outlook is a
real level-two tool, and none of the four does level three. Its proposed
experiment (30–50 organizations each with an AI agent negotiating resources)
is far larger than strategy section 10 allows. The realistic version for us is
pilot B: one intermediary, needs and offers, with our open base and MCP as the
shared layer agents can query.

## Suggested follow-ups

1. Add IWMI ENSO Outlook to `el-nino/data/problems.json` as an actor on X1,
   1.5 and 0.3, and update the "no mapped actor" table in strategy 10.2.
2. Open enso.iwmi.org in a browser, try Ask AI and a country bulletin for
   Zambia or Malawi, and note whether data or an API is downloadable.
3. Try the FEWS NET public API for one southern Africa country.
4. Consider writing to Giriraj Amarnath (IWMI) about linking ENSO Outlook from
   our base and about local partners for pilot B.
