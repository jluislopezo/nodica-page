
import { NodicaStore } from '../store.js';

export const BlogPostPage = (params) => {
    const postId = params.id;
    const post = NodicaStore.getPostById(postId);

    if (!post) {
        return `
            <div class="pt-32 text-center">
                <h1 class="text-4xl font-bold">Post no encontrado</h1>
                <p class="mt-4"><a href="#/blog" class="text-nodica-blue hover:underline">Volver al blog</a></p>
            </div>
        `;
    }

    return `
        <article class="pt-24 bg-white">
            <header class="container mx-auto px-6 py-12 text-center">
                <h1 class="text-4xl md:text-5xl font-bold font-heading text-gray-900 mb-4 animated-section">${post.title}</h1>
                <p class="text-gray-500 animated-section" style="transition-delay: 0.2s;">Publicado por ${post.author} el ${new Date(post.date).toLocaleDateString()}</p>
            </header>
            
            <div class="container mx-auto px-6 animated-section" style="transition-delay: 0.4s;">
                 <img src="${post.image}" alt="${post.title}" class="w-full max-w-4xl mx-auto h-auto md:h-96 object-cover rounded-lg shadow-lg">
            </div>

            <div class="prose lg:prose-xl max-w-3xl mx-auto px-6 py-16">
                ${post.content}
            </div>

            <div class="text-center pb-16">
                 <a href="#/blog" class="text-nodica-blue hover:underline font-bold">&larr; Volver a todos los posts</a>
            </div>
        </article>
    `;
};
