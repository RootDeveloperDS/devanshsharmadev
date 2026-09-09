## 2024-05-20 - Image Decoding & Component Memoization
**Learning:** Native `decoding="async"` on images is a simple micro-optimization that prevents main-thread blocking, and `React.memo` effectively protects pure presentational components (like `HeroAvatar`) from inherited re-renders, especially when dealing with complex Framer Motion internals.
**Action:** Always add `decoding="async"` alongside `loading="lazy"` for non-critical images. Proactively wrap pure UI components without props in `React.memo` if their parent components trigger frequent state updates.
