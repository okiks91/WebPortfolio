# John Francis G. Macaraig — Web Portfolio

Screenshot portfolio for recruiters (live apps need accounts, so screenshots stand in for demos).
React + Vite, deploys to **Cloudflare Pages**.

## Run locally

```bash
cd portfolio
npm install
npm run dev     # http://localhost:5173
npm run build   # outputs dist/
npm run preview # preview the build
```

## Add your screenshots + real content

1. Copy PNG/JPG into `public/screenshots/` (e.g. `project1-login.png`).
   Keep each under ~500KB, 1280px+ wide.
2. Edit `src/data/projects.js`:
   - `profile`: your email, GitHub, LinkedIn.
   - `projects`: title, summary, `description` (general overview),
     `role` (what you did), `tech`, and `screenshots: [{ src, caption }]`.
   - Example: `{ src: "/screenshots/project1-login.png", caption: "Login page" }`
3. `npm run dev` to check, then `npm run build`.

## Deploy to Cloudflare Pages

Pick one:

**A. Git-connected (recommended — auto-deploys on push)**
1. Push this `portfolio/` folder to GitHub.
2. Cloudflare Dashboard → Workers & Pages → Create → Pages → Connect to Git.
3. Build settings: Framework preset `Vite`, Build command `npm run build`, Output `dist`.
4. Deploy. Every push redeploys.

**B. Direct upload via Wrangler**
```bash
npm run build
npx wrangler pages deploy dist --project-name john-macaraig-portfolio
```

**C. Dashboard direct upload**
- `npm run build` → drag the `dist/` folder into Pages → Create → Upload assets.

Custom domain: Pages project → Custom domains → Set up (optional).

## Structure

- `src/data/projects.js` — all editable content
- `src/components/ImageCarousel.jsx` — swipe / click / dots / keyboard / lightbox
- `src/components/ProjectCard.jsx` — card with screenshots on top, description + role at bottom
- `public/screenshots/` — your images (copied to dist automatically)
- `public/_headers` — security + caching headers
- `wrangler.jsonc` — Workers Static Assets config (serves `dist/`)
