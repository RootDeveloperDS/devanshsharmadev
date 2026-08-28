## 2024-05-18 - Memoizing visual and root level components
**Learning:** Purely visual components with no props (`HeroAvatar`) or mostly static root-level components (`TerminalTab`) re-render unnecessarily when context or state from the parent app changes.
**Action:** Wrapped `HeroAvatar` and `TerminalTab` in `React.memo` to prevent unnecessary re-renders. This is especially useful for heavy animation-driven components like `HeroAvatar`.
