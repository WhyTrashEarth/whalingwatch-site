export type SiteStatus = "live" | "construction";

export const SITE = {
  name: "EndFastFashion",
  description:
    "EndFastFashion is an envrionemtnal effort to raise awareness of fast fashion and providing solutions worldwide",

  // Flip this to "construction" to force the homepage into under-construction mode:
  status: "live" as SiteStatus,

  canonicalBase: "https://endfast.fashion",

  socials: {
    twitter: undefined as string | undefined
  }
} as const;