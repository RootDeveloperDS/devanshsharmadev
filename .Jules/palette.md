## 2023-10-27 - A11y & Focus Enhancements
**Learning:** Adding `focus-visible` classes to interactive elements like custom buttons or links significantly improves keyboard accessibility without degrading the mouse/touch experience. Simple hover transitions (like a subtle scale) boost the premium feel.
**Action:** Always verify custom interactive components have clear focus rings (`focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ring-offset-background`). Ensure semantic tags like `<nav>` have `aria-label`s for screen readers.
## 2024-05-27 - Consistent Focus Rings and Touch Feedback
**Learning:** Some custom Shadcn/Tailwind buttons lack visible focus rings when navigating via keyboard, reducing accessibility. Additionally, static buttons lack physical touch feedback on click.
**Action:** Always verify `focus-visible` classes on interactive elements and apply `active:scale-95` to buttons intended to feel premium and physical.
## 2024-05-18 - Interaction and Accessibility Polish
**Learning:** Adding active states to scrollbars and tags improves tactile feedback, while ensuring proper ARIA attributes for command menus is crucial for accessibility.
**Action:** Always verify that interactive elements like tags and custom scrollbars have visible active states, and custom command palette buttons correctly use `aria-haspopup="dialog"` and `aria-expanded`.
