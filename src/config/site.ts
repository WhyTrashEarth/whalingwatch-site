export type SiteStatus = "live" | "construction";

export const SITE = {
  name: "ReLiveNV",
  description:
    "ReLiveNV is an envrionemtnal effort to raise awareness on Recycling Lithium in Nevada",

  // Flip this to "construction" to force the homepage into under-construction mode:
  status: "live" as SiteStatus,

  canonicalBase: "https://relivenv.org",

  socials: {
    twitter: undefined as string | undefined
  }
} as const;