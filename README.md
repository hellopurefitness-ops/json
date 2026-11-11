# Ember & Oak — React website on Webflow Cloud (Astro + React)

React components rendered by Astro, deployed on Webflow Cloud. The **Recipes**
section loads live content from your Webflow CMS.

## How the CMS connection works

```
Browser ──► /api/recipes  (src/pages/api/recipes.ts, runs on the server)
                 │  uses WEBFLOW_API_TOKEN (secret, never sent to the browser)
                 ▼
          Webflow CMS API → your published "Recipes" items
```

## Deploy to Webflow Cloud

1. Replace the files in your GitHub repo (`json`) with the contents of this folder.
   `package.json` must be at the **top level** of the repo.
   Delete the old `vite.config.js`, `index.html` and `src/main.jsx` if they are still there.
2. In Webflow → **json** app → **Environment variables**, add:
   - `WEBFLOW_API_TOKEN` — your site API token with *CMS: Read-only* (tick **Secret**)
   - `COLLECTION_ID` — `6af4b99fa6cf8d3adf5cab67` (Recipes)
3. Commit and push. Webflow Cloud builds and deploys automatically.
4. Open your site and scroll to **Recipes**, or open `/api/recipes` to see the raw data.

Only **published** CMS items appear.

## Run locally (optional)

```bash
npm install
cp dev.vars.example dev.vars   # then put your token in dev.vars
npm run dev
```

Requires Node.js 22.12+. Never commit `dev.vars` (it's in `.gitignore`).

## Edit content

- **Recipes** — in the Webflow CMS (Designer → CMS → Recipes). Every custom field
  (Ingredients, Directions, Recipe History, images…) shows up automatically.
- **Everything else** (menu, beans, hours, contact) — `src/data.js`.
- **Colors & fonts** — CSS variables at the top of `src/styles.css`.

## Troubleshooting

- *"Missing WEBFLOW_API_TOKEN or COLLECTION_ID"* — add the variables, then push a new commit
  (variables apply on the next deployment).
- *"Webflow API returned 401/403"* — token is wrong, expired, or lacks CMS read access.
- *"Webflow API returned 404"* — the Collection ID is wrong.
- Build fails — check **Deployments → build logs** in Webflow Cloud and share the error.
