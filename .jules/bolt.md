## 2024-08-03 - Canvas Path Batching
**Learning:** Calling `beginPath` and `fill` inside a `requestAnimationFrame` loop for every single drawn element (e.g., particles) is a significant performance bottleneck due to excessive Canvas state machine overhead.
**Action:** Always batch canvas draw operations when sharing the same styling (like `fillStyle`). Call `beginPath` once before the loop, use `moveTo` inside the loop to position the cursor before drawing shapes like `arc`, and call `fill` once after the loop. This reduces the number of operations linearly with the number of elements.
