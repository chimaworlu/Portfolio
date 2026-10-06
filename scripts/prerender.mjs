// Runs after `vite build`. Clones dist/index.html (which already carries
// the homepage's correct meta tags) into a real static index.html per
// known route, swapping in that route's title/description/canonical/url.
// Vercel serves these static files directly (ahead of the SPA rewrite in
// vercel.json), so crawlers that don't execute JS (LinkedIn, X, Slack,
// Facebook, iMessage) see correct per-page previews, and the client-side
// React app still takes over for real visitors.
import { readFile, writeFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { pageSeo } from "../src/data/seo.js";
import { SITE_URL } from "../src/data/siteConfig.js";

const distDir = path.resolve("dist");
const homeHtml = await readFile(path.join(distDir, "index.html"), "utf8");

function withTag(html, route, label, pattern, value) {
  if (!pattern.test(html)) {
    throw new Error(`prerender: "${label}" pattern not found for route ${route}`);
  }
  return html.replace(pattern, (match, p1) => match.replace(p1, value));
}

for (const [route, meta] of Object.entries(pageSeo)) {
  if (route === "/") continue; // already the built dist/index.html

  const canonicalUrl = `${SITE_URL}${route}`;
  let html = homeHtml;

  html = withTag(html, route, "title", /<title>([^<]*)<\/title>/, meta.title);
  html = withTag(
    html,
    route,
    "description",
    /<meta\s+name="description"\s+content="([^"]*)"/,
    meta.description
  );
  html = withTag(
    html,
    route,
    "canonical",
    /<link\s+rel="canonical"\s+href="([^"]*)"/,
    canonicalUrl
  );
  html = withTag(
    html,
    route,
    "og:title",
    /<meta\s+property="og:title"\s+content="([^"]*)"/,
    meta.title
  );
  html = withTag(
    html,
    route,
    "og:description",
    /<meta\s+property="og:description"\s+content="([^"]*)"/,
    meta.description
  );
  html = withTag(
    html,
    route,
    "og:url",
    /<meta\s+property="og:url"\s+content="([^"]*)"/,
    canonicalUrl
  );
  html = withTag(
    html,
    route,
    "twitter:title",
    /<meta\s+name="twitter:title"\s+content="([^"]*)"/,
    meta.title
  );
  html = withTag(
    html,
    route,
    "twitter:description",
    /<meta\s+name="twitter:description"\s+content="([^"]*)"/,
    meta.description
  );

  const outDir = path.join(distDir, route.replace(/^\//, ""));
  await mkdir(outDir, { recursive: true });
  await writeFile(path.join(outDir, "index.html"), html, "utf8");
  console.log(`prerendered ${route} -> ${path.relative(distDir, outDir)}/index.html`);
}

const routes = Object.keys(pageSeo);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) =>
      `  <url>\n    <loc>${SITE_URL}${route}</loc>\n  </url>`
  )
  .join("\n")}
</urlset>
`;
await writeFile(path.join(distDir, "sitemap.xml"), sitemap, "utf8");
console.log("wrote sitemap.xml");

const robots = `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`;
await writeFile(path.join(distDir, "robots.txt"), robots, "utf8");
console.log("wrote robots.txt");
