import { i18n } from '../i18n.js';

export const Footer = () => {
    const currentYear = new Date().getFullYear();
    const socialLinks = [
        { name: 'Twitter', href: 'https://x.com/nodicapro', icon: '<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>' },
        { name: 'LinkedIn', href: 'https://www.linkedin.com/in/nodica-pro-720289392/', icon: '<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 2h-17A1.5 1.5 0 0 0 2 3.5v17A1.5 1.5 0 0 0 3.5 22h17a1.5 1.5 0 0 0 1.5-1.5v-17A1.5 1.5 0 0 0 20.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 1 1 8.25 6.5 1.75 1.75 0 0 1 6.5 8.25zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93-.82 0-1.62.46-1.62 1.93V19h-3v-9h2.9v1.3a3.11 3.11 0 0 1 2.7-1.4c1.55 0 3.38.99 3.38 3.54z"></path></svg>' },
        { name: 'Facebook', href: 'https://www.facebook.com/nodicapro/', icon: '<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33V21.878A10.001 10.001 0 0022 12z" clip-rule="evenodd" /></svg>'}
    ];
    return `
        <footer class="bg-card border-t border-border/20">
            <div class="container mx-auto px-6 py-12">
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 class="text-xl font-bold font-heading mb-4">Nodica</h3>
                        <p class="text-foreground/70">${i18n.t('footer.slogan')}</p>
                        <div class="flex space-x-4 mt-4">
                            ${socialLinks.map(link => `
                                <a href="${link.href}" target="_blank" rel="noopener noreferrer" class="text-foreground/70 hover:text-foreground transition-colors">
                                    <span class="sr-only">${link.name}</span>
                                    ${link.icon}
                                </a>
                            `).join('')}
                        </div>
                    </div>
                    <div>
                        <h4 class="font-semibold text-lg mb-4">${i18n.t('footer.legal')}</h4>
                        <ul class="space-y-2">
                            <li><a href="#" onclick="event.preventDefault(); NodicaApp.openLegalModal('privacy')" class="text-foreground/70 hover:text-foreground">${i18n.t('footer.privacy')}</a></li>
                            <li><a href="#" onclick="event.preventDefault(); NodicaApp.openLegalModal('terms')" class="text-foreground/70 hover:text-foreground">${i18n.t('footer.terms')}</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 class="font-semibold text-lg mb-4">${i18n.t('footer.contact')}</h4>
                        <ul class="space-y-2 text-foreground/70">
                            <li><a href="mailto:info@nodica.pro" class="hover:text-foreground transition-colors">${i18n.t('footer.email')}</a></li>
                            <li><a href="tel:+5218345088993" class="hover:text-foreground transition-colors">${i18n.t('footer.phone')}</a></li>
                        </ul>
                    </div>
                </div>
                <div class="mt-12 border-t border-border pt-8 text-center text-foreground/50">
                    &copy; ${currentYear} Nodica. ${i18n.t('footer.rights')}
                </div>
            </div>
        </footer>
    `;
};