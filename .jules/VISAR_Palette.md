## 2024-10-06 - Replacing Layout-Shifting Hover States with Smooth Micro-Interactions

**Learning:** Modifying layout properties like `gap` on hover (`hover:gap-3`) triggers expensive layout recalculations and causes visual reflows (jumping text), degrading the premium feel.
**Action:** Always use transform properties (`scale`, `translate`) in combination with the Tailwind `group` class (e.g., `group-hover:-translate-y-0.5 group-hover:translate-x-0.5`) on child elements for smooth, performant hover states that do not affect layout geometry.
