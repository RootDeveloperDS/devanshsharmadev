import { motion } from "framer-motion";
import { toast } from "sonner";

// Optimize GitHub image URL for faster CDN delivery
function optimizeImage(url: string | undefined) {
  if (!url) return url;
  if (url.includes("github.com") && url.includes("/blob/main/")) {
    return url
      .replace("https://github.com/", "https://cdn.jsdelivr.net/gh/")
      .replace("/blob/main/", "@main/")
      .split("?")[0];
  }
  return url;
}

const VISAR_LOGO_URL =
  "https://github.com/RootDeveloperDS/CDN/blob/main/logos/visar-edge-v1.png?raw=true";

export function VisarAgentButton() {
  const optimizedUrl = optimizeImage(VISAR_LOGO_URL);

  const handleClick = () => {
    toast("VISAR AI Agent is coming soon!", {
      description: "Stay tuned for intelligent assistance.",
    });
  };

  return (
    <motion.button
      onClick={handleClick}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-background/50 shadow-lg backdrop-blur-md border border-border hover:shadow-xl transition-shadow group"
      aria-label="VISAR AI Agent"
    >
      <img
        src={optimizedUrl}
        alt="VISAR AI Agent"
        className="h-10 w-10 object-contain drop-shadow-sm group-hover:drop-shadow-md transition-all duration-300"
        loading="eager"
        fetchpriority="high"
      />
      {/* Pulsing indicator dot */}
      <span className="absolute right-0 top-0 flex h-3.5 w-3.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/60 opacity-75"></span>
        <span className="relative inline-flex h-3.5 w-3.5 rounded-full bg-primary border-2 border-background"></span>
      </span>
    </motion.button>
  );
}
