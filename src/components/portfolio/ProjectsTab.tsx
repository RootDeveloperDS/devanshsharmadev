import { motion } from "framer-motion";
import { ArrowUpRight, Github, Sparkles, Zap } from "lucide-react";
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

      <div className="grid auto-rows-[180px] gap-5 md:grid-cols-4">
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

          <a
            href={projects[0].link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 self-start text-sm font-medium text-primary hover:gap-3 transition-all"
          >
            <Github className="h-4 w-4" />
            View repository <ArrowUpRight className="h-4 w-4" />
          </a>
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
          <a
            href={projects[1].link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center gap-2 self-start text-xs font-medium text-primary hover:gap-3 transition-all"
          >
            <Github className="h-3.5 w-3.5" /> Mark 1 → 21 <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </motion.article>

        {/* Workflow Automation — tall */}
        <motion.article
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className={`bento-card flex flex-col justify-between ${spanClass.tall}`}
        >
          <div>
            <Zap className="h-6 w-6 text-primary" />
            <h3 className="mt-3 font-display text-xl font-bold">{projects[2].name}</h3>
            <p className="mt-3 text-sm text-muted-foreground">{projects[2].description}</p>
          </div>
          <div className="mt-4 space-y-1.5 font-mono text-[10px] text-muted-foreground">
            <div>› optimize.fs()</div>
            <div>› batch.transform()</div>
            <div>› schedule.cron()</div>
          </div>
        </motion.article>

        {/* Stats tile */}
        <motion.article
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
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

        {/* What's next */}
        <motion.article
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
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
