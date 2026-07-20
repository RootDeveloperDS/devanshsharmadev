// Centralized portfolio data. Adapt content here, never hardcode in components.

export const profile = {
  name: "Devansh Sharma",
  title: "Applied AI Systems Architect",
  subtitle: "Full Stack AI Architect / Creator of VISAR Edge",
  headline: "Building Cognitive Systems That Evolve.",
  subheadline:
    "I am Devansh Sharma, a Full Stack AI Architect. I turn AI from a simple tool into an interactive, system-wide cognitive layer. Creator of VISAR Edge.",
  about:
    "Cognitive Systems Engineer focused on applied AI and intelligent architectures. Strong capability in integrating LLMs, vision cores, and voice engines into high-performance, user-facing products with a strict focus on modularity, zero-idle telemetry, and production-level deployments.",
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
  categories: (
    | "fullstack"     // Apps with Front + Back + DB (Neon Notes)
    | "frontend"      // UI, Landing Pages, single-page sites
    | "desktop"       // Native OS or cross-platform systems (WDC)
    | "mobile"        // Android/iOS builds and APKs
    | "api"           // FastAPI/Flask backend services & microservices
    | "ai-core"       // ML models, datathons, raw predictive engines
    | "automation"    // Python cron jobs, file handlers, scrapers
    | "dev-tool"      // Debuggers (Viewport Detective), reverse-engineering utilities
  )[];
  /** Optional tech stack tags for the accordion matrix */
  tech?: string[];
  /** Optional preview image URL for the expanded accordion payload */
  image?: string;
  /** Set to true to feature this project in the top Flagship Bento Grid */
  flagship?: boolean;
}

export const projects: Project[] = [
  // ---------------------------------------------------------
  // ZONE 1: THE FLAGSHIPS (Core AI Ecosystem)
  // ---------------------------------------------------------
  {
    id: "visar-edge",
    name: "V.I.S.A.R. E.D.G.E.",
    tagline: "Futuristic AI Cognitive OS Layer • Beta Soon",
    description:
      "A futuristic AI Cognitive Operating System layer for your PC built to see, hear, speak, and evolve. Features an optimized asynchronous multi-threaded boot engine shrinking startup latency from 18s down to 1.92s, fully decoupled autonomous agentic brain channels, a FAISS-powered local semantic RAG network, vision core layers, and Multiple Tools pipeline.",
    live: "https://visaredge.vercel.app/",
    //github: "https://github.com/RootDeveloperDS/VISAR-EDGE-V1.0/",
    status: "BETA SOON",
    span: "lg",
    categories: ["ai-core", "desktop", "fullstack"],
    flagship: true,
    tech: ["Python", "PySide6", "Chromium Core", "FAISS Vector", "Asynchronous Architecture"],
    image: "https://github.com/RootDeveloperDS/CDN/blob/main/images/visar-dashboard1.png?raw=true",
  },
  {
    id: "jarvis",
    name: "J.A.R.V.I.S. (Mark 1 → 21)",
    tagline: "Voice-enabled AI assistant • 21 iterations",
    description:
      "A comprehensive, voice-enabled AI assistant capable of executing deep system-level commands and opening local applications. Integrated conversational AI models facilitate reliable task execution across iterations.",
    github: "https://github.com/RootDeveloperDS/J.A.R.V.I.S./",
    span: "wide",
    categories: ["ai-core", "desktop"],
    flagship: true,
    tech: ["Python", "SpeechRecognition", "OpenAI", "Tkinter"],
    image: "https://github.com/RootDeveloperDS/CDN/blob/main/images/JARVIS/jarvis-mark-20-blue.jpg?raw=true"
  },
  {
    id: "visar-edge-mobile",
    name: "V.I.S.A.R. Edge Mobile - [ In Development ]",
    tagline: "Native Android HUD & PC Telemetry Daemon",
    description:
      "A futuristic remote control ecosystem. The native Android client features a 3-tier boot timeline and a 60Hz holographic trackpad. The zero-overhead Python PC companion daemon manages real-time hardware telemetry streams, secure Drop-Pod multi-file transfers, and zero-latency acoustic audio pipelines.",
    github: "https://github.com/RootDeveloperDS/visar-edge-mobile",
    span: "wide",
    categories: ["mobile", "desktop", "api"],
    flagship: true,
    tech: ["Kotlin", "Jetpack Compose", "Python", "FastAPI", "WebSockets"],
    image: "https://github.com/RootDeveloperDS/CDN/blob/main/logos/visar-android-v1.png?raw=true",
  },
  {
    id: "visar-intel",
    name: "VISAR Intel",
    tagline: "PWA Current Affairs / News Engine",
    description:
      "High-performance automated UPSC/SSC news distillation engine. Built as a Progressive Web App (PWA) featuring an optimized substring search engine, daily AI-driven MCQ pipelines, and a persistent layout architecture.",
    live: "https://visarintel.vercel.app/",
    github: "https://github.com/RootDeveloperDS/visar-intel",
    span: "lg",
    flagship: true,
    categories: ["fullstack"],
    tech: ["TanStack Start", "React 19", "Supabase", "Gemini API"],
    image: "https://github.com/RootDeveloperDS/CDN/blob/main/images/visar-intel/intel-main-dashboard-dark-1.png?raw=true",
  },
  {
    id: "neon-notes",
    name: "Neon Notes",
    tagline: "Cyberpunk note-taking • Zero-trust",
    description:
      "A secure, cyberpunk-inspired note-taking workspace optimized for programming in shared computer labs. Engineered with a zero-trust mindset, featuring dual-session authentication and strict session lifecycle management.",
    live: "https://neon-notes.vercel.app/",
    github: "https://github.com/RootDeveloperDS/MY-NEON-NOTES/",
    span: "lg",
    categories: ["fullstack", "frontend"],
    flagship: true,
    tech: ["Next.js", "Firebase", "ShadCN", "Zero-Trust Auth"],
    image: "https://github.com/RootDeveloperDS/CDN/blob/main/images/neonnotes/dashboard-dark-v11.5.png?raw=true",
  },
  {
    id: "visar-edge-download-website",
    name: "VISAR Edge Release Hub",
    tagline: "Primary Landing Portal & Release Hub",
    description:
      "The central web interface hosting binary distribution pathways, installation schemas, and ecosystem release tracking.",
    live: "https://visar-edge.vercel.app/",
    github: "https://github.com/RootDeveloperDS/visar-edge-download-website",
    span: "lg",
    flagship: true,
    categories: ["frontend"],
    tech: ["Vite", "React", "Tailwind CSS"],
    image: "https://github.com/RootDeveloperDS/CDN/blob/main/images/visar-pc-product-page/main-hero-v10.0-dark.png?raw=true",
  },
  {
    id: "devanshsharmadev",
    name: "Personal Portfolio (Vite/React)",
    tagline: "Modular Cyberpunk Hub",
    description:
      "A highly scalable frontend architecture bridging dynamic data matrices, interactive Framer Motion animations, and deep technical generative engine optimization (GEO).",
    live: "https://devanshsharma.vercel.app/",
    github: "https://github.com/RootDeveloperDS/devanshsharmadev",
    span: "sm",
    flagship: true,
    categories: ["frontend"],
    tech: ["Vite", "React", "Framer Motion", "Tailwind CSS"],
    image: "https://github.com/RootDeveloperDS/CDN/blob/main/images/devansh-portfolio/main-dashboard-dark-1.png?raw=true",
  },
  {
    id: "visar-agent-08",
    name: "Visar Agent 0.8 (v8.5.0)",
    tagline: "Premium Cyber Interface & AI Core",
    description:
      "Advanced chat ecosystem equipped with a context-aware sliding window memory, native asynchronous generator streaming engines, and passwordless deep-linked URL authentication.",
    live: "https://visar-agent-08.vercel.app/",
    github: "https://github.com/RootDeveloperDS/visar-agent-08",
    span: "sm",
    flagship: true,
    categories: ["fullstack", "ai-core"],
    tech: ["Next.js 15", "Firebase Auth", "Genkit Core", "Groq SDK"],
    image: "https://github.com/RootDeveloperDS/CDN/blob/main/images/visar-agent-0.8/scifi-theme-v9.0.0.png?raw=true",
  },
  {
    id: "viewport-detective",
    name: "Viewport Detective",
    tagline: "Real-time viewport inspector",
    description:
      "A minimalistic, real-time browser viewport inspector designed to help developers debug responsive designs with precision. Features live dimension tracking, device pixel ratio, and breakpoint visualization.",
    live: "https://viewportdetective.vercel.app/",
    github: "https://github.com/RootDeveloperDS/ViewPort_Detective/",
    span: "sm",
    flagship: true,
    categories: ["dev-tool", "frontend"],
    tech: ["Next.js 14", "TypeScript", "Tailwind CSS"],
    image: "https://github.com/RootDeveloperDS/CDN/blob/main/images/viewport-detective/view-detect-dark-1.png?raw=true",
  },
  
  // ---------------------------------------------------------
  // ZONE 3: THE ACCORDION MATRIX (Archive Systems)
  // ---------------------------------------------------------
  
  {
    id: "visar-edge-v0-5",
    name: "VISAR EDGE V0.5",
    tagline: "Cyberpunk AI Assistant Interface",
    description:
      "A futuristic Next.js AI assistant web client featuring real-time token streaming, transparent error telemetry, horizontal smart replies, and dynamic URL parameter injection for instant model hot-swapping.",
    live: "https://visar-0-5.vercel.app/",
    github: "https://github.com/RootDeveloperDS/visar-edge-v0.5",
    span: "sm",
    categories: ["fullstack"],
    tech: ["Next.js", "Tailwind CSS", "Gemini Flash", "Groq SDK"],
    image: "https://github.com/RootDeveloperDS/CDN/blob/main/images/visar-agent-0.5/main-dark-v4.1.0.0.png?raw=true",
  },
  {
    id: "visar-dev-kit",
    name: "VisarDevKit",
    tagline: "AI-Powered Developer Toolkit",
    description:
      "A unified Next.js workspace hosting 7 specialized developer utility flows. Engineered to handle code inline commenting, formatting conversion, and dependency extraction utilizing the Gemini 2.0 Flash model via Google Genkit.",
    live: "https://visar-dev-kit.vercel.app/",
    github: "https://github.com/RootDeveloperDS/VISAR-Dev-Kit",
    span: "sm",
    categories: ["dev-tool", "fullstack"],
    tech: ["Next.js 15", "Google Genkit", "Gemini 2.0 Flash", "Zod"],
    image: "https://github.com/RootDeveloperDS/CDN/blob/main/images/visar-dev-kit/main-1.png?raw=true",
  },
  {
    id: "visar-live-dashboard",
    name: "VISAR Edge Live Dashboard",
    tagline: "Real-time backend telemetry client",
    description:
      "A streamlined frontend metrics panel that maintains direct polling connections to the core VISAR backend to visualize live user socket connections.",
    live: "https://visaredge-dashboard.vercel.app/",
    github: "https://github.com/RootDeveloperDS/visaredge-dashboard",
    span: "sm",
    categories: ["frontend"],
    tech: ["React", "Tailwind CSS", "REST API"],
    image: "https://github.com/RootDeveloperDS/CDN/blob/main/images/visar-live-public-dashboard/page.png?raw=true",
  },
  {
    id: "visar-animation-lab",
    name: "VISAR Animation Lab",
    tagline: "Sci-Fi HUD & Component Framework",
    description:
      "An elite, high-performance library offering 16 categories of sci-fi HUDs, cyber-warfare glitches, and living backgrounds. Engineered with Intersection Observer APIs to maintain strict 60 FPS rendering.",
    live: "https://visar-animations-lab.vercel.app/",
    github: "https://github.com/RootDeveloperDS/visar-edge-lab",
    span: "sm",
    categories: ["frontend"],
    tech: ["React 18", "GSAP 3", "TypeScript", "Tailwind CSS"],
    image: "https://github.com/RootDeveloperDS/CDN/blob/main/images/visar-animation-lab/main-dark-v5.0.0.0.png?raw=true",
  },
  {
    id: "3d-brain-viewer",
    name: "3D Brain Viewer",
    tagline: "Interactive 3D WebGL Pipeline",
    description:
      "A hardware-accelerated 3D graphics demonstration tracking coordinate maps and handling real-time vertex rotation of a sci-fi brain model.",
    live: "https://rootdeveloperds.github.io/3d-brain-viewer/",
    github: "https://github.com/RootDeveloperDS/3d-brain-viewer",
    span: "sm",
    categories: ["frontend"],
    tech: ["HTML5", "WebGL/Three.js", "Vanilla JS"],
    image: "https://github.com/RootDeveloperDS/CDN/blob/main/images/3d-brain-viewer/main-1.png?raw=true",
  },
  {
    id: "legacy-portfolio",
    name: "Legacy Personal Portfolio",
    tagline: "Historical Static Matrix",
    description:
      "The original, lightweight single-page frontend deployment utilized as an un-styled baseline template.",
    live: "https://rootdeveloperds.github.io/RootDeveloperDS/",
    github: "https://github.com/RootDeveloperDS/RootDeveloperDS",
    span: "sm",
    categories: ["frontend"],
    tech: ["HTML5", "CSS3", "JavaScript"],
    image: "https://github.com/RootDeveloperDS/CDN/blob/main/images/old-portfolio/main.png?raw=true",
  },
  {
    id: "wdc",
    name: "WDC (Windows Deep Cleaner)",
    tagline: "One-click system cleaner",
    description:
      "A lightweight, one-click desktop utility that deep-cleans Windows systems. It automates the removal of system temp files, prefetch data, and multi-browser caches through a minimal graphical interface.",
    live: "https://rootdeveloperds.odoo.com/shop/wdc-windows-deep-cleaner-windows-5",
    github: "https://github.com/RootDeveloperDS/WDC---Windows-Deep-Cleaner",
    span: "sm",
    categories: ["desktop", "dev-tool"],
    tech: ["Python 3", "Tkinter", "PyInstaller", "WinAPI"],
  },
  {
    id: "automation",
    name: "Workflow Automation Suite",
    tagline: "System optimization • File handling",
    description:
      "Standalone Python scripts focused on system optimization, complex file handling, and localized workflow automation. Replaced repetitive manual operational tasks with intelligent, conditional automation logic.",
    span: "sm",
    categories: ["automation", "dev-tool"],
    tech: ["Python", "OS Module", "Scheduling", "File I/O"],
  }
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
  languages: ["Python", "Kotlin", "TypeScript", "JavaScript", "C++", "SQL", "HTML5", "CSS3"],
  frameworks: [
    "PySide6", 
    "Jetpack Compose", 
    "Next.js 15", 
    "TanStack Start", 
    "React 19", 
    "FastAPI", 
    "Flask", 
    "Tkinter", 
    "Framer Motion", 
    "GSAP 3", 
    "Three.js", 
    "Tailwind CSS v4", 
    "ShadCN UI", 
    "Radix UI"
  ],
  ai: [
    "Google Genkit", 
    "Gemini 2.0 Flash", 
    "Groq SDK", 
    "OpenAI API", 
    "LangChain", 
    "FAISS Vector Core", 
    "Open Wake Word", 
    "SpeechRecognition", 
    "Edge TTS", 
    "Scikit-Learn", 
    "Pandas", 
    "NumPy"
  ],
  concepts: [
    "Asynchronous Thread Optimization",
    "Multi-Threaded Module Pre-Warming",
    "Dual-Branch Semantic Routing",
    "Zero-Trust Session Architecture",
    "Headless Bidirectional Socket Transport",
    "Ephemeral Observability Gated Telemetry",
    "Real-Time Generator Chunk Streaming",
    "Firebase Multi-Tenant Authentication",
    "Supabase RLS Data Infrastructures",
    "PWA Shell Offline Hydration",
    "GPU Accelerated Compositing Layers",
    "Win32 Core Telemetry Engineering"
  ],
};

export type TabId = "overview" | "projects" | "experience" | "terminal";

export const tabs: { id: TabId; label: string; mono: string }[] = [
  { id: "overview", label: "Overview", mono: "01" },
  { id: "projects", label: "Systems", mono: "02" },
  { id: "experience", label: "Experience", mono: "03" },
  { id: "terminal", label: "Terminal", mono: "04" },
];
