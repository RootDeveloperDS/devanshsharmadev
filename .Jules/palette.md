## 2024-05-18 - Missing ARIA Labels on Matrix Links
**Learning:** Found that dynamically generated social and channel links in mapping arrays often omit `aria-label` attributes, affecting screen reader accessibility for external targets.
**Action:** Always inject `aria-label` attributes dynamically when mapping external links, particularly those containing only icons or visual elements.
