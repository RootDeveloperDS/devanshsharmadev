## 2024-05-19 - ARIA Labels and Accordion Structural Attributes
**Learning:** Adding descriptive ARIA labels to link components and mapping relationship roles for Accordions significantly boosts keyboard and screen reader accessibility. Also noted that properties in data models need to be carefully verified when adding strings manually (e.g. `project.name` vs `project.title`).
**Action:** Always verify variable names via inspection before assuming object structures, and verify missing links using targeted python read operations when basic output truncates.
## 2024-05-19 - Focus Within for Bento Cards
**Learning:** When dealing with card components that contain interactive elements (like buttons or links), using `focus-within` utility classes allows the entire card to show a focus ring, providing excellent spatial context for keyboard navigation.
**Action:** Use `focus-within` styles on container elements when their children are focusable to improve visual feedback for keyboard users.
