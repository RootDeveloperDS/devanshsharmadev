## 2023-10-27 - Refined Interaction Feedback
**Learning:** Layout-shifting hover animations (like `hover:gap`) cause visual jumping that degrades the premium feel. Using `transform` animations (like `group-hover:translate`) combined with subtle tactile feedback (`active:scale-95`) provides a much smoother and responsive experience.
**Action:** When adding hover or active states, always prefer CSS transforms over layout properties, and consistently apply `active:scale-95` to clickable elements.
