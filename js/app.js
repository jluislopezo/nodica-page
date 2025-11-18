import { NodicaStore } from './store.js';
import { NodicaRouter } from './router.js';
import { NodicaAIService } from './services/aiService.js';
import { Header } from './components/header.js';
import { Footer } from './components/footer.js';
import { Modal } from './components/modal.js';
import { Button } from './components/button.js';
import { i18n } from './i18n.js';

// Define the global application object for HTML onclick attributes
const NodicaApp = {};
window.NodicaApp = NodicaApp;

(function(app) {
    let chatMessages = [];

    function renderLayout() {
        const appContainer = document.getElementById('app');
        if (!appContainer) return;
        appContainer.innerHTML = `
            <div id="header-container"></div>
            <main id="page-content" class="pt-16">
                <!-- Page content will be injected here by the router -->
            </main>
            <div id="footer-container"></div>
            <div id="modal-container"></div>
        `;
        document.getElementById('header-container').innerHTML = Header();
        document.getElementById('footer-container').innerHTML = Footer();
    }

    function addHeaderListeners() {
        document.body.addEventListener('click', (event) => {
            const mobileMenuButton = event.target.closest('#mobile-menu-button');
            const mobileNavLink = event.target.closest('.mobile-nav-link');
            const mobileMenu = document.getElementById('mobile-menu');

            if (mobileMenuButton) {
                mobileMenu.classList.toggle('hidden');
            }

            if (mobileNavLink) {
                mobileMenu.classList.add('hidden');
            }
        });

        // No longer need to re-render header on hashchange as rerender() handles it.
    }

    function renderDemoModal() {
        const initialMessage = i18n.t('aiService.initial');
        chatMessages = [{ role: 'assistant', content: initialMessage }];

        const modalContent = `
            <div id="chat-window" class="h-96 flex flex-col">
                <div id="chat-messages" class="flex-grow overflow-y-auto p-4 space-y-4">
                    ${renderChatMessages()}
                </div>
                <div id="chat-input-container" class="p-4 border-t border-border">
                    <form id="chat-form" class="flex gap-2">
                        <input type="text" id="chat-input" placeholder="${i18n.t('aiService.inputPlaceholderEmail')}" class="flex-grow border border-border bg-muted text-foreground rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-nodica-blue" autocomplete="off">
                        <button type="submit" id="chat-submit" class="bg-nodica-blue text-white rounded-full p-2 w-10 h-10 flex items-center justify-center hover:bg-nodica-dark-blue transition-colors">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                        </button>
                    </form>
                </div>
            </div>
        `;

        document.getElementById('modal-container').innerHTML = Modal({
            id: 'demo-modal',
            title: i18n.t('modals.aiAssistant'),
            content: modalContent,
        });

        addChatListeners();
    }
    
    function renderChatMessages() {
        return chatMessages.map(msg => `
            <div class="flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}">
                <div class="max-w-xs md:max-w-md px-4 py-2 rounded-2xl ${msg.role === 'user' ? 'bg-nodica-blue text-white' : 'bg-muted text-foreground'}">
                    ${msg.content.replace(/\n/g, '<br>')}
                </div>
            </div>
        `).join('');
    }

    function addChatMessage(message) {
        chatMessages.push(message);
        const chatMessagesEl = document.getElementById('chat-messages');
        chatMessagesEl.innerHTML = renderChatMessages();
        chatMessagesEl.scrollTop = chatMessagesEl.scrollHeight;
    }

    function toggleChatLoading(isLoading) {
        const input = document.getElementById('chat-input');
        const submit = document.getElementById('chat-submit');
        const chatMessagesEl = document.getElementById('chat-messages');
        const isEmailCollected = chatMessages.some(msg => msg.content.includes(i18n.getLang() === 'es' ? '¡Perfecto!' : 'Perfect!'));


        if(isLoading) {
            input.disabled = true;
            input.placeholder = i18n.t('aiService.writing');
            submit.disabled = true;
            submit.innerHTML = `<div class="w-5 h-5 border-t-2 border-white border-solid rounded-full animate-spin"></div>`;
            const loadingIndicator = `
                <div id="loading-bubble" class="flex justify-start">
                    <div class="max-w-xs px-4 py-3 rounded-2xl bg-muted text-foreground flex items-center">
                        <div class="typing-indicator">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>`;
            chatMessagesEl.insertAdjacentHTML('beforeend', loadingIndicator);
            chatMessagesEl.scrollTop = chatMessagesEl.scrollHeight;
        } else {
            input.disabled = false;
            input.placeholder = isEmailCollected ? i18n.t('aiService.inputPlaceholderGeneric') : i18n.t('aiService.inputPlaceholderEmail');
            submit.disabled = false;
            submit.innerHTML = `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>`;
            const loadingBubble = document.getElementById('loading-bubble');
            if (loadingBubble) loadingBubble.remove();
            input.focus();
        }
    }
    
    function addChatListeners() {
        const chatForm = document.getElementById('chat-form');
        const chatInput = document.getElementById('chat-input');

        chatForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const userInput = chatInput.value.trim();
            if (!userInput) return;

            addChatMessage({ role: 'user', content: userInput });
            chatInput.value = '';
            toggleChatLoading(true);

            const aiResponse = await NodicaAIService.getAIResponse(chatMessages, null);

            toggleChatLoading(false);
            addChatMessage(aiResponse);
        });
    }

    function openModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
            setTimeout(() => modal.querySelector('div').classList.remove('scale-95'), 10);
            document.addEventListener('keydown', handleEscKey);
        }
    }

    app.openServiceModal = (serviceId) => {
        const service = NodicaStore.getServiceById(serviceId);
        if (!service) return;

        const detailsList = service.detailsList || [];

        const modalContent = `
            <img src="${service.image}" alt="${service.title}" class="w-full h-48 object-cover rounded-t-lg mb-4">
            <p class="text-foreground/80 mb-4">${service.details}</p>
            <ul class="space-y-2">
                ${detailsList.map(item => `
                    <li class="flex items-start">
                        <span class="text-nodica-blue mr-2 mt-1">✓</span>
                        <span>${item}</span>
                    </li>
                `).join('')}
            </ul>
        `;
        
        const modalFooter = Button({
            text: i18n.t('modals.demoButton'),
            variant: 'primary',
            className: 'w-full',
            onClick: 'NodicaApp.openDemoModal()'
        });

        const modalId = `service-modal-${service.id}`;
        document.getElementById('modal-container').innerHTML = Modal({
            id: modalId,
            title: service.title,
            content: modalContent,
            footer: modalFooter
        });
        
        openModal(modalId);
    };
    
    app.openSolutionModal = (solutionId) => {
        const solution = NodicaStore.getSolutionById(solutionId);
        if (!solution) return;

        const modalContent = `
            <div class="flex flex-col md:flex-row gap-8">
                <div class="w-full md:w-5/12 flex-shrink-0">
                     <img src="${solution.modal.image}" alt="${solution.title}" class="w-full h-64 md:h-full object-cover rounded-lg shadow-md">
                </div>
                <div class="w-full md:w-7/12">
                    <p class="text-foreground/90 text-base mb-6">${solution.modal.description}</p>
                    
                    <h4 class="font-bold text-foreground text-lg mb-2">${i18n.t('modals.challenge')}</h4>
                    <p class="text-foreground/80 mb-6">${solution.modal.challenge}</p>

                    <h4 class="font-bold text-foreground text-lg mb-2">${i18n.t('modals.solution')}</h4>
                    <div class="text-sm text-foreground/90 whitespace-pre-line bg-background-secondary p-4 rounded-lg">${solution.modal.solution}</div>
                </div>
            </div>
        `;

        const modalFooter = Button({
            text: i18n.t('modals.solutionButton'),
            variant: 'primary',
            className: 'w-full',
            onClick: 'NodicaApp.openDemoModal()'
        });
        
        const modalId = `solution-modal-${solution.id}`;
        const modalTitle = `
            <div class="flex items-center">
                <div class="bg-background-secondary p-2 rounded-full mr-3">
                   ${solution.icon}
                </div>
                <span>${solution.title}</span>
            </div>
        `;

        document.getElementById('modal-container').innerHTML = Modal({
            id: modalId,
            title: modalTitle,
            content: modalContent,
            footer: modalFooter,
            size: '4xl'
        });
        
        openModal(modalId);
    };

    app.openDemoModal = () => {
        const modalContainer = document.getElementById('modal-container');
        const existingModal = modalContainer.querySelector('.fixed');

        const showDemoModal = () => {
            renderDemoModal();
            openModal('demo-modal');
        };

        if (existingModal) {
            app.closeModal();
            setTimeout(showDemoModal, 310);
        } else {
            showDemoModal();
        }
    };

    app.closeModal = () => {
        const modalContainer = document.getElementById('modal-container');
        const modal = modalContainer.querySelector('.fixed');
        if (modal) {
            modal.querySelector('div').classList.add('scale-95');
            setTimeout(() => {
                modalContainer.innerHTML = '';
                document.body.style.overflow = 'auto';
            }, 300);
        }
        document.removeEventListener('keydown', handleEscKey);
    };

    app.rerender = () => {
        renderLayout();
        addHeaderListeners();
        NodicaRouter.renderPage();
    };

    app.toggleLang = () => {
        const newLang = i18n.getLang() === 'es' ? 'en' : 'es';
        i18n.setLang(newLang);
        app.rerender();
    };

    app.toggleTheme = () => {
        const isDark = document.documentElement.classList.toggle('dark');
        localStorage.setItem('nodica_theme', isDark ? 'dark' : 'light');
    };
    
    function handleEscKey(e) {
        if (e.key === 'Escape') {
            app.closeModal();
        }
    }

    function init() {
        NodicaStore.initialize();
        renderLayout();
        addHeaderListeners();
        NodicaRouter.init();
        NodicaRouter.renderPage(); // Initial render
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})(NodicaApp);