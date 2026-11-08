🎨 UX Enhancement

💡 What:
- Added tactile feedback (`active:scale-95`) to all standard UI buttons and custom TopNav links.

🎯 Problem:
- Interactive elements felt somewhat static when clicked, lacking premium tactile response.

✨ Experience Impact:
- Buttons and links now slightly scale down when clicked, providing subtle but clear visual confirmation of user input.

♿ Accessibility:
- Focus states and keyboard navigability were strictly preserved.

✅ Verification:
- Lint passed (ignoring pre-existing unrelated warnings)
- Tests passed (`pnpm test -- --run`)
- Build passed (`pnpm build`)


1. **Executive Summary**: Added subtle tactile feedback (`active:scale-95`) and smooth transitions (`transition-all`) to all Shadcn UI buttons and custom top navigation links to improve the premium interaction feel without compromising performance.
2. **Impact & Safety Matrix**:

| File Changed / Removed | Action | Technical Reason | Post-Removal/Update Impact | Risk Level |
| :--- | :--- | :--- | :--- | :--- |
| `src/components/ui/button.tsx` | Modified | To apply tactile feedback to all standard buttons | Buttons now have a subtle click animation | 🟢 Low |
| `src/components/portfolio/TopNav.tsx` | Modified | To apply tactile feedback to custom navigation links | Top navigation links have a smooth click animation | 🟢 Low |

3. **Verification**:
- `pnpm test -- --run` passed
- `pnpm build` passed
- Visual verification with Playwright confirmed the CSS changes apply without breaking layout.

4. **Clean Artifacts**: No `.patch`, `.log`, or `.tmp` files are committed. Workflow files removed.
