
import { i18n } from './i18n.js';
import { initialData } from './data.js';

const initialize = () => {
    if (!localStorage.getItem('nodica_posts')) {
        // We only initialize posts for the default language.
        // In a real app, this might be handled differently.
        localStorage.setItem('nodica_posts', JSON.stringify(initialData.es.posts));
    }
};

const getServices = () => initialData[i18n.getLang()].services;
const getServiceById = (id) => getServices().find(service => service.id === parseInt(id));

const getSolutions = () => initialData[i18n.getLang()].solutions;
const getSolutionById = (id) => getSolutions().find(solution => solution.id === parseInt(id));

const getPosts = () => {
    // Dynamic posts from admin panel are stored in localStorage
    const dynamicPosts = JSON.parse(localStorage.getItem('nodica_posts')) || [];
    // Static posts are translated
    const staticPosts = initialData[i18n.getLang()].posts;

    // A simple merge strategy: show dynamic posts first, then static ones if IDs don't conflict
    const staticPostIds = new Set(dynamicPosts.map(p => p.id));
    const uniqueStaticPosts = staticPosts.filter(p => !staticPostIds.has(p.id));
    
    return [...dynamicPosts, ...uniqueStaticPosts].sort((a, b) => new Date(b.date) - new Date(a.date));
};

const getPostById = (id) => getPosts().find(post => post.id === parseInt(id));

const savePost = (post) => {
    const posts = JSON.parse(localStorage.getItem('nodica_posts')) || initialData.es.posts;
    const newId = posts.length > 0 ? Math.max(...posts.map(p => p.id)) + 1 : 1;
    post.id = newId;
    post.date = new Date().toISOString().split('T')[0]; // YYYY-MM-DD
    
    // Unshift to add to the beginning
    posts.unshift(post);
    localStorage.setItem('nodica_posts', JSON.stringify(posts));
    return post;
};

export const NodicaStore = { initialize, getServices, getServiceById, getSolutions, getSolutionById, getPosts, getPostById, savePost };
