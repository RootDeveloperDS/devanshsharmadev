import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");

const SITE_URL = "https://devanshsharma.vercel.app";

// Major canonical site routes (strictly without query parameters)
const routes = [
  { path: "/", priority: "1.0", changefreq: "daily" },
  { path: "/overview", priority: "0.9", changefreq: "daily" },
  { path: "/projects", priority: "0.9", changefreq: "daily" },
  { path: "/experience", priority: "0.8", changefreq: "daily" },
  { path: "/terminal", priority: "0.8", changefreq: "daily" },
];

/**
 * Filter out any routes with query parameters (e.g. ?api=xxx, ?tab=xxx)
 * and ensure clean, canonical URLs only.
 */
export function sanitizeRoutes(routeList) {
  return routeList.filter((route) => {
    // Strictly reject any link containing query parameters or fragments
    if (route.path.includes("?") || route.path.includes("&") || route.path.includes("#")) {
      console.warn(`[sitemap] Excluding parameterized or invalid route: ${route.path}`);
      return false;
    }
    return true;
  });
}

export function generateSitemapXml() {
  const lastmod = new Date().toISOString().split("T")[0];
  const validRoutes = sanitizeRoutes(routes);

  const urlsXml = validRoutes
    .map(
      (r) => `  <url>
    <loc>${SITE_URL}${r.path === "/" ? "/" : r.path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${r.changefreq || "daily"}</changefreq>
    <priority>${r.priority || "0.8"}</priority>
  </url>`
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlsXml}
</urlset>
`;
}

export function buildSitemap() {
  const xml = generateSitemapXml();
  const distDir = path.join(rootDir, "dist");

  if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
  }

  const dest = path.join(distDir, "sitemap.xml");
  fs.writeFileSync(dest, xml, "utf-8");
  console.log(`[sitemap] Successfully generated dynamic sitemap at: ${dest}`);
}

// Execute immediately when invoked directly
buildSitemap();
