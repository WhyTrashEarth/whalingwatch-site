import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import pageModified from "./src/data/page-modified.json" with { type: "json" };

export default defineConfig({
  trailingSlash: "always",
  site: 'https://whaling.watch',
  integrations: [sitemap({
    serialize(item) {
      const date = pageModified[new URL(item.url).pathname];
      if (date) item.lastmod = date;
      return item;
    },
  })],

  // i18n routing ready:
  i18n: {
    defaultLocale: "en",
    locales: ["en", "is", "ja", "nb", "pt-br"],

    // IMPORTANT: do not prefix default locale
    routing: {
      prefixDefaultLocale: false
    }
  },

});
