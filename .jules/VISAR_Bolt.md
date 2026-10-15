## 2024-05-18 - Async Task Deferral Safety

**Learning:** When deferring tasks using `requestIdleCallback` inside an async function that returns a Promise, wrapping the `requestIdleCallback` inside a `new Promise` that resolves in the callback creates a massive footgun. If calling components `await` that function, they will unintentionally pause the main thread/UI until the idle callback resolves, completely defeating the optimization and causing severe UI lag.
**Action:** When deferring background tasks inside an `async` function, immediately return `Promise.resolve()` (or omit the explicit Promise wrapper if the function signature allows) to release the caller, and execute the actual heavy payload fully detached in the background.
