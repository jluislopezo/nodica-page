
import { Button } from './button.js';

export const Header = () => {
    const navItems = [
        { name: 'Inicio', hash: '#/home', section: '#hero-section' },
        { name: 'Servicios', hash: '#/services', section: '#services-section' },
        { name: 'Beneficios', hash: '#/home', section: '#benefits-section' },
        { name: 'Blog', hash: '#/blog', section: '' },
    ];

    const generateLink = (item) => {
        const currentHash = window.location.hash || '#/home';
        const isHomePage = currentHash === '#/home' || currentHash.startsWith('#/home&section=');
        
        // If we're on the homepage and the item has a section, we want to scroll.
        // This applies to 'Inicio', 'Servicios', and 'Beneficios' when on the home page.
        if (isHomePage && item.section) {
            return `#/home&section=${item.section.substring(1)}`;
        }

        // If we're on another page, but the link is to a section on the homepage (e.g. Beneficios)
        if (!isHomePage && item.section && item.hash === '#/home') {
            return `#/home&section=${item.section.substring(1)}`;
        }

        // Otherwise, just go to the page defined in the hash.
        return item.hash;
    };

    return `
        <header id="main-header" class="bg-white/80 backdrop-blur-lg fixed top-0 left-0 right-0 z-50 shadow-md">
            <div class="container mx-auto px-6 py-4">
                <div class="flex items-center justify-between">
                    <a href="#/home">
                        <img src="https://nodica.pro/logo-nodica-web.png" alt="Nodica Logo" class="h-10">
                    </a>
                    <nav class="hidden md:flex items-center space-x-8">
                        ${navItems.map(item => `
                            <a href="${generateLink(item)}" 
                               class="text-gray-600 hover:text-nodica-blue transition-colors duration-300 font-medium">
                                ${item.name}
                            </a>
                        `).join('')}
                    </nav>
                    <div class="hidden md:block">
                        ${Button({ text: 'Demo IA', variant: 'primary', onClick: "NodicaApp.openDemoModal()" })}
                    </div>
                    <div class="md:hidden">
                        <button id="mobile-menu-button" class="text-gray-800 focus:outline-none">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                        </button>
                    </div>
                </div>
            </div>
            <!-- Mobile Menu -->
            <div id="mobile-menu" class="hidden md:hidden bg-white px-6 pb-4">
                <nav class="flex flex-col space-y-4">
                    ${navItems.map(item => `
                        <a href="${generateLink(item)}" 
                           class="text-gray-600 hover:text-nodica-blue transition-colors duration-300 py-2 mobile-nav-link">
                            ${item.name}
                        </a>
                    `).join('')}
                    <div class="pt-4">
                        ${Button({ text: 'Solicitar Demo IA', variant: 'primary', className: 'w-full', onClick: "NodicaApp.openDemoModal()" })}
                    </div>
                </nav>
            </div>
        </header>
    `;
};