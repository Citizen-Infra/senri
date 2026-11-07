# El Niño tools and platform snapshots

The SENRI El Niño collection keeps each prototype or imported platform in a separate folder
while the group decides what should eventually be integrated. The public launcher is
<https://citizen-infra.github.io/senri/el-nino/>.

## Folder layout

| Folder | Purpose | Runtime |
| --- | --- | --- |
| `impact-calendar/` | Event phases and regional impact timing | Static GitHub Pages |
| `problem-map/` | Problem, organisation and coverage map | Static GitHub Pages |
| `research-library/` | Annotated sources linked to problem IDs | Static GitHub Pages |
| `coordination-funders/` | Funders and the problems their work touches | Static GitHub Pages |
| `community-platform/` | Landing page plus a pinned, source-only `RobinHoodO/super-el-nino` source snapshot | App runs on Cloudflare Workers |
| `osiris/` | Landing page plus a pinned, source-only `simplifaisoul/osiris` source snapshot | App requires a Next.js server |
| `data/` | Shared JSON used by the four static tools | Static assets |
| `docs/` | Methodology and source notes | Documentation |
| `shared/` | Navigation shared by the four static tools | Static asset |

The old `problems.html`, `research.html` and `funders.html` paths are redirect shims so existing
links continue to work. New links should use the folder URLs.

## Run the static tools locally

The pages fetch JSON, so serve the repository instead of opening the files directly:

```bash
python3 -m http.server 8000
```

Then open <http://localhost:8000/el-nino/>.

## Shared data

- `data/impacts.json`: event phases, Niño-3.4 sketch and regional impacts
- `data/problems.json`: problems, organisations and graph links
- `data/research.json`: annotated sources and linked problem IDs
- `data/funders.json`: coordination funders, fit and linked problem IDs

The problem map originated in
[MaxSemenchuk/el-nino-problem-map](https://github.com/MaxSemenchuk/el-nino-problem-map)
and was moved into SENRI by its author, Max Semenchuk. See `docs/METHODOLOGY.md` and
`docs/SOURCES.md` for its framing and evidence limits.

## Updating source snapshots

Each imported platform has a `SNAPSHOT.md` file recording its upstream repository, branch,
commit and capture date. The copies do not update automatically. When refreshing one, replace
only its `source/` tree, apply the recorded exclusions, verify the manifest, retain the upstream licence and notices, and update the snapshot record
in the same change.

## Licence

SENRI code: MIT, see `LICENSE`. SENRI data and text: CC BY 4.0, see `LICENSE-DATA.md`.
Imported code keeps its upstream licensing state and notices inside its own `source/` folder.
OSIRIS includes an MIT licence. The captured Super El Niño tree has no top-level licence file,
so redistribution rights should be confirmed with its owner before this snapshot is treated as a
reusable package. Map data from OpenStreetMap remains subject to the Open Database License.
