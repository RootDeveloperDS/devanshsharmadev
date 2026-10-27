## 2025-02-20 - Non-Critical Telemetry and Analytics Deferral
**Learning:** Network requests or processing for analytics features (like Telegram telemetry) can compete with UI rendering, leading to main-thread jank. Deferring the API call using `requestIdleCallback` resolves this, but doing so naively can lose critical context if the user navigates away before the callback executes.
**Action:** When deferring analytics, capture context synchronously (e.g., `window.location.pathname`, timestamp) before entering the deferred `requestIdleCallback` execution block to maintain accuracy while achieving the performance win.

## 2025-02-20 - Image Decoding
**Learning:** While images may be lazy-loaded, they are still decoded on the main thread when they enter the viewport, which can cause micro-stutters during scrolling or complex framer-motion animations.
**Action:** Aggressively apply `decoding="async"` to `<img />` tags to push the decoding workload off the main thread, resulting in smoother animations and UI transitions without compromising on visual loading behavior.
