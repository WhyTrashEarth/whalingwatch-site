import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: 'https://wte.wiki',
  integrations: [sitemap()],

  // i18n routing ready:
  i18n: {
    defaultLocale: "en",
    locales: ["en"],

    // IMPORTANT: do not prefix default locale
    routing: {
      prefixDefaultLocale: false
    }
  },

  integrations: [
  
  ]
});