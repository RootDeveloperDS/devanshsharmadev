## 2024-05-18 - Async Image Decoding and Layout Thrashing

**Learning:** Adding `decoding="async"` to `<img>` tags offloads image decoding from the main thread, which is extremely important to maintain smooth animations, especially when heavy animations (like Framer Motion) are active. Additionally, synchronous DOM reads (like `getBoundingClientRect()`) should not be executed inside scroll or resize event listeners as they cause layout thrashing. They must be batched or deferred using `requestAnimationFrame`.

**Action:** Ensure all `<img>` tags have `decoding="async"` for non-blocking UI. When caching DOM layouts, strictly avoid synchronous layout queries within high-frequency event listeners (like scroll/resize) without RAF boundaries to prevent scroll jank.
