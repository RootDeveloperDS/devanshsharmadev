## 2026-09-08 - Optimize image loading and visual component renders
**Learning:** Adding `decoding="async"` to lazy-loaded images allows the browser to decode them off the main thread, improving UI responsiveness. Purely visual components without props, like `HeroAvatar` and `ThemeToggle`, can be wrapped in `React.memo` to prevent unnecessary re-renders when parent state changes.
**Action:** Apply `decoding="async"` alongside `loading="lazy"` for image optimization and proactively use `React.memo` for static visual components to enhance runtime rendering efficiency.
