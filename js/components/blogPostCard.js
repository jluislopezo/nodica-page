
export const BlogPostCard = ({ post }) => {
    return `
        <div class="bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-1 transition-transform duration-300 flex flex-col">
            <img src="${post.image}" alt="${post.title}" class="w-full h-48 object-cover">
            <div class="p-6 flex flex-col flex-grow">
                <h3 class="text-xl font-bold font-heading mb-2 text-gray-900">${post.title}</h3>
                <p class="text-gray-600 font-body flex-grow">${post.excerpt}</p>
                <div class="mt-4">
                    <a href="#/blog/${post.id}" class="font-bold text-nodica-blue hover:text-nodica-dark-blue transition-colors">
                        Leer más &rarr;
                    </a>
                </div>
            </div>
        </div>
    `;
};
