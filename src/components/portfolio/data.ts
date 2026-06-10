// Centralized portfolio data. Adapt content here, never hardcode in components.

export const profile = {
  name: "Devansh Sharma",
  title: "AI/ML-Focused Python Developer",
  subtitle: "Applied AI Systems / Creator of VISAR Edge",
  headline: "Building AI Systems That Evolve.",
  subheadline:
    "I am Devansh Sharma, an AI/ML-Focused Python Developer. I turn AI from a simple tool into an interactive, system-wide layer. Creator of VISAR Edge.",
  about:
    "Python developer focused on applied AI and intelligent systems. Strong capability in integrating AI models into functional, user-facing products with a strict focus on system performance, modular architecture, and solving practical engineering problems.",
  philosophy: "If it can think, it can evolve.",
  resumeUrl: "/ResumePerfect.pdf",
  profileImage: "/profile.png",
  status: {
    state: "ONLINE",
    location: "REMOTE",
    building: "VISAR EDGE",
  },
} as const;

export const socials = {
  email: "developersofroot@gmail.com",
  linkedin: "https://linkedin.com/in/devanshsharma987",
  github: "https://github.com/RootDeveloperDS",
  x: "https://x.com/devanshsha6563",
  website: "https://rootdeveloperds.odoo.com",
  instagram: "https://www.instagram.com/pro_gamer_devansh",
  telegram: "https://t.me/developerofroot",
  devpost: "https://devpost.com/devanshsharma8029",
  devfolio: "https://devfolio.co/@Devansh1Sharma",
  medium: "https://medium.com/@devanshsharma8029",
  devto: "https://dev.to/devansh_sharma_ds",
  aboutme: "https://about.me/devanshsharma",
} as const;

export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  github?: string;
  live?: string;
  status?: string;
  span: "lg" | "wide" | "tall" | "sm";
}

export const projects: Project[] = [
  {
    id: "visar-edge",
    name: "VISAR EDGE",
    tagline: "System-wide AI assistant • Beta soon",
    description:
      "An advanced, system-wide AI assistant featuring a persistent GUI and real-time context awareness across desktop and mobile. Background monitoring pipelines (including clipboard tracking) enable context-based, zero-click AI response generation. Designed with a highly modular system architecture.",
    live: "https://visaredge.vercel.app/",
    //github: "https://github.com/RootDeveloperDS/VISAR-EDGE-V1.0/",
    status: "BETA SOON",
    span: "lg",
  },
  {
    id: "jarvis",
    name: "J.A.R.V.I.S. (Mark 1 → 21)",
    tagline: "Voice-enabled AI assistant • 21 iterations",
    description:
      "A comprehensive, voice-enabled AI assistant capable of executing deep system-level commands and opening local applications. Integrated conversational AI models facilitate reliable task execution across iterations.",
    github: "https://github.com/RootDeveloperDS/J.A.R.V.I.S./",
    span: "wide",
  },
  {
    id: "neon-notes",
    name: "Neon Notes",
    tagline: "Cyberpunk note-taking • Zero-trust",
    description:
      "A secure, cyberpunk-inspired note-taking workspace optimized for programming in shared computer labs. Engineered with a zero-trust mindset, featuring dual-session authentication and strict session lifecycle management.",
    live: "https://neon-notes.vercel.app/",
    github: "https://github.com/RootDeveloperDS/MY-NEON-NOTES/",
    span: "wide",
  },
  {
    id: "automation",
    name: "Workflow Automation Suite",
    tagline: "System optimization • File handling",
    description:
      "Standalone Python scripts focused on system optimization, complex file handling, and localized workflow automation. Replaced repetitive manual operational tasks with intelligent, conditional automation logic.",
    span: "tall",
  },
  {
    id: "viewport-detective",
    name: "Viewport Detective",
    tagline: "Real-time viewport inspector",
    description:
      "A minimalistic, real-time browser viewport inspector designed to help developers debug responsive designs with precision. Features live dimension tracking, device pixel ratio, and breakpoint visualization.",
    live: "https://viewportdetective.vercel.app/",
    github: "https://github.com/RootDeveloperDS/ViewPort_Detective/",
    span: "wide",
  },
  {
    id: "wdc",
    name: "WDC (Windows Deep Cleaner)",
    tagline: "One-click system cleaner",
    description:
      "A lightweight, one-click desktop utility that deep-cleans Windows systems. It automates the removal of system temp files, prefetch data, and multi-browser caches through a minimal graphical interface.",
    live: "https://rootdeveloperds.odoo.com/shop/wdc-windows-deep-cleaner-windows-5",
    github: "https://github.com/RootDeveloperDS/WDC---Windows-Deep-Cleaner",
    span: "wide",
  },
];

export const experience = {
  role: "Applied AI Developer",
  company: "Independent Projects",
  period: "2024 — Present",
  bullets: [
    "Architected and built AI-powered applications utilizing LLM APIs for task automation.",
    "Developed real-time computing systems integrating speech recognition, text-to-speech, and direct system command execution.",
    "Optimized heavy application performance by engineering asynchronous execution.",
  ],
};

export const techStack = {
  languages: ["Python", "C++", "SQL"],
  frameworks: ["PySide6", "Tkinter", "Flask", "React", "FastAPI"],
  ai: ["Gemini API", "Groq API", "OpenAI", "Scikit-Learn", "Pandas", "Numpy"],
  concepts: [
    "Async Processing",
    "I/O Pipelines",
    "Modular Architecture",
    "Hardware Acceleration",
  ],
};

export type TabId = "overview" | "projects" | "experience" | "terminal";

export const tabs: { id: TabId; label: string; mono: string }[] = [
  { id: "overview", label: "Overview", mono: "01" },
  { id: "projects", label: "Systems", mono: "02" },
  { id: "experience", label: "Experience", mono: "03" },
  { id: "terminal", label: "Terminal", mono: "04" },
];
