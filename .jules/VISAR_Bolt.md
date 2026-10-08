## 2024-10-08 - Offload Image Decoding and Telemetry from Main Thread
**Learning:** Initial page loads and route transitions can feel sluggish when the main thread is blocked by non-essential tasks like parsing user agents for telemetry or synchronously decoding large images.
**Action:** Always use `requestIdleCallback` (with a `setTimeout` fallback) to defer non-essential operations like telemetry to when the browser is idle. Furthermore, aggressively add `decoding="async"` to all `<img>` tags to unblock the layout engine.
