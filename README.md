# Randy Hernandez — Portfolio

A responsive, buildless portfolio built with HTML, CSS, and JavaScript. The content is grounded in the supplied résumé. The layout follows the supplied references: a compact profile header, About and Tech Stack cards alongside an experience timeline, project and certification cards, recognition, and contact details. An accessible light/dark switch remembers the visitor's selection locally. No unverified social links, gallery photos, demo links, metrics, or testimonials are used.

## Local preview

From this folder, run `python -m http.server 4173 --directory dist`, then open http://localhost:4173.

## Editing

- `dist/index.html`: profile, projects, skills, journey, and contact information.
- `dist/styles.css`: responsive styling and accessible motion preferences.
- `dist/app.js`: project dialogs, copy-email interaction, and the persistent theme switch.
- `dist/assets/`: supplied portrait, downloadable résumé, and favicon.

The site is static; contact links open the visitor's email or phone app. Fonts load from Google Fonts with local fallbacks. Hosting identity is in `.openai/hosting.json`.
