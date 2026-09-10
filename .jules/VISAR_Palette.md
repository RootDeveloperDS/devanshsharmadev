## 2024-09-10 - Replace gap transitions with transform
**Learning:** Using `hover:gap-*` on flex containers triggers layout recalculation which causes visual jumping.
**Action:** Always prefer `transform` classes like `group-hover:scale-*` or `group-hover:translate-*` on child elements inside a `group` for smooth interaction feedback.
