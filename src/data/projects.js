// ── Edit this file to add your real info ─────────────────────────────
// How to add screenshots:
//   1. Drop PNG/JPG files into public/screenshots/  (e.g. annotation-dashboard.png)
//   2. Replace `src: null` below with `src: "/screenshots/annotation-dashboard.png"`
//   3. Update the caption. Rebuild + redeploy.
// See README.md for full guide.

export const profile = {
  name: 'Macaraig, John Francis G.',
  title: 'Computer Engineering Student · Web Developer',
  tagline:
    'Hands-on full-stack experience — from FastAPI backends and React frontends to ML-powered tools and edge AI. Below are two account-gated web projects, showcased here with screenshots for easy review.',
  email: 'frncsmcrg@gmail.com',
  phone: '09485654255',
  github: 'https://github.com/okiks91',
  linkedin: '', // TODO: add if you have one
  location: 'San Pascual, Batangas, Philippines',
  education: 'BS Computer Engineering, Westmead International School (2023 – Present)',
  skills: ['Python', 'JavaScript', 'TypeScript', 'React', 'FastAPI', 'YOLOv11', 'SAM 2.1', 'Raspberry Pi', 'Git'],
}

export const projects = [
  {
    id: 'auto-annotation',
    title: 'AI-Assisted Image Auto-Annotation Web Application',
    summary:
      'Full-stack web app that auto-annotates images and video to streamline machine-learning dataset preparation. (Personal project)',
    // General description shown at the bottom of the card
    description:
      'A self-hosted web application that automates image and video annotation for machine-learning dataset preparation. It integrates Meta’s SAM 2.1 (Segment Anything Model) for automated object segmentation across image and video inputs, with a complete annotation workflow for both. The app runs on a Raspberry Pi using its onboard HDD for dataset and database storage — so it can’t be demoed live here, and the screenshots above stand in for it.',
    // What YOU did — shown as a list at the bottom of the card
    role: [
      'Sole developer: designed and built the entire full-stack application',
      'Built the FastAPI backend and the React + TypeScript frontend (via Vite)',
      'Integrated Meta’s SAM 2.1 for automated object segmentation on images and video',
      'Implemented the annotation workflow for both image and video data',
      'Self-hosted the app on a Raspberry Pi with onboard HDD dataset/database storage',
    ],
    tech: ['React', 'TypeScript', 'Vite', 'FastAPI', 'SAM 2.1', 'Raspberry Pi'],
    accountNote:
      'Self-hosted on a Raspberry Pi (no public link) — please review the screenshots above instead.',
    screenshots: [
      { src: null, caption: 'Screenshot 1 — e.g. Dataset / project overview' },
      { src: null, caption: 'Screenshot 2 — e.g. Image auto-annotation with SAM 2.1' },
      { src: null, caption: 'Screenshot 3 — e.g. Video annotation workflow' },
      { src: null, caption: 'Screenshot 4 — e.g. Export / dataset management' },
    ],
  },
  {
    id: 'equipment-monitoring',
    title: 'Equipment and Facility Monitoring System',
    summary:
      'System tracking equipment usage, checkout/return times, and borrower history with layered auth and RBAC. (School project)',
    description:
      'A monitoring system for tracking equipment usage, checkout/return times, and borrower history. I designed and built the complete backend architecture and database schema, optimized database performance through caching, and managed the frontend and backend deployment for production use. Access is account-based with role-based permissions, so the screenshots above stand in for a live demo.',
    role: [
      'Backend Developer: designed the backend architecture and database schema',
      'Built tracking for equipment usage, checkout/return times, and borrower history',
      'Optimized database performance through caching to reduce unnecessary reads and writes',
      'Implemented layered auth: bcrypt password hashing, HMAC-SHA256 JWT, role-based access control',
      'Hardened the system: rate-limited login, secure password-reset endpoints, strict CORS whitelist',
      'Managed frontend and backend deployment for production use',
    ],
    tech: ['REST API', 'Database Design', 'JWT Auth', 'RBAC', 'Caching'],
    accountNote:
      'Live demo requires an account — please review the screenshots above instead.',
    screenshots: [
      { src: null, caption: 'Screenshot 1 — e.g. Login page' },
      { src: null, caption: 'Screenshot 2 — e.g. Equipment dashboard' },
      { src: null, caption: 'Screenshot 3 — e.g. Checkout / return + borrower history' },
    ],
  },
]
