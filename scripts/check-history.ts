import assert from 'node:assert/strict';
import { navState, validateTranslations, sourceHashes, englishUI, equivalents, type TranslationBundle } from '../src/i18n/localization.ts';
import { readFileSync, existsSync } from 'node:fs';
import entries from '../src/data/country-history.json' with { type: 'json' };
import sources from '../src/data/history-sources.json' with { type: 'json' };

assert.equal(navState('/about/', '/about/'), 'page');
assert.equal(navState('/about', '/about/'), 'page');
assert.equal(navState('/countries/history/', '/countries/'), 'true');
assert.equal(navState('/countries-extra/', '/countries/'), undefined);
assert.equal(navState('/is/about/', '/is/'), undefined);
assert.equal(navState('/ja/about/', '/ja/about/'), 'page');
assert.equal(navState('/about/', '/'), undefined);
assert.equal(validateTranslations([{locale:'is',status:'draft',pages:[]}]).length, 0);
const reviewed: TranslationBundle = {
  locale:'is',status:'reviewed', reviewedBy:'test-fixture', reviewedOn:'2026-10-09',
  uiSourceHash:sourceHashes.ui,ui:englishUI,
  pages:[{route:'/',status:'reviewed',reviewedBy:'test-fixture',reviewedOn:'2026-10-09',sourceHash:sourceHashes['/'],title:'Fixture',description:'Test data only',sections:[{heading:'Fixture',paragraphs:['Test data only']}]}]
};
assert.equal(validateTranslations([reviewed]).length, 1);
for (const modify of [
  (b: TranslationBundle) => { b.reviewedBy = ''; },
  (b: TranslationBundle) => { b.uiSourceHash = 'stale'; },
  (b: TranslationBundle) => { b.ui!.skip = ''; },
  (b: TranslationBundle) => { b.pages[0].sourceHash = 'stale'; },
  (b: TranslationBundle) => { b.pages[0].reviewedOn = '2026-02-30'; },
  (b: TranslationBundle) => { b.pages[0].sections = []; },
  (b: TranslationBundle) => { b.pages.push(b.pages[0]); },
]) {
  const fixture = structuredClone(reviewed); modify(fixture);
  assert.throws(() => validateTranslations([fixture]));
}
assert.equal(validateTranslations([{...reviewed,pages:[{route:'/',status:'draft'}]}]).length,0);
assert.equal(equivalents('/about/').length,1,'No language alternatives before review');
assert.equal(new Set(entries.map(entry=>entry.id)).size,entries.length);
for (const entry of entries) {
  assert.ok(entry.limits && entry.evidence && entry.sources.length);
  for (const id of entry.sources) assert.ok(sources[id as keyof typeof sources],`Missing source ${id}`);
}
for(const route of ['historical-economics','countries/history','about']) {
  const html=readFileSync(`dist/${route}/index.html`,'utf8');
  assert.equal((html.match(/<h1[\s>]/g)||[]).length,1,`${route}: one first-level heading`);
  assert.ok(html.includes(`rel="canonical" href="https://whaling.watch/${route}/"`));
  assert.ok(html.includes('aria-current='));
  assert.ok(!html.includes('hreflang="is"') && !html.includes('hreflang="ja"'));
}
for(const locale of ['is','ja']) assert.equal(existsSync(`dist/${locale}`),false,'Unreviewed route must not exist');
const sitemap=readFileSync('dist/sitemap-0.xml','utf8');
assert.ok(sitemap.includes('/historical-economics/'));
assert.ok(sitemap.includes('/countries/history/'));
assert.ok(!/\/(is|ja)\//.test(sitemap));
assert.ok(!sitemap.includes('history.csv'), 'Download must not become an HTML sitemap URL');
assert.ok(readFileSync('dist/_redirects','utf8').includes('/About/ /about/ 301'));
assert.ok(readFileSync('dist/blog/october-2026-history-and-mission/index.html', 'utf8').includes('>October 20, 2026</time>'));
assert.ok(readFileSync('dist/updates/index.html', 'utf8').includes('>September 26, 2026</time>'));
console.log(`History, navigation and translation gate checks passed (${entries.length} bounded inventory entries).`);
