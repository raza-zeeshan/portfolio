# Portfolio Website — Zeeshan Raza

A responsive portfolio website built with plain HTML, CSS and JavaScript to showcase projects, skills, academics and contact information.

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Files & Key Components](#files--key-components)
- [How to run locally](#how-to-run-locally)
- [Behavior & Implementation Notes](#behavior--implementation-notes)
- [Known issues & Improvements](#known-issues--improvements)
- [License & Author](#license--author)

## Overview
This repository contains a single-page portfolio site (with a few additional pages). It is built without frameworks and demonstrates responsive layout, simple animations, lazy-loading images, and small UI widgets.

## Features
- Responsive layout (desktop → mobile)
- Sticky header using IntersectionObserver
- Project filter/tabbed UI
- Smooth scroll navigation
- Animated counters for work stats
- Lazy-loading of hero/skill images
- Contact form using Formspree
- Social links and Google Maps embed

## Files & Key Components
- Main HTML
  - [index.html](index.html)
- Styles
  - [css/style.css](css/style.css)
- JavaScript
  - [index.js](index.js)
    - Key variables / functions:
      - [`heroSection`](index.js) — observed to make navbar sticky
      - [`p_btns`](index.js), [`p_btn`](index.js), [`p_img_elem`](index.js) — project tabbed component
      - [`scrollElement`](index.js) — scroll-to-top element
      - [`workSection`](index.js), [`workObserver`](index.js) — animated project counters
      - [`aboutAni`](index.js), [`aboutObserver`](index.js) — about-section animation observer
      - [`imgRef`](index.js), [`lazyImg`](index.js), [`imgObserver`](index.js) — lazy loading implementation
- Favicon & manifest
  - [image/favicon/browserconfig.xml](image/favicon/browserconfig.xml)
  - [image/favicon/manifest.json](image/favicon/manifest.json)
- VS Code settings
  - [.vscode/settings.json](.vscode/settings.json)
- Other pages (if present)
  - [about.html](about.html)
  - [contact.html](contact.html)

## How to run locally
1. Open the project folder in VS Code.
2. Use Live Server extension or open [index.html](index.html) in your browser.
   - VS Code Live Server default port is configured in [.vscode/settings.json](.vscode/settings.json) as 5501.
3. No build step required — plain static assets.

Tip: scripts are loaded with `defer` in [index.html](index.html) so JS runs after DOM parsing.

## Behavior & Implementation Notes
- Sticky header
  - The IntersectionObserver watching [`heroSection`](index.js) toggles the `sticky` class on `body` for a compact fixed header when the hero leaves viewport.
- Project tabbed component
  - Clicking inside the container `p-btns` toggles active button (`p-btn-active`) and shows images with classes like `p-btn--1` — controlled by [`p_btns`](index.js), [`p_btn`](index.js), [`p_img_elem`](index.js).
- Scroll-to-top
  - The code creates a DOM node [`scrollElement`](index.js) appended after `.footer` and scrolls the page to the hero with smooth behavior.
- Animated counters
  - When `.work-data` intersects, [`workObserver`](index.js) animates `.counter-number` elements from 0 to their `data-number` values.
- About animation
  - [`aboutObserver`](index.js) toggles animation-related class when the `.about` section enters/leaves the viewport.
- Lazy loading
  - The hero/skill image uses `data-src` and a simple IntersectionObserver (`imgObserver`) to swap `src` from `data-src` when visible. See [`imgRef`](index.js) and [`lazyImg`](index.js).
- Smooth scroll for anchors
  - jQuery snippet in [index.html](index.html) enhances anchor clicks to animate scroll. (Note: with modern browsers, CSS `scroll-behavior: smooth` or native `scrollIntoView` could replace jQuery.)
- Contact form
  - Form posts to Formspree (`action="https://formspree.io/f/xzboqwbq"`) — no server required.

## Known issues & Suggested improvements
- Accessibility
  - Add meaningful alt text where missing, and ensure inputs have visible labels.
  - Current hamburger uses an invisible checkbox — enhance keyboard accessibility.
- JS robustness
  - `querySelector` calls assume elements exist (e.g., `img[data-src]`); add checks before using `.dataset`.
- Lazy-loading
  - Use the `loading="lazy"` attribute (already used) and handle multiple lazy images rather than only a single `imgRef`.
- Dependency removal
  - jQuery is only used for scroll; replace with native smooth scroll to remove dependency.
- Performance
  - Consider optimizing images and serving responsive srcsets.
- Project filter
  - Improve ARIA attributes and keyboard navigation for project tabs.
- Deployment
  - Host on GitHub Pages or Netlify and add a production-ready manifest and favicon set.

## Contributing
- Fork the repo, create a branch, open a PR describing your changes.
- Run visual checks across major viewports when updating styles or layout.

## Author & Credits
- Author: Zeeshan Raza
- Made with ❤️
---
