import { useEffect } from "react";
import type { TabId } from "./data";

interface SEOProps {
  tab: TabId;
}

const siteUrl = "https://devanshsharma.vercel.app";

const metaConfig: Record<
  TabId,
  {
    title: string;
    description: string;
    path: string;
    breadcrumbName: string;
  }
> = {
  overview: {
    title: "Devansh Sharma | Applied AI Developer & Founder of VISAR Edge",
    description:
      "Devansh Sharma builds AI systems that evolve. Creator of VISAR Edge — a modular AI assistant ecosystem. Applied AI, intelligent agents, and Python architecture.",
    path: "/",
    breadcrumbName: "Overview",
  },
  projects: {
    title: "Systems & Projects | Devansh Sharma — AI Architect",
    description:
      "Explore VISAR Edge, J.A.R.V.I.S., Neon Notes, VISAR Intel, and full-stack AI ecosystem projects built by Devansh Sharma.",
    path: "/projects",
    breadcrumbName: "Systems",
  },
  experience: {
    title: "Experience & Tech Stack | Devansh Sharma — AI Architect",
    description:
      "Engineering experience in applied AI, asynchronous computing systems, LLMs, vector search (FAISS), Python, PySide6, and modern React architectures.",
    path: "/experience",
    breadcrumbName: "Experience",
  },
  terminal: {
    title: "Interactive Terminal Comms | Devansh Sharma — AI Architect",
    description:
      "Execute interactive terminal commands, inspect live telemetry, and send direct comms to Devansh Sharma.",
    path: "/terminal",
    breadcrumbName: "Terminal",
  },
};

export function SEO({ tab }: SEOProps) {
  const current = metaConfig[tab] || metaConfig.overview;
  const canonicalUrl = `${siteUrl}${current.path === "/" ? "" : current.path}`;

  useEffect(() => {
    // 1. Update Document Title
    document.title = current.title;

    // Helper to update meta tag by selector
    const updateMeta = (selector: string, content: string) => {
      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement("meta");
        if (selector.startsWith('meta[name="')) {
          const name = selector.match(/name="([^"]+)"/)?.[1];
          if (name) element.setAttribute("name", name);
        } else if (selector.startsWith('meta[property="')) {
          const prop = selector.match(/property="([^"]+)"/)?.[1];
          if (prop) element.setAttribute("property", prop);
        }
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    // 2. Update Meta Description
    updateMeta('meta[name="description"]', current.description);
    updateMeta('meta[property="og:description"]', current.description);
    updateMeta('meta[name="twitter:description"]', current.description);

    // 3. Update OG & Twitter Titles
    updateMeta('meta[property="og:title"]', current.title);
    updateMeta('meta[name="twitter:title"]', current.title);

    // 4. Update OG URL
    updateMeta('meta[property="og:url"]', canonicalUrl);

    // 5. Update Canonical Tag Dynamically
    let canonicalLink = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute("href", canonicalUrl);

    // 6. Inject / Update BreadcrumbList JSON-LD Schema for Google Rich Snippets
    let breadcrumbScript = document.getElementById("json-ld-breadcrumbs");
    if (!breadcrumbScript) {
      breadcrumbScript = document.createElement("script");
      breadcrumbScript.setAttribute("type", "application/ld+json");
      breadcrumbScript.setAttribute("id", "json-ld-breadcrumbs");
      document.head.appendChild(breadcrumbScript);
    }

    const breadcrumbsObj = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: siteUrl,
        },
        ...(current.path !== "/"
          ? [
              {
                "@type": "ListItem",
                position: 2,
                name: current.breadcrumbName,
                item: canonicalUrl,
              },
            ]
          : []),
      ],
    };

    breadcrumbScript.textContent = JSON.stringify(breadcrumbsObj);
  }, [current, canonicalUrl]);

  return null;
}
