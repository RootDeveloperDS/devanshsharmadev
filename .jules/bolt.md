## 2024-08-23 - Deferring Telemetry & Memoizing Leaf Nodes
**Learning:** Running non-essential operations like telemetry data collection synchronously blocks the main thread, and parent re-renders unnecessarily update pure visual child components.
**Action:** Use `requestIdleCallback` (with a `setTimeout` fallback) to defer non-essential operations like `sendTelegramNotification`. Wrap purely visual components (e.g. `HeroAvatar`, `ThemeToggle`) with `React.memo` to prevent cascading re-renders.
