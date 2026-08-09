## 2024-05-18 - Passive Event Listeners & Memoization
**Learning:** Using `passive: true` for high-frequency window events (`mousemove`, `resize`) in canvas animation loops is a quick win that avoids blocking the main thread layout calculations. Wrapping stable layout components like navigation bars in `React.memo` prevents cascading re-renders.
**Action:** Always check canvas initialization blocks for window event listeners that can be made passive. Apply `React.memo` to top-level layout components that sit adjacent to rapidly updating views.
