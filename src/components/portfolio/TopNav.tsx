import { motion } from "framer-motion";
import { Command, Hexagon } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { tabs, type TabId } from "./data";

interface Props {
  active: TabId;
  onChange: (id: TabId) => void;
  onOpenPalette: () => void;
}

export function TopNav({ active, onChange, onOpenPalette }: Props) {
  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <div className="mx-auto mt-3 flex max-w-6xl items-center justify-between gap-4 rounded-full glass px-4 py-2 md:px-5">
        {/* Brand */}
        <button
          onClick={() => onChange("overview")}
          className="flex items-center gap-2 group"
          aria-label="Devansh Sharma — home"
        >
          <span className="relative grid h-8 w-8 place-items-center">
            <Hexagon className="absolute h-8 w-8 text-primary opacity-90" />
            <span className="font-display text-[10px] font-bold tracking-wider text-primary">DS</span>
          </span>
          <span className="hidden font-display text-sm font-semibold tracking-widest text-foreground sm:inline">
            DEVANSH<span className="text-primary">.</span>SHARMA
          </span>
        </button>

        {/* Tabs */}
        <nav className="flex items-center gap-1 rounded-full bg-secondary/40 p-1">
          {tabs.map((t) => {
            const isActive = active === t.id;
            return (
              <button
                key={t.id}
                onClick={() => onChange(t.id)}
                className="relative px-3 py-1.5 text-xs font-medium tracking-wide md:text-sm"
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
                    isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <span className="hidden sm:inline">{t.label}</span>
                  <span className="sm:hidden font-mono">{t.mono}</span>
                </span>
              </button>
            );
          })}
        </nav>

        {/* Right cluster */}
        <div className="flex items-center gap-2">
          <button
            onClick={onOpenPalette}
            className="hidden items-center gap-2 rounded-full border border-border bg-secondary/40 px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:text-foreground md:inline-flex"
            aria-label="Open command palette"
          >
            <Command className="h-3.5 w-3.5" />
            <span className="font-mono">⌘K</span>
          </button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
