
import { NodicaStore } from '../store.js';
import { Button } from '../components/button.js';

export const AdminPage = () => {
    // This function will be called on form submission.
    // We attach it to window to be accessible from the inline onsubmit handler.
    window.handlePostSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const newPost = {
            title: form.title.value,
            excerpt: form.excerpt.value,
            content: form.content.value,
            image: form.image.value || `https://picsum.photos/seed/${Math.random()}/800/400`,
            author: 'Admin' // Or get from a logged in user state
        };
        
        const savedPost = NodicaStore.savePost(newPost);
        
        // Redirect to the new post
        window.location.hash = `#/blog/${savedPost.id}`;
    };

    return `
        <div class="bg-nodica-gray pt-24 min-h-screen">
            <header class="py-16 text-center">
                <div class="container mx-auto px-6">
                    <h1 class="text-4xl md:text-5xl font-bold font-heading text-gray-800">Panel de Administración</h1>
                    <p class="text-lg text-gray-600 mt-4">Crear un nuevo artículo para el blog.</p>
                </div>
            </header>

            <main class="pb-16">
                <div class="container mx-auto px-6 max-w-2xl">
                    <div class="bg-white p-8 rounded-lg shadow-lg">
                        <form id="new-post-form" onsubmit="handlePostSubmit(event)">
                            <div class="mb-4">
                                <label for="title" class="block text-gray-700 font-bold mb-2">Título</label>
                                <input type="text" id="title" name="title" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-nodica-blue" required>
                            </div>
                            <div class="mb-4">
                                <label for="excerpt" class="block text-gray-700 font-bold mb-2">Extracto (Resumen)</label>
                                <textarea id="excerpt" name="excerpt" rows="3" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-nodica-blue" required></textarea>
                            </div>
                            <div class="mb-4">
                                <label for="content" class="block text-gray-700 font-bold mb-2">Contenido (HTML permitido)</label>
                                <textarea id="content" name="content" rows="10" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-nodica-blue" required></textarea>
                            </div>
                             <div class="mb-6">
                                <label for="image" class="block text-gray-700 font-bold mb-2">URL de la Imagen</label>
                                <input type="url" id="image" name="image" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-nodica-blue" placeholder="https://picsum.photos/800/400">
                            </div>
                            <div>
                                ${Button({ text: 'Publicar Artículo', variant: 'primary', type: 'submit', className: 'w-full' })}
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        </div>
    `;
};
