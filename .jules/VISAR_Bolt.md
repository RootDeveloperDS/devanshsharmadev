## 2023-10-28 - Image Decoding Optimization
**Learning:** Adding `decoding="async"` to image tags allows the browser to decode images off the main thread, reducing main thread blocking and improving page load times and animation smoothness, especially when there are heavy computations or animations going on.
**Action:** Always add `decoding="async"` to `<img>` tags, especially in applications heavily relying on animations and those loading multiple images.

## 2023-10-28 - Non-Essential Telemetry Deferral
**Learning:** Running non-essential fetch requests (like telemetry and tracking) inline blocks the main thread.
**Action:** Use `requestIdleCallback` (with a `setTimeout` fallback for browsers that don't support it) to run these non-essential operations during browser idle periods, freeing the main thread for critical user interactions and rendering.
