🎨 UX Enhancement

💡 What:
- Added global tactile feedback (`active:scale-95`) to all base `<Button>` components.
- Added matching tactile feedback to custom `<Link>` and `<button>` components in `TopNav` (Brand logo, Tabs, Open Source Button, Command Palette).

🎯 Problem:
- Standard buttons and custom interactive elements in the top navigation lacked satisfying physical feedback when pressed, making the interface feel slightly rigid.

✨ Experience Impact:
- The interface now feels significantly more premium and responsive. Users receive immediate, subtle visual confirmation when pressing any actionable item, creating a cohesive, tactile experience across both standard UI elements and custom navigation elements.

♿ Accessibility:
- Preserved existing `focus-visible` rings for keyboard navigation. The scale effect is purely visual and does not interfere with screen readers or hit targets.

✅ Verification:
- Lint passed
- Tests passed
- Build passed
