# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.0.0] - 2026-06-17

### Added
- Created brand-new `app.js` containing interactive client-side logic.
- Implemented Dark Mode toggler with persistence in browser `localStorage`.
- Added dynamic interactive search bar and category filters (All, Trees, Flowers, Deals) for products.
- Created interactive FAQ accordion section with smooth toggle animations.
- Added Back-to-Top button with smooth-scroll positioning.
- Added real-time newsletter form validation and mock successful status feedback.
- Created Open Source documents: `LICENSE` (MIT), `CONTRIBUTING.md`, and `CHANGELOG.md`.
- Added SEO files: `robots.txt` and `sitemap.xml`.
- Integrated Google Fonts (*Outfit* for UI and *Playfair Display* for typography hierarchy).
- Added Lucide Icons via CDN for modern typography indicators.

### Changed
- Fully redesigned layout using modern CSS Grid and Flexbox layouts.
- Replaced legacy static layouts with a responsive fluid design system based on CSS variables.
- Upgraded HTML to use semantic HTML5 elements (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`).
- Standardized color system with professional HSL-based palettes (Sage, Soft Rose, Cream, and Charcoal).
- Enhanced web accessibility to WCAG 2.2 AA standards (added ARIA labels, semantic outlines, and corrected image alt descriptions).
- Rewrote the repository's `README.md` to present a portfolio-ready open-source highlight sheet.

### Fixed
- Resolved broken asset paths (e.g. `/flowerAsset/` absolute paths changed to local relative directories) which prevented image loads on GitHub Pages.
- Cleaned up redundant styles and repeated CSS code blocks.

---

## [1.0.0] - 2023-07-11

### Added
- Initial static HTML/CSS structure for the Flower Shop webpage.
- Basic sections: Banner, Featured Flowers, Support block, Hot Deal, Instagram layout, and Footer.
- Included static visual assets.
