
import { i18n } from '../i18n.js';

// This is a placeholder function that simulates a more intelligent conversation flow.
// In a real application, this logic might exist on a backend that calls the Gemini API.
// IMPORTANT: Never expose API keys on the client-side.

/**
 * A simple email validation utility.
 * @param {string} email The email to validate.
 * @returns {boolean} True if the email is valid.
 */
function isValidEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

/**
 * Simulates a response from the Gemini API based on the conversation history.
 * @param {Array<Object>} messages The history of the chat.
 * @param {string|null} serviceContext The service the user is interested in.
 * @returns {Promise<Object>} A response object for the chat.
 */
async function getAIResponse(messages, serviceContext) {
    // Simulate network delay for realism
    await new Promise(resolve => setTimeout(resolve, 1500 + Math.random() * 500));

    const lastUserMessage = messages.length > 0 ? messages[messages.length - 1].content.toLowerCase() : "";
    
    const successKeyword = i18n.getLang() === 'es' ? '¡Perfecto! Hemos recibido tu email.' : 'Perfect! We have received your email.';

    const isEmailCollected = messages.some(msg => 
        msg.role === 'assistant' && msg.content.includes(successKeyword)
    );

    let responseText;
    const lang = i18n.getLang();

    if (!isEmailCollected) {
        if (isValidEmail(lastUserMessage)) {
            responseText = i18n.t('aiService.emailSuccess');
        } else {
            responseText = i18n.t('aiService.emailInvalid');
        }
    } else {
        const priceKeywords = lang === 'es' ? ['precio', 'costo'] : ['price', 'cost'];
        const thanksKeywords = lang === 'es' ? ['gracias'] : ['thank', 'thanks'];
        const servicesKeywords = lang === 'es' ? ['servicios'] : ['services'];

        if (priceKeywords.some(kw => lastUserMessage.includes(kw))) {
            responseText = i18n.t('aiService.priceQuery');
        } else if (thanksKeywords.some(kw => lastUserMessage.includes(kw))) {
            responseText = i18n.t('aiService.thanks');
        } else if (servicesKeywords.some(kw => lastUserMessage.includes(kw))) {
            responseText = i18n.t('aiService.servicesQuery');
        } else {
            responseText = i18n.t('aiService.fallback');
        }
    }

    return {
        role: 'assistant',
        content: responseText
    };
}

export const NodicaAIService = {
    getAIResponse
};
