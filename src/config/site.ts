export type SiteStatus = "live" | "construction";

export const SITE = {
  name: "WTEWiki",
  description:
    "WTEWiki is the official WhyTrashEarth Network",

  // Flip this to "construction" to force the homepage into under-construction mode:
  status: "live" as SiteStatus,

  canonicalBase: "https://wte.wiki",

  socials: {
    twitter: undefined as string | undefined
  }
} as const;