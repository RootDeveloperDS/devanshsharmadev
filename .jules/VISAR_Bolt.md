## 2024-05-20 - Image Decoding & Idle Task Optimization
**Learning:** We can offload image decoding from the main thread using `decoding="async"`, unblocking the layout engine and preventing jank during complex Framer Motion animations. We can also prevent telemetry from causing perceivable latency by wrapping tasks in `requestIdleCallback`.
**Action:** Always add `decoding="async"` to images that do not need to block rendering, and aggressively defer non-essential processing via `requestIdleCallback` to free up the main thread.
