
export const Footer = () => {
    const currentYear = new Date().getFullYear();
    const socialLinks = [
        { name: 'Twitter', icon: '<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>' },
        { name: 'LinkedIn', icon: '<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 2h-17A1.5 1.5 0 0 0 2 3.5v17A1.5 1.5 0 0 0 3.5 22h17a1.5 1.5 0 0 0 1.5-1.5v-17A1.5 1.5 0 0 0 20.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 1 1 8.25 6.5 1.75 1.75 0 0 1 6.5 8.25zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93-.82 0-1.62.46-1.62 1.93V19h-3v-9h2.9v1.3a3.11 3.11 0 0 1 2.7-1.4c1.55 0 3.38.99 3.38 3.54z"></path></svg>' },
    ];
    return `
        <footer class="bg-gray-900 text-white">
            <div class="container mx-auto px-6 py-12">
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 class="text-xl font-bold font-heading mb-4">Nodica</h3>
                        <p class="text-gray-400">Automatiza. Conecta. Crece.</p>
                        <div class="flex space-x-4 mt-4">
                            ${socialLinks.map(link => `
                                <a href="#" class="text-gray-400 hover:text-white transition-colors">
                                    <span class="sr-only">${link.name}</span>
                                    ${link.icon}
                                </a>
                            `).join('')}
                        </div>
                    </div>
                    <div>
                        <h4 class="font-semibold text-lg mb-4">Legal</h4>
                        <ul class="space-y-2">
                            <li><a href="#" class="text-gray-400 hover:text-white">Política de Privacidad</a></li>
                            <li><a href="#" class="text-gray-400 hover:text-white">Términos de Servicio</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 class="font-semibold text-lg mb-4">Contacto</h4>
                        <ul class="space-y-2 text-gray-400">
                            <li><p>Email: hola@nodica.com</p></li>
                            <li><p>Teléfono: +123 456 7890</p></li>
                        </ul>
                    </div>
                </div>
                <div class="mt-12 border-t border-gray-800 pt-8 text-center text-gray-500">
                    &copy; ${currentYear} Nodica. Todos los derechos reservados.
                </div>
            </div>
        </footer>
    `;
};
