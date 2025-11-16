
import { HomePage } from './pages/home.js';
import { ServicesPage } from './pages/services.js';
import { BlogPage } from './pages/blog.js';
import { BlogPostPage } from './pages/blogPost.js';
import { AdminPage } from './pages/admin.js';
import { initAnimatedSections } from './components/animatedSection.js';

const routes = {
    '#/home': HomePage,
    '#/services': ServicesPage,
    '#/blog': BlogPage,
    '#/admin': AdminPage
};

const dynamicRoutes = [
    { path: /#\/blog\/(\d+)/, handler: BlogPostPage }
];

let currentPageKey = null;

function handleScroll(sectionId) {
    // Use a short timeout to ensure the DOM has been painted
    setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
            const headerOffset = 80; // Approximate height of the fixed header
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    }, 100);
}


function renderPage() {
    const originalHash = window.location.hash || '#/home';
    const contentEl = document.getElementById('page-content');
    if (!contentEl) return;

    let handler = null;
    let params = null;
    let pageKey = originalHash;
    let sectionToScroll = null;

    // 1. Parse the hash to determine the page key and any scroll target
    const sectionMatch = originalHash.match(/#\/home&section=(.*)/);
    if (sectionMatch) {
        pageKey = '#/home';
        sectionToScroll = sectionMatch[1];
    }

    // 2. Optimization: If it's the same page content, just scroll
    if (pageKey === currentPageKey && sectionToScroll) {
        handleScroll(sectionToScroll);
        return;
    }

    // 3. Find the correct page handler
    if (routes[pageKey]) {
        handler = routes[pageKey];
    } else {
        for (const route of dynamicRoutes) {
            const match = pageKey.match(route.path);
            if (match) {
                handler = route.handler;
                params = { id: match[1] };
                break;
            }
        }
    }

    // 4. Render the page content or 404
    if (handler) {
        contentEl.innerHTML = handler(params);
    } else {
        contentEl.innerHTML = `<div class="text-center py-40">
            <h1 class="text-4xl font-bold">404 - Página no encontrada</h1>
            <a href="#/home" class="text-nodica-blue mt-4 inline-block">Volver al inicio</a>
        </div>`;
        pageKey = '404'; // Assign a key for 404 state
    }
    
    // 5. Update state and side effects
    currentPageKey = pageKey;
    initAnimatedSections();

    // 6. Handle scrolling
    if (sectionToScroll) {
        handleScroll(sectionToScroll);
    } else {
        window.scrollTo(0, 0);
    }
}


function init() {
    window.addEventListener('hashchange', renderPage);
    window.addEventListener('load', renderPage);
}

export const NodicaRouter = { init, renderPage };
