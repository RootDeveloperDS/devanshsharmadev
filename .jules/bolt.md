## 2023-10-27 - Telemetry Deferral and Memoization Optimization
**Learning:** Initializing IP fetching and global telemetry on component mount can block the main thread, increasing TTI (Time to Interactive). Also, mapping static arrays to components without `React.memo` causes unnecessary re-renders in React when parent state changes.
**Action:** Use `requestIdleCallback` to defer non-essential telemetry operations until the browser is idle, falling back to `setTimeout` if unsupported. Consistently use `React.memo` for list components receiving static data arrays.
