import { NodicaStore } from '../store.js';
import { i18n } from '../i18n.js';

export const BlogPostPage = (params) => {
    const postId = params.id;
    const post = NodicaStore.getPostById(postId);

    if (!post) {
        const content = `
            <div class="pt-32 text-center container mx-auto px-6 py-16">
                <h1 class="text-4xl font-bold">${i18n.t('blogPostPage.notFound')}</h1>
                <p class="mt-4"><a href="#/blog" class="text-nodica-blue hover:underline">${i18n.t('blogPostPage.backToBlog')}</a></p>
            </div>
        `;
        return {
            content: content,
            title: i18n.t('blogPostPage.notFound'),
            description: i18n.t('blogPostPage.notFoundDesc')
        };
    }

    const locale = i18n.getLang(); // 'es' or 'en'
    const postDate = new Date(post.date).toLocaleDateString(locale, {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    const pageContent = `
        <article class="pt-24 bg-background">
            <header class="container mx-auto px-6 py-12 text-center">
                <h1 class="text-4xl md:text-5xl font-bold font-heading text-foreground mb-4 animated-section">${post.title}</h1>
                <p class="text-foreground/60 animated-section" style="transition-delay: 0.2s;">${i18n.t('blogPostPage.publishedBy')} ${post.author} ${i18n.t('blogPostPage.on')} ${postDate}</p>
            </header>
            
            <div class="container mx-auto px-6 animated-section" style="transition-delay: 0.4s;">
                 <img src="${post.image}" alt="${post.title}" class="w-full max-w-4xl mx-auto h-auto md:h-96 object-cover rounded-lg shadow-lg">
            </div>

            <div class="prose lg:prose-xl dark:prose-invert max-w-3xl mx-auto px-6 py-16">
                ${post.content}
            </div>

            <div class="text-center pb-16">
                 <a href="#/blog" class="text-nodica-blue hover:underline font-bold">&larr; ${i18n.t('blogPostPage.backToAll')}</a>
            </div>
        </article>
    `;

    return {
        content: pageContent,
        title: `${post.title} | Nodica Blog`,
        description: post.excerpt
    };
};