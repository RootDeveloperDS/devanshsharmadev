## 2023-10-27 - A11y & Focus Enhancements
**Learning:** Adding `focus-visible` classes to interactive elements like custom buttons or links significantly improves keyboard accessibility without degrading the mouse/touch experience. Simple hover transitions (like a subtle scale) boost the premium feel.
**Action:** Always verify custom interactive components have clear focus rings (`focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ring-offset-background`). Ensure semantic tags like `<nav>` have `aria-label`s for screen readers.
## 2025-03-09 - TerminalTab UX Polish
**Learning:** Nested interactive elements (`<button>` inside `<a>`) break screen reader accessibility and HTML validity, and hardcoded `aria-label` texts reduce UX quality. Visual feedback on copy actions is critical for premium interactions.
**Action:** Extract list items to components, fix nested DOM elements (using a parent `div` with `focus-within` to maintain focus ring visibility), interpolate dynamic `aria-label`s, and provide clear icon state changes upon user interaction.
