## 2024-05-18 - VISAR Palette UX Enhancements

**Learning:** When adding hover effects, animating layout properties like `gap` or `margin` can cause layout reflows and jumping text, resulting in a less smooth experience. Instead, applying the Tailwind `group` class to the parent container and using smooth `transform` animations (e.g., `group-hover:translate-x-1`) on child elements provides better performance and visual feedback without layout shifts. Furthermore, incorporating tactile feedback using classes like `active:scale-95` adds a premium, subtle interaction feel to clickable elements.

**Action:** Consistently replace layout-shifting animations with transform-based animations nested inside a `group`, and apply `active:scale-95` to buttons and active link targets to enhance the user's interaction experience.
