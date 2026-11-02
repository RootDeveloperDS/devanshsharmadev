import { useEffect, useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ThemeProvider } from "@/components/portfolio/ThemeProvider";
import { AnimatedBackground } from "@/components/portfolio/AnimatedBackground";
import { TopNav } from "@/components/portfolio/TopNav";
import { CommandPalette } from "@/components/portfolio/CommandPalette";
import { OverviewTab } from "@/components/portfolio/OverviewTab";
import { ProjectsTab } from "@/components/portfolio/ProjectsTab";
import { ExperienceTab } from "@/components/portfolio/ExperienceTab";
import { TerminalTab } from "@/components/portfolio/TerminalTab";
import { Footer } from "@/components/portfolio/Footer";
import type { TabId } from "@/components/portfolio/data";
import { VisarAgentButton } from "@/components/portfolio/VisarAgentButton";
import { sendTelegramNotification } from "@/lib/telegram";
import { applyRouteSEO } from "@/lib/seo";

interface IndexProps {
  defaultTab?: TabId;
}

const VALID_TABS: TabId[] = ["overview", "projects", "experience", "terminal"];

function PortfolioShell({ defaultTab = "overview" }: IndexProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  // Clean raw path from URL (e.g. "/projects" -> "projects")
  const rawPath = location.pathname.replace(/^\/+|\/+$/g, "");
  const pathTab = VALID_TABS.find((t) => t === rawPath);
  const queryTab = VALID_TABS.find((t) => t === searchParams.get("tab"));

  // Hierarchy: Pathname > Query Param > Default Prop > Fallback
  const active: TabId = pathTab || queryTab || defaultTab || "overview";
  const [paletteOpen, setPaletteOpen] = useState(false);

  useEffect(() => {
    sendTelegramNotification("Entered Portfolio", {
      initialTab: active,
      pathname: location.pathname,
      search: location.search,
    });
  }, []);

  // Synchronize dynamic SEO metadata on active tab transition
  useEffect(() => {
    applyRouteSEO(active);
  }, [active]);

  const handleNavigate = (id: TabId) => {
    if (id !== active) {
      sendTelegramNotification("Navigated Tab", { from: active, to: id });
    }

    // Preserve non-tab query parameters when appropriate
    const params = new URLSearchParams(searchParams);
    params.delete("tab");
    if (id !== "projects") {
      params.delete("project");
      params.delete("category");
    }

    const queryStr = params.toString() ? `?${params.toString()}` : "";
    const targetPath = id === "overview" ? `/${queryStr}` : `/${id}${queryStr}`;

    navigate(targetPath);
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

      <Footer onNavigate={handleNavigate} />

      <VisarAgentButton />
    </div>
  );
}

const Index = ({ defaultTab = "overview" }: IndexProps) => (
  <ThemeProvider>
    <PortfolioShell defaultTab={defaultTab} />
  </ThemeProvider>
);

export default Index;
