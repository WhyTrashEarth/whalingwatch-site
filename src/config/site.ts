export type SiteStatus = "live" | "construction";

export const SITE = {
  name: "MakeTheGoal",
  description:
    "MakeTheGoal is an envrionemtnal effort to raise awareness of FIFA World Cup 2026 and Making the Goal towards advancing humanity",

  // Flip this to "construction" to force the homepage into under-construction mode:
  status: "live" as SiteStatus,

  canonicalBase: "https://makethegoal.org",

  socials: {
    twitter: undefined as string | undefined
  }
} as const;