## 2025-02-18 - Premium Tactile Feedback and Layout Stability

**Learning:**
Applying CSS transformations to layout properties like `gap` and `margin` on interactive states (e.g., hover) causes layout reflows and text jumping. Using a `group` context on the parent with localized child `transform` scales (e.g. `group-hover:scale-110`) achieves the same visual emphasis without recomputing layouts. Adding subtle `active:scale-95` on highly interactive components (like nav tabs and buttons) dramatically increases the premium, tactile feel of the application.

**Action:**
- In `TopNav.tsx`, appended `active:scale-95` and `transition-all` to navigational elements and buttons.
- In `ProjectsTab.tsx`, refactored the links from `hover:gap-3` to use the `group` class. Animated the child icons via `group-hover:scale-110` and `group-hover:translate` instead of changing their layout dimensions, and added `active:scale-95` for press feedback.
