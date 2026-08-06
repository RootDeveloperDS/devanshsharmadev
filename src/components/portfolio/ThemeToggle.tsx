import { motion } from "framer-motion";
import { Cpu, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isVisar = theme === "visar";

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${isVisar ? "Executive" : "VISAR"} mode`}
      title={`${isVisar ? "VISAR" : "EXECUTIVE"} MODE`}
      className="relative inline-flex h-8 w-16 items-center rounded-full border border-border bg-secondary/50 backdrop-blur transition-colors hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ring-offset-background"
    >
      <motion.span
        layout
        transition={{ type: "spring", stiffness: 500, damping: 32 }}
        className={`absolute top-1 h-6 w-6 rounded-full bg-primary text-primary-foreground shadow-md flex items-center justify-center ${
          isVisar ? "left-1" : "left-9"
        }`}
      >
        {isVisar ? <Cpu className="h-3.5 w-3.5" /> : <Sun className="h-3.5 w-3.5" />}
      </motion.span>
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
