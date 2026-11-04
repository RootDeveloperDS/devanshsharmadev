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
  mobile: "md:col-span-4",
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
          Each project is a standalone system: modular, async-first, built to evolve.
        </p>
      </motion.div>

      {/* ══════════════════════════════════════════════
          ZONE 1: CORE SYSTEMS - Flagship Bento Grid
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

      <div className="grid auto-rows-[minmax(180px,auto)] gap-5 md:grid-cols-4 [grid-auto-flow:dense]">
        {flagshipProjects.map((project, idx) => {
          if (project.span === "mobile") {
            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bento-card group md:col-span-4 flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 p-6 sm:p-8 relative overflow-hidden"
              >
                {/* Background Cyber Ambient Accents */}
                <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
                <div className="pointer-events-none absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />

                {/* Left Column: Info & Details */}
                <div className="flex-1 flex flex-col justify-between h-full space-y-5 z-10 w-full">
                  <div>
                    <div className="mb-3 flex items-center justify-between gap-2">
                      <span className="rounded-full border border-primary/40 bg-primary/10 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-primary font-semibold flex items-center gap-1.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                        <span>{project.status ? `${project.status} · ⭐ FAVORITE` : "⭐ FLAGSHIP · PERSONAL FAVORITE"}</span>
                      </span>
                      <Sparkles className="h-4 w-4 text-primary opacity-70 shrink-0" />
                    </div>

                    <h3 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-foreground">
                      {project.name}
                    </h3>

                    <p className="mt-1 font-mono uppercase tracking-wider text-primary text-xs sm:text-sm font-semibold">
                      {project.tagline}
                    </p>

                    {project.description && (
                      <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground max-w-2xl">
                        {project.description}
                      </p>
                    )}
                  </div>

                  {/* Tech Stack Pills */}
                  {project.tech && project.tech.length > 0 && (
                    <div className="flex flex-wrap gap-2 pt-1">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="rounded-md border border-primary/30 bg-primary/5 px-2.5 py-1 font-mono text-xs text-primary/90"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-4 pt-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 font-medium text-primary hover:gap-3 transition-all text-sm"
                      >
                        <Github className="h-4 w-4" /> GitHub
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 font-medium text-primary hover:gap-3 transition-all text-sm"
                      >
                        <ArrowUpRight className="h-4 w-4" /> Live Demo
                      </a>
                    )}
                  </div>
                </div>

                {/* Right Column: PhoneFrame - Device Mockup matching visar-mobile-download */}
                {project.image && (
                  <div className="relative w-full lg:w-auto shrink-0 flex items-center justify-center z-10 py-1 sm:py-2">
                    <figure className="group/phone relative mx-auto w-full max-w-[210px] sm:max-w-[235px] lg:max-w-[245px] transition-all duration-700 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:scale-[1.02]">
                      {/* Subtle, minimal ambient glow that gently intensifies on hover */}
                      <div
                        aria-hidden
                        className="pointer-events-none absolute inset-x-3 -bottom-2 top-4 rounded-[22px] bg-primary/20 blur-xl opacity-35 transition-opacity duration-700 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] group-hover/phone:opacity-80 group-hover:opacity-80"
                      />

                      {/* 3D Hardware Bezel: Black Titanium finish with ultra-slim 4px bezel */}
                      <div className="relative overflow-hidden rounded-[22px] border border-neutral-800 bg-neutral-950 p-1 sm:p-[4.5px] shadow-[0_20px_50px_-15px_rgba(0,0,0,0.9)] transition-colors duration-500 group-hover/phone:border-primary/50 group-hover:border-primary/50">
                        <div className="overflow-hidden rounded-[18px] bg-black">
                          <img
                            src={optimizeImage(project.image)}
                            alt={`${project.name} Interface`}
                            loading={idx < 2 ? "eager" : "lazy"}
                            decoding="async"
                            className="block h-auto w-full max-h-[25rem] sm:max-h-[27rem] object-contain"
                            onError={(e) => {
                              const target = e.currentTarget;
                              if (project.image && target.src !== project.image) {
                                target.src = project.image;
                              }
                            }}
                          />
                        </div>
                      </div>
                    </figure>
                  </div>
                )}
              </motion.article>
            );
          }

          return (
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
                    className={`inline-flex items-center gap-2 font-medium text-primary hover:gap-3 transition-all ${project.span === "lg" ? "text-sm" : "text-xs"}`}
                  >
                    <ArrowUpRight className={project.span === "lg" ? "h-4 w-4" : "h-3.5 w-3.5"} /> Live Demo
                  </a>
                )}
              </div>
            </motion.article>
          );
        })}
      </div>

      {/* ══════════════════════════════════════════════
          ZONE 2 + 3: Division Line + Accordion Matrix
          (rendered by AccordionMatrix component)
      ══════════════════════════════════════════════ */}
      <AccordionMatrix projects={archiveProjects} />

      {/* ══════════════════════════════════════════════
          MACHINE-READABLE SYSTEMS & PROJECTS DIRECTORY
          Ensures AI scrapers, LLMs (Perplexity, ChatGPT, Claude)
          and screen readers extract 100% of all 23 projects.
      ══════════════════════════════════════════════ */}
      <div className="sr-only" aria-label="Comprehensive Systems and Projects Catalog for AI Scrapers and Screen Readers">
        <h3>Complete Systems and Projects Catalog</h3>
        {projects.map((project) => (
          <article key={`seo-catalog-${project.id}`}>
            <h4>{project.name}</h4>
            <p><strong>Tagline:</strong> {project.tagline}</p>
            <p><strong>Description:</strong> {project.description}</p>
            <p><strong>Status:</strong> {project.status || (project.flagship ? "Flagship System" : "Archive System")}</p>
            <p><strong>Categories:</strong> {project.categories.join(", ")}</p>
            {project.tech && <p><strong>Technologies:</strong> {project.tech.join(", ")}</p>}
            {project.live && <p><strong>Live Demo:</strong> <a href={project.live}>{project.live}</a></p>}
            {project.github && <p><strong>Repository:</strong> <a href={project.github}>{project.github}</a></p>}
          </article>
        ))}
      </div>
    </section>
  );
}
