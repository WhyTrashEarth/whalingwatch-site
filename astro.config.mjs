import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  trailingSlash: "always",
  site: 'https://whaling.watch',
  integrations: [sitemap()],

  // i18n routing ready:
  i18n: {
    defaultLocale: "en",
    locales: ["en", "is", "ja"],

    // IMPORTANT: do not prefix default locale
    routing: {
      prefixDefaultLocale: false
    }
  },

});