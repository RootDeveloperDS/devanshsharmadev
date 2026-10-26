## 2024-05-20 - Added tactile interaction feedback to clickable elements

**Learning:** Buttons and custom links without active state scaling feedback feel less responsive and lower quality, detracting from the premium product feel.

**Action:** Added `active:scale-95 transition-all` to default Shadcn UI button variants (`src/components/ui/button.tsx`) and to the custom brand link, navigation tabs, Github link, and Command Palette button in the global navigation bar (`src/components/portfolio/TopNav.tsx`) for subtle, satisfying feedback on click.
