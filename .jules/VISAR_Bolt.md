## 2024-05-18 - Optimized Image Decoding Performance
**Learning:** Adding `decoding="async"` to image tags effectively offloads decoding from the main thread, resulting in smoother navigation and animations without delaying layout calculations.
**Action:** Always add `decoding="async"` when implementing fallback mechanisms or aggressively loading non-essential images, particularly in large matrix components or interactive elements.

## 2024-05-18 - Mitigated Extraneous React Rendering
**Learning:** High-level interactive elements like `ThemeToggle` or large presentation views like `TerminalTab` re-rendering on parent updates can severely throttle animations during page transitions or intense user interaction.
**Action:** Proactively wrap components displaying static information or handling independent logic trees with `React.memo` to skip unneeded render evaluations.
