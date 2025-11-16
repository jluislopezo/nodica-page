
export const Button = ({ text, variant = 'primary', className = '', id = '', onClick = '', type = 'button' }) => {
    const baseClasses = 'px-6 py-3 font-bold rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2';
    
    const variants = {
        primary: 'bg-nodica-blue text-white hover:bg-nodica-dark-blue focus:ring-nodica-blue',
        secondary: 'bg-white text-nodica-blue border-2 border-nodica-blue hover:bg-gray-100 focus:ring-nodica-blue'
    };

    return `
        <button 
            type="${type}"
            id="${id}" 
            class="${baseClasses} ${variants[variant]} ${className}"
            onclick="${onClick}"
        >
            ${text}
        </button>
    `;
};
