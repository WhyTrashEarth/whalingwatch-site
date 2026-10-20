# Reviewed translations

English remains at `/`. Icelandic uses `/is/`; Japanese uses `/ja/`, with About at `/is/about/` and `/ja/about/`. The route generator emits only reviewed pages. Empty draft bundles deliberately create no locale routes, language links or hreflang declarations.

`src/i18n/translations.json` stores structured text, not executable HTML. Supply a bundle for each locale with `status`, `reviewedBy`, `reviewedOn`, `uiSourceHash`, `ui` and `pages`. All labels in `englishUI` must have reviewed equivalents. Each page needs `route` (`/` or `/about/`), `status`, `sourceHash`, `reviewedBy`, `reviewedOn`, `title`, `description`, and `sections` (each with `heading` and a nonempty `paragraphs` array).

Use `node --experimental-strip-types scripts/translation-hashes.ts` to obtain the current English page and interface hashes. Reviewers must inspect the actual source content and translation; hashes only detect changes, not translation quality. Review dates must be valid calendar dates no later than today. Record reviewer identity only with permission; a consented editorial identifier is sufficient.

A fluent human reviewer must review meaning, terminology, navigation, accessibility labels and factual claims. Recheck legal statements against original-language primary sources at the time of review. Do not mark a machine-generated draft as reviewed. The supplied Iceland letter concerns correspondence and is not a reviewed translation of these pages.

The build rejects reviewed records with missing fields or stale English-source hashes. Draft pages are omitted. Published pages receive a language attribute, self-canonical, reciprocal hreflang links and a language selector listing only existing equivalents. Localized navigation shows only reviewed local pages; links to other resources explicitly say they are in English. A localized home is an exact navigation match, not a parent of every other translated page.

Before enabling a language, verify its output at narrow widths, keyboard navigation, diacritics/Japanese rendering, text completeness and the original English link. About’s public language-availability paragraph must be updated in the same release and its translation reviewed against that new source. Translation bundles are stored outside `public`; drafts are not copied to the build, but this public repository is not a place for confidential drafts.
