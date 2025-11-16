
export const Footer = () => {
    const currentYear = new Date().getFullYear();
    const socialLinks = [
        { name: 'Twitter', icon: '<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg>' },
        { name: 'LinkedIn', icon: '<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clip-rule="evenodd"></path></svg>' },
    ];
    return `
        <footer class="bg-gray-900 text-white">
            <div class="container mx-auto px-6 py-12">
                <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
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
                        <h4 class="font-semibold text-lg mb-4">Navegación</h4>
                        <ul class="space-y-2">
                            <li><a href="#/home" class="text-gray-400 hover:text-white">Inicio</a></li>
                            <li><a href="#/services" class="text-gray-400 hover:text-white">Servicios</a></li>
                            <li><a href="#/blog" class="text-gray-400 hover:text-white">Blog</a></li>
                            <li><a href="#/admin" class="text-gray-400 hover:text-white">Admin</a></li>
                        </ul>
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
