# Randy Hernandez — Portfolio

A responsive, buildless portfolio built with HTML, CSS, and JavaScript. The content is grounded in the supplied résumé. The layout follows the supplied references: a compact profile header, About and Tech Stack cards alongside an experience timeline, project and certification cards, recognition, and contact details. An accessible light/dark switch remembers the visitor's selection locally. No unverified social links, gallery photos, demo links, metrics, or testimonials are used.

## Local preview

From this folder, run `python -m http.server 4173 --directory dist`, then open http://localhost:4173.

## Editing

- `dist/index.html`: profile, projects, skills, journey, and contact information.
- `dist/styles.css`: responsive styling and accessible motion preferences.
- `dist/app.js`: project dialogs, copy-email interaction, and the persistent theme switch.
- `dist/assets/`: supplied portrait, downloadable résumé, and favicon.

The site is static; contact links open the visitor's email or phone app. Fonts load from Google Fonts with local fallbacks.

## Deploy to Vercel

`vercel.json` configures a static deployment with no install or build step and serves the `dist` folder. No environment variables are required.

1. Push this project to your own GitHub repository and import that repository into Vercel.
2. Select the folder containing `vercel.json` as the Root Directory. If the repository contains this folder's contents directly, leave the root as `.`. If it contains the parent PORTFOLIO folder's contents, select `randy-hernandez`.
3. Use Framework Preset **Other**, Output Directory **dist**, and empty Build and Install Commands. These are already specified in `vercel.json`.
4. Deploy.

Alternatively, run `npx vercel --prod` from this folder and follow Vercel's sign-in and project setup prompts.

`.openai/hosting.json` belongs to the existing Sites deployment. Vercel does not use it, and it is outside the published `dist` folder. It can remain for future management of that existing site. `.vercel/` is ignored by Git because it contains local Vercel project-link settings.

Official configuration reference: https://vercel.com/docs/project-configuration/vercel-json
