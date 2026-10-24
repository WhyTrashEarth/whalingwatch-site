# Whaling Watch

An independent, source-led reference on whaling history, economics, practice and governance. The v1.0 edition publishes bounded historical coverage and explicitly records unresolved evidence. It does not claim a complete worldwide inventory or comparable global economic totals.

## Develop and verify

Use the existing lockfile and a Node version supported by the installed Astro release.

```sh
npm ci
npm run dev
npm run check
npm run build
npm test
python3 scripts/check-links.py
git diff --check
```

Tests use the built `dist/` output, so build before running them. The site is static; fonts and established artwork are local assets. For a simple inspection server, serve `dist/` with any local HTTP server. Cloudflare redirect rules require separate production verification.

## Evidence and language boundaries

- `/countries/history/`: 18 bounded entries and the 33-entity baseline coverage register. These are different units, not global country counts.
- `/historical-economics/`: original-currency examples with accounting and worker-outcome limits.
- `/research-status/`: discrepancies and dispositions for all 34 baseline questions.
- `/library/history/`: all 47 baseline sources plus four follow-up records, with inspection dates and limits.
- `/is/`, `/ja/`, `/nb/`, `/pt-br/`: short introductions. Full translated pages require the review gate documented in `docs/localization.md`.

See `docs/history-provenance.md` for the October 20 baseline and `docs/v1.0-review.md` for the October 24 follow-up. Preserve source IDs, original dates, uncertainty and supplied artwork. Do not silently replace estimates, convert currencies, add catch and quota figures, or turn local employment into demonstrated former-worker recovery.

## Release

The established repository is `WhyTrashEarth/whalingwatch-site`, branch `main`, connected to Cloudflare Pages project `whalingwatch-site`; canonical domain: <https://whaling.watch>.

Review the final diff and obtain publication authorization before committing, pushing and deploying. After a push, check the deployment result for that commit, then independently check rendered production pages, canonical routes and distinctive content. A successful local build is not a deployment verification.
