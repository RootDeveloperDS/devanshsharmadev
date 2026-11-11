🎨 UX Enhancement

💡 What:
- Added tactile interaction feedback (`active:scale-95` with `transition-all`) to the primary UI components (Buttons, Brand Link, Tab Links, Open Source Button, Command Palette Button).

🎯 Problem:
- Lack of immediate visual/tactile feedback on core interactive elements made the interface feel less responsive and slightly diminished the premium feel.

✨ Experience Impact:
- The interface now feels more robust, premium, and instantly responsive to user clicks, reinforcing a high-quality product feel without adding complex animations.

♿ Accessibility:
- Maintains all existing focus states and ARIA labels. The transform transition purely adds visual confirmation of interaction for sighted users.

✅ Verification:
- Lint passed
- Tests passed
- Build passed
