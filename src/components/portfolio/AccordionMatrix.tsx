import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ArrowUpRight, ChevronRight } from "lucide-react";
import type { Project } from "./data";

/* ─────────────────────────────────────────────
   Filter categories rendered as terminal tabs
───────────────────────────────────────────── */
const FILTERS: { id: string; label: string }[] = [
  { id: "all",        label: "[ ALL ]" },
  { id: "fullstack",  label: "[ FULL STACK ]" },
  { id: "frontend",   label: "[ FRONTEND ]" },
  { id: "desktop",    label: "[ DESKTOP ]" },
  { id: "mobile",     label: "[ MOBILE ]" },
  { id: "api",        label: "[ API ]" },
  { id: "ai-core",    label: "[ AI / ML ]" },
  { id: "automation", label: "[ AUTOMATION ]" },
  { id: "dev-tool",   label: "[ TOOLS ]" },
];

// Helper to instantly route GitHub images through a high-speed global Edge CDN
function optimizeImage(url: string | undefined) {
  if (!url) return url;
  if (url.includes("github.com") && url.includes("/blob/main/")) {
    return url
      .replace("https://github.com/", "https://cdn.jsdelivr.net/gh/")
      .replace("/blob/main/", "@main/")
      .split("?")[0];
  }
  return url;
}

interface AccordionMatrixProps {
  projects: Project[];
}

