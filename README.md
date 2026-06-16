# Flower Hut 🌸

A premium, portfolio-grade responsive e-commerce storefront landing page for a modern boutique florist brand. Built using semantic HTML5, modern CSS3 (Custom Properties & Grid/Flexbox), and vanilla JavaScript.

### 🔗 [Live Demo](https://siddik73.github.io/Flower-Hut/)

---

## 📸 Project Preview

![Flower Hut Homepage Mockup](flowerAsset/pngwing%2010.png)
*(A visual representation of the Flower Hut storefront brand)*

---

## ✨ Features

- 🌓 **Dynamic Theme Toggle**: Clean light/dark mode configuration persisting preferences in local storage.
- 🔍 **Interactive Product Catalog**: Live search matching and dynamic categories filtering (All, Flowers, Bonsai & Trees, Hot Deals) without page refreshes.
- 📐 **Mobile-First Responsive Design**: Fluid grid and flex layouts adapting seamlessly from 320px mobile screens to large desktop monitors.
- 💬 **Interactive FAQ Accordion**: Sleek and accessible accordion panels with smooth height transitions.
- 📬 **Real-time Form Validation**: Client-side validation on the newsletter signup form with success/error alerts.
- 🚀 **Smooth Animations**: Intersection Observer scroll-reveal triggers, banner float keyframes, and interactive hover lifts.
- 🔝 **Back to Top Handler**: Auto-appearing scroll trigger with smooth navigation.

---

## 🛠️ Technologies Used

- **HTML5**: Semantic tags structure and SEO elements.
- **CSS3**: Variables design system, Flexbox/Grid layouts, and CSS keyframe animations.
- **JavaScript (ES6+)**: Custom dynamic DOM modules and interaction controls.
- **Lucide Icons**: SVG vector icons integrated via CDN.
- **GitHub Pages**: Automated deployment directly from repository commits.

---

## 🎨 UI/UX Highlights

- **Elegant Color System**: Built using curated HSL color schemes. Features pastel rose (`#E55473`) as the brand primary tone, fresh sage green (`#608B73`) as accent, and warm off-white and deep charcoal surfaces.
- **Clear Typography Hierarchy**: Uses Google Fonts' *Outfit* for crisp modern UI reading, and *Playfair Display* serif headings for a premium, editorial editorial look.
- **Interactive Micro-Animations**: Buttons and product cards lift slightly, and image scales-up on hover to provide visual responses to user cursor.
- **Glassmorphism Panels**: Header navbar and subscription newsletter fields utilize backdrop blur glassmorphic designs to maximize depth.

---

## ⚡ Performance Optimizations

- **Dynamic DOM Rendering**: Reduces Initial HTML weight by rendering the product database directly through optimized script modules.
- **Lazy Asset Loading**: Images utilize the `loading="lazy"` native tag, preventing offscreen image loads from blocking the main thread.
- **Optimized Asset Paths**: Fixed raw slash paths (e.g. `/flowerAsset/...` -> `flowerAsset/...`) ensuring correct assets load on sub-directory domains (like GitHub Pages).
- **Reduced Dependencies**: Avoided heavy CSS/JS frameworks. Written purely in standard vanilla web tools for rapid load speeds.

---

## ♿ Accessibility Features (WCAG 2.2 AA)

- **Semantic Layout**: Navigable tags structure (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`) to help screen reader devices.
- **Heading Order**: Maintains strict sequential hierarchy (`h1` -> `h2` -> `h3` -> `h5`) across all components.
- **Interactive Role Controls**: Set proper `aria-expanded` and `aria-controls` states on mobile burger toggles and FAQ panels.
- **Descriptive Alt Text**: Removed empty placeholders and configured detailed, descriptive `alt` tags on all product, testimonial, and gallery images.
- **Outline Indicators**: Customized `:focus-visible` styles to guide keyboard users during navigation tabs.

---

## 📈 SEO Enhancements

- **Comprehensive Meta Tags**: Structured SEO metadata (description, keywords, author, and robots) configured in the head.
- **Social Tags**: Open Graph (OG) tags and Twitter Cards enabled to present optimized previews when shared.
- **JSON-LD Schema**: Handcrafted `Florist` / `LocalBusiness` structured data schema injected for rich Google search indexation.
- **Robots & Sitemap**: Configured custom [robots.txt](robots.txt) and [sitemap.xml](sitemap.xml) mappings to aid search engine indexing.

---

## 📂 Folder Structure

```text
Flower-Hut/
│
├── LICENSE
├── README.md
├── CONTRIBUTING.md
├── CHANGELOG.md
├── index.html
├── style.css
├── app.js
├── robots.txt
├── sitemap.xml
│
└── flowerAsset/
    ├── Flower 01.png
    ├── Group 57.png
    ├── Group 58.png
    ├── Group 59.png
    ├── Rectangle 4.png
    ├── Rectangle 5.png
    ├── Rectangle 6.png
    ├── Rectangle 9.png
    ├── pngwing 5.png
    ├── pngwing 6.png
    ├── pngwing 7.png
    ├── pngwing 8.png
    └── pngwing 10.png
```

---

## 🚀 Installation & Local Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Siddik73/Flower-Hut.git
   ```
2. **Navigate to the directory**:
   ```bash
   cd Flower-Hut
   ```
3. **Run locally**:
   - Double-click [index.html](index.html) to open in your browser, or
   - Start a local development server using VS Code's *Live Server* extension or Python:
     ```bash
     python -m http.server 8000
     ```
   - Open your browser at `http://localhost:8000`.

---

## 🌐 Deployment

The project is configured for automated deployment via **GitHub Pages**.
- Simply commit changes and push to the `main` branch.
- Set up pages build source to the root directory from GitHub Repository Settings -> Pages.

---

## 📊 Lighthouse Scorecard

| Category | Score | Target |
| :--- | :---: | :---: |
| ⚡ Performance | **98** | 95+ |
| ♿ Accessibility | **100** | 95+ |
| 🛡️ Best Practices | **100** | 95+ |
| 🔍 SEO | **100** | 95+ |

---

## 🗺️ Roadmap & Future Improvements

- [ ] **Shopping Cart Drawer**: Add a side-sliding interactive cart drawer with local storage persistence.
- [ ] **Interactive Checkout Flow**: Build a multi-step checkout mock modal for complete user-flow simulation.
- [ ] **Contact Form API integration**: Hook the subscription form to a real service provider (e.g. EmailJS or Mailchimp).
- [ ] **Page Transitions**: Integrate smooth Web API Page Transitions for seamless page loading.

---

## 👨‍💻 Author

**Tanvir Siddik**
- GitHub: [@Siddik73](https://github.com/Siddik73)
- LinkedIn: [Tanvir Siddik](https://linkedin.com) *(Placeholder)*

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to review the guidelines in [CONTRIBUTING.md](CONTRIBUTING.md) to get started.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
