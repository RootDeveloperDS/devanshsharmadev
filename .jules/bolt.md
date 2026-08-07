## 2024-02-18 - React Renders and Static Data
**Learning:** Component structures with heavy UI shells (`Index.tsx`) often fail to memoize expensive components (`AnimatedBackground`, `Footer`), leading to full-tree rendering when small localized state changes occur. Further, module-scoped arrays often unnecessarily reallocate memory when placed inside render cycles.
**Action:** Always favor `React.memo` and `useCallback` on high-level navigation/shell boundaries. Move pure static array definitions outside the React component scope.
