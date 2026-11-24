export type SiteStatus = "live" | "construction";

export const SITE = {
  name: "Whaling Watch",
  description:
    "A free, independent whaling reference: who hunts whales, under which laws, and what the records show.",

  // Flip this to "construction" to force the homepage into under-construction mode:
  status: "live" as SiteStatus,

  canonicalBase: "https://whaling.watch",

  socials: {
    twitter: undefined as string | undefined
  }
} as const;
