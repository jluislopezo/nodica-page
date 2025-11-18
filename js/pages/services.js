import { NodicaStore } from '../store.js';
import { Button } from '../components/button.js';
import { i18n } from '../i18n.js';

export const ServicesPage = () => {
    const services = NodicaStore.getServices();
    
    return `
        <div class="bg-background-secondary pt-24">
            <header class="py-16 text-center">
                <div class="container mx-auto px-6">
                    <h1 class="text-4xl md:text-5xl font-bold font-heading text-foreground animated-section">${i18n.t('servicesPage.title')}</h1>
                    <p class="text-lg text-foreground/80 mt-4 max-w-2xl mx-auto animated-section" style="transition-delay: 0.2s;">
                        ${i18n.t('servicesPage.subtitle')}
                    </p>
                </div>
            </header>

            <main class="py-16">
                <div class="container mx-auto px-6">
                    <div class="space-y-12">
                        ${services.map((service, index) => `
                            <div class="bg-card p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-8 animated-section border border-border/20" style="transition-delay: ${index * 0.1}s;">
                                <div class="text-6xl">${service.icon}</div>
                                <div class="flex-1 text-center md:text-left">
                                    <h2 class="text-2xl font-bold font-heading mb-2">${service.title}</h2>
                                    <p class="text-foreground/90 mb-4">${service.details}</p>
                                    ${Button({ text: i18n.t('servicesPage.learnMoreButton'), variant: 'primary', onClick: `NodicaApp.openServiceModal(${service.id})` })}
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </main>
        </div>
    `;
};