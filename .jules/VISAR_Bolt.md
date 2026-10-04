## 2024-05-19 - Image Decoding Optimization
**Learning:** Adding `decoding="async"` to image tags aggressively offloads image decoding from the main thread, unblocking the layout engine.
**Action:** When working on frontend applications with heavy images or animations, always ensure `decoding="async"` is used to minimize main thread blocking.
