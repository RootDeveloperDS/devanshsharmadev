## 2023-10-25 - Tactile Feedback & Animation Stability
**Learning:** Adding hover animations that modify layout properties (like `gap` or `margin`) causes unintended layout shifts and reflows which degrade the premium feel.
**Action:** Always use the `group` class on the parent container and apply smooth transform animations (like `group-hover:-translate-y-0.5 group-hover:translate-x-0.5`) on child elements. Always add `active:scale-95` to interactive elements to provide a subtle, tactile click response.
