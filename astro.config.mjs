import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";

import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";
import turbolinks from "@astrojs/turbolinks";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://chris-king.me",
  integrations: [preact(), svelte(), tailwind(), sitemap()],
});
