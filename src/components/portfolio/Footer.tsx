import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Twitter,
  Send,
  Mail,
  Globe,
  Instagram,
  MessageCircle,
  MessageSquare,
  BrainCircuit,
  FileText,
  Code2,
  Trophy,
  Layers,
  Sparkles,
  User,
  FolderGit2,
  ExternalLink,
  Star,
  GitFork,
  Hexagon,
  ArrowUpRight,
  Terminal,
  FileDown,
  Eye
} from "lucide-react";
import { profile, socials, socialItems, tabs, type TabId } from "./data";
import { Button } from "@/components/ui/button";
import { useTheme } from "./ThemeProvider";

interface FooterProps {
  onNavigate: (id: TabId) => void;
}

// Icon mapper helper
function renderSocialIcon(iconName: string, className: string = "h-4 w-4") {
  switch (iconName) {
    case "FolderGit2": return <FolderGit2 className={className} />;
    case "Github": return <Github className={className} />;
    case "BrainCircuit": return <BrainCircuit className={className} />;
    case "Linkedin": return <Linkedin className={className} />;
    case "Mail": return <Mail className={className} />;
    case "Globe": return <Globe className={className} />;
    case "Twitter": return <Twitter className={className} />;
    case "Send": return <Send className={className} />;
    case "MessageSquare": return <MessageSquare className={className} />;
    case "Instagram": return <Instagram className={className} />;
    case "MessageCircle": return <MessageCircle className={className} />;
    case "FileText": return <FileText className={className} />;
    case "Code2": return <Code2 className={className} />;
    case "Trophy": return <Trophy className={className} />;
    case "Layers": return <Layers className={className} />;
    case "Sparkles": return <Sparkles className={className} />;
    case "User": return <User className={className} />;
    default: return <ExternalLink className={className} />;
  }
}

