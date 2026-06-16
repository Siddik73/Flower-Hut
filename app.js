/**
 * Flower Hut - Client Side Script
 * Author: Tanvir Siddik
 * Year: 2026
 */

// ==========================================================================
// INLINE SVG ICONS (Completely independent of external CDN loads)
// ==========================================================================
const SUN_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>`;
const MOON_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-moon"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>`;

const MENU_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>`;
const X_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x"><line x1="18" x2="6" y1="6" y2="18"/><line x1="6" x2="18" y1="6" y2="18"/></svg>`;

const CART_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-cart"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>`;

document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide icons for static markup (fallback if available)
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    initDarkMode();
    initMobileMenu();
    initProductCatalog();
    initFAQAccordion();
    initBackToTop();
    initNewsletterValidation();
    initScrollReveal();
});

/* ==========================================================================
   THEME MANAGER (Dark / Light Mode)
   ========================================================================== */
function initDarkMode() {
    const themeBtn = document.getElementById('theme-toggle');
    if (!themeBtn) return;

    // Check saved preference or system preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
        document.body.classList.add('dark-mode');
        updateThemeIcon('dark');
    } else {
        document.body.classList.remove('dark-mode');
        updateThemeIcon('light');
    }

    themeBtn.addEventListener('click', () => {
        const isDark = document.body.classList.toggle('dark-mode');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        updateThemeIcon(isDark ? 'dark' : 'light');
    });
}

function updateThemeIcon(theme) {
    const themeBtn = document.getElementById('theme-toggle');
    if (!themeBtn) return;
    themeBtn.innerHTML = theme === 'dark' ? SUN_SVG : MOON_SVG;
}

/* ==========================================================================
   MOBILE MENU TOGGLE
   ========================================================================== */
function initMobileMenu() {
    const menuBtn = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');
    if (!menuBtn || !navLinks) return;

    menuBtn.innerHTML = MENU_SVG; // Ensure initial state has menu icon

    menuBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        navLinks.classList.toggle('active');
        const isActive = navLinks.classList.contains('active');
        menuBtn.setAttribute('aria-expanded', isActive ? 'true' : 'false');
        menuBtn.innerHTML = isActive ? X_SVG : MENU_SVG;
    });

    // Close menu when clicking outside or on a link
    document.addEventListener('click', (e) => {
        if (!navLinks.contains(e.target) && !menuBtn.contains(e.target)) {
            navLinks.classList.remove('active');
            menuBtn.setAttribute('aria-expanded', 'false');
            menuBtn.innerHTML = MENU_SVG;
        }
    });

    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            menuBtn.setAttribute('aria-expanded', 'false');
            menuBtn.innerHTML = MENU_SVG;
        });
    });
}

/* ==========================================================================
   PRODUCT CATALOG (Dynamic Rendering, Filtering, Search)
   ========================================================================== */
const PRODUCTS_DATA = [
    {
        id: 1,
        title: "Pink Rose Bonsai",
        category: "flowers",
        price: 18.00,
        originalPrice: 24.00,
        badge: "Sale",
        image: "flowerAsset/pngwing 6.png"
    },
    {
        id: 2,
        title: "Blossom Tree Miniature",
        category: "trees",
        price: 22.00,
        originalPrice: null,
        badge: "New",
        image: "flowerAsset/pngwing 5.png"
    },
    {
        id: 3,
        title: "White Jasmine Shrub",
        category: "flowers",
        price: 15.00,
        originalPrice: null,
        badge: null,
        image: "flowerAsset/pngwing 7.png"
    },
    {
        id: 4,
        title: "Spring Tulip Pot",
        category: "flowers",
        price: 12.00,
        originalPrice: 16.00,
        badge: "Sale",
        image: "flowerAsset/pngwing 10.png"
    },
    {
        id: 5,
        title: "Premium Rose Bouquet",
        category: "flowers",
        price: 30.00,
        originalPrice: null,
        badge: "Hot",
        image: "flowerAsset/Flower 01.png"
    },
    {
        id: 6,
        title: "Desert Orchid Cactus",
        category: "trees",
        price: 25.00,
        originalPrice: 30.00,
        badge: "Sale",
        image: "flowerAsset/pngwing 8.png"
    }
];

let activeFilter = 'all';
let searchQuery = '';

