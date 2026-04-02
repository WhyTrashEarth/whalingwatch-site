export type SiteStatus = "live" | "construction";

export const SITE = {
  name: "EcoWasteWorldWide",
  description:
    "EcoWasteWorldwide is awareness around illegal and illicit waste dumping worldwide",

  // Flip this to "construction" to force the homepage into under-construction mode:
  status: "live" as SiteStatus,

  canonicalBase: "https://ecowasteworldwide.org",

  socials: {
    twitter: undefined as string | undefined
  }
} as const;