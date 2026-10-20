# Historical edition: provenance and publication boundaries

Publication review: 20 October 2026. Research baseline: Whaling.Watch research release 0.1, 9 October 2026.

Archive filename: `whaling-watch-research-2026-10-09-v0.1.zip`.
Archive SHA-256: `cbebe7bde4ce91ca63dfc6a14e1b01c29c206309099c0a3bfcd123129d22a350`.

The supplied README, methodology, initial findings and unresolved-question ledger were read before selection, followed by the economic synthesis, product notes, country inventory, source ledger and relevant case studies. The original archive is preserved unchanged. No third-party PDFs or private correspondence are republished.

## Published evidence

- `src/data/country-history.json` contains bounded documented episodes, entity types, periods, caveats and stable source IDs. Its 18 records represent 16 modern-country entries, one historical state and one overlapping cross-border network. This is not a global or mutually exclusive country count.
- `src/data/history-sources.json` preserves original source titles, authors/publishers, locators, original access status, research access date and limitations. The public source lists link to those records' URLs.
- `/countries/history.csv` is generated from the same records as the HTML inventory and includes limitations. It contains no raw unreviewed research leads.
- Canadian landed value and processed value are different stages of the same output, not additive production. Canadian closure compensation is a non-recurring transfer.
- Brazilian export and domestic-sales examples retain their currencies, period and scope. The original Canadian Appendix 5 p.5 and Brazilian printed p.8 were visually checked again against local source scans during publication review.
- Norwegian values are nominal amounts from Statistics Norway's 2002 historical article, not a present-value comparison.
- The economic interpretation is labelled as our synthesis. Company accounts and individual worker outcomes have not been reconstructed.

## Publication source checks

Original web text was revisited for the IWC frameworks, New Bedford Whaling Museum, Statistics Norway, Australian government history, NZHistory, UNESCO, the German Maritime Museum, Dutch museum histories, Edinburgh's archive account, Chile's heritage publication record, South African History Online and the industrial-catch study. The previously downloaded NBER chapter was inspected directly after a web extraction failure. Live HTTP retrieval also confirmed the Canadian and Brazilian PDFs and NBER source.

The Portuguese museum leaflet and Memorial University Basque history remain grounded in the archive's 9 October inspected-source record. Automated retrieval was blocked or encountered a certificate-chain failure on 20 October. They are not described as newly inspected originals in this release. Some other hosts blocked automated HTTP requests while their text remained available through web retrieval. Access failures do not establish that a source has disappeared.

The Iceland letter was read as editorial context for fair participation, corrections and independent verification. It is not evidence for the industry's factual claims or a reviewed translation of the website. No response to that letter is asserted.

## Withheld conclusions

The archive has additional survey-only and attribution-review entries. They remain explicitly incomplete. Do not infer zero history from absence. No global monetary total, final country count, current national legal survey, national cessation date extrapolated from a company closure, provisional Iceland 2026 catch, unread Japan 2026 quota, or unresolved Brazilian mass/meal-sales amount is published as accepted data.

## Release checks

Run `npm run check`, `npm run build`, `npm test`, `python3 scripts/check-links.py` and `git diff --check`. Inspect responsive rendering and the final diff before committing. Confirm the remote branch before pushing. Cloudflare Pages' check on the pushed commit and live distinctive page content are separate checks. Source is the existing WhyTrashEarth/whalingwatch-site repository, `main`; the established Pages project is `whalingwatch-site`, canonical domain `https://whaling.watch`.

About was reachable at `/about/` before this edit. `/about` redirected to `/about/`; `/About/` returned 404. The new `_redirects` only adds capitalized About compatibility. There is no evidence that this explains the original report completely.
