## 2024-05-20 - Smooth Interaction Feedback
**Learning:** Animating layout properties like `gap` or `margin` on hover triggers expensive layout reflows and can cause jumping text.
**Action:** Always prefer `group` classes on parent containers combined with `transform` animations (e.g., `scale`, `translate`) on child elements to provide smooth, high-performance visual feedback without layout shifts.

## 2024-05-20 - Tactile Click Feedback
**Learning:** Clickable elements lack a premium feel without tactile feedback upon interaction.
**Action:** Apply `active:scale-95` to interactive elements like buttons, links, and navigation items to simulate a subtle, satisfying physical press mechanism consistent with the VISAR premium design language.
