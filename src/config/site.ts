export type SiteStatus = "live" | "construction";

export const SITE = {
  name: "AiriVenturi",
  description:
    "Airi Venturi, International Air Quality Consultant",

  // Flip this to "construction" to force the homepage into under-construction mode:
  status: "live" as SiteStatus,

  canonicalBase: "https://AiriVenturi.com",

  socials: {
    twitter: undefined as string | undefined
  }
} as const;