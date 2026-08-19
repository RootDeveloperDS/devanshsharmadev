## 2024-05-19 - [Lazy Loading Dialog Components]
**Learning:** [Heavy dialog/modal components that are hidden by default should be lazy-loaded to reduce initial bundle size, but global keyboard shortcuts they depend on must be hoisted to parent components to preserve UX.]
**Action:** [Always hoist necessary event listeners to a parent when lazy-loading a component that depends on user input to mount.]
