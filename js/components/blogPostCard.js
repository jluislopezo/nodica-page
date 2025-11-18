import { i18n } from '../i18n.js';

export const BlogPostCard = ({ post }) => {
    return `
        <div class="bg-card rounded-lg shadow-md overflow-hidden transform hover:-translate-y-1 transition-transform duration-300 flex flex-col border border-border/20">
            <img src="${post.image}" alt="${post.title}" class="w-full h-48 object-cover">
            <div class="p-6 flex flex-col flex-grow">
                <h3 class="text-xl font-bold font-heading mb-2 text-foreground">${post.title}</h3>
                <p class="text-foreground/80 font-body flex-grow">${post.excerpt}</p>
                <div class="mt-4">
                    <a href="#/blog/${post.id}" class="font-bold text-nodica-blue hover:text-nodica-dark-blue transition-colors">
                        ${i18n.t('common.readMore')} &rarr;
                    </a>
                </div>
            </div>
        </div>
    `;
};