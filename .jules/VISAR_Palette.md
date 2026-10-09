## 2024-05-30 - Subtle Interaction Polish

**Learning:** Hover effects that modify layout properties (like `gap` or `margin`) can cause reflows and make elements jump. To provide feedback without layout shifts, it's much smoother to use CSS `transform` along with the `group` class.
**Action:** In `ProjectsTab.tsx`, replace `hover:gap-3` with `group`, and apply `group-hover:scale-110` and `group-hover:translate-x-1` to the child icons and text. Also, adding `active:scale-95` on interactive elements such as TopNav tabs provides a nice tactile feel without requiring complex interactions.
