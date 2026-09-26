## 2023-10-27 - Offload Image Decoding and Telemetry from Main Thread
**Learning:** Adding `decoding="async"` to image tags and deferring telemetry operations via `requestIdleCallback` (with a `setTimeout` fallback) are highly effective ways to prevent main thread blocking and ensure smooth Framer Motion animations.
**Action:** Next time I work on a React application with TanStack router or Framer Motion animations, I will prioritize these non-blocking techniques to ensure optimal main-thread availability.