function initProductCatalog() {
    const grid = document.getElementById('products-grid');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const searchInput = document.getElementById('product-search');
    
    if (!grid) return;

    // Initial render
    renderProducts();

    // Setup filter buttons
    filterBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            activeFilter = btn.dataset.filter;
            renderProducts();
        });
    });

    // Setup search listener
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchQuery = e.target.value.toLowerCase().trim();
            renderProducts();
        });
    }
}

function renderProducts() {
    const grid = document.getElementById('products-grid');
    if (!grid) return;

    // Filter logic
    const filtered = PRODUCTS_DATA.filter(product => {
        const matchesCategory = activeFilter === 'all' || 
                               (activeFilter === 'deals' && product.originalPrice !== null) ||
                               product.category === activeFilter;
        const matchesSearch = product.title.toLowerCase().includes(searchQuery);
        return matchesCategory && matchesSearch;
    });

    if (filtered.length === 0) {
        grid.innerHTML = `
            <div class="text-center" style="grid-column: 1 / -1; padding: 40px 0;">
                <p style="color: var(--text-muted); font-size: 1.2rem;">No products found matching your criteria.</p>
            </div>
        `;
        return;
    }

    grid.innerHTML = filtered.map(product => {
        const badgeHTML = product.badge ? `<span class="badge badge-primary product-badge">${product.badge}</span>` : '';
        const priceHTML = product.originalPrice ? 
            `<span class="old-price">$${product.originalPrice.toFixed(2)}</span>$${product.price.toFixed(2)}` : 
            `$${product.price.toFixed(2)}`;
            
        return `
            <article class="product-card reveal" data-category="${product.category}">
                ${badgeHTML}
                <div class="product-image-container">
                    <img src="${product.image}" alt="${product.title}" loading="lazy">
                </div>
                <div class="product-info">
                    <span class="product-category">${product.category}</span>
                    <h3 class="product-title">${product.title}</h3>
                    <div class="product-price-row">
                        <span class="product-price">${priceHTML}</span>
                        <button class="add-to-cart-btn" aria-label="Add ${product.title} to cart">
                            ${CART_SVG}
                        </button>
                    </div>
                </div>
            </article>
        `;
    }).join('');
}

/* ==========================================================================
   FAQ ACCORDION INTERACTION
   ========================================================================== */
function initFAQAccordion() {
    const accordionBtns = document.querySelectorAll('.faq-question-btn');
    
    accordionBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const item = btn.parentElement;
            const isActive = item.classList.contains('active');
            
            // Close other items
            document.querySelectorAll('.faq-item').forEach(i => {
                i.classList.remove('active');
                i.querySelector('.faq-question-btn').setAttribute('aria-expanded', 'false');
            });
            
            // Toggle clicked item
            if (!isActive) {
                item.classList.add('active');
                btn.setAttribute('aria-expanded', 'true');
            }
        });
    });
}

/* ==========================================================================
   BACK TO TOP BUTTON
   ========================================================================== */
function initBackToTop() {
    const btn = document.getElementById('back-to-top');
    if (!btn) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            btn.classList.add('visible');
        } else {
            btn.classList.remove('visible');
        }
    });

    btn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

/* ==========================================================================
   FORM VALIDATION & MOCK SUBMIT
   ========================================================================== */
function initNewsletterValidation() {
    const form = document.getElementById('newsletter-form');
    const input = document.getElementById('newsletter-email');
    const status = document.getElementById('newsletter-status');

    if (!form || !input || !status) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const email = input.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!email) {
            status.style.color = '#ef4444';
            status.textContent = 'Please enter an email address.';
            return;
        }

        if (!emailRegex.test(email)) {
            status.style.color = '#ef4444';
            status.textContent = 'Please enter a valid email address.';
            return;
        }

        // Simulating successful submit
        status.style.color = 'var(--accent)';
        status.textContent = 'Subscribing...';
        
        setTimeout(() => {
            status.textContent = 'Thank you! You have successfully subscribed to our newsletter.';
            input.value = '';
            
            // Clear message after 5 seconds
            setTimeout(() => {
                status.textContent = '';
            }, 5000);
        }, 1200);
    });
}

/* ==========================================================================
   SCROLL REVEAL (Intersection Observer)
   ========================================================================== */
function initScrollReveal() {
    const reveals = document.querySelectorAll('.reveal');
    if (reveals.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Optional: Stop observing after reveal
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    });

    reveals.forEach(reveal => {
        observer.observe(reveal);
    });
}
