export type SiteStatus = "live" | "construction";

export const SITE = {
  name: "UXOInfo",
  description:
    "UXOInfo is an initiative focused on practical, systems-level improvements in regards to UXOs (Unexploded Ordinances)",

  // Flip this to "construction" to force the homepage into under-construction mode:
  status: "live" as SiteStatus,

  canonicalBase: "https://uxo.info",

  socials: {
    twitter: undefined as string | undefined
  }
} as const;