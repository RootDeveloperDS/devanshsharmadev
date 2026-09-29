## 2023-10-04 - [Performance Improvements: Image Decoding and Deferred Telemetry]
**Learning:** Adding `decoding="async"` to image elements and deferring non-critical operations using `requestIdleCallback` ensures the main thread is not blocked during visual operations.
**Action:** Implemented off-thread execution by updating all `<img>` tags to use asynchronous decoding, preventing rendering interruptions in animations. Furthermore, non-essential operations like telemetry are deferred using `requestIdleCallback` combined with a `setTimeout` fallback.
