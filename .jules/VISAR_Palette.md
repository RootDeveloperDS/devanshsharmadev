## 2024-05-18 - Replacing Gap Animations with Transforms
**Learning:** Animating layout properties like `gap` on hover causes layout reflows and jumping text, resulting in a janky user experience instead of a premium one.
**Action:** Always prefer using Tailwind's `group` class on the parent container combined with smooth `transform` animations (e.g., `group-hover:translate-x-0.5 group-hover:-translate-y-0.5`) on child elements for visual hover feedback without layout shifts.
