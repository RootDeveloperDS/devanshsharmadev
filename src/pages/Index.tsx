import { Suspense, lazy, useCallback, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ThemeProvider } from "@/components/portfolio/ThemeProvider";
import { AnimatedBackground } from "@/components/portfolio/AnimatedBackground";
import { TopNav } from "@/components/portfolio/TopNav";
import { CommandPalette } from "@/components/portfolio/CommandPalette";
import { OverviewTab } from "@/components/portfolio/OverviewTab";
import { Footer } from "@/components/portfolio/Footer";
import type { TabId } from "@/components/portfolio/data";
import { VisarAgentButton } from "@/components/portfolio/VisarAgentButton";
import { sendTelegramNotification } from "@/lib/telegram";

const ProjectsTab = lazy(() => import("@/components/portfolio/ProjectsTab").then(m => ({ default: m.ProjectsTab })));
const ExperienceTab = lazy(() => import("@/components/portfolio/ExperienceTab").then(m => ({ default: m.ExperienceTab })));
const TerminalTab = lazy(() => import("@/components/portfolio/TerminalTab").then(m => ({ default: m.TerminalTab })));

function PortfolioShell() {
  const [searchParams, setSearchParams] = useSearchParams();
  const active = (searchParams.get("tab") as TabId) || "overview";
  const [paletteOpen, setPaletteOpen] = useState(false);

  useEffect(() => {
    sendTelegramNotification("Entered Portfolio", { initialTab: active });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ⚡ Bolt: Memoize navigation handler so it has a stable reference across renders
  const handleNavigate = useCallback((id: TabId) => {
    if (id !== active) {
      sendTelegramNotification("Navigated Tab", { from: active, to: id });
    }
    setSearchParams({ tab: id });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [active, setSearchParams]);

  // ⚡ Bolt: Memoize palette toggle to prevent top navigation re-renders
  const handleOpenPalette = useCallback(() => {
    setPaletteOpen(true);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <AnimatedBackground />
      <TopNav active={active} onChange={handleNavigate} onOpenPalette={handleOpenPalette} />
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
            <Suspense fallback={<div className="h-[50vh] flex items-center justify-center font-mono text-sm text-primary animate-pulse">loading payload...</div>}>
              {active === "overview" && <OverviewTab onNavigate={handleNavigate} />}
              {active === "projects" && <ProjectsTab />}
              {active === "experience" && <ExperienceTab />}
              {active === "terminal" && <TerminalTab />}
            </Suspense>
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer onNavigate={handleNavigate} />

      <VisarAgentButton />
    </div>
  );
}

const Index = () => (
  <ThemeProvider>
    <PortfolioShell />
  </ThemeProvider>
);

export default Index;
