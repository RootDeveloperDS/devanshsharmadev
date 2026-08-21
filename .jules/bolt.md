## 2024-12-05 - Canvas and Component Memoization

**Learning:** `window.devicePixelRatio` has measurable property lookup overhead inside 60fps loops like Canvas `requestAnimationFrame`. Static presentation components inside lazy-loaded routes can still cause performance issues if not memoized, causing unnecessary React reconciliation overhead.

**Action:** Cache window properties in local closure variables and update them on resize events rather than reading them per-frame. Wrap static layout components without dynamic props (like forms and headers) in `React.memo()`.
