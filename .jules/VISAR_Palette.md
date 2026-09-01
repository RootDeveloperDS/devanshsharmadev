## 2025-05-26 - Playwright Navigation Exact Matches
**Learning:** When using Playwright `get_by_role` to navigate tabs in this project, overlapping text (like "04 Terminal" and "Terminal") can cause strict mode violations.
**Action:** Always use `exact=True` for role locators in Playwright scripts when targeting navigation tabs (e.g., `page.get_by_role('link', name='Terminal', exact=True)`).
