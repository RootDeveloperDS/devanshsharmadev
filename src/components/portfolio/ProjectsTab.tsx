import { motion } from "framer-motion";
import { ArrowUpRight, Github, Sparkles } from "lucide-react";
import { projects } from "./data";
import { AccordionMatrix } from "./AccordionMatrix";

// Segregate data at the module level
const flagshipProjects = projects.filter((p) => p.flagship);
const archiveProjects = projects; // All projects populate the Accordion Matrix

const spanClass: Record<string, string> = {
  lg: "md:col-span-2 md:row-span-2",
  wide: "md:col-span-2",
  tall: "md:row-span-2",
  sm: "",
};

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

export function ProjectsTab() {
  return (
    <section className="mx-auto max-w-6xl">
      {/* ── Page Header ── */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10"
      >
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">
          // systems_index
        </p>
        <h2 className="mt-2 font-display text-3xl font-bold sm:text-5xl">
          Systems & <span className="text-gradient">Projects</span>
        </h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Each project is a standalone system — modular, async-first, built to evolve.
        </p>
      </motion.div>

      {/* ══════════════════════════════════════════════
          ZONE 1: CORE SYSTEMS — Flagship Bento Grid
      ══════════════════════════════════════════════ */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-2.5 border-b border-border/60 pb-3">
        <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-primary font-bold">
            // FLAGSHIP SYSTEMS
          </h3>
          <span className="rounded-full border border-primary/30 bg-primary/10 px-2.5 py-0.5 font-mono text-[10px] font-medium text-primary">
            ⭐ Personal Favorites
          </span>
        </div>

        <span className="hidden sm:inline-block font-mono text-[11px] text-muted-foreground">
          Core architectures & passion builds
        </span>
      </div>

      <div className="grid auto-rows-[minmax(180px,auto)] gap-5 md:grid-cols-4">
        {flagshipProjects.map((project, idx) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.05 }}
            className={`bento-card group flex flex-col justify-between ${spanClass[project.span] || ""}`}
          >
            <div>
              <div className="mb-3 flex items-center justify-between gap-2">
                <span className="rounded-full border border-primary/40 bg-primary/10 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-primary font-semibold flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                  <span>{project.status ? `${project.status} · ⭐ FAVORITE` : "⭐ FLAGSHIP · PERSONAL FAVORITE"}</span>
                </span>
                <Sparkles className="h-4 w-4 text-primary opacity-70 shrink-0" />
              </div>
              
              <h3 className={`font-display font-bold ${project.span === "lg" ? "text-3xl sm:text-4xl" : "text-xl"}`}>
                {project.id === "visar-edge" ? (
                   <><span className="text-gradient">VISAR</span> EDGE</>
                ) : (
                  project.name
                )}
              </h3>
              
              <p className={`mt-1 font-mono uppercase tracking-wider text-muted-foreground ${project.span === "lg" ? "text-xs" : "text-[11px]"}`}>
                {project.tagline}
              </p>
              
              {project.description && project.span === "lg" && (
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {project.description}
                </p>
              )}
            </div>

            {/* Visual Payload OR Custom Mockups */}
            {project.image ? (
              <div className="relative mt-6 flex-1 flex flex-col justify-center items-center">
                <img 
                  src={optimizeImage(project.image)} 
                  alt={`${project.name} Interface`} 
                  className={`max-w-full object-contain rounded-xl border border-primary/20 bg-black/40 p-1 shadow-[0_0_15px_rgba(var(--primary-rgb),0.1)] ${
                    project.span === "lg" ? "max-h-[24rem]" : "max-h-[14rem]"
                  }`}
                  loading={idx < 2 ? "eager" : "lazy"}
                  fetchpriority={idx < 2 ? "high" : "auto"}
                  onError={(e) => {
                    // Bulletproof Fallback: If jsDelivr fails, revert to raw GitHub URL instantly
                    const target = e.currentTarget;
                    if (project.image && target.src !== project.image) {
                      target.src = project.image;
                    }
                  }}
                />
              </div>
            ) : project.id === "visar-edge" ? (
              <div className="relative mt-6 flex-1 flex flex-col justify-center overflow-hidden rounded-xl border border-border bg-background/40 p-4">
                <div className="font-mono text-[10px] text-muted-foreground">
                  <div className="text-primary">› visar.context.observe()</div>
                  <div className="opacity-70">  ↳ pipeline: clipboard, screen, audio</div>
                  <div className="opacity-70">  ↳ latency: 42ms · zero-click</div>
                  <div className="text-primary">› visar.respond(intent)</div>
                  <div className="opacity-70">  ↳ ok ✓</div>
                </div>
                <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/20 blur-3xl" />
              </div>
            ) : project.id === "jarvis" ? (
              <div className="my-4 flex-1 flex flex-col justify-center">
                <div className="flex items-center gap-1">
                  {Array.from({ length: 21 }).map((_, i) => (
                    <span
                      key={i}
                      className="h-6 flex-1 rounded-sm"
                      style={{
                        background: `hsl(var(--primary) / ${0.15 + (i / 21) * 0.7})`,
                      }}
                    />
                  ))}
                </div>
              </div>
            ) : (
               <div className="my-4 flex-1 overflow-hidden rounded-xl border border-border/40 bg-muted/10 p-6 flex items-center justify-center">
                 <span className="font-mono text-[10px] text-muted-foreground/60 uppercase tracking-widest">// NO VISUAL DATA</span>
               </div>
            )}

            <div className={`mt-4 flex flex-wrap gap-4 ${project.span === "lg" ? "" : "mt-2"}`}>
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.id === "jarvis" ? "Mark 1 → 21" : "GitHub"} repository for ${project.id === "visar-edge" ? "VISAR EDGE" : project.name}`}
                  className={`inline-flex items-center gap-2 font-medium text-primary hover:gap-3 transition-all ${project.span === "lg" ? "text-sm" : "text-xs"}`}
                >
                  <Github className={project.span === "lg" ? "h-4 w-4" : "h-3.5 w-3.5"} /> {project.id === "jarvis" ? "Mark 1 → 21" : "GitHub"}
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View live demo for ${project.id === "visar-edge" ? "VISAR EDGE" : project.name}`}
                  className={`inline-flex items-center gap-2 font-medium text-primary hover:gap-3 transition-all ${project.span === "lg" ? "text-sm" : "text-xs"}`}
                >
                  <ArrowUpRight className={project.span === "lg" ? "h-4 w-4" : "h-3.5 w-3.5"} /> Live Demo
                </a>
              )}
            </div>
          </motion.article>
        ))}
      </div>

      {/* ══════════════════════════════════════════════
          ZONE 2 + 3: Division Line + Accordion Matrix
          (rendered by AccordionMatrix component)
      ══════════════════════════════════════════════ */}
      <AccordionMatrix projects={archiveProjects} />
    </section>
  );
}
