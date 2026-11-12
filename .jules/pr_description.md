⚡ Performance Optimization

💡 What:
- Added `decoding="async"` to image tags (`<img />`) in `HeroAvatar`, `VisarAgentButton`, `Footer`, `AccordionMatrix`, and `ProjectsTab` components.
- Wrapped the non-essential Telegram telemetry `fetch` request in `src/lib/telegram.ts` with `requestIdleCallback` (including a `setTimeout` fallback).

🎯 Bottleneck:
- Browsers inherently decode images on the main thread, leading to potential layout blocking or stuttering during complex UI renders/animations when multiple images load simultaneously.
- Synchronous `fetch` calls for non-essential tasks (like telemetry) executed during rapid user interactions or navigations competed with React's render cycles, slightly impacting input responsiveness.

📊 Impact:
Before: Image decoding and telemetry requests potentially blocked the main thread.
After: Image decoding is explicitly offloaded from the main thread (`decoding="async"`). Background telemetry is deferred via `requestIdleCallback`, ensuring React render priority for interaction smoothness.

🔬 Verification:
- `pnpm lint` passed.
- `pnpm test` passed.
- `pnpm build` passed.
- Visual inspection not strictly required for these non-visual runtime optimizations, but fallback functionality intact.

### Impact & Safety Matrix
| File | Action | Reason | Impact | Risk Level |
|------|--------|--------|--------|------------|
| `src/components/portfolio/HeroAvatar.tsx` | Modified | Add `decoding="async"` | Offload image decoding | Low |
| `src/components/portfolio/VisarAgentButton.tsx` | Modified | Add `decoding="async"` | Offload image decoding | Low |
| `src/components/portfolio/Footer.tsx` | Modified | Add `decoding="async"` | Offload image decoding | Low |
| `src/components/portfolio/AccordionMatrix.tsx` | Modified | Add `decoding="async"` | Offload image decoding | Low |
| `src/components/portfolio/ProjectsTab.tsx` | Modified | Add `decoding="async"` | Offload image decoding | Low |
| `src/lib/telegram.ts` | Modified | Defer telemetry | Prevent main thread block | Low |
