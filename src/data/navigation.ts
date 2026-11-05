export type NavigationIcon = 'compass' | 'book-open' | 'archive' | 'languages';
export type DirectoryPage = {
  href: string;
  title: string;
  description: string;
  footer?: boolean;
};

// Internal, reader-facing pages only. Collection entries and published language
// pages are added by all.astro; downloads, redirects and error pages are excluded.
export const navigationGroups: {
  id: string;
  title: string;
  icon: NavigationIcon;
  pages: DirectoryPage[];
}[] = [
  {
    id: 'start', title: 'Start here', icon: 'compass', pages: [
      { href: '/', title: 'Home', description: 'An introduction to contemporary whaling and the context behind it.' },
      { href: '/countries/', title: 'Countries & communities', description: 'Contemporary commercial and Aboriginal subsistence whaling frameworks.', footer: true },
      { href: '/countries/history/', title: 'Country-history inventory', description: 'Documented historical episodes, country coverage, sources and research limits.', footer: true },
      { href: '/when-a-whale-comes-ashore/', title: 'When a whale comes ashore', description: 'A field guide to carcass management, research, preservation and disposal.', footer: true },
      { href: '/sonar-and-strandings/', title: 'Sonar & strandings', description: 'Evidence, uncertainties and mitigation around naval sonar and whale strandings.', footer: true },
    ],
  },
  {
    id: 'research', title: 'Research & resources', icon: 'book-open', pages: [
      { href: '/resources/', title: 'Resources hub', description: 'Selected government guidance, scientific literature, historical records and reading.', footer: true },
      { href: '/historical-economics/', title: 'Historical economics', description: 'Whaling products, markets and livelihoods, with scoped economic examples.', footer: true },
      { href: '/law-and-governance/', title: 'Law & governance', description: 'A guide to legal frameworks, catch limits and governance systems.' },
      { href: '/sources/', title: 'Sources & standards', description: 'Official, scientific and historical sources, with the standards used to assess them.', footer: true },
      { href: '/library/', title: 'Reading room', description: 'Literature and documentary material with provenance and rights information.', footer: true },
      { href: '/library/history/', title: 'Historical source catalogue', description: 'Historical research records, distinguishing inspected evidence from discovery leads.' },
      { href: '/research-status/', title: 'Research status & gaps', description: 'Research questions, discrepancy decisions and the limits of the current evidence.', footer: true },
      { href: '/moby-dick/', title: 'Moby-Dick', description: 'Herman Melville’s novel, with links to a transcription and a scanned edition.' },
      { href: '/the-whale/', title: 'The Whale', description: 'A small cultural footnote on Electric Light Orchestra’s 1977 instrumental.' },
    ],
  },
  {
    id: 'project', title: 'Project & site', icon: 'archive', pages: [
      { href: '/about/', title: 'About the project', description: 'The project’s purpose, approach, language availability and credits.', footer: true },
      { href: '/updates/', title: 'Notable developments', description: 'Dated records of developments in whaling policy, operations, research and governance.', footer: true },
      { href: '/blog/', title: 'Corrections & changes', description: 'The public record of site changes, corrections and research revisions.', footer: true },
      { href: '/contact/', title: 'Contact', description: 'How to share a source, suggest a correction or contact the project.', footer: true },
      { href: '/privacy/', title: 'Privacy policy', description: 'How the project handles personal information, email and third-party links.', footer: true },
      { href: '/all/', title: 'All pages', description: 'This directory of the site’s guides, records and available language pages.', footer: true },
    ],
  },
];

export const primaryLinks = [
  { href: '/countries/', title: 'Countries' },
  { href: '/resources/', title: 'Research' },
  { href: '/all/', title: 'All pages' },
];

export const researchRoutes = [
  ...navigationGroups.find(group => group.id === 'research')!.pages.map(page => page.href),
  '/when-a-whale-comes-ashore/', '/sonar-and-strandings/',
];
