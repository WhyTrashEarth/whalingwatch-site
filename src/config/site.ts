export type SiteStatus = "live" | "construction";

export const SITE = {
  name: "WhyTrashTahoe",
  description:
    "WhyTrashTahoe is an environmental initiative focused on practical, systems-level improvements.",

  // Flip this to "construction" to force the homepage into under-construction mode:
  status: "live" as SiteStatus,

  canonicalBase: "https://whytrashtahoe.org",

  socials: {
    twitter: undefined as string | undefined
  }
} as const;