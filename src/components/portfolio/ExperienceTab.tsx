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

        {/* Tech orbit */}
        <div className="relative">
          <div className="bento-card overflow-visible">
            <p className="font-mono text-[10px] uppercase tracking-widest text-primary">
              // stack.orbit
            </p>

            {/* Orbit visualization */}
            <div className="relative mx-auto my-6 hidden aspect-square w-full max-w-md md:block">
              {/* Core */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="relative grid h-16 w-16 place-items-center rounded-2xl border border-primary/40 bg-card shadow-[0_0_30px_hsl(var(--primary)/0.5)]">
                  <Cpu className="h-7 w-7 text-primary" />
                </div>
              </div>

              {ringConfig.map((ring) => (
                <div
                  key={ring.label}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-border"
                  style={{
                    width: ring.radius * 2,
                    height: ring.radius * 2,
                  }}
                >
                  <div
                    className="absolute inset-0"
                    style={{ animation: `orbit ${ring.duration}s linear infinite` }}
                  >
                    {ring.items.map((item, i) => {
                      const angle = (i / ring.items.length) * 360;
                      return (
                        <div
                          key={item}
                          className="absolute left-1/2 top-1/2"
                          style={{
                            transform: `rotate(${angle}deg) translateY(-${ring.radius}px) rotate(-${angle}deg)`,
                          }}
                        >
                          <div
                            className="-translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full border border-primary/30 bg-card/80 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-foreground backdrop-blur transition-all hover:border-primary hover:text-primary"
                            style={{ animation: `orbit ${ring.duration}s linear infinite reverse` }}
                          >
                            {item}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile fallback grid */}
            <div className="md:hidden mt-4 space-y-4">
              {ringConfig.map((ring) => (
                <div key={ring.label}>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-2">
                    {ring.label}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {ring.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-primary/30 bg-card/80 px-3 py-1 font-mono text-[10px] uppercase tracking-wider"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Concepts */}
            <div className="mt-6 border-t border-border pt-5">
              <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-3">
                System Concepts
              </p>
              <div className="flex flex-wrap gap-2">
                {techStack.concepts.map((c) => (
                  <span
                    key={c}
                    className="rounded-md bg-secondary px-2.5 py-1 font-mono text-[11px] text-secondary-foreground"
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
