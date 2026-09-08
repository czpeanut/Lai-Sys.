# Lai-Sys.

Static build of the 蜂神榜解題系統 (Ai 解題中心) frontend, restored from a saved
browser snapshot and reconciled against the assets served by the live
deployment on `ai-teachers-fengshen.web.app` (Firebase project
`rulin-ai-teachers`).

## Contents

- `index.html` — app shell (meta tags, CSP, theme bootstrap, SEO/JSON-LD).
- `assets/` — the compiled JS/CSS bundle and every lazily-loaded chunk the
  app can dynamically import (landing page, login, student solving flow,
  admin dashboard, warm-brand pages, KaTeX fonts, etc.).
- `icons/`, `og/`, `manifest.webmanifest`, `scrollbar.css`, `version.json` —
  the remaining static files referenced by `index.html`.
- `firebase.json` / `.firebaserc` — Hosting config reconstructed from the
  live site's response headers, for redeploying with `firebase deploy`.

## Running locally

This is a pre-built static SPA — no build step is required:

```
python3 -m http.server 8080
```

Then open `http://localhost:8080/`. The UI (landing page, theme toggle,
invite-code login modal, etc.) renders and works standalone; anything that
calls the backend (Firebase Auth/Firestore/Functions, the Gemini-backed
solving flow) talks to the real, live project the app was built against,
so those calls only succeed once this is served from a domain authorized
on that Firebase project (e.g. deployed via `firebase deploy`).
