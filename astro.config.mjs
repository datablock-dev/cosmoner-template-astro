// @ts-check
import { defineConfig } from "astro/config";

export default defineConfig({
  // Set this to your public address to get absolute canonical URLs.
  // site: "https://example.com",

  // Write /about as about.html rather than about/index.html, so clean URLs
  // are served directly instead of redirecting to a trailing slash.
  build: { format: "file" },
  trailingSlash: "never",
});
