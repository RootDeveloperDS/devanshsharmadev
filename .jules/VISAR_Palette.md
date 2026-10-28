## 2024-10-28 - Avoid Layout Shifts on Hover
**Learning:** Using layout properties like `hover:gap-3` causes layout reflows and jumping text, resulting in a poor UX.
**Action:** Apply the Tailwind `group` class to the parent container and use smooth `transform` animations (e.g., `group-hover:translate-x-1`) on child elements for better performance and visual feedback without layout shifts.
