import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';
import drafts from './translations.json' with { type: 'json' };
import { resolve } from 'node:path';

export const localeNames = { en: 'English', is: 'Íslenska', ja: '日本語' } as const;
export const englishUI = {
  primary: 'Primary', home: 'Home', about: 'About', languages: 'Languages',
  skip: 'Skip to main content', original: 'Read the English original',
  statement: 'Independent. International. Source-driven.',
  resources: 'Resources in English', contact: 'Contact in English',
  reviewed: 'Translation reviewed', footer: 'Site footer',
};
export type TranslationPage = {
  route: '/' | '/about/'; status: 'draft' | 'reviewed';
  sourceHash?: string; reviewedBy?: string; reviewedOn?: string;
  title?: string; description?: string;
  sections?: { heading: string; paragraphs: string[] }[];
};
export type TranslationBundle = {
  locale: 'is' | 'ja'; status: 'draft' | 'reviewed';
  reviewedBy?: string; reviewedOn?: string; uiSourceHash?: string;
  ui?: Record<keyof typeof englishUI, string>; pages: TranslationPage[];
};
const hash = (text: string) => createHash('sha256').update(text).digest('hex');
export const sourceHashes = {
  '/': hash(readFileSync(resolve('src/pages/index.astro'), 'utf8')),
  '/about/': hash(readFileSync(resolve('src/pages/about.astro'), 'utf8')),
  ui: hash(JSON.stringify(englishUI)),
};
const nonempty = (value: unknown): value is string => typeof value === 'string' && value.trim().length > 0;
function reviewValid(review: { reviewedBy?: string; reviewedOn?: string }) {
  if (!nonempty(review.reviewedBy) || !/^\d{4}-\d{2}-\d{2}$/.test(review.reviewedOn ?? '')) return false;
  const date = new Date(review.reviewedOn!);
  return Number.isFinite(date.valueOf()) && date.toISOString().slice(0,10) === review.reviewedOn && date <= new Date();
}

// Drafts never produce routes, hreflang links or language choices. Invalid reviewed
// records fail the build, including after changes to their English source.
export function validateTranslations(bundles: TranslationBundle[], hashes = sourceHashes) {
  const published: { locale: 'is' | 'ja'; ui: NonNullable<TranslationBundle['ui']>; page: TranslationPage }[] = [];
  const seen = new Set<string>();
  for (const bundle of bundles) {
    if (!['is','ja'].includes(bundle.locale) || seen.has(bundle.locale)) throw new Error('Invalid or duplicate translation locale');
    seen.add(bundle.locale);
    if (bundle.status === 'draft') continue;
    if (bundle.status !== 'reviewed' || !reviewValid(bundle) || bundle.uiSourceHash !== hashes.ui || !bundle.ui || Object.keys(englishUI).some(key => !nonempty(bundle.ui?.[key as keyof typeof englishUI]))) {
      throw new Error(`Incomplete or stale UI review: ${bundle.locale}`);
    }
    const routes = new Set<string>();
    for (const page of bundle.pages) {
      if (!['/', '/about/'].includes(page.route) || routes.has(page.route)) throw new Error('Invalid or duplicate translated route');
      routes.add(page.route);
      if (page.status === 'draft') continue;
      if (page.status !== 'reviewed' || !reviewValid(page) || page.sourceHash !== hashes[page.route] || !nonempty(page.title) || !nonempty(page.description) || !Array.isArray(page.sections) || !page.sections.length || page.sections.some(section => !nonempty(section.heading) || !Array.isArray(section.paragraphs) || !section.paragraphs.length || section.paragraphs.some(p => !nonempty(p)))) {
        throw new Error(`Incomplete or stale page review: ${bundle.locale}${page.route}`);
      }
      published.push({ locale: bundle.locale, ui: bundle.ui, page });
    }
  }
  return published;
}
export const publishedTranslations = validateTranslations(drafts as TranslationBundle[]);
export function originalPath(path: string) {
  return path.replace(/^\/(is|ja)(?=\/|$)/, '') || '/';
}
export function equivalents(path: string) {
  const route = originalPath(path);
  // The short introductions are the initial localized home experiences.
  // They are not alternate versions of English research or About pages.
  if (route === '/') return [
    { locale: 'en' as const, href: '/' },
    { locale: 'is' as const, href: '/is/' },
    { locale: 'ja' as const, href: '/ja/' },
  ];
  return [ { locale: 'en' as const, href: route }, ...publishedTranslations.filter(item => item.page.route === route).map(item => ({ locale: item.locale, href: `/${item.locale}${route}` })) ];
}
export function languageDestinations(path: string) {
  const available = equivalents(/^\/404(?:\/|\.html)?$/.test(path) ? '/' : path);
  return (Object.keys(localeNames) as (keyof typeof localeNames)[]).map(locale =>
    available.find(item => item.locale === locale) ?? { locale, href: `/${locale}/` }
  );
}
export function navState(path: string, href: string): 'page' | 'true' | undefined {
  const normalize = (value: string) => value === '/' ? '/' : value.replace(/\/+$/, '') + '/';
  const current = normalize(path), target = normalize(href);
  if (current === target) return 'page';
  if (target !== '/' && !/^\/(is|ja)\/$/.test(target) && current.startsWith(target)) return 'true';
}
