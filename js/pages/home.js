import { NodicaStore } from '../store.js';
import { Button } from '../components/button.js';
import { ServiceCard } from '../components/serviceCard.js';
import { i18n } from '../i18n.js';

export const HomePage = () => {
    const services = NodicaStore.getServices();
    const solutions = NodicaStore.getSolutions();
    const testimonials = [
        { name: 'Lucía Mendoza', company: 'CEO de CreceMás', quote: i18n.t('home.testimonial1'), avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&q=80&fm=jpg&crop=face&cs=tinysrgb&w=150&h=150&fit=crop' },
        { name: 'Javier Ríos', company: 'Director de Logística', quote: i18n.t('home.testimonial2'), avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&q=80&fm=jpg&crop=face&cs=tinysrgb&w=150&h=150&fit=crop' }
    ];

    const solutionsByCategory = solutions.reduce((acc, solution) => {
        (acc[solution.category] = acc[solution.category] || []).push(solution);
        return acc;
    }, {});

    const SolutionCard = (solution) => `
        <div class="bg-card rounded-xl shadow-sm border border-border/20 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer flex flex-col overflow-hidden" onclick="NodicaApp.openSolutionModal(${solution.id})">
            <img src="${solution.cardImage}" alt="${solution.title}" class="w-full h-32 object-cover">
            <div class="p-6 flex flex-col flex-grow">
                <div class="flex items-center mb-4">
                    <div class="bg-background-secondary p-3 rounded-full mr-4 flex-shrink-0">
                       ${solution.icon}
                    </div>
                    <h3 class="text-md font-bold font-heading text-foreground flex-1">${solution.title}</h3>
                </div>
                <p class="text-foreground/80 font-body text-sm flex-grow">${solution.description}</p>
            </div>
        </div>
    `;

    return `
        <div id="hero-section" class="pt-32 pb-20 bg-background text-center">
            <div class="container mx-auto px-6">
                <h1 class="text-4xl md:text-6xl font-bold font-heading text-foreground mb-4 animated-section">${i18n.t('home.heroTitle')}</h1>
                <p class="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto mb-8 animated-section" style="transition-delay: 0.2s;">${i18n.t('home.heroSubtitle')}</p>
                <div class="animated-section" style="transition-delay: 0.4s;">
                    ${Button({ text: i18n.t('home.heroButton'), variant: 'primary', onClick: 'NodicaApp.openDemoModal()' })}
                </div>
            </div>
        </div>

        <section id="services-section" class="py-20 bg-background">
            <div class="container mx-auto px-6">
                <div class="text-center mb-12 animated-section">
                    <h2 class="text-3xl md:text-4xl font-bold font-heading">${i18n.t('home.servicesTitle')}</h2>
                    <p class="text-foreground/80 mt-2">${i18n.t('home.servicesSubtitle')}</p>
                </div>
                <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    ${services.map((service, index) => `
                        <div class="animated-section" style="transition-delay: ${index * 0.1}s;">
                            ${ServiceCard({ service })}
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>

        <section id="solutions-section" class="py-20 bg-background-secondary">
            <div class="container mx-auto px-6">
                <div class="text-center mb-16 animated-section">
                    <h2 class="text-3xl md:text-4xl font-bold font-heading">${i18n.t('home.solutionsTitle')}</h2>
                    <p class="text-foreground/80 mt-2 max-w-2xl mx-auto">${i18n.t('home.solutionsSubtitle')}</p>
                </div>

                ${Object.entries(solutionsByCategory).map(([category, solutionsInCategory], categoryIndex) => `
                    <div class="mb-16 animated-section" style="transition-delay: ${categoryIndex * 0.2}s;">
                        <div class="flex items-center mb-6">
                            <span class="w-1 h-8 bg-nodica-blue block mr-4 rounded-full"></span>
                            <h3 class="text-2xl font-semibold font-heading">${category}</h3>
                        </div>
                        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            ${solutionsInCategory.map(solution => SolutionCard(solution)).join('')}
                        </div>
                    </div>
                `).join('')}
            </div>
        </section>

        <section id="benefits-section" class="py-20 bg-background">
            <div class="container mx-auto px-6">
                <div class="text-center mb-12 animated-section">
                    <h2 class="text-3xl md:text-4xl font-bold font-heading">${i18n.t('home.benefitsTitle')}</h2>
                    <p class="text-foreground/80 mt-2">${i18n.t('home.benefitsSubtitle')}</p>
                </div>
                <div class="grid md:grid-cols-3 gap-8 text-center">
                    <div class="animated-section" style="transition-delay: 0s;">
                        <div class="bg-nodica-blue text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl">✓</div>
                        <h3 class="text-xl font-bold mb-2">${i18n.t('home.benefit1Title')}</h3>
                        <p>${i18n.t('home.benefit1Desc')}</p>
                    </div>
                    <div class="animated-section" style="transition-delay: 0.2s;">
                         <div class="bg-nodica-blue text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl">💡</div>
                        <h3 class="text-xl font-bold mb-2">${i18n.t('home.benefit2Title')}</h3>
                        <p>${i18n.t('home.benefit2Desc')}</p>
                    </div>
                    <div class="animated-section" style="transition-delay: 0.4s;">
                        <div class="bg-nodica-blue text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl">🚀</div>
                        <h3 class="text-xl font-bold mb-2">${i18n.t('home.benefit3Title')}</h3>
                        <p>${i18n.t('home.benefit3Desc')}</p>
                    </div>
                </div>
            </div>
        </section>

        <section id="testimonials-section" class="py-20 bg-background-secondary">
            <div class="container mx-auto px-6">
                <div class="text-center mb-12 animated-section">
                    <h2 class="text-3xl md:text-4xl font-bold font-heading">${i18n.t('home.testimonialsTitle')}</h2>
                </div>
                <div class="grid md:grid-cols-2 gap-8">
                    ${testimonials.map((t, index) => `
                        <div class="bg-card p-8 rounded-lg shadow-lg animated-section border border-border/20" style="transition-delay: ${index * 0.2}s;">
                            <p class="text-foreground/80 italic mb-4">"${t.quote}"</p>
                            <div class="flex items-center">
                                <img src="${t.avatar}" class="w-12 h-12 rounded-full mr-4 object-cover" alt="${t.name}">
                                <div>
                                    <p class="font-bold">${t.name}</p>
                                    <p class="text-sm text-foreground/60">${t.company}</p>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>

        <section class="bg-nodica-blue text-white text-center py-20">
            <div class="container mx-auto px-6 animated-section">
                <h2 class="text-3xl font-bold mb-4">${i18n.t('home.ctaTitle')}</h2>
                <p class="mb-8 max-w-2xl mx-auto">${i18n.t('home.ctaSubtitle')}</p>
                ${Button({ text: i18n.t('home.ctaButton'), variant: 'secondary', onClick: 'NodicaApp.openDemoModal()' })}
            </div>
        </section>
    `;
};