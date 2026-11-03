## 2024-11-02 - Tactile Feedback and Smooth Animations
**Learning:** Adding subtle active scale interactions to buttons makes the UI feel much more responsive and premium. Replacing gap-shifting hover animations with transform-based translations prevents layout jumps and jitter, leading to a much smoother UX.
**Action:** Apply `active:scale-95` to standard buttons. Ensure hover animations on anchors or buttons don't shift layout, using `group` and `group-hover:translate-*` on inner elements instead of animating gaps or margins.
