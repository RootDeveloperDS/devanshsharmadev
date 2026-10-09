## 2025-02-18 - Image Decoding Optimization
**Learning:** `decoding="async"` is a safe, zero-risk attribute for `<img>` tags that offloads image decoding from the main thread, particularly useful in sites with heavy Framer Motion animations to prevent layout engine blocking.
**Action:** Always apply `decoding="async"` aggressively to all image tags, including those eagerly loaded, to improve render performance and reduce main-thread bottlenecks.

## 2025-02-18 - Memoizing Pure UI Components
**Learning:** Pure UI components (like `HeroAvatar` and `ThemeToggle`) that do not take props can still trigger unnecessary re-renders if their parent components update context or state.
**Action:** Proactively wrap such purely visual or context-driven components in `React.memo()` to isolate their rendering lifecycle and prevent unnecessary React reconciliation cycles.
