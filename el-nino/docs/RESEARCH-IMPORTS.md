# Research imports

The shared research library at `el-nino/research-library/` is the canonical public
home for SENRI research. Evidence entries remain in `el-nino/data/research.json` and
link to the problem map. Research methods, prompts and held outputs use the separate
`resources` collection in the same data file; they are never rendered as evidence.

## Import rules

1. Inventory the source without changing its pinned snapshot.
2. Exclude personal data, private locations, meeting notes, raw transcripts,
   credentials and sensitive cases.
3. Link and summarize third-party material instead of copying it unless its licence
   permits redistribution.
4. Deduplicate by source URL and subject before adding an evidence entry.
5. Give every imported resource an origin, source path, pinned commit, source date,
   review status and rights statement.
6. Treat generated research as a list of candidates. Promote a claim only after a
   reviewer checks it against the named source and records the source date.
7. Keep methods and held outputs visibly separate from the `checked` and `found`
   evidence statuses.

`checked` and `found` keep their existing meanings in the library. A method does not
become `checked` merely because its wording was reviewed. `held-for-verification`
means the resource remains available in its pinned source snapshot but is not linked
or quoted as evidence in the shared library.

## Super El Niño inventory

Source snapshot: `RobinHoodO/super-el-nino` at
`87c33fe6d857c63e5157a1c7ea76f84a9a4eeae9`, captured under
`el-nino/community-platform/source/`.

| Snapshot artifact | Disposition | Reason |
| --- | --- | --- |
| In-app `ResearchLibrary` component and research navigation/styles | Preserve in snapshot only | Historical application code; the shared static library is now the canonical public presentation. |
| `public/research/deep-research-prompt.md` | Copy into shared methods | Reusable method included at the upstream owner's request for this integration; it contains no evidence claims. Broader reuse terms still require confirmation. |
| `public/research/el-nino-research-plan.txt` | Hold for verification | Generated narrative and candidate citations are mixed together. Claims require source-by-source review before promotion. |
| `public/research/legal.css` | Preserve in snapshot only | Presentation asset for a legacy document that was not eligible for the shared library. |
| Two generated research documents omitted during migration | Exclude | They contained private meeting or contact material. |
| Three generated video-caption documents omitted during migration | Exclude | Redistribution rights for third-party captions were not confirmed. |

The existing 31 evidence entries remain unchanged. No generated claim or bulk source
list from the held output was imported in this pass; future sources can be reviewed and
added individually under the rules above.

## Updating the library

- Add or update evidence under `items` only after checking its source and problem links.
- Add non-evidence material under `resources` with one of the documented review statuses.
- Keep copied methods under `el-nino/research-library/resources/`.
- In the pull request, name duplicates, exclusions and incomplete verification without
  reproducing private or unlicensed content.
