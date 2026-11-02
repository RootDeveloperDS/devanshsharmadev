## 2024-05-18 - Optimize Image Loading with `decoding="async"`

**Learning:** Adding `decoding="async"` to `<img>` tags, regardless of whether they are eager or lazy loaded, offloads the image decoding task from the main thread. This prevents blocking of the layout engine and ensures smoother framer-motion animations on initial render.

**Action:** Consistently apply `decoding="async"` to all images in React components to improve runtime rendering performance, especially when heavy animations are involved.