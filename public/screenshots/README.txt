Put your screenshot files in this folder.

Example:
  project1-login.png
  project1-dashboard.png
  project1-reports.png
  project2-home.png
  ...

Then in src/data/projects.js replace `src: null` with e.g.:
  { src: "/screenshots/project1-login.png", caption: "Login page" }

Recommended: 1280px+ wide PNG/JPG, under 500KB each (use TinyPNG/Squoosh).
No build config change needed — files in public/ are copied to dist/ automatically.
