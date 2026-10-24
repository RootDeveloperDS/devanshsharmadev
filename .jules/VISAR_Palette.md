## 2024-10-24 - Refined Interaction Feedback

**Learning:** Replacing crude layout animations (like `hover:gap-x`) with isolated transforms using Tailwind's `group` and `group-hover:translate/rotate` prevents jarring reflows while providing a more premium, polished feel for link interactions.
**Action:** Always prefer `transform` based hover micro-interactions over layout-shifting properties for interactive elements like project links or icon buttons.
