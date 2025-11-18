export const ServiceCard = ({ service }) => {
    return `
        <div class="bg-card p-8 rounded-xl shadow-lg border border-border/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer" onclick="NodicaApp.openServiceModal(${service.id})">
            <div class="flex items-center mb-3">
                <div class="text-4xl mr-4 flex-shrink-0">${service.icon}</div>
                <h3 class="text-xl font-bold font-heading text-foreground">${service.title}</h3>
            </div>
            <p class="text-foreground/80 font-body">${service.description}</p>
        </div>
    `;
};