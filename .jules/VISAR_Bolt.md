## 2026-10-11 - Image Decoding Optimization
**Learning:** Adding `decoding="async"` to `<img>` elements prevents image decoding from blocking the main thread, particularly beneficial for layouts heavily relying on animations and rapid rendering.
**Action:** Aggressively apply `decoding="async"` to all images (even those `loading="eager"`) across the application to enhance perceived performance and Framer Motion smoothness.
