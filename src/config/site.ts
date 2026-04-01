export type SiteStatus = "live" | "construction";

export const SITE = {
  name: "MekongEarth",
  description:
    "MekongEarth is a neutral environmental initiative focused on raising awareness and  ",

  // Flip this to "construction" to force the homepage into under-construction mode:
  status: "live" as SiteStatus,

  canonicalBase: "https://mekong.earth",

  socials: {
    twitter: undefined as string | undefined
  }
} as const;