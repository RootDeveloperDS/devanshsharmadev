## 2026-09-13 - Add Hover Feedback
**Learning:** Adding subtle `group-hover` transitions on list items and concept tags in `ExperienceTab.tsx` improves interaction feedback without triggering costly layout reflows.
**Action:** Always prefer using Tailwind's `group` utility with transforms (e.g. `translate-x-1`) for non-disruptive, performant micro-interactions.
