export type SiteStatus = "live" | "construction";

export const SITE = {
  name: "WineWaste",
  description:
    "WineWaste 🍷 is an environmental effort focused on unnecessary wine waste in the global wine industry",

  // Flip this to "construction" to force the homepage into under-construction mode:
  status: "live" as SiteStatus,

  canonicalBase: "https://winewaste.org",

  socials: {
    twitter: undefined as string | undefined
  }
} as const;