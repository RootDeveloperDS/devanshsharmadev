import { motion } from "framer-motion";
import { Cpu } from "lucide-react";
import { experience, techStack } from "./data";

const ringConfig = [
  { items: techStack.languages, radius: 80, duration: 28, label: "Languages" },
  { items: techStack.frameworks, radius: 130, duration: 42, label: "Frameworks" },
  { items: techStack.ai, radius: 185, duration: 60, label: "AI / ML" },
];

export function ExperienceTab() {
  return (
    <section className="mx-auto max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10"
      >
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">
          // trajectory
        </p>
        <h2 className="mt-2 font-display text-3xl font-bold sm:text-5xl">
          Experience & <span className="text-gradient">Tech Ecosystem</span>
        </h2>
      </motion.div>

      <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr]">
        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-3 top-2 h-full w-px bg-gradient-to-b from-primary via-primary/40 to-transparent" />
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative pl-10"
          >
            <div className="absolute left-0 top-1.5 grid h-7 w-7 place-items-center rounded-full border border-primary/50 bg-background">
              <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_12px_hsl(var(--primary))]" />
            </div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-primary">
              {experience.period}
            </p>
            <h3 className="mt-1 font-display text-2xl font-bold">{experience.role}</h3>
            <p className="text-sm text-muted-foreground">{experience.company}</p>

            <ul className="mt-5 space-y-4">
              {experience.bullets.map((b, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.08 }}
                  className="bento-card !p-4 text-sm leading-relaxed text-muted-foreground"
                >
                  <span className="mr-2 font-mono text-[10px] text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {b}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Tech Ecosystem */}
        <div className="relative min-w-0">
          <div className="bento-card overflow-hidden relative min-w-0">
            <div className="mb-6 flex items-center justify-between">
              <p className="font-mono text-[10px] uppercase tracking-widest text-primary">
                // stack.telemetry_stream
              </p>
              <Cpu className="h-5 w-5 text-primary/50" />
            </div>

            {/* Dense Terminal Matrix Visualization */}
            <div className="relative flex w-full flex-col gap-6 overflow-y-auto max-h-[400px] pr-2 custom-scrollbar">
              <style>{`
                .custom-scrollbar::-webkit-scrollbar {
                  width: 4px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                  background: transparent;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                  background: hsl(var(--primary) / 0.3);
                  border-radius: 4px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                  background: hsl(var(--primary) / 0.6);
                }
              `}</style>

              {ringConfig.map((ring) => (
                <div key={ring.label} className="flex flex-col gap-3 relative z-0 w-full">
                  <div className="flex items-center gap-3 px-1">
                    <span className="h-px w-8 bg-primary/30" />
                    <p className="font-mono text-[10px] uppercase tracking-widest text-primary/70">
                      {ring.label}
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 px-1">
                    {ring.items.map((item, i) => (
                      <span
                        key={`${item}-${i}`}
                        className="rounded-md border border-primary/20 bg-background/50 px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider text-foreground/80 backdrop-blur transition-all hover:border-primary hover:text-primary hover:bg-primary/10 hover:shadow-[0_0_15px_rgba(var(--primary-rgb),0.2)] cursor-default"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Concepts */}
            <div className="mt-8 border-t border-border/50 pt-5 relative z-20">
              <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-4">
                System Architecture & Concepts
              </p>
              <div className="flex flex-wrap gap-2">
                {techStack.concepts.map((c) => (
                  <span
                    key={c}
                    className="rounded-md bg-primary/10 border border-primary/20 px-3 py-1.5 font-mono text-[11px] text-primary"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