export function AccordionMatrix({ projects }: AccordionMatrixProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get("category") || "all";
  const expandedId = searchParams.get("project") || null;

  const filtered =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.categories.includes(activeCategory as any));

  const toggle = (id: string) => {
    const newParams = new URLSearchParams(searchParams);
    if (expandedId === id) {
      newParams.delete("project");
    } else {
      newParams.set("project", id);
    }
    setSearchParams(newParams, { replace: true });
  };

  return (
    <div className="mt-16">
      {/* Zone 2: Holographic Division Line */}
      <div className="relative mb-10 flex items-center gap-4">
        <span className="shrink-0 font-mono text-[10px] uppercase tracking-widest text-primary border border-primary/30 bg-primary/5 px-3 py-1 rounded-sm">
          SYSTEM_INDEX: ARCHIVES
        </span>
        <div className="flex-1 border-t border-dashed border-primary/25" />
        <span className="shrink-0 font-mono text-[9px] text-muted-foreground/50 uppercase tracking-widest hidden sm:block">
          INHERITED FROM UPSTREAM
        </span>
      </div>

      {/* Zone 3: Filter Console */}
      <div className="mb-4 flex flex-wrap gap-2">
        {FILTERS.map((f) => (
          <button
            key={f.id}
            onClick={() => {
              const newParams = new URLSearchParams(searchParams);
              newParams.set("category", f.id);
              newParams.delete("project");
              setSearchParams(newParams, { replace: true });
            }}
            className={`font-mono text-[11px] uppercase tracking-widest px-3 py-1.5 rounded-sm border transition-all duration-200 ${
              activeCategory === f.id
                ? "border-primary bg-primary/10 text-primary"
                : "border-border text-muted-foreground hover:border-primary/40 hover:text-primary/70"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Zone 3: Accordion Matrix List */}
      <div className="border border-border rounded-lg overflow-hidden divide-y divide-border">
        <AnimatePresence initial={false}>
          {filtered.map((project, idx) => {
            const isOpen = expandedId === project.id;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.2, delay: idx * 0.04 }}
              >
                {/* Closed Row */}
                <button
                  onClick={() => toggle(project.id)}
                  className="w-full text-left group"
                  aria-expanded={isOpen}
                >
                  <div
                    className={`flex items-center gap-3 px-4 py-3.5 transition-colors duration-150 ${
                      isOpen ? "bg-primary/5" : "hover:bg-muted/30"
                    }`}
                  >
                    {/* Toggle indicator */}
                    <motion.span
                      animate={{ rotate: isOpen ? 90 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="shrink-0 text-primary"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </motion.span>

                    {/* Name (always visible) */}
                    <span
                      className={`font-mono text-sm font-medium flex-1 min-w-0 truncate transition-colors ${
                        isOpen ? "text-primary" : "text-foreground group-hover:text-primary"
                      }`}
                    >
                      {project.name}
                    </span>

                    {/* Category badges - hidden on mobile */}
                    <div className="hidden md:flex flex-wrap gap-1">
                      {project.categories.map((cat) => (
                        <span key={cat} className="shrink-0 font-mono text-[10px] uppercase tracking-widest text-muted-foreground border border-border/60 px-2 py-0.5 rounded-sm">
                          {cat}
                        </span>
                      ))}
                    </div>

                    {/* Tech summary - hidden on mobile */}
                    <span className="hidden lg:block shrink-0 font-mono text-[10px] text-muted-foreground/70 max-w-[240px] truncate">
                      {project.tech?.join(", ")}
                    </span>
                  </div>
                </button>

                {/* Expanded Payload */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 pb-6 pt-4 border-t border-primary/10 bg-gradient-to-b from-primary/[0.05] to-transparent">

                        {/* Split-Pane Layout */}
                        <div className="flex flex-col lg:flex-row gap-6">

                          {/* Left: Uncropped Image Pane */}
                          {project.image && (
                            <div className="lg:w-[55%] shrink-0">
                              <div className="relative rounded-lg border border-primary/20 bg-black/40 p-1.5 shadow-[0_0_20px_rgba(var(--primary-rgb),0.08)]">
                                {/* Sci-Fi Corner Accents */}
                                <div className="absolute -left-px -top-px h-3 w-3 border-l-2 border-t-2 border-primary/60 rounded-tl-sm" />
                                <div className="absolute -right-px -top-px h-3 w-3 border-r-2 border-t-2 border-primary/60 rounded-tr-sm" />
                                <div className="absolute -left-px -bottom-px h-3 w-3 border-l-2 border-b-2 border-primary/60 rounded-bl-sm" />
                                <div className="absolute -right-px -bottom-px h-3 w-3 border-r-2 border-b-2 border-primary/60 rounded-br-sm" />
                                <img
                                  src={optimizeImage(project.image)}
                                  alt={`${project.name} preview`}
                                  className="w-full h-auto max-h-[400px] object-contain rounded-md"
                                  loading="lazy"
                                  onError={(e) => {
                                    const target = e.currentTarget;
                                    if (project.image && target.src !== project.image) {
                                      target.src = project.image;
                                    }
                                  }}
                                />
                              </div>
                            </div>
                          )}

                          {/* Right: Data Payload */}
                          <div className="flex-1 flex flex-col justify-center">
                            {/* Tagline */}
                            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary mb-3 flex items-center gap-2">
                              <span className="h-px w-4 bg-primary/50 shrink-0" />
                              {project.tagline}
                            </p>

                            {/* Description */}
                            <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                              {project.description}
                            </p>

                            {/* Tech tags */}
                            {project.tech && project.tech.length > 0 && (
                              <div className="mb-6 flex flex-wrap gap-2">
                                {project.tech.map((t) => (
                                  <span
                                    key={t}
                                    className="rounded bg-primary/5 px-2 py-1 font-mono text-[10px] text-primary/90 border border-primary/20"
                                  >
                                    {t}
                                  </span>
                                ))}
                              </div>
                            )}

                            {/* Action links */}
                            <div className="mt-auto flex flex-wrap gap-3">
                              {project.github && (
                                <a
                                  href={project.github}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-primary border border-primary/30 px-4 py-2 rounded hover:bg-primary hover:text-background transition-all duration-300"
                                >
                                  <Github className="h-4 w-4" />
                                  Repository
                                </a>
                              )}
                              {project.live && (
                                <a
                                  href={project.live}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-primary border border-primary/30 px-4 py-2 rounded hover:bg-primary hover:text-background transition-all duration-300"
                                >
                                  <ArrowUpRight className="h-4 w-4" />
                                  Execute
                                </a>
                              )}
                            </div>
                          </div>

                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </AnimatePresence>

        {filtered.length === 0 && (
          <div className="px-6 py-10 text-center font-mono text-xs text-muted-foreground/50 uppercase tracking-widest">
            // no systems in this category
          </div>
        )}
      </div>
    </div>
  );
}
