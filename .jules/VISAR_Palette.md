## 2023-10-27 - Smooth Interactive Hover States
**Learning:** Animating layout properties like `gap` or `margin` on hover (e.g., `hover:gap-3`) causes layout reflows and can lead to jumping text or janky interactions.
**Action:** Always prefer transform-based animations for hover states. Use the Tailwind `group` class on the parent container and apply `transform` changes like `group-hover:scale-110` or `group-hover:translate-x-1` on child icon elements to create a premium, smooth feel without layout shifts.
