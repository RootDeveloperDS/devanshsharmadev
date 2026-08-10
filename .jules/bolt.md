## 2023-08-10 - Static Tab Component Memoization
**Learning:** Top-level static components in large SPAs (like `ExperienceTab` and `ProjectsTab`) rendered via conditionally active routes/tabs can unnecessarily rerender when parent global layout components trigger state updates.
**Action:** Always verify if expensive UI layers (like Framer Motion intensive blocks or deep element trees) can be safely wrapped in `React.memo` if they accept no dynamic props or strictly static data references.
