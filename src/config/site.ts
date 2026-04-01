export type SiteStatus = "live" | "construction";

export const SITE = {
  name: "MenhadenEco",
  description:
    "MenhadenEco is an environmental initiative focused on raising awareness and saving the Mehaden Fish in the Atlantic ",

  // Flip this to "construction" to force the homepage into under-construction mode:
  status: "live" as SiteStatus,

  canonicalBase: "https://menhaden.eco",

  socials: {
    twitter: undefined as string | undefined
  }
} as const;