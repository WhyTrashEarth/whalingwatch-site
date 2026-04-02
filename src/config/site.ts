export type SiteStatus = "live" | "construction";

export const SITE = {
  name: "WhalingWatch",
  description:
    "Whaling Watch monitors whaling activity worldwide and provides knowledges resources on whaling",

  // Flip this to "construction" to force the homepage into under-construction mode:
  status: "live" as SiteStatus,

  canonicalBase: "https://whalingwatch.org",

  socials: {
    twitter: undefined as string | undefined
  }
} as const;