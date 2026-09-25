## 2024-05-27 - Playwright Active State Verification
**Learning:** When using Playwright to visually verify CSS `active` states (e.g., `active:scale-95`) on links or buttons without triggering navigation, standard `.click()` can navigate away before the state is captured.
**Action:** Simulate the interaction by evaluating a `mousedown` event directly on the element in the browser context (e.g., `element.evaluate("el => el.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }))")`) and wait for the transition timeout before capturing the screenshot.
