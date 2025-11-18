import { NodicaStore } from '../store.js';
import { BlogPostCard } from '../components/blogPostCard.js';
import { i18n } from '../i18n.js';

export const BlogPage = () => {
    const posts = NodicaStore.getPosts();

    return `
        <div class="bg-background-secondary pt-24">
            <header class="py-16 text-center">
                <div class="container mx-auto px-6">
                    <h1 class="text-4xl md:text-5xl font-bold font-heading text-foreground animated-section">${i18n.t('blogPage.title')}</h1>
                    <p class="text-lg text-foreground/80 mt-4 max-w-2xl mx-auto animated-section" style="transition-delay: 0.2s;">
                        ${i18n.t('blogPage.subtitle')}
                    </p>
                </div>
            </header>

            <main class="py-16">
                <div class="container mx-auto px-6">
                    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        ${posts.map((post, index) => `
                            <div class="animated-section" style="transition-delay: ${index * 0.1}s;">
                                ${BlogPostCard({ post })}
                            </div>
                        `).join('')}
                    </div>
                     <div class="text-center mt-12">
                        <a href="#/admin" class="text-nodica-blue hover:underline">${i18n.t('blogPage.adminLink')}</a>
                    </div>
                </div>
            </main>
        </div>
    `;
};