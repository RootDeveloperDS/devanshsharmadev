## 2024-11-20 - Memoizing Purely Visual Components
**Learning:** Purely visual UI components like HeroAvatar and ThemeToggle can trigger unnecessary React re-renders when their parent container context updates, consuming slight overhead without visual change.
**Action:** Always wrap these prop-less purely visual components with `React.memo` to optimize React rendering performance.
