## 2024-03-22 - Subtle Interaction Cues

**Learning:** When developing high-end interactive portfolios, utilizing a simple scale transition (`active:scale-95` + `transition-all duration-200`) provides a very satisfying, premium tactile click feel without over-engineering complex JS-driven animations. Adding focus rings (`focus:ring-1 focus:ring-primary`) further solidifies keyboard accessibility ensuring all interactions provide expected feedback.

**Action:** Standardized on `active:scale-95` for links/buttons across top navigation to standardize tactile response. Appended robust focus ring styles (`focus:ring-1 focus:ring-primary transition-all duration-200`) to form inputs simulating active terminal states. Playwright verification confirms visual application across simulated `mousedown` and `focus` events without navigation redirects interfering.
