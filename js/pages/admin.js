import { NodicaStore } from '../store.js';
import { Button } from '../components/button.js';
import { i18n } from '../i18n.js';

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

    const inputClasses = "w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-nodica-blue bg-transparent";

    return `
        <div class="bg-background-secondary pt-24 min-h-screen">
            <header class="py-16 text-center">
                <div class="container mx-auto px-6">
                    <h1 class="text-4xl md:text-5xl font-bold font-heading text-foreground">${i18n.t('adminPage.title')}</h1>
                    <p class="text-lg text-foreground/80 mt-4">${i18n.t('adminPage.subtitle')}</p>
                </div>
            </header>

            <main class="pb-16">
                <div class="container mx-auto px-6 max-w-2xl">
                    <div class="bg-card p-8 rounded-lg shadow-lg border border-border/20">
                        <form id="new-post-form" onsubmit="handlePostSubmit(event)">
                            <div class="mb-4">
                                <label for="title" class="block text-foreground/90 font-bold mb-2">${i18n.t('adminPage.formTitle')}</label>
                                <input type="text" id="title" name="title" class="${inputClasses}" required>
                            </div>
                            <div class="mb-4">
                                <label for="excerpt" class="block text-foreground/90 font-bold mb-2">${i18n.t('adminPage.formExcerpt')}</label>
                                <textarea id="excerpt" name="excerpt" rows="3" class="${inputClasses}" required></textarea>
                            </div>
                            <div class="mb-4">
                                <label for="content" class="block text-foreground/90 font-bold mb-2">${i18n.t('adminPage.formContent')}</label>
                                <textarea id="content" name="content" rows="10" class="${inputClasses}" required></textarea>
                            </div>
                             <div class="mb-6">
                                <label for="image" class="block text-foreground/90 font-bold mb-2">${i18n.t('adminPage.formImage')}</label>
                                <input type="url" id="image" name="image" class="${inputClasses}" placeholder="https://picsum.photos/800/400">
                            </div>
                            <div>
                                ${Button({ text: i18n.t('adminPage.formButton'), variant: 'primary', type: 'submit', className: 'w-full' })}
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        </div>
    `;
};