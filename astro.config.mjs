import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
    site: "https://samwangblog.netlify.app",
    integrations: [mdx(), sitemap()],
    trailingSlash: "never",
    server: {
        port: 1666,
    },
});
