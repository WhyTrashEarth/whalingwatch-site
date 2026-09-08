export type SiteStatus = "live" | "construction";

export const SITE = {
  name: "Whaling Watch",
  description:
    "An independent, international, source-driven reference on contemporary whaling.",

  // Flip this to "construction" to force the homepage into under-construction mode:
  status: "live" as SiteStatus,

  canonicalBase: "https://whaling.watch",

  socials: {
    twitter: undefined as string | undefined
  }
} as const;
