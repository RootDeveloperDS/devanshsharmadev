## 2025-02-18 - Deferring Non-Essential Telemetry
**Learning:** `sendTelegramNotification` executes analytics API calls which block the main thread and can slow down rendering and component interaction.
**Action:** Always wrap non-critical telemetry function calls inside `requestIdleCallback` (with a `setTimeout` fallback for cross-browser support). Ensure to return `Promise.resolve()` immediately if callers expect an awaitable function, preventing TS compilation failures or runtime Promise chain crashes.
