

export const Modal = ({ id, title, content, footer, size = 'lg' }) => {
    const sizeClasses = {
        'lg': 'max-w-lg',
        'xl': 'max-w-xl',
        '2xl': 'max-w-2xl',
        '3xl': 'max-w-3xl',
        '4xl': 'max-w-4xl',
    };

    return `
        <div id="${id}" class="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center p-4 z-50 hidden" onclick="if (event.target.id === '${id}') NodicaApp.closeModal();">
            <div class="bg-card rounded-2xl shadow-2xl w-full ${sizeClasses[size] || 'max-w-lg'} max-h-[90vh] flex flex-col transform transition-transform duration-300 scale-95 border border-border/20">
                <header class="flex items-center justify-between p-5 border-b border-border rounded-t-2xl">
                    <h3 class="text-xl font-bold font-heading text-foreground">${title}</h3>
                    <button onclick="NodicaApp.closeModal()" class="text-foreground/50 hover:text-foreground transition-colors">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                    </button>
                </header>
                <main class="p-6 overflow-y-auto flex-grow">
                    ${content}
                </main>
                ${footer ? `
                <footer class="p-5 border-t border-border rounded-b-2xl">
                    ${footer}
                </footer>
                ` : ''}
            </div>
        </div>
    `;
};