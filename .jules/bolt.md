## 2024-05-18 - Performance Optimizations
**Learning:** Utilizing requestIdleCallback defers non-critical execution (like telemetry) to prevent UI blocking, and using React.memo efficiently limits re-renders for purely visual components with no props like HeroAvatar.
**Action:** Default to using requestIdleCallback for any non-essential background tasks, and proactively wrap heavy visual elements with React.memo when building complex dashboards.
