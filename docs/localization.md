# Language introductions and reviewed translations

English remains at `/`. On October 20, 2026, the site owner authorized short Icelandic and Japanese introductions at `/is/` and `/ja/`. These describe the mission, current language availability, long-term access goal and contact options. They are stored in `src/i18n/introductions.ts` separately from full-page translations and do not claim human language review. Their publication does not approve translations of research, legal material or the complete English homepage/About page.

The introductions use localized email subjects and explicitly say that most content remains in English. Language choices appear only in the footer, on every page. They prefer an existing equivalent page and otherwise lead to the language's introduction. Search-engine alternates describe the three home experiences; English research pages do not claim nonexistent translated equivalents.

The route generator uses a reviewed homepage translation in place of an introduction when one becomes available. About routes at `/is/about/` and `/ja/about/` remain unpublished until review. Empty draft bundles never create full translation routes. Do not add research claims to the introduction pathway to bypass review.

## Full-page translation workflow

`src/i18n/translations.json` stores structured text, not executable HTML. Supply a bundle for each locale with `status`, `reviewedBy`, `reviewedOn`, `uiSourceHash`, `ui` and `pages`. All labels in `englishUI` must have reviewed equivalents. Each page needs `route` (`/` or `/about/`), `status`, `sourceHash`, `reviewedBy`, `reviewedOn`, `title`, `description`, and `sections` (each with `heading` and a nonempty `paragraphs` array).

Use `node --experimental-strip-types scripts/translation-hashes.ts` to obtain the current English page and interface hashes. Reviewers must inspect the actual source content and translation; hashes only detect changes, not translation quality. Review dates must be valid calendar dates no later than today. Record reviewer identity only with permission; a consented editorial identifier is sufficient.

A fluent human reviewer must review meaning, terminology, navigation, accessibility labels and factual claims. Recheck legal statements against original-language primary sources at the time of review. Do not mark a machine-generated draft as reviewed. The supplied Iceland letter concerns correspondence and is not a reviewed translation of these pages.

The build rejects reviewed records with missing fields or stale English-source hashes. Draft pages are omitted. Published pages receive a language attribute, self-canonical and reciprocal hreflang links for existing equivalents. Localized navigation shows only reviewed local pages; links to other resources explicitly say they are in English. A localized home is an exact navigation match, not a parent of every other translated page.

Before publishing, verify output at narrow widths, keyboard navigation, diacritics/Japanese rendering, text completeness, footer destinations and decoded email subject lines. About’s public language-availability paragraph must reflect the release and any About translation must be reviewed against that source. Translation bundles are stored outside `public`; drafts are not copied to the build, but this public repository is not a place for confidential drafts.
