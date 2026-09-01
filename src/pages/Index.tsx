import { Suspense, lazy, useCallback, useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ThemeProvider } from "@/components/portfolio/ThemeProvider";
import { AnimatedBackground } from "@/components/portfolio/AnimatedBackground";
import { TopNav } from "@/components/portfolio/TopNav";
import { CommandPalette } from "@/components/portfolio/CommandPalette";
import { OverviewTab } from "@/components/portfolio/OverviewTab";
import { Footer } from "@/components/portfolio/Footer";
import type { TabId } from "@/components/portfolio/data";
import { VisarAgentButton } from "@/components/portfolio/VisarAgentButton";
import { SEO } from "@/components/portfolio/SEO";
import { sendTelegramNotification } from "@/lib/telegram";

const ProjectsTab = lazy(() => import("@/components/portfolio/ProjectsTab").then(m => ({ default: m.ProjectsTab })));
const ExperienceTab = lazy(() => import("@/components/portfolio/ExperienceTab").then(m => ({ default: m.ExperienceTab })));
const TerminalTab = lazy(() => import("@/components/portfolio/TerminalTab").then(m => ({ default: m.TerminalTab })));

function getTabFromPath(pathname: string): TabId {
  const cleanPath = pathname.replace(/\/$/, "");
  if (cleanPath === "/projects") return "projects";
  if (cleanPath === "/experience") return "experience";
  if (cleanPath === "/terminal") return "terminal";
  return "overview";
}

function PortfolioShell() {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [paletteOpen, setPaletteOpen] = useState(false);

  // Derive active tab from current URL path
  const active: TabId = useMemo(() => getTabFromPath(location.pathname), [location.pathname]);

  // Auto-redirect legacy query parameter links (?tab=projects) to clean routes (/projects)
  const legacyTab = searchParams.get("tab") as TabId | null;
  useEffect(() => {
    if (legacyTab && ["overview", "projects", "experience", "terminal"].includes(legacyTab)) {
      const targetPath = legacyTab === "overview" ? "/" : `/${legacyTab}`;
      if (location.pathname !== targetPath) {
        navigate(targetPath, { replace: true });
      }
    }
  }, [legacyTab, location.pathname, navigate]);

  useEffect(() => {
    sendTelegramNotification("Entered Portfolio", { initialTab: active, pathname: location.pathname });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Memoized navigation handler updating URL path smoothly
  const handleNavigate = useCallback(
    (id: TabId) => {
      if (id !== active) {
        sendTelegramNotification("Navigated Tab", { from: active, to: id });
      }
      const targetPath = id === "overview" ? "/" : `/${id}`;
      if (location.pathname !== targetPath) {
        navigate(targetPath);
      }
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    [active, location.pathname, navigate]
  );

  const handleOpenPalette = useCallback(() => {
    setPaletteOpen(true);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Dynamic SEO, Meta Tags, Canonical URL & Breadcrumb Schema */}
      <SEO tab={active} />

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
