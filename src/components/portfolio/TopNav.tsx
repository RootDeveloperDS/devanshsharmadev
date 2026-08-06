import { motion } from "framer-motion";
import { Command, Hexagon, Github } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { tabs, socials, type TabId } from "./data";
import { sendTelegramNotification } from "@/lib/telegram";

interface Props {
  active: TabId;
  onChange: (id: TabId) => void;
  onOpenPalette: () => void;
}

export function TopNav({ active, onChange, onOpenPalette }: Props) {
  return (
    <header className="fixed inset-x-0 top-0 z-40 px-2 sm:px-4">
      <div className="mx-auto mt-2 sm:mt-3 flex max-w-6xl items-center justify-between gap-1 sm:gap-3 rounded-full glass px-2 py-1.5 sm:px-4 sm:py-2">
        {/* Brand */}
        <button
          onClick={() => onChange("overview")}
          className="flex items-center gap-1.5 sm:gap-2 group shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ring-offset-background rounded-full p-1"
          aria-label="Devansh Sharma — home"
        >
          <span className="relative grid h-7 w-7 sm:h-8 sm:w-8 place-items-center">
            <Hexagon className="absolute h-7 w-7 sm:h-8 sm:w-8 text-primary opacity-90 transition-transform group-hover:rotate-12" />
            <span className="font-display text-[9px] sm:text-[10px] font-bold tracking-wider text-primary">DS</span>
          </span>
          <span className="hidden font-display text-xs sm:text-sm font-semibold tracking-widest text-foreground sm:inline">
            DEVANSH<span className="text-primary">.</span>SHARMA
          </span>
        </button>

        {/* Tabs Navigation */}
        <nav className="flex items-center gap-0.5 sm:gap-1 rounded-full bg-secondary/40 p-0.5 sm:p-1 shrink-0">
          {tabs.map((t) => {
            const isActive = active === t.id;
            return (
              <button
                key={t.id}
                onClick={() => onChange(t.id)}
                className="relative px-2 py-1 sm:px-3 sm:py-1.5 text-xs font-medium tracking-wide focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ring-offset-background rounded-full"
                aria-current={isActive ? "page" : undefined}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeTab"
                    transition={{ type: "spring", stiffness: 500, damping: 32 }}
                    className="absolute inset-0 rounded-full bg-primary/15 ring-1 ring-primary/40"
                  />
                )}
                <span
                  className={`relative font-display ${
                    isActive ? "text-foreground font-semibold" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <span className="hidden sm:inline">{t.label}</span>
                  <span className="sm:hidden font-mono text-[11px] px-0.5">{t.mono}</span>
                </span>
              </button>
            );
          })}
        </nav>

        {/* Right cluster */}
        <div className="flex items-center gap-1 sm:gap-2 shrink-0">
          {/* Dominant Open Source Repo Button */}
          <a
            href={socials.portfolioRepo}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => sendTelegramNotification("Clicked Open Source Button (TopNav)", { repo: socials.portfolioRepo })}
            className="inline-flex items-center gap-1 rounded-full border border-primary/40 bg-primary/10 p-1.5 sm:px-2.5 sm:py-1 text-xs font-medium text-primary shadow-sm hover:bg-primary/20 hover:border-primary transition-all duration-200"
            title="Portfolio is 100% Open Source — View on GitHub"
          >
            <Github className="h-3.5 w-3.5" />
            <span className="hidden md:inline font-mono font-semibold text-[11px]">Open Source</span>
            <span className="hidden sm:inline md:hidden font-mono text-[10px] font-bold">Code</span>
          </a>

          {/* Command Palette Button */}
          <button
            onClick={onOpenPalette}
            className="flex items-center justify-center h-7 w-7 sm:h-auto sm:w-auto sm:gap-2 rounded-full border border-border bg-secondary/40 sm:px-3 sm:py-1.5 text-xs text-muted-foreground transition-colors hover:text-foreground hover:border-primary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ring-offset-background"
            aria-label="Open command palette (Press Cmd/Ctrl+K)"
          >
            <Command className="h-3.5 w-3.5" />
            <span className="hidden sm:inline font-mono text-[11px]">⌘K</span>
          </button>

          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
