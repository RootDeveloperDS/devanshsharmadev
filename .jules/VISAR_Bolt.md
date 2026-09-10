## 2026-09-10 - React Render Optimization and Image Decoding Optimization
**Learning:** Purely visual components without props re-render unnecessarily on parent state changes. Adding `loading="lazy"` and `decoding="async"` defers image loading and decoding to improve main-thread responsiveness.
**Action:** Use `React.memo` to wrap purely visual components and use `decoding="async"` on all images (and `loading="lazy"` for non-hero images).
