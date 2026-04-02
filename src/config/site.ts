export type SiteStatus = "live" | "construction";

export const SITE = {
  name: "CrowCRB",
  description:
    "CrowCRB is an environmental Response to Coconut Rhinoceros Beetle response initiative in Hawaii ",

  // Flip this to "construction" to force the homepage into under-construction mode:
  status: "live" as SiteStatus,

  canonicalBase: "https://CrowCRB.org",

  socials: {
    twitter: undefined as string | undefined
  }
} as const;