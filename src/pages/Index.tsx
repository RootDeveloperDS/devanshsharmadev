import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ThemeProvider } from "@/components/portfolio/ThemeProvider";
import { AnimatedBackground } from "@/components/portfolio/AnimatedBackground";
import { TopNav } from "@/components/portfolio/TopNav";
import { CommandPalette } from "@/components/portfolio/CommandPalette";
import { OverviewTab } from "@/components/portfolio/OverviewTab";
import { ProjectsTab } from "@/components/portfolio/ProjectsTab";
import { ExperienceTab } from "@/components/portfolio/ExperienceTab";
import { TerminalTab } from "@/components/portfolio/TerminalTab";
import type { TabId } from "@/components/portfolio/data";

function PortfolioShell() {
  const [searchParams, setSearchParams] = useSearchParams();
  const active = (searchParams.get("tab") as TabId) || "overview";
  const [paletteOpen, setPaletteOpen] = useState(false);

  const handleNavigate = (id: TabId) => {
    setSearchParams({ tab: id });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <AnimatedBackground />
      <TopNav active={active} onChange={handleNavigate} onOpenPalette={() => setPaletteOpen(true)} />
      <CommandPalette onNavigate={handleNavigate} open={paletteOpen} onOpenChange={setPaletteOpen} />

      <main className="px-4 pb-24 pt-28 sm:px-6 sm:pt-32">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            {active === "overview" && <OverviewTab onNavigate={handleNavigate} />}
            {active === "projects" && <ProjectsTab />}
            {active === "experience" && <ExperienceTab />}
            {active === "terminal" && <TerminalTab />}
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="border-t border-border/60 py-6 text-center font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
        © {new Date().getFullYear()} Devansh Sharma // Compiled with intent.
      </footer>
    </div>
  );
}

const Index = () => (
  <ThemeProvider>
    <PortfolioShell />
  </ThemeProvider>
);

export default Index;
