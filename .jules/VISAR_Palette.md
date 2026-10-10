## 2024-05-18 - Tactile Interaction Feedback

**Learning:** Buttons and interactive links felt flat when clicked or tapped without any transition feedback. `hover` interactions caused unexpected layout shifts in inline content.

**Action:** Replaced layout-modifying hover properties (e.g., `hover:gap-3`) with scale transforms and `active:scale-95` on `.group` containers. Global buttons were also updated with `transition-all duration-200 active:scale-95` to provide an immediate, subtle tactile response across the application without breaking structure.
