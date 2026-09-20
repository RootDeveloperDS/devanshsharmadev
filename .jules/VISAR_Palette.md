## 2024-05-27 - Tactile Interactions and Hover Animations
**Learning:** Using `gap` property for hover animations can cause layout reflows and a jerky user experience.
**Action:** Use the `group` class on parent containers and apply `transform` based classes (e.g., `group-hover:-translate-y-0.5`, `group-hover:scale-110`) on children. Also, consistently use `active:scale-95 transition-all` on actionable elements (buttons, links) to provide premium tactile feedback.
