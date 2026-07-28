import { useLocation, Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { ShieldAlert, Terminal, Home, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeProvider } from "@/components/portfolio/ThemeProvider";
import { AnimatedBackground } from "@/components/portfolio/AnimatedBackground";
import { TopNav } from "@/components/portfolio/TopNav";
import { socials } from "@/components/portfolio/data";

function NotFoundContent() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground flex flex-col justify-between">
      <AnimatedBackground />

      {/* Top Header */}
      <TopNav active="overview" onChange={() => navigate("/")} onOpenPalette={() => {}} />

      {/* Center 404 Core HUD */}
      <main className="relative z-10 flex flex-1 items-center justify-center px-4 py-24 sm:px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto w-full max-w-2xl text-center"
        >
          {/* Status Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-destructive/40 bg-destructive/10 px-3.5 py-1.5 font-mono text-xs text-destructive">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-destructive opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-destructive" />
            </span>
            <span>SYSTEM ALERT // VECTOR_404_NOT_FOUND</span>
          </div>

          {/* Glowing 404 Title */}
          <h1 className="font-display text-7xl font-black tracking-tight sm:text-9xl text-gradient drop-shadow-[0_0_35px_hsl(var(--primary)/0.3)]">
            404
          </h1>

          <h2 className="mt-2 font-display text-2xl font-bold sm:text-3xl tracking-wide text-foreground">
            Target Route Disconnected
          </h2>

          <p className="mt-3 text-sm sm:text-base text-muted-foreground max-w-lg mx-auto leading-relaxed">
            The requested vector path does not exist in the neural matrix or has been relocated.
          </p>

          {/* Terminal Console Log Box */}
          <div className="mt-8 overflow-hidden rounded-xl border border-border/80 bg-secondary/40 p-4 font-mono text-xs text-left shadow-lg backdrop-blur-md max-w-lg mx-auto">
            <div className="flex items-center gap-2 border-b border-border/50 pb-2.5 mb-3 text-muted-foreground text-[11px]">
              <ShieldAlert className="h-3.5 w-3.5 text-destructive shrink-0" />
              <span>DIAGNOSTIC TELEMETRY LOG</span>
            </div>
            <div className="space-y-1.5 font-mono text-[11px] sm:text-xs">
              <div><span className="text-muted-foreground">Target Path:</span> <span className="text-destructive font-semibold break-all">{location.pathname}</span></div>
              <div><span className="text-muted-foreground">Error Code:</span> <span className="text-primary font-semibold">HTTP_404_NOT_FOUND</span></div>
              <div><span className="text-muted-foreground">Recommended Action:</span> <span className="text-foreground">Reroute to primary portfolio matrix</span></div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-primary text-primary-foreground font-semibold shadow-lg shadow-primary/20 hover:scale-[1.02] transition-all"
            >
              <Link to="/">
                <Home className="mr-2 h-4 w-4" /> Return to Main Hub
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full border-primary/40 text-foreground hover:bg-primary/10 hover:text-foreground"
            >
              <Link to="/?tab=terminal">
                <Terminal className="mr-2 h-4 w-4" /> Open Terminal Comms
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full border-border/60 text-muted-foreground hover:text-foreground"
            >
              <a href={socials.portfolioRepo} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" /> View Repo Code
              </a>
            </Button>
          </div>
        </motion.div>
      </main>

      {/* Footer copyright */}
      <footer className="relative z-10 border-t border-border/40 py-6 text-center font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
        © {new Date().getFullYear()} Devansh Sharma // Diagnostic Subsystem Active.
      </footer>
    </div>
  );
}

const NotFound = () => (
  <ThemeProvider>
    <NotFoundContent />
  </ThemeProvider>
);

export default NotFound;
