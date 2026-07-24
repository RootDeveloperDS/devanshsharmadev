import { useEffect } from "react";
import {
  Command as Cmdk,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import {
  ArrowRight,
  Cpu,
  Download,
  Eye,
  Github,
  Linkedin,
  Mail,
  Sun,
  Terminal,
  Twitter,
} from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { socials, socialItems, profile, tabs, type TabId } from "./data";
import { toast } from "@/hooks/use-toast";

interface Props {
  onNavigate: (id: TabId) => void;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function CommandPalette({ onNavigate, open, onOpenChange }: Props) {
  const setOpen = onOpenChange;
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen(!open);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, setOpen]);

  const run = (fn: () => void) => () => {
    fn();
    setOpen(false);
  };

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results.</CommandEmpty>
        <CommandGroup heading="Navigate">
          {tabs.map((t) => (
            <CommandItem key={t.id} onSelect={run(() => onNavigate(t.id))}>
              <ArrowRight />
              <span>Go to {t.label}</span>
              <CommandShortcut className="font-mono">{t.mono}</CommandShortcut>
            </CommandItem>
          ))}
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Theme">
          <CommandItem onSelect={run(toggleTheme)}>
            {theme === "visar" ? <Sun /> : <Cpu />}
            <span>Switch to {theme === "visar" ? "Executive" : "VISAR"} mode</span>
          </CommandItem>
        </CommandGroup>
        <CommandGroup heading="Open Source Codebase">
          <CommandItem
            onSelect={run(() => window.open(socials.portfolioRepo, "_blank"))}
            className="font-semibold text-primary"
          >
            <Github className="text-primary" />
            <span>Open Portfolio Source Code (GitHub)</span>
            <CommandShortcut className="font-mono text-primary font-bold">100% Open Source</CommandShortcut>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Contact & Social Network">
          <CommandItem
            onSelect={run(() => {
              navigator.clipboard.writeText(socials.email);
              toast({ title: "Email copied", description: socials.email });
            })}
          >
            <Mail />
            <span>Copy email address</span>
            <CommandShortcut className="font-mono">{socials.email}</CommandShortcut>
          </CommandItem>
          {socialItems.map((item) => (
            <CommandItem
              key={item.id}
              onSelect={run(() => window.open(item.href, "_blank"))}
            >
              <ArrowRight />
              <span>Open {item.name}</span>
              <CommandShortcut className="font-mono text-[10px] opacity-70">
                {item.category}
              </CommandShortcut>
            </CommandItem>
          ))}
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Actions">
          <CommandItem
            onSelect={run(() => {
              window.open(profile.resumeUrl, "_blank");
            })}
          >
            <Eye />
            <span>View résumé</span>
          </CommandItem>
          <CommandItem
            onSelect={run(() => {
              const a = document.createElement("a");
              a.href = profile.resumeUrl;
              a.download = "DevanshSharma-Resume.pdf";
              a.click();
            })}
          >
            <Download />
            <span>Download résumé</span>
          </CommandItem>
          <CommandItem onSelect={run(() => onNavigate("terminal"))}>
            <Terminal />
            <span>Initialize terminal</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
      {/* Hidden Command primitive ref for type completeness */}
      <Cmdk className="hidden" />
    </CommandDialog>
  );
}
