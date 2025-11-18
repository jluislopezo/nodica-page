import { Button } from './button.js';
import { i18n } from '../i18n.js';

export const Header = () => {
    const navItems = [
        { name: i18n.t('header.navHome'), hash: '#/home', section: '#hero-section' },
        { name: i18n.t('header.navServices'), hash: '#/services', section: '#services-section' },
        { name: i18n.t('header.navBenefits'), hash: '#/home', section: '#benefits-section' },
        { name: i18n.t('header.navBlog'), hash: '#/blog', section: '' },
    ];

    const generateLink = (item) => {
        const currentHash = window.location.hash || '#/home';
        const isHomePage = currentHash === '#/home' || currentHash.startsWith('#/home&section=');
        
        if (isHomePage && item.section) {
            return `#/home&section=${item.section.substring(1)}`;
        }

        if (!isHomePage && item.section && item.hash === '#/home') {
            return `#/home&section=${item.section.substring(1)}`;
        }

        return item.hash;
    };

    const lang = i18n.getLang();
    const isSpanish = lang === 'es';

    const flagES = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4 2" class="w-6 h-auto rounded-sm"><path fill="#AA151B" d="M0 0h4v2H0z"/><path fill="#F1B300" d="M0 0.5h4v1H0z"/></svg>`;
    const flagUS = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 10" class="w-6 h-auto rounded-sm"><path fill="#E0162B" d="M0 0h19v10H0z"/><path fill="#fff" d="M0 1h19v1H0zm0 2h19v1H0zm0 2h19v1H0zm0 2h19v1H0z"/><path fill="#002664" d="M0 0h9.5v5H0z"/></svg>`;

    const langToggleButton = `
        <button
            onclick="NodicaApp.toggleLang()"
            class="p-2 rounded-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-nodica-blue hover:scale-110"
            aria-label="${isSpanish ? 'Switch to English' : 'Cambiar a Español'}"
        >
            ${isSpanish ? flagUS : flagES}
        </button>
    `;

    const themeToggleButton = `
        <button
            onclick="NodicaApp.toggleTheme()"
            class="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-nodica-blue dark:hover:text-nodica-blue transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-nodica-blue"
            aria-label="Toggle dark mode"
        >
            <svg class="w-6 h-6 hidden dark:block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
            <svg class="w-6 h-6 block dark:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
        </button>
    `;

    return `
        <header id="main-header" class="bg-card/80 backdrop-blur-lg fixed top-0 left-0 right-0 z-50 shadow-md dark:shadow-lg dark:shadow-black/20 border-b border-border/20">
            <div class="container mx-auto px-6 py-4">
                <div class="flex items-center justify-between">
                    <a href="#/home">
                        <img src="https://nodica.pro/logo-nodica-web.png" alt="Nodica Logo" class="h-12 w-auto">
                    </a>
                    <nav class="hidden md:flex items-center space-x-8">
                        ${navItems.map(item => `
                            <a href="${generateLink(item)}" 
                               class="text-gray-600 dark:text-gray-300 hover:text-nodica-blue transition-colors duration-300 font-medium">
                                ${item.name}
                            </a>
                        `).join('')}
                    </nav>
                    <div class="hidden md:flex items-center space-x-4">
                        ${langToggleButton}
                        ${Button({ text: i18n.t('header.demoButton'), variant: 'primary', onClick: "NodicaApp.openDemoModal()" })}
                        ${themeToggleButton}
                    </div>
                    <div class="md:hidden">
                        <button id="mobile-menu-button" class="text-foreground focus:outline-none">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                        </button>
                    </div>
                </div>
            </div>
            <!-- Mobile Menu -->
            <div id="mobile-menu" class="hidden md:hidden bg-card px-6 pb-4 border-t border-border">
                <nav class="flex flex-col space-y-4 pt-4">
                    ${navItems.map(item => `
                        <a href="${generateLink(item)}" 
                           class="text-gray-600 dark:text-gray-300 hover:text-nodica-blue transition-colors duration-300 py-2 mobile-nav-link text-center text-lg">
                            ${item.name}
                        </a>
                    `).join('')}
                    <div class="border-t border-border/20 mt-4 pt-4 flex items-center justify-center space-x-6">
                        ${langToggleButton}
                        ${Button({ text: i18n.t('header.demoButton'), variant: 'primary', onClick: "NodicaApp.openDemoModal()" })}
                        ${themeToggleButton}
                    </div>
                </nav>
            </div>
        </header>
    `;
};