# Performance Lab — Front-end Performance Optimization

A small responsive article-style page demonstrating practical front-end performance techniques using HTML, CSS, SVG, and vanilla JavaScript.

## Run locally
Open `index.html` in a browser. No build step or package installation is required. For a more representative Lighthouse run, serve this folder over localhost with a simple static server.

## Optimizations included
- Small SVG illustration instead of a large raster hero image.
- Explicit hero image width and height to reserve layout space.
- Preload for the critical above-the-fold SVG and `fetchpriority="high"` for the hero.
- Deferred JavaScript (`defer`) so it does not block HTML parsing.
- Compact production files (`styles.min.css` and `app.min.js`) referenced by the page.
- No external fonts, JavaScript libraries, trackers, or third-party requests.
- Responsive CSS, keyboard focus indicators, skip link, semantic landmarks, and reduced-motion support.
- Small interactive checklist with only one lightweight event handler per checkbox.

## Performance validation
Run Lighthouse in Chrome DevTools (Performance category) or PageSpeed Insights using a publicly reachable deployment. Record the real scores and Core Web Vitals in the report. Scores vary by device, browser version, network, and hosting. This repository does not claim that a live Lighthouse run has already been completed.

## Project structure
- `index.html` — page markup and resource hints
- `styles.css` — readable source stylesheet
- `styles.min.css` — compact stylesheet used by the page
- `app.js` — readable interaction source
- `app.min.js` — compact script used by the page
- `assets/hero.svg` — lightweight vector illustration
- `PERFORMANCE_REPORT.md` — audit method, findings, and results template
