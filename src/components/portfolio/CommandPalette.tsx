import { useEffect, useState } from "react";
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
  Github,
  Linkedin,
  Mail,
  Sun,
  Terminal,
  Twitter,
} from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { socials, profile, tabs, type TabId } from "./data";
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
        <CommandSeparator />
        <CommandGroup heading="Contact & Links">
          <CommandItem
            onSelect={run(() => {
              navigator.clipboard.writeText(socials.email);
              toast({ title: "Email copied", description: socials.email });
            })}
          >
            <Mail />
            <span>Copy email</span>
            <CommandShortcut className="font-mono">{socials.email}</CommandShortcut>
          </CommandItem>
          <CommandItem onSelect={run(() => window.open(socials.linkedin, "_blank"))}>
            <Linkedin />
            <span>Open LinkedIn</span>
          </CommandItem>
          <CommandItem onSelect={run(() => window.open(socials.github, "_blank"))}>
            <Github />
            <span>Open GitHub</span>
          </CommandItem>
          <CommandItem onSelect={run(() => window.open(socials.x, "_blank"))}>
            <Twitter />
            <span>Open X (Twitter)</span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Actions">
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