export function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const { theme } = useTheme();

  const isLight = theme === "executive";
  const snakeSvgUrl = isLight
    ? "https://raw.githubusercontent.com/RootDeveloperDS/RootDeveloperDS/output/github-contribution-grid-snake.svg"
    : "https://raw.githubusercontent.com/RootDeveloperDS/RootDeveloperDS/output/github-contribution-grid-snake-dark.svg";

  // Group social items by category
  const categories = [
    "Code & AI",
    "Professional",
    "Social & Chat",
    "Writing & Dev",
    "Bio & Portfolios"
  ] as const;

  return (
    <footer className="relative border-t border-border/80 bg-background/80 backdrop-blur-xl pt-12 pb-8 overflow-hidden z-20">
      {/* Sci-fi top ambient line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">

        {/* ------------------------------------------------------------- */}
        {/* DOMINANT OPEN SOURCE PORTFOLIO CALLOUT BANNER                 */}
        {/* ------------------------------------------------------------- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative mb-12 overflow-hidden rounded-2xl border border-primary/40 bg-gradient-to-r from-primary/10 via-secondary/40 to-primary/5 p-6 sm:p-8 backdrop-blur-md shadow-lg shadow-primary/5"
        >
          {/* Subtle grid background pattern */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(hsl(var(--primary))_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-mono font-medium text-primary">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                </span>
                100% OPEN SOURCE PORTFOLIO
              </div>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-foreground tracking-tight">
                Inspect, Fork & Contribute to This Portfolio Codebase
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Built with React, Vite, Framer Motion, and Tailwind CSS. Explore the modular component matrix, scifi design tokens, and clean architectural patterns directly on GitHub.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0 w-full sm:w-auto">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto rounded-full bg-primary text-primary-foreground font-semibold shadow-lg shadow-primary/20 hover:bg-primary/90 hover:scale-[1.02] transition-all"
              >
                <a
                  href={socials.portfolioRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2"
                >
                  <Github className="h-5 w-5" />
                  <span>Star & View Repo</span>
                  <ArrowUpRight className="h-4 w-4 opacity-80" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full sm:w-auto rounded-full border-primary/30 text-foreground hover:bg-primary/10 hover:text-foreground"
              >
                <a
                  href={`${socials.portfolioRepo}/fork`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2"
                >
                  <GitFork className="h-4 w-4" />
                  <span>Fork Codebase</span>
                </a>
              </Button>
            </div>
          </div>

          {/* GitHub Snake Stream Preview in Footer */}
          <div className="relative z-10 mt-6 pt-5 border-t border-border/40 overflow-hidden">
            <div className="flex items-center justify-between text-[11px] font-mono text-muted-foreground mb-2">
              <span className="text-primary font-semibold">// LIVE CONTRIBUTION ACTIVITY</span>
              <span>github.com/RootDeveloperDS</span>
            </div>
            <div className="overflow-x-auto rounded-lg border border-border/60 bg-background/50 p-2 backdrop-blur-sm">
              <img
                src={snakeSvgUrl}
                alt="GitHub Contribution Snake Stream"
                className="w-full min-w-[600px] h-auto object-contain transition-opacity duration-300"
                loading="lazy"
              />
            </div>
          </div>
        </motion.div>

        {/* ------------------------------------------------------------- */}
        {/* MAIN FOOTER GRID (Brand, Quick Nav, Primary Links)             */}
        {/* ------------------------------------------------------------- */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-12">

          {/* BRAND COLUMN (4 cols) */}
          <div className="md:col-span-5 space-y-4">
            <button
              onClick={() => onNavigate("overview")}
              className="flex items-center gap-2.5 group text-left"
              aria-label="Devansh Sharma Home"
            >
              <span className="relative grid h-9 w-9 place-items-center">
                <Hexagon className="absolute h-9 w-9 text-primary opacity-90 transition-transform group-hover:rotate-12" />
                <span className="font-display text-xs font-bold tracking-wider text-primary">DS</span>
              </span>
              <div className="flex flex-col">
                <span className="font-display text-base font-bold tracking-widest text-foreground">
                  DEVANSH<span className="text-primary">.</span>SHARMA
                </span>
                <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
                  Full Stack AI Architect
                </span>
              </div>
            </button>

            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              {profile.subheadline}
            </p>

            {/* Status & Tech tags */}
            <div className="flex flex-wrap items-center gap-2 pt-1 font-mono text-[11px] text-muted-foreground">
              <span className="inline-flex items-center gap-1.5 rounded-md border border-border bg-secondary/50 px-2.5 py-1">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                <span>{profile.status.state}</span>
              </span>
              <span className="inline-flex items-center gap-1 rounded-md border border-border bg-secondary/50 px-2.5 py-1">
                <span>LOC: {profile.status.location}</span>
              </span>
              <span className="inline-flex items-center gap-1 rounded-md border border-primary/20 bg-primary/5 px-2.5 py-1 text-primary">
                <span>BUILDING: {profile.status.building}</span>
              </span>
            </div>
          </div>

          {/* NAVIGATION LINKS (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-primary font-semibold">
              // Navigation
            </h4>
            <ul className="space-y-2 text-sm font-medium">
              {tabs.map((t) => (
                <li key={t.id}>
                  <button
                    onClick={() => onNavigate(t.id)}
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-xs sm:text-sm group"
                  >
                    <span className="font-mono text-[10px] text-primary/60 group-hover:text-primary">
                      {t.mono}
                    </span>
                    <span>{t.label}</span>
                  </button>
                </li>
              ))}
              <li className="pt-1">
                <a
                  href={profile.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Eye className="h-3.5 w-3.5 text-primary" />
                  <span>View Résumé</span>
                </a>
              </li>
              <li>
                <a
                  href={profile.resumeUrl}
                  download
                  className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <FileDown className="h-3.5 w-3.5 text-primary" />
                  <span>Download Résumé</span>
                </a>
              </li>
            </ul>
          </div>

          {/* QUICK DIRECT CONTACT (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-primary font-semibold">
              // Direct Reach
            </h4>
            <div className="space-y-2 font-mono text-xs">
              <a
                href={`mailto:${socials.email}`}
                className="flex items-center justify-between gap-2 rounded-xl border border-border bg-secondary/30 p-3 hover:border-primary/50 hover:bg-secondary/60 transition-all text-foreground group"
              >
                <div className="flex items-center gap-2.5 truncate">
                  <Mail className="h-4 w-4 text-primary shrink-0" />
                  <span className="truncate text-xs">{socials.email}</span>
                </div>
                <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
              </a>

              <a
                href={socials.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-2 rounded-xl border border-border bg-secondary/30 p-3 hover:border-primary/50 hover:bg-secondary/60 transition-all text-foreground group"
              >
                <div className="flex items-center gap-2.5 truncate">
                  <Globe className="h-4 w-4 text-primary shrink-0" />
                  <span className="truncate text-xs">rootdeveloperds.odoo.com</span>
                </div>
                <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
              </a>

              <button
                onClick={() => onNavigate("terminal")}
                className="w-full flex items-center justify-between gap-2 rounded-xl border border-primary/30 bg-primary/10 p-3 hover:bg-primary/20 transition-all text-primary font-medium"
              >
                <div className="flex items-center gap-2.5">
                  <Terminal className="h-4 w-4 shrink-0" />
                  <span className="text-xs">Open Terminal Comms</span>
                </div>
                <span className="text-[10px] uppercase font-mono tracking-wider bg-primary/20 px-2 py-0.5 rounded">Interactive</span>
              </button>
            </div>
          </div>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* COMPREHENSIVE CATEGORIZED SOCIAL LINKS MATRIX                 */}
        {/* ------------------------------------------------------------- */}
        <div className="border-t border-border/60 pt-8 pb-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-primary font-semibold flex items-center gap-2">
              <span>// Social & Technical Network Matrix</span>
              <span className="text-[10px] font-normal text-muted-foreground font-sans">
                ({socialItems.length} Profiles)
              </span>
            </h4>
            <span className="text-[11px] text-muted-foreground font-mono">
              Optimized for Mobile & Desktop
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => {
              const items = socialItems.filter((i) => i.category === cat);
              if (items.length === 0) return null;
              return (
                <div key={cat} className="space-y-2.5">
                  <div className="text-[11px] font-mono font-medium text-muted-foreground/80 uppercase tracking-wider">
                    {cat}
                  </div>
                  <div className="space-y-1.5">
                    {items.map((item) => (
                      <a
                        key={item.id}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group flex items-center justify-between gap-2 rounded-lg border px-3 py-2 text-xs transition-all duration-200 ${
                          item.isRepo
                            ? "border-primary/50 bg-primary/10 text-primary font-semibold hover:bg-primary/20 hover:border-primary"
                            : item.featured
                            ? "border-border bg-secondary/40 text-foreground hover:border-primary/40 hover:bg-secondary/80"
                            : "border-border/50 bg-background/50 text-muted-foreground hover:text-foreground hover:border-border hover:bg-secondary/30"
                        }`}
                      >
                        <div className="flex items-center gap-2.5 truncate">
                          <span className={`transition-transform duration-200 group-hover:scale-110 ${item.isRepo ? "text-primary" : "text-primary/80"}`}>
                            {renderSocialIcon(item.iconName, "h-4 w-4")}
                          </span>
                          <span className="truncate font-medium">{item.name}</span>
                        </div>
                        <div className="flex items-center gap-1 shrink-0">
                          {item.isRepo && (
                            <span className="hidden sm:inline-block text-[9px] font-mono bg-primary/20 text-primary px-1.5 py-0.5 rounded">
                              OPEN SOURCE
                            </span>
                          )}
                          <ArrowUpRight className="h-3.5 w-3.5 opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* FOOTER BOTTOM BAR                                             */}
        {/* ------------------------------------------------------------- */}
        <div className="border-t border-border/40 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-muted-foreground">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 text-center sm:text-left">
            <span>© {currentYear} Devansh Sharma.</span>
            <span className="hidden sm:inline opacity-40">•</span>
            <span>All rights reserved.</span>
            <span className="hidden sm:inline opacity-40">•</span>
            <a
              href={socials.portfolioRepo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-semibold"
            >
              Open Source Portfolio Codebase
            </a>
          </div>

          <div className="flex items-center gap-3">
            <span>Built with React + Vite</span>
            <span className="opacity-40">•</span>
            <span>Framer Motion</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
