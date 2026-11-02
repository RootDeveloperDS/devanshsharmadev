import { projects, type TabId } from "@/components/portfolio/data";

export interface RouteMeta {
  title: string;
  description: string;
  canonical: string;
  breadcrumbName: string;
}

export const ROUTE_METADATA: Record<TabId, RouteMeta> = {
  overview: {
    title: "Devansh Sharma | Applied AI Developer & Founder of VISAR Edge",
    description:
      "Devansh Sharma builds AI systems that evolve. Creator of VISAR Edge: autonomous distributed AI operating mesh. Applied AI, intelligent agents, and Python architecture.",
    canonical: "https://devanshsharma.vercel.app/",
    breadcrumbName: "Overview",
  },
  projects: {
    title: "Projects | Devansh Sharma - AI Systems & Web Engineering",
    description:
      "Explore 23 production AI architectures, desktop flagships, and developer utilities by Devansh Sharma: VISAR Edge, OrbitSpan, Frame My Avatar, FormEase, Git Uncommitted Scanner, NetSage AI, and more.",
    canonical: "https://devanshsharma.vercel.app/projects",
    breadcrumbName: "Projects",
  },
  experience: {
    title: "Experience | Devansh Sharma - AI Development & Open Source",
    description:
      "Work history and open source contributions by Devansh Sharma: Cisco-AICTE VIP 2026, VISAR Edge development, Python ecosystem tooling, and hackathon achievements.",
    canonical: "https://devanshsharma.vercel.app/experience",
    breadcrumbName: "Experience",
  },
  terminal: {
    title: "Terminal | Devansh Sharma - Interactive CLI Portfolio",
    description:
      "Interactive terminal interface for Devansh Sharma's portfolio. Run commands to explore projects, skills, contact info, and system status.",
    canonical: "https://devanshsharma.vercel.app/terminal",
    breadcrumbName: "Terminal",
  },
};

function setOrCreateMeta(selector: string, attribute: "name" | "property", key: string, content: string) {
  let element = document.querySelector<HTMLMetaElement>(selector);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
}

function setOrCreateCanonical(canonicalUrl: string) {
  let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }
  link.setAttribute("href", canonicalUrl);
}

function updateBreadcrumbSchema(tab: TabId, meta: RouteMeta) {
  const SCRIPT_ID = "ld-breadcrumb-schema";
  let script = document.getElementById(SCRIPT_ID) as HTMLScriptElement | null;
  if (!script) {
    script = document.createElement("script");
    script.id = SCRIPT_ID;
    script.type = "application/ld+json";
    document.head.appendChild(script);
  }

  const items = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://devanshsharma.vercel.app/",
    },
  ];

  if (tab !== "overview") {
    items.push({
      "@type": "ListItem",
      position: 2,
      name: meta.breadcrumbName,
      item: meta.canonical,
    });
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items,
  };

  script.textContent = JSON.stringify(schema, null, 2);
}

function updateProjectsCatalogSchema(tab: TabId) {
  const SCRIPT_ID = "ld-projects-catalog-schema";
  let script = document.getElementById(SCRIPT_ID) as HTMLScriptElement | null;

  if (tab !== "projects") {
    if (script) {
      script.remove();
    }
    return;
  }

  if (!script) {
    script = document.createElement("script");
    script.id = SCRIPT_ID;
    script.type = "application/ld+json";
    document.head.appendChild(script);
  }

  const items = projects.map((p, idx) => ({
    "@type": "SoftwareApplication",
    position: idx + 1,
    name: p.name,
    headline: p.tagline,
    description: p.description,
    applicationCategory: p.categories.join(", "),
    url: p.live || p.github || "https://devanshsharma.vercel.app/projects",
    ...(p.github ? { codeRepository: p.github } : {}),
    ...(p.tech ? { keywords: p.tech.join(", ") } : {}),
    author: {
      "@type": "Person",
      name: "Devansh Sharma",
      url: "https://devanshsharma.vercel.app/",
    },
  }));

  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Devansh Sharma Software Architectures & Systems Catalog",
    description:
      "Complete index of production AI architectures, desktop systems, and developer utilities built by Devansh Sharma.",
    itemListElement: items,
  };

  script.textContent = JSON.stringify(schema, null, 2);
}

export function applyRouteSEO(tab: TabId): void {
  const meta = ROUTE_METADATA[tab] || ROUTE_METADATA.overview;

  // Title
  document.title = meta.title;

  // Canonical link
  setOrCreateCanonical(meta.canonical);

  // Standard Meta Description
  setOrCreateMeta('meta[name="description"]', "name", "description", meta.description);

  // Open Graph Tags
  setOrCreateMeta('meta[property="og:title"]', "property", "og:title", meta.title);
  setOrCreateMeta('meta[property="og:description"]', "property", "og:description", meta.description);
  setOrCreateMeta('meta[property="og:url"]', "property", "og:url", meta.canonical);

  // Twitter Tags
  setOrCreateMeta('meta[name="twitter:title"]', "name", "twitter:title", meta.title);
  setOrCreateMeta('meta[name="twitter:description"]', "name", "twitter:description", meta.description);

  // Structured Data Breadcrumbs
  updateBreadcrumbSchema(tab, meta);

  // Structured Data Complete Projects Catalog (Injected when on /projects)
  updateProjectsCatalogSchema(tab);
}
