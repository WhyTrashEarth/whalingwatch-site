export type SiteStatus = "live" | "construction";

export const SITE = {
  name: "PlasticFreeFlights",
  description:
    "PlasticFreeFlights is an envrionemtnal effort to reduce plastic in the avitation sector",

  // Flip this to "construction" to force the homepage into under-construction mode:
  status: "live" as SiteStatus,

  canonicalBase: "https://plasticfree.flights",

  socials: {
    twitter: undefined as string | undefined
  }
} as const;