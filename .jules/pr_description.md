## Executive Summary
This PR implements non-blocking telemetry and optimizes rendering. The `sendTelegramNotification` function now executes asynchronously using `requestIdleCallback` (with a `setTimeout` fallback), preventing telemetry collection from blocking the main thread during navigation transitions and initial load. Additionally, `decoding="async"` has been applied to various `<img/>` elements to offload image decoding, improving Framer Motion animation performance.

## Impact & Safety Matrix
| File Changed / Removed | Action | Technical Reason | Post-Removal/Update Impact | Risk Level |
| :--- | :--- | :--- | :--- | :--- |
| `src/lib/telegram.ts` | Modified | Prevent telemetry from blocking main thread operations | Telegram logging now non-blocking | 🟡 Med |
| `src/components/portfolio/Footer.tsx` | Modified | Improve image rendering efficiency | Image decoding offloaded | 🟢 Low |
| `src/components/portfolio/ProjectsTab.tsx` | Modified | Improve image rendering efficiency | Image decoding offloaded | 🟢 Low |
| `src/components/portfolio/AccordionMatrix.tsx` | Modified | Improve image rendering efficiency | Image decoding offloaded | 🟢 Low |
| `src/components/portfolio/HeroAvatar.tsx` | Modified | Improve image rendering efficiency | Image decoding offloaded | 🟢 Low |
| `src/components/portfolio/VisarAgentButton.tsx` | Modified | Improve image rendering efficiency | Image decoding offloaded | 🟢 Low |

## Verification
- Verified `pnpm build` completed successfully.
- Verified `pnpm test` executed and passed successfully.
- Checked TS/React build errors (all clear except unrelated pre-existing linting warnings).

## Clean Artifacts
Ensured no `.patch`, `.tmp`, or `.log` files remain.