## 2024-08-11 - Custom Tooltips & Interaction Feedback
**Learning:** Native `title` attributes are inconsistent across browsers and disrupt custom UI design languages. Furthermore, adding simple active states to universally used components drastically improves subjective tactile feedback.
**Action:** Replace `title` tooltips with Shadcn/Radix-UI `Tooltip` components where possible. Ensure global buttons have an `active:` interaction state using existing tailwind scaling.
