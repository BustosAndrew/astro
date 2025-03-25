import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";
import icon from "astro-icon";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://soloiron.dev/",
  integrations: [mdx(), sitemap(), icon()],
  adapter: vercel(),

  vite: {
    plugins: [tailwindcss()],
  },
});
