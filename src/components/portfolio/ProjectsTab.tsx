import { motion } from "framer-motion";
import { ArrowUpRight, Github, Sparkles, Zap, Lock, Monitor, Trash2 } from "lucide-react";
import { projects } from "./data";

const spanClass: Record<string, string> = {
  lg: "md:col-span-2 md:row-span-2",
  wide: "md:col-span-2",
  tall: "md:row-span-2",
  sm: "",
};

export function ProjectsTab() {
  return (
    <section className="mx-auto max-w-6xl">
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

      <div className="grid auto-rows-[minmax(180px,auto)] gap-5 md:grid-cols-4">
        {/* VISAR EDGE — large hero tile */}
        <motion.article
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`bento-card group flex flex-col justify-between ${spanClass.lg}`}
        >
          <div>
            <div className="mb-3 flex items-center justify-between">
              <span className="rounded-full border border-primary/40 bg-primary/10 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-primary">
                ● {projects[0].status}
              </span>
              <Sparkles className="h-5 w-5 text-primary opacity-70" />
            </div>
            <h3 className="font-display text-3xl font-bold sm:text-4xl">
              <span className="text-gradient">VISAR</span> EDGE
            </h3>
            <p className="mt-1 font-mono text-xs uppercase tracking-wider text-muted-foreground">
              {projects[0].tagline}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              {projects[0].description}
            </p>
          </div>

          {/* Holographic mockup */}
          <div className="relative mt-6 overflow-hidden rounded-xl border border-border bg-background/40 p-4">
            <div className="font-mono text-[10px] text-muted-foreground">
              <div className="text-primary">› visar.context.observe()</div>
              <div className="opacity-70">  ↳ pipeline: clipboard, screen, audio</div>
              <div className="opacity-70">  ↳ latency: 42ms · zero-click</div>
              <div className="text-primary">› visar.respond(intent)</div>
              <div className="opacity-70">  ↳ ok ✓</div>
            </div>
            <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/20 blur-3xl" />
          </div>

          <div className="mt-4 flex flex-wrap gap-4">
            {projects[0].github && (
              <a
                href={projects[0].github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all"
              >
                <Github className="h-4 w-4" /> View repository
              </a>
            )}
            {projects[0].live && (
              <a
                href={projects[0].live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all"
              >
                <ArrowUpRight className="h-4 w-4" /> Live Demo
              </a>
            )}
          </div>
        </motion.article>

        {/* J.A.R.V.I.S. — wide */}
        <motion.article
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className={`bento-card group flex flex-col justify-between ${spanClass.wide}`}
        >
          <div>
            <h3 className="font-display text-xl font-bold">{projects[1].name}</h3>
            <p className="mt-1 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
              {projects[1].tagline}
            </p>
          </div>
          {/* Mark progression */}
          <div className="my-3 flex items-center gap-1">
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
          <div className="mt-2 flex flex-wrap gap-4">
            {projects[1].github && (
              <a
                href={projects[1].github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-medium text-primary hover:gap-3 transition-all"
              >
                <Github className="h-3.5 w-3.5" /> Mark 1 → 21
              </a>
            )}
            {projects[1].live && (
              <a
                href={projects[1].live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-medium text-primary hover:gap-3 transition-all"
              >
                <ArrowUpRight className="h-3.5 w-3.5" /> Live Demo
              </a>
            )}
          </div>
        </motion.article>

        {/* Neon Notes — wide */}
        <motion.article
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className={`bento-card flex flex-col justify-between ${spanClass.wide}`}
        >
          <div>
            <div className="flex items-center gap-2 text-primary">
              <Lock className="h-5 w-5" />
              <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Zero-Trust</span>
            </div>
            <h3 className="mt-3 font-display text-xl font-bold">{projects[2].name}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{projects[2].description}</p>
          </div>
          <div className="mt-4 flex gap-2">
            {["Next.js", "Firebase", "ShadCN"].map((tech) => (
              <span key={tech} className="rounded-full bg-primary/10 px-2 py-1 font-mono text-[10px] text-primary">
                {tech}
              </span>
            ))}
          </div>
          <div className="mt-4 flex flex-wrap gap-4">
            {projects[2].github && (
              <a
                href={projects[2].github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-medium text-primary hover:gap-3 transition-all"
              >
                <Github className="h-3.5 w-3.5" /> GitHub
              </a>
            )}
            {projects[2].live && (
              <a
                href={projects[2].live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-medium text-primary hover:gap-3 transition-all"
              >
                <ArrowUpRight className="h-3.5 w-3.5" /> Live Product
              </a>
            )}
          </div>
        </motion.article>

        {/* Workflow Automation — tall */}
        <motion.article
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className={`bento-card flex flex-col justify-between ${spanClass.tall}`}
        >
          <div>
            <Zap className="h-6 w-6 text-primary" />
            <h3 className="mt-3 font-display text-xl font-bold">{projects[3].name}</h3>
            <p className="mt-3 text-sm text-muted-foreground">{projects[3].description}</p>
          </div>
          <div className="mt-4 space-y-1.5 font-mono text-[10px] text-muted-foreground">
            <div>› optimize.fs()</div>
            <div>› batch.transform()</div>
            <div>› schedule.cron()</div>
          </div>
        </motion.article>

        {/* Viewport Detective — wide */}
        <motion.article
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className={`bento-card flex flex-col justify-between ${spanClass.wide}`}
        >
          <div>
            <Monitor className="h-6 w-6 text-primary" />
            <h3 className="mt-3 font-display text-xl font-bold">{projects[4].name}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{projects[4].description}</p>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {["Next.js 14", "TypeScript", "Tailwind"].map((tech) => (
              <span key={tech} className="rounded-full bg-primary/10 px-2 py-1 font-mono text-[10px] text-primary">
                {tech}
              </span>
            ))}
          </div>
          <div className="mt-4 flex flex-wrap gap-4">
            {projects[4].github && (
              <a
                href={projects[4].github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-medium text-primary hover:gap-3 transition-all"
              >
                <Github className="h-3.5 w-3.5" /> GitHub
              </a>
            )}
            {projects[4].live && (
              <a
                href={projects[4].live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-medium text-primary hover:gap-3 transition-all"
              >
                <ArrowUpRight className="h-3.5 w-3.5" /> Live Demo
              </a>
            )}
          </div>
        </motion.article>

        {/* Stats tile */}
        <motion.article
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
          className="bento-card flex flex-col justify-center"
        >
          <p className="font-mono text-[10px] uppercase tracking-widest text-primary">// metrics</p>
          <div className="mt-3 grid grid-cols-3 gap-2 text-center">
            {[
              { k: "21", v: "iterations" },
              { k: "100%", v: "Python" },
              { k: "0", v: "manual" },
            ].map((m) => (
              <div key={m.v}>
                <div className="font-display text-2xl font-bold text-gradient">{m.k}</div>
                <div className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground">
                  {m.v}
                </div>
              </div>
            ))}
          </div>
        </motion.article>

        {/* WDC — wide */}
        <motion.article
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className={`bento-card flex flex-col justify-between ${spanClass.wide}`}
        >
          <div>
            <Trash2 className="h-6 w-6 text-primary" />
            <h3 className="mt-3 font-display text-xl font-bold">{projects[5].name}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{projects[5].description}</p>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {["Python 3", "Tkinter", "PyInstaller"].map((tech) => (
              <span key={tech} className="rounded-full bg-primary/10 px-2 py-1 font-mono text-[10px] text-primary">
                {tech}
              </span>
            ))}
          </div>
          <div className="mt-4 flex flex-wrap gap-4">
            {projects[5].github && (
              <a
                href={projects[5].github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-medium text-primary hover:gap-3 transition-all"
              >
                <Github className="h-3.5 w-3.5" /> GitHub
              </a>
            )}
            {projects[5].live && (
              <a
                href={projects[5].live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-medium text-primary hover:gap-3 transition-all"
              >
                <ArrowUpRight className="h-3.5 w-3.5" /> Download
              </a>
            )}
          </div>
        </motion.article>

        {/* What's next */}
        <motion.article
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35 }}
          className="bento-card flex flex-col justify-between"
        >
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-primary">// next</p>
            <h4 className="mt-2 font-display text-lg font-bold">More incoming.</h4>
            <p className="mt-2 text-xs text-muted-foreground">
              Always shipping. Watch the GitHub for the next system.
            </p>
          </div>
          <a
            href="https://github.com/RootDeveloperDS"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-primary"
          >
            Follow <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </motion.article>
      </div>
    </section>
  );
}
