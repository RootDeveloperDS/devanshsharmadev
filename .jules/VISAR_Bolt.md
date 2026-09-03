## 2025-03-03 - Component Memoization & Async Image Decoding
**Learning:** Pure visual components lacking props but receiving contextual state (like `theme`) can unnecessarily re-render if parent wrappers re-render; wrapping them in `React.memo` safely prevents cascading layout invalidations. Also, adding `decoding="async"` to image loading queues reduces main-thread DOM blocking, speeding up LCP.
**Action:** Proactively wrap stateless/visual-only child components in `React.memo()`. Append `decoding="async"` alongside `loading="lazy"` for assets fetched below the fold or via priority.
