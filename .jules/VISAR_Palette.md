## 2024-11-04 - Premium Tactile Feedback on Buttons

**Learning:** Buttons without subtle tactile interaction feedback can feel less engaging and less premium. While hover states are good, adding a slight scale-down effect when the user actively clicks on a button creates a sense of responsiveness that improves the overall UX quality.

**Action:** Added `transition-all active:scale-95` to Shadcn UI `Button` component and to distinct TopNav links/buttons ("Open Source Repo" and "Command Palette") to provide consistent, subtle, premium interaction feedback without requiring heavy animations.
