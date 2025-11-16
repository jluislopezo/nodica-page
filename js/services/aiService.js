
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
    
    // Check if the assistant has already confirmed receiving an email.
    // This is our way of tracking the conversation state.
    const isEmailCollected = messages.some(msg => 
        msg.role === 'assistant' && msg.content.includes('¡Perfecto! Hemos recibido tu email.')
    );

    let responseText;

    if (!isEmailCollected) {
        // If we haven't collected an email, we validate the user's input.
        if (isValidEmail(lastUserMessage)) {
            responseText = "¡Perfecto! Hemos recibido tu email. Un especialista se pondrá en contacto contigo en las próximas 24 horas. Mientras tanto, ¿tienes alguna pregunta sobre lo que hacemos o cómo podemos ayudarte a crecer?";
        } else {
            // If the input is not a valid email, we gently ask again.
            responseText = "Mmm, parece que eso no es un correo electrónico válido. Para poder continuar y ofrecerte una demo personalizada, ¿podrías intentarlo de nuevo, por favor? Solo necesito tu email.";
        }
    } else {
        // Once the email is collected, the conversation becomes more open.
        if (lastUserMessage.includes('precio') || lastUserMessage.includes('costo')) {
            responseText = "Entiendo tu pregunta sobre los precios. Cada solución que creamos es única y se adapta a las necesidades del cliente, por lo que los costos varían. Pero no te preocupes, el especialista que te contactará podrá darte una cotización detallada y sin compromiso. ¿Hay algo más que te gustaría saber?";
        } else if (lastUserMessage.includes('gracias')) {
            responseText = "¡De nada! Ha sido un placer conversar contigo. Si tienes más dudas, aquí estaré para ayudarte. ¡Que tengas un excelente día!";
        } else if (lastUserMessage.includes('servicios')) {
            responseText = "Ofrecemos principalmente Automatización de Procesos (RPA), Desarrollo de Aplicaciones a Medida, e implementación de soluciones con Inteligencia Artificial. ¿Te gustaría que te diera más detalles sobre alguno en particular?";
        } else {
            responseText = "Es una pregunta muy interesante. Nuestro especialista podrá darte todos los detalles al respecto en la llamada. ¿Hay alguna otra duda que pueda resolverte ahora mismo?";
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
