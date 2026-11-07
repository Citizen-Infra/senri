# OSIRIS source snapshot

- Upstream: <https://github.com/simplifaisoul/osiris>
- Branch: `master`
- Commit: `3c7815badcb95b16a36d960d131c4f87c9267ce5`
- Upstream commit date: 2026-11-07 06:51:19 UTC
- Captured in SENRI: 2026-11-07
- Snapshot path: `source/`

This is a source-only snapshot of the pinned tracked upstream tree. Retained files are
byte-for-byte identical to that commit. Installed dependencies, Python bytecode,
TypeScript build cache, runtime run records, and scratch experiments are excluded.
`SNAPSHOT-MANIFEST.json` enumerates retained SHA-256 digests and every excluded
tracked path with its reason; it can be checked against the authoritative Git tree.
Required source, tests, documentation, configuration, workflows, licences and notices
are retained. The `build/` directory in the community platform contains authored
build plugins, not compiled output. Versioned static data catalogues, generated
TypeScript catalogue source, model assets and vendor browser bundles are required
application inputs and remain with their upstream notices.

The running application requires Next.js server routes and live data sources; the static SENRI GitHub Pages site cannot execute those services.

The copied code retains its upstream MIT licence, notices and documentation. Update this record
whenever the snapshot is deliberately refreshed; do not imply that it follows upstream
automatically.

The scanner API route is retained from the authoritative tracked Git tree even though
upstream's broad `scanner/` ignore rule can hide it from ordinary staging. Snapshot
refreshes must enumerate the pinned Git tree rather than rely on ignore-aware copies.

## Verification boundary

SENRI validates this tree as source data and does not start its API, intelligence,
scanner, vision or deployment services. Native tests require clean dependencies,
dummy configuration and an isolated sandbox with network disabled; live tests remain
opt-in and are outside this migration. Run a separate runtime security review before
any deployment. The imported workflows stay nested and cannot run as SENRI Actions.
