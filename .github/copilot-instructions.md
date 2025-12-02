<!--
Repository: finals_namo
Purpose: Guidance for AI coding agents to be productive in this static site codebase.
-->

# Copilot / AI Agent Instructions — finals_namo

Keep guidance concise and actionable. This repo is a lightweight static site (HTML/CSS/JS). Key patterns are DOM-driven shared component injection and an in-file posts data model.

- **Big picture**: static multi-page site served as plain files. All pages (`index.html`, `about.html`, `reviews.html`, `builds.html`) load the same `style.css` and `script.js`. `script.js` injects shared components (navbar + footer) and populates content grids from an in-memory `POSTS` array.

- **Single source of shared UI**: do not edit navbar/footer copies in individual HTML files — they are overwritten by `script.js` at runtime. Update `navbarHTML` and `footerHTML` inside `script.js` to change global header/footer.

- **Where posts live**: the site uses a JS array `POSTS` at the top of `script.js`. Each post object follows this shape:

```js
{
  id: 5,
  title: "Example Title",
  excerpt: "Short summary",
  content: "<p>Full HTML content</p>",
  date: "Dec 01, 2025",
  readTime: "6 min read",
  tags: ["Tag1","Tag2"],
  type: "article",
  image: "https://..."
}
```

- **Rendering pattern**: `createPostCard(post)` returns the card HTML; pages use `document.getElementById('<grid-id>').innerHTML = POSTS.slice(...).map(...).join('')` to render. Key injection targets:
  - `#recent-posts-grid` on `index.html`
  - `#reviews-grid` on `reviews.html`
  - `#builds-grid` on `builds.html`

- **Mobile menu and interactivity**: toggle uses IDs `mobile-menu-btn` and `mobile-menu` added by the injector. Keep those IDs if modifying navbar markup.

- **Styling conventions**: design uses utility-like classes in `style.css` (`.container`, `.flex`, `.md-flex`, `.hidden`, `.card`, `.btn`, `.nav-link`, `.hero-*`). Theme variables live in `:root` (e.g. `--primary`, `--bg-color`) — change colors here.

- **External dependencies**: icons come from Lucide via CDN (`<script src="https://unpkg.com/lucide@latest"></script>`). Many UI pieces call `lucide.createIcons()` after DOM injection. Ensure network availability or vendor-lock an offline copy if offline usage is required.

- **Local dev / preview**:
  - Quick: run a local static server from the repo root.
    - Python: `python -m http.server 8000` (PowerShell: run in repo folder)
    - Node: `npx serve .` (if node installed)
  - Open `http://localhost:8000/index.html` in browser.

- **Debugging hints**:
  - Navbar/footer not updating? Confirm `script.js` executed (check DevTools network and console). The injector searches for `#navbar` and `footer` elements and replaces innerHTML.
  - Duplicate content or unexpected behavior: `script.js` currently contains repeated blocks (duplicate `POSTS` and functions). Be careful when editing — prefer consolidating duplicates into a single definition.
  - Icon placeholders require calling `lucide.createIcons()` after injection — follow the pattern already present.

- **Conventions for changes**:
  - Add posts by editing `POSTS` in `script.js` and update `createPostCard` if a new field/display is required.
  - To change global navigation structure or menu IDs, update `navbarHTML` in `script.js` and ensure event listeners (mobile toggle) still target the correct IDs.
  - Avoid editing the header/footer in each HTML file — those are static placeholders that the injector overwrites.

- **Small maintenance notes** (discoverable issues):
  - `script.js` contains repeated code blocks — consolidate before large edits to avoid inconsistent updates.
  - `window.location.pathname.endsWith('index.html')` is used to set the active nav link; if pages are served from root without filename, adjust logic accordingly.

If anything is unclear or you need more detailed rules (for example: preferred formatting for `content` HTML, or whether to vendor lucide icons), tell me which area to expand and I will iterate. 
