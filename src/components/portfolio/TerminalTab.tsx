import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Copy, Github, Linkedin, Mail, Send, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { socials } from "./data";
import { useTheme } from "./ThemeProvider";
import { toast } from "@/hooks/use-toast";

const bootLines = [
  "[ OK ] initializing comms link...",
  "[ OK ] handshake complete · channel: secure",
  "[ OK ] identity verified: visitor@portfolio",
  "[ READY ] type a message and press send.",
];

function TerminalView() {
  const [shown, setShown] = useState<string[]>([]);
  const [name, setName] = useState("");
  const [msg, setMsg] = useState("");
  const [sent, setSent] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      setShown((s) => [...s, bootLines[i]]);
      i++;
      if (i >= bootLines.length) clearInterval(id);
    }, 280);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [shown, sent]);

  const handleSend = () => {
    if (!name.trim() || !msg.trim()) {
      toast({ title: "Missing fields", description: "Enter your name and message." });
      return;
    }
    setSent(true);
    toast({ title: "Message queued", description: "Visual demo — connect a backend later." });
  };

  return (
    <div className="bento-card scanlines relative !p-0 overflow-hidden">
      {/* Title bar */}
      <div className="flex items-center gap-2 border-b border-border bg-secondary/40 px-3 py-2 sm:px-4">
        <span className="h-2.5 w-2.5 rounded-full bg-destructive/70 sm:h-3 sm:w-3" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70 sm:h-3 sm:w-3" />
        <span className="h-2.5 w-2.5 rounded-full bg-primary/70 sm:h-3 sm:w-3" />
        <span className="ml-2 truncate font-mono text-[10px] text-muted-foreground sm:ml-3 sm:text-[11px]">
          devansh@visar:~ · /comms
        </span>
      </div>

      <div ref={scrollRef} className="max-h-[460px] min-h-[320px] overflow-y-auto p-3 font-mono text-xs sm:min-h-[360px] sm:p-5 sm:text-sm">
        {shown.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="break-words text-primary/90"
          >
            {line}
          </motion.div>
        ))}

        {shown.length >= bootLines.length && !sent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-4 space-y-3"
          >
            <div className="flex flex-wrap items-center gap-x-1 gap-y-1">
              <span className="text-primary">visitor@portfolio</span>
              <span className="text-muted-foreground">:~$ set --name</span>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="your_name"
                className="min-w-0 flex-1 bg-transparent outline-none text-foreground placeholder:text-muted-foreground/50 sm:w-40 sm:flex-none"
              />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-x-1">
                <span className="text-primary">visitor@portfolio</span>
                <span className="text-muted-foreground">:~$ compose</span>
                <span className="terminal-cursor" />
              </div>
              <textarea
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
                placeholder="type your message..."
                rows={4}
                className="mt-2 w-full resize-none rounded-md border border-border bg-background/50 p-3 text-foreground placeholder:text-muted-foreground/50 outline-none focus:border-primary"
              />
            </div>
            <Button onClick={handleSend} className="w-full rounded-md sm:w-auto">
              <Send /> Transmit
            </Button>
          </motion.div>
        )}

        {sent && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 space-y-1 text-primary"
          >
            <div>› transmitting...</div>
            <div>› signal received ✓</div>
            <div className="text-muted-foreground">
              › for direct contact, see channels below.
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}

function ExecutiveContactForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message queued", description: "Visual demo — connect a backend later." });
  };

  return (
    <form onSubmit={handleSubmit} className="bento-card space-y-5">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="name">Name</Label>
          <Input id="name" placeholder="Your name" className="mt-1.5" />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="you@company.com" className="mt-1.5" />
        </div>
      </div>
      <div>
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" placeholder="What are you building?" rows={6} className="mt-1.5" />
      </div>
      <Button type="submit" size="lg" className="rounded-md">
        <Send /> Send message
      </Button>
    </form>
  );
}

export function TerminalTab() {
  const { theme } = useTheme();

  const channels = [
    { icon: Mail, label: "Email", value: socials.email, href: `mailto:${socials.email}`, copy: true },
    { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/devanshsharma987", href: socials.linkedin },
    { icon: Github, label: "GitHub", value: "RootDeveloperDS", href: socials.github },
    { icon: Twitter, label: "X (Twitter)", value: "@devansh", href: socials.x },
  ];

  return (
    <section className="mx-auto max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10"
      >
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">
          // node_04 · contact
        </p>
        <h2 className="mt-2 font-display text-3xl font-bold sm:text-5xl">
          {theme === "visar" ? (
            <>Open a <span className="text-gradient">Channel</span>.</>
          ) : (
            <>Let's <span className="text-gradient">talk</span>.</>
          )}
        </h2>
        <p className="mt-3 max-w-xl text-muted-foreground">
          {theme === "visar"
            ? "Direct line to the operator. Encrypted on intent, open on welcome."
            : "Drop a note for collaborations, roles, or product conversations."}
        </p>
      </motion.div>

      <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        {theme === "visar" ? <TerminalView /> : <ExecutiveContactForm />}

        {/* Channels list */}
        <div className="space-y-3">
          {channels.map(({ icon: Icon, label, value, href, copy }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="bento-card group flex items-center gap-4 !p-4 hover:border-primary/60"
            >
              <span className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary">
                <Icon className="h-5 w-5" />
              </span>
              <div className="min-w-0 flex-1">
                <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  {label}
                </div>
                <div className="truncate text-sm font-medium text-foreground">{value}</div>
              </div>
              {copy && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    navigator.clipboard.writeText(value);
                    toast({ title: "Copied", description: value });
                  }}
                  className="text-muted-foreground transition-colors hover:text-primary"
                  aria-label="Copy email"
                >
                  <Copy className="h-4 w-4" />
                </button>
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
