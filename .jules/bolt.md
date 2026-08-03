## 2024-08-03 - Lazy Loading React Tabs
**Learning:** Code splitting tab-based conditional rendering in React using React.lazy for non-default tabs while keeping the default tab statically imported reduces initial bundle size significantly without flicker or delay on initial load.
**Action:** Always prefer lazy-loading conditionally rendered large components (like heavy tabs) and only statically import the initial visible component.
