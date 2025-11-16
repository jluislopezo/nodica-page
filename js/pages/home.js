
import { NodicaStore } from '../store.js';
import { Button } from '../components/button.js';
import { ServiceCard } from '../components/serviceCard.js';

export const HomePage = () => {
    const services = NodicaStore.getServices();
    const solutions = NodicaStore.getSolutions();
    const testimonials = [
        { name: 'Lucía Mendoza', company: 'CEO de CreceMás', quote: 'Nodica transformó nuestra operación. La automatización de facturas nos ahorró 20 horas a la semana.', avatar: 'https://i.pravatar.cc/150?img=1' },
        { name: 'Javier Ríos', company: 'Director de Logística', quote: 'La app a medida que desarrollaron es el núcleo de nuestra logística. Intuitiva, rápida y fiable.', avatar: 'https://i.pravatar.cc/150?img=3' }
    ];

    const solutionsByCategory = solutions.reduce((acc, solution) => {
        (acc[solution.category] = acc[solution.category] || []).push(solution);
        return acc;
    }, {});

    const SolutionCard = (solution) => `
        <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer flex flex-col" onclick="NodicaApp.openSolutionModal(${solution.id})">
            <div class="flex items-center mb-4">
                <div class="bg-nodica-gray p-3 rounded-full mr-4">
                   ${solution.icon}
                </div>
                <h3 class="text-md font-bold font-heading text-gray-900 flex-1">${solution.title}</h3>
            </div>
            <p class="text-gray-600 font-body text-sm flex-grow">${solution.description}</p>
        </div>
    `;

    return `
        <div id="hero-section" class="pt-32 pb-20 bg-nodica-gray text-center">
            <div class="container mx-auto px-6">
                <h1 class="text-4xl md:text-6xl font-bold font-heading text-gray-800 mb-4 animated-section">Automatiza. Conecta. Crece.</h1>
                <p class="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8 animated-section" style="transition-delay: 0.2s;">Ayudamos a las PYMEs a alcanzar su máximo potencial con soluciones tecnológicas inteligentes y a medida.</p>
                <div class="animated-section" style="transition-delay: 0.4s;">
                    ${Button({ text: 'Solicitar Diagnóstico Gratis', variant: 'primary', onClick: 'NodicaApp.openDemoModal()' })}
                </div>
            </div>
        </div>

        <section id="solutions-section" class="py-20 bg-white">
            <div class="container mx-auto px-6">
                <div class="text-center mb-16 animated-section">
                    <h2 class="text-3xl md:text-4xl font-bold font-heading">Nuestras Soluciones Clave</h2>
                    <p class="text-gray-600 mt-2 max-w-2xl mx-auto">Creamos sistemas que trabajan para ti, 24/7. Haz clic en una tarjeta para ver más.</p>
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

        <section id="services-section" class="py-20 bg-nodica-gray">
            <div class="container mx-auto px-6">
                <div class="text-center mb-12 animated-section">
                    <h2 class="text-3xl md:text-4xl font-bold font-heading">Capacidades Principales</h2>
                    <p class="text-gray-600 mt-2">Nuestras tres áreas de especialización para impulsar tu negocio.</p>
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

        <section id="benefits-section" class="py-20 bg-white">
            <div class="container mx-auto px-6">
                <div class="text-center mb-12 animated-section">
                    <h2 class="text-3xl md:text-4xl font-bold font-heading">¿Por qué Nodica?</h2>
                    <p class="text-gray-600 mt-2">Tu socio tecnológico para un crecimiento sostenible.</p>
                </div>
                <div class="grid md:grid-cols-3 gap-8 text-center">
                    <div class="animated-section" style="transition-delay: 0s;">
                        <div class="bg-nodica-blue text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl">✓</div>
                        <h3 class="text-xl font-bold mb-2">Más Eficiencia</h3>
                        <p>Reduce costos y tiempos operativos hasta en un 70%.</p>
                    </div>
                    <div class="animated-section" style="transition-delay: 0.2s;">
                         <div class="bg-nodica-blue text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl">💡</div>
                        <h3 class="text-xl font-bold mb-2">Mejores Decisiones</h3>
                        <p>Utiliza datos e IA para tomar decisiones estratégicas informadas.</p>
                    </div>
                    <div class="animated-section" style="transition-delay: 0.4s;">
                        <div class="bg-nodica-blue text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl">🚀</div>
                        <h3 class="text-xl font-bold mb-2">Escalabilidad</h3>
                        <p>Tecnología que crece contigo y se adapta a tus necesidades futuras.</p>
                    </div>
                </div>
            </div>
        </section>

        <section id="testimonials-section" class="py-20 bg-nodica-gray">
            <div class="container mx-auto px-6">
                <div class="text-center mb-12 animated-section">
                    <h2 class="text-3xl md:text-4xl font-bold font-heading">Lo que dicen nuestros clientes</h2>
                </div>
                <div class="grid md:grid-cols-2 gap-8">
                    ${testimonials.map((t, index) => `
                        <div class="bg-white p-8 rounded-lg shadow-lg animated-section" style="transition-delay: ${index * 0.2}s;">
                            <p class="text-gray-600 italic mb-4">"${t.quote}"</p>
                            <div class="flex items-center">
                                <img src="${t.avatar}" class="w-12 h-12 rounded-full mr-4" alt="${t.name}">
                                <div>
                                    <p class="font-bold">${t.name}</p>
                                    <p class="text-sm text-gray-500">${t.company}</p>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>

        <section class="bg-nodica-blue text-white text-center py-20">
            <div class="container mx-auto px-6 animated-section">
                <h2 class="text-3xl font-bold mb-4">¿Listo para transformar tu negocio?</h2>
                <p class="mb-8 max-w-2xl mx-auto">Hablemos de tus desafíos y exploremos juntos cómo la tecnología puede ser tu mayor aliado.</p>
                ${Button({ text: 'Inicia tu Transformación', variant: 'secondary', onClick: 'NodicaApp.openDemoModal()' })}
            </div>
        </section>
    `;
};
