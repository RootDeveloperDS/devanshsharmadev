## 2025-03-05 - Optimize Image Loading and Component Renders
**Learning:** Native `decoding="async"` is a highly effective, low-risk way to ensure large assets don't block the React main thread during hydration. Additionally, `React.memo` provides significant value for complex static SVG/Canvas wrappers like `HeroAvatar`.
**Action:** Always check default image tags for `decoding` attributes in Next/Vite applications to easily claim main-thread performance back.
