export const defaultLocale = "en" as const;
export const locales = ["en"] as const;

type Locale = (typeof locales)[number];

const ui = {
  en: {
    nav_home: "Home",
    nav_about: "About",
    nav_contact: "Contact",
    nav_blog: "Blog",
    nav_under_construction: "Under Construction",

    home_title: "WhyTrashEarth",
    home_tagline: "Same mission. Better systems. Less waste.",

    uc_title: "Under Construction",
    uc_body:
      "This site is being built with accessibility-first design. Check back soon.",

    contact_title: "Contact",
    about_title: "About",
    blog_title: "Blog"
  }
} satisfies Record<Locale, Record<string, string>>;

export function t(locale: string | undefined, key: keyof typeof ui.en): string {
  const l = (locale as Locale) ?? defaultLocale;
  return ui[l]?.[key] ?? ui[defaultLocale][key] ?? String(key);
}