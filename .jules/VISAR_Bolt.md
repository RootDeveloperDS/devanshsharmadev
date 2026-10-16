## 2024-10-24 - Image Loading and Telemetry Deferral Optimization
**Learning:** Found main-thread blocking operations like image decoding during complex Framer Motion animations, and synchronous non-essential telemetry causing delays in initial route loading and navigation.
**Action:** Always aggressively add `decoding="async"` on heavy or lazy-loaded `<img>` tags (e.g. project screenshots, avatar) to unblock the layout engine. Utilize `requestIdleCallback` (with a setTimeout fallback and SSR check) to defer third-party or internal telemetry tasks that don't block immediate UI painting.
