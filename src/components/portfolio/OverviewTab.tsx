import { motion } from "framer-motion";
import { Download, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile } from "./data";
import { HeroAvatar } from "./HeroAvatar";
import type { TabId } from "./data";

interface Props {
  onNavigate: (id: TabId) => void;
}

export function OverviewTab({ onNavigate }: Props) {
  return (
    <section className="mx-auto max-w-6xl">
      {/* Status strip */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground sm:text-xs"
      >
        <span className="inline-flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          STATUS: <span className="text-foreground">{profile.status.state}</span>
        </span>
        <span className="opacity-40">•</span>
        <span>LOCATION: <span className="text-foreground">{profile.status.location}</span></span>
        <span className="opacity-40">•</span>
        <span>BUILDING: <span className="text-foreground">{profile.status.building}</span></span>
      </motion.div>

      <div className="grid items-center gap-12 lg:grid-cols-[1.3fr_1fr]">
        {/* Left: copy */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-primary"
          >
            // {profile.title}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl font-black leading-[1.05] sm:text-6xl lg:text-7xl"
          >
            <span className="text-gradient">Building AI Systems</span>
            <br />
            <span className="text-foreground">That Evolve.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg"
          >
            {profile.subheadline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Button asChild size="lg" className="rounded-full">
              <a href={profile.resumeUrl} download>
                <Download /> Download Résumé
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full border-primary/40 text-foreground hover:bg-primary/10 hover:text-foreground"
              onClick={() => onNavigate("terminal")}
            >
              <Terminal /> Initialize Terminal
            </Button>
          </motion.div>
        </div>

        {/* Right: avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.15, type: "spring", stiffness: 120, damping: 18 }}
        >
          <HeroAvatar />
        </motion.div>
      </div>

      {/* About + Philosophy */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="mt-20 grid gap-6 md:grid-cols-[1.5fr_1fr]"
      >
        <div className="bento-card">
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary">
            // about.md
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            {profile.about}
          </p>
        </div>
        <div className="bento-card flex flex-col justify-center">
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary">
            // philosophy
          </p>
          <p className="mt-4 font-display text-2xl font-bold leading-tight text-foreground">
            "{profile.philosophy}"
          </p>
        </div>
      </motion.div>
    </section>
  );
}
