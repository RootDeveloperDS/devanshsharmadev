# 1. Executive Summary

**WHAT:** Added `React.memo` around `HeroAvatar` and `ThemeToggle` components and applied `decoding="async"` to the HeroAvatar's image to improve runtime and rendering performance.

**WHY:** The `HeroAvatar` and `ThemeToggle` components are predominantly static UI elements that shouldn't re-render on unnecessary parent state changes. Wrapping them in `React.memo` helps prevent these excess re-renders. Applying `decoding="async"` to the hero image avoids blocking the main thread when rendering the initial frame.

# 2. Impact & Safety Matrix

| File | Action | Reason | Impact | Risk Level |
|---|---|---|---|---|
| `src/components/portfolio/HeroAvatar.tsx` | Wrap component with `React.memo` and add `decoding="async"` to `<img>` | The component does not require a re-render when its parent changes unnecessarily, and the avatar shouldn't block the main thread. | Faster page load and lighter renders | Low |
| `src/components/portfolio/ThemeToggle.tsx` | Wrap component with `React.memo` | The component has its own state derived from contexts and shouldn't re-render redundantly due to the parent's tree updates. | Improved runtime performance | Low |

# 3. Verification

- Ran `pnpm lint`, `pnpm test`, and `pnpm build` to verify standard checks.
- Build passed
- Tests passed
- Performance checked

# 4. Clean Artifacts

- Removed temporary artifacts and validated build integrity.
