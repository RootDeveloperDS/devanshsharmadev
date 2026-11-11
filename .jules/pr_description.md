## ⚡ Performance Optimization

### 1. Executive Summary
**WHAT:**
1. Added `decoding="async"` to image tags (`<img>`) across various components (`AccordionMatrix`, `Footer`, `HeroAvatar`, `ProjectsTab`, `VisarAgentButton`).
2. Deferred the execution of `sendTelegramNotification` using `requestIdleCallback` (with a `setTimeout` fallback).

**WHY:**
1. Adding `decoding="async"` offloads image decoding from the main thread, unblocking the layout engine and improving page responsiveness, particularly during complex Framer Motion animations.
2. The `sendTelegramNotification` function performs non-essential telemetry operations. Deferring its execution to idle time prevents it from blocking the main thread during high-priority user interactions and UI updates.

### 2. Impact & Safety Matrix
| File | Action | Reason | Impact | Risk Level |
|---|---|---|---|---|
| `src/components/portfolio/AccordionMatrix.tsx` | Add `decoding="async"` to `<img>` | Offload image decoding from main thread | Improved layout engine performance | Low |
| `src/components/portfolio/Footer.tsx` | Add `decoding="async"` to `<img>` | Offload image decoding from main thread | Improved layout engine performance | Low |
| `src/components/portfolio/HeroAvatar.tsx` | Add `decoding="async"` to `<img>` | Offload image decoding from main thread | Improved layout engine performance | Low |
| `src/components/portfolio/ProjectsTab.tsx` | Add `decoding="async"` to `<img>` | Offload image decoding from main thread | Improved layout engine performance | Low |
| `src/components/portfolio/VisarAgentButton.tsx` | Add `decoding="async"` to `<img>` | Offload image decoding from main thread | Improved layout engine performance | Low |
| `src/lib/telegram.ts` | Wrap logic in `requestIdleCallback` | Defer non-essential telemetry to idle time | Prevents main thread blocking | Low |

### 3. Verification
- Ensured proper types for `requestIdleCallback` casting `window` to `any` to avoid TS errors.
- Verified build and tests pass successfully.

### 4. Clean Artifacts
- Confirmed no `.patch`, `.log`, `.tmp` or scratchpads are committed.

### 💡 What:
- Optimized image rendering by adding `decoding="async"` to prevent main thread blocking during image decoding.
- Deferred the execution of non-essential telemetry (`sendTelegramNotification`) using `requestIdleCallback`.

### 🎯 Bottleneck:
- Synchronous image decoding blocking the main thread, potentially causing frame drops during animations.
- Non-essential telemetry execution synchronously blocking the main thread upon user interaction.

### 📊 Impact:
- **Before:** Image decoding occurred on the main thread, and telemetry was processed synchronously with UI interactions.
- **After:** Image decoding is offloaded, and telemetry is deferred to idle periods, resulting in a smoother, more responsive user experience.

### 🔬 Verification:
- Build passed
- Tests passed
- Performance checked
