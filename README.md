<div align="center">
  <img src="https://github.com/RootDeveloperDS/CDN/blob/main/images/devansh-portfolio/main-dashboard-dark-1.png?raw=true" alt="Devansh Sharma Portfolio Preview" width="100%">

  # Devansh Sharma - Developer Portfolio

  **Modular Cyberpunk Hub** built with React, Vite, and Tailwind CSS.
  
  [![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)](https://vitejs.dev/)
  [![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
  [![Framer Motion](https://img.shields.io/badge/Framer_Motion-black?style=for-the-badge&logo=framer&logoColor=blue)](https://www.framer.com/motion/)
</div>

---

## 🌌 Overview

This is the central personal portfolio and release hub for **Devansh Sharma**, an AI/ML-Focused Python Developer & Creator of VISAR Edge. The portfolio is engineered as a highly scalable frontend architecture bridging dynamic data matrices, interactive Framer Motion animations, and deep technical generative engine optimization. 

The design follows a sci-fi/cyberpunk aesthetic, featuring a dynamic tab-based interface with a command palette and an animated background.

## 🚀 Features

- **Cyberpunk UI/UX**: A sleek, dark-themed interface with neon accents, custom animated backgrounds, and a system-like feel.
- **Dynamic Content Matrix**: All portfolio data (projects, experience, profile) is centralized in `src/components/portfolio/data.ts` for easy updates.
- **Command Palette (`Ctrl/Cmd + K`)**: Quick navigation through the portfolio using a spotlight-like global command palette.
- **Interactive Tabs**:
  - **Overview (01)**: Introduction, philosophy, and quick status overview.
  - **Systems (02)**: Detailed project showcase using responsive grids, featuring flagship AI and full-stack projects.
  - **Experience (03)**: Work history and technical stack matrix.
  - **Terminal (04)**: A simulated command-line interface for an immersive interactive experience.
- **Fluid Animations**: Smooth page transitions and element interactions powered by `framer-motion`.
- **Fully Responsive**: Optimized for desktop, tablet, and mobile viewing.

## 🛠️ Tech Stack

- **Framework**: [React 18](https://reactjs.org/) with [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Components**: [Radix UI](https://www.radix-ui.com/) (via [Shadcn UI](https://ui.shadcn.com/))
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Routing**: [React Router v6](https://reactrouter.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Analytics**: Vercel Analytics

## 📂 Project Structure

```text
src/
├── components/
│   ├── portfolio/         # Core portfolio components (Tabs, Nav, data matrix)
│   └── ui/                # Reusable Shadcn/Radix UI components
├── pages/
│   ├── Index.tsx          # Main entry point holding the PortfolioShell
│   └── NotFound.tsx       # 404 Catch-all page
├── App.tsx                # App layout, providers, and router config
└── index.css              # Global styles & Tailwind entry
```

## 💻 Getting Started

### Prerequisites
Make sure you have Node.js and `npm` (or `bun`/`yarn`) installed.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/RootDeveloperDS/devanshsharmadev.git
   cd devanshsharmadev
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   bun install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   bun dev
   ```

4. Open `http://localhost:5173` in your browser.

## 📝 Updating Data

To update the portfolio content (name, about, projects, experience), you do **not** need to edit the UI components.
Simply navigate to:

👉 `src/components/portfolio/data.ts`

This centralized data matrix feeds the entire application. Modify objects like `profile`, `socials`, `projects`, and `experience` to instantly reflect changes across the site.

## 📜 License & Copyright

© 2026 Devansh Sharma // Compiled with intent.

Designed and developed by Devansh Sharma. All rights reserved.