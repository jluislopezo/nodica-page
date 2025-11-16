
const initialServices = [
    { 
        id: 1, 
        title: 'Automatización de Procesos (RPA)', 
        icon: '🤖', 
        description: 'Optimizamos tus operaciones diarias, reduciendo errores y liberando a tu equipo para tareas de mayor valor.', 
        details: 'Implementamos Robots de Software (RPA) para automatizar tareas repetitivas como la entrada de datos, generación de informes y procesamiento de facturas. Aumenta la eficiencia y reduce costos operativos.',
        image: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max',
        detailsList: [
            'Análisis de Procesos de Negocio (BPA).',
            'Desarrollo de Robots de Software (RPA) a medida.',
            'Automatización de entrada de datos y migraciones.',
            'Procesamiento automático de facturas y órdenes de compra.',
            'Generación de informes periódicos y personalizados.',
            'Integración entre sistemas que no tienen API.'
        ]
    },
    { 
        id: 2, 
        title: 'Desarrollo de Aplicaciones a Medida', 
        icon: '📱', 
        description: 'Creamos aplicaciones web y móviles que se adaptan perfectamente a las necesidades de tu negocio.', 
        details: 'Desde CRMs personalizados hasta portales de clientes, construimos soluciones robustas, escalables y seguras que impulsan tu crecimiento.',
        image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max',
        detailsList: [
            'Aplicaciones Web Progresivas (PWA) y Nativas.',
            'Desarrollo de APIs RESTful seguras y escalables.',
            'Dashboards y paneles de control en tiempo real.',
            'Portales privados para clientes y proveedores.',
            'Integración con pasarelas de pago y servicios de terceros.',
            'Mantenimiento y soporte evolutivo de aplicaciones.'
        ]
    },
    { 
        id: 3, 
        title: 'Soluciones con Inteligencia Artificial', 
        icon: '🧠', 
        description: 'Integramos IA para que tomes decisiones más inteligentes y ofrezcas experiencias personalizadas.', 
        details: 'Desarrollamos chatbots inteligentes, sistemas de recomendación y modelos de análisis predictivo que te dan una ventaja competitiva en el mercado.',
        image: 'https://images.unsplash.com/photo-1535378917042-10a22c95931a?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max',
        detailsList: [
            'Desarrollo e integración de Chatbots conversacionales avanzados.',
            'Sistemas de recomendación de productos y contenidos.',
            'Análisis de sentimiento para redes sociales y feedback.',
            'Modelos de clasificación y predicción (ej. predicción de churn).',
            'Procesamiento de Lenguaje Natural (NLP) para análisis de documentos.',
            'Visión por computadora para control de calidad y análisis de imágenes.'
        ]
    }
];

const initialSolutions = [
    {
        id: 101,
        category: 'Automatizaciones Inteligentes',
        title: 'Automatización de Ventas por WhatsApp',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-nodica-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" /></svg>',
        description: 'Convierte conversaciones en ventas con un asistente que califica, da seguimiento y cierra por ti.',
        modal: {
            image: 'https://images.unsplash.com/photo-1633355444132-695d58763327?q=80&w=1770&auto=format&fit=crop',
            description: 'Transformamos tu WhatsApp en una potente herramienta de ventas. Nuestro asistente con IA interactúa con los clientes potenciales, responde sus dudas, califica su interés y los guía hasta el cierre, 24/7.',
            challenge: 'Proceso de ventas lento en WhatsApp, resultando en pérdida de leads por demoras en la respuesta.',
            solution: 'Aumento de conversiones: 40%\nCalificación de leads: 100% automatizada\nHoras ahorradas: 15+ por semana'
        }
    },
    {
        id: 102,
        category: 'Automatizaciones Inteligentes',
        title: 'Atención Automática a Clientes',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-nodica-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" /></svg>',
        description: 'Responde preguntas frecuentes 24/7 y libera a tu equipo para tareas de mayor valor.',
        modal: {
            image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1770&auto=format&fit=crop',
            description: 'Responde preguntas frecuentes 24/7 y libera a tu equipo para tareas de mayor valor, mejorando la satisfacción del cliente.',
            challenge: 'Clientes esperando por respuestas a preguntas comunes, sobrecargando al equipo de soporte.',
            solution: 'Reducción de tiempo de respuesta: 90%\nDisponibilidad: 24/7\nSatisfacción del cliente: +30%'
        }
    },
    {
        id: 103,
        category: 'Automatizaciones Inteligentes',
        title: 'Automatización de Citas',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-nodica-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>',
        description: 'Perfecto para salones, clínicas y consultores. Permite que tus clientes agenden sin intervención humana.',
        modal: {
            image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1780&auto=format&fit=crop',
            description: 'Un sistema de agendamiento inteligente que gestiona tu calendario, envía recordatorios y reduce las ausencias.',
            challenge: 'Gestión manual de citas que consume tiempo y es propensa a errores de doble agendamiento.',
            solution: 'Reducción de "no-shows": 50%\nHoras administrativas ahorradas: 10+ por semana\nReservas online: Habilitado 24/7'
        }
    },
    {
        id: 201,
        category: 'Aplicaciones Personalizadas',
        title: 'Sistemas Internos a Medida',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-nodica-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>',
        description: 'Desarrollamos sistemas de inventario, agendas, gestión de pedidos o CRMs personalizados.',
        modal: {
            image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1770&auto=format&fit=crop',
            description: 'Creamos herramientas internas que se ajustan como un guante a tus procesos, centralizando información y mejorando la colaboración.',
            challenge: 'Procesos ineficientes basados en hojas de cálculo o múltiples herramientas desconectadas entre sí.',
            solution: 'Aumento de productividad: 35%\nReducción de errores manuales: 95%\nAcceso centralizado a la información.'
        }
    },
    {
        id: 202,
        category: 'Aplicaciones Personalizadas',
        title: 'Apps para Emprendedores (MVP)',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-nodica-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>',
        description: 'Validamos y construimos la aplicación que materializa tu idea de negocio de forma rápida y eficiente.',
        modal: {
            image: 'https://images.unsplash.com/photo-1559028006-44a136e73e93?q=80&w=1804&auto=format&fit=crop',
            description: 'Te ayudamos a lanzar un Producto Mínimo Viable (MVP) para validar tu modelo de negocio con usuarios reales, minimizando riesgos y costos.',
            challenge: 'Tener una gran idea de app pero no saber por dónde empezar o no tener el capital para un desarrollo completo.',
            solution: 'Tiempo de lanzamiento: 6-8 semanas\nCosto reducido vs. desarrollo tradicional\nFeedback real para futuras iteraciones.'
        }
    },
    {
        id: 203,
        category: 'Aplicaciones Personalizadas',
        title: 'Microaplicaciones con IA',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-nodica-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M12 6V3m0 18v-3M5.636 5.636L4.222 4.222m15.556 15.556l-1.414-1.414M4.222 19.778l1.414-1.414m14.142-14.142l-1.414 1.414" /></svg>',
        description: 'Pequeñas herramientas inteligentes que resuelven un problema específico.',
        modal: {
            image: 'https://images.unsplash.com/photo-1620712943543-285f726a8484?q=80&w=1770&auto=format&fit=crop',
            description: 'Desarrollamos pequeñas aplicaciones que usan IA para tareas concretas, como clasificar emails, resumir documentos o analizar feedback de clientes.',
            challenge: 'Problemas de negocio muy específicos que las grandes plataformas no resuelven de manera eficiente.',
            solution: 'Solución hiper-enfocada\nImplementación rápida\nAutomatización de tareas cognitivas.'
        }
    },
    {
        id: 301,
        category: 'Soluciones por Industria',
        title: 'Restaurantes y Cafeterías',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-nodica-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M21 3v2c0 1.105-1.005 2-2.222 2H5.222C4.005 7 3 6.105 3 5V3m18 0H3m18 0h-2M3 3H1m18 0H3m18 0V1m0 2v2m-6-4v2c0 1.105-1.005 2-2.222 2h-1.556C8.005 7 7 6.105 7 5V3" /></svg>',
        description: 'Sistemas de reservas inteligentes, pedidos online y menús digitales con IA.',
        modal: {
            image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1854&auto=format&fit=crop',
            description: 'Digitaliza la experiencia de tus clientes con menús QR inteligentes, sistemas de pedidos y pagos desde la mesa, y gestión de reservas automatizada.',
            challenge: 'Alta competencia y necesidad de optimizar el servicio en horas pico para maximizar ingresos.',
            solution: 'Aumento del ticket promedio: 15%\nRotación de mesas más rápida\nMejora en la experiencia del cliente.'
        }
    },
    {
        id: 302,
        category: 'Soluciones por Industria',
        title: 'Salones de Belleza y Spas',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-nodica-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121M12 12l2.879-2.879M12 12L19 5M4.929 4.929l1.414 1.414M17.657 17.657l1.414 1.414M4.929 19.071l1.414-1.414M19.071 4.929l-1.414 1.414" /></svg>',
        description: 'Agendas automáticas, recordatorios de citas por WhatsApp y programas de fidelización.',
        modal: {
            image: 'https://images.unsplash.com/photo-1596701062351-8c2c14d1fdd0?q=80&w=1770&auto=format&fit=crop',
            description: 'Un sistema todo-en-uno para gestionar tu agenda, reducir ausencias con recordatorios automáticos y mantener a tus clientes felices con programas de lealtad.',
            challenge: 'Pérdida de ingresos por citas no asistidas y dificultad para mantener una comunicación constante con los clientes.',
            solution: 'Reducción de "no-shows": 40%\nMayor recurrencia de clientes\nAgenda online disponible 24/7.'
        }
    },
    {
        id: 303,
        category: 'Soluciones por Industria',
        title: 'Tiendas Online (E-commerce)',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-nodica-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>',
        description: 'Atención al cliente por IA, recuperación de carritos abandonados e inventario sincronizado.',
        modal: {
            image: 'https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?q=80&w=1770&auto=format&fit=crop',
            description: 'Potencia tu e-commerce con un asistente de IA que recomienda productos, resuelve dudas 24/7 y automatiza la recuperación de carritos abandonados.',
            challenge: 'Altas tasas de abandono de carrito y dificultad para ofrecer soporte inmediato a los compradores online.',
            solution: 'Tasa de recuperación de carritos: +20%\nAumento de la conversión\nSoporte al cliente instantáneo.'
        }
    }
];

const initialPosts = [
    { id: 1, title: '5 Mitos sobre la Automatización en PYMEs', author: 'Ana Torres', date: '2023-10-15', image: 'https://picsum.photos/seed/blog1/800/400', excerpt: 'Descubre por qué la automatización no es solo para grandes corporaciones y cómo puede beneficiar a tu pequeña o mediana empresa.', content: '<p>La automatización ha dejado de ser un lujo para convertirse en una necesidad competitiva. Sin embargo, muchos dueños de PYMEs aún creen en mitos que les impiden dar el salto. En este artículo, desmentimos los 5 más comunes.</p><h3>Mito 1: Es demasiado caro</h3><p>Falso. Con soluciones de RPA y herramientas en la nube, la inversión inicial es más baja que nunca y el retorno de inversión se ve en pocos meses.</p><h3>Mito 2: Reemplazará a mis empleados</h3><p>La automatización no busca reemplazar, sino potenciar. Libera a tu equipo de tareas monótonas para que puedan enfocarse en la estrategia, la creatividad y la atención al cliente, áreas donde el talento humano es insustituible.</p><p>...</p>' },
    { id: 2, title: 'Cómo la IA está cambiando el Servicio al Cliente', author: 'Carlos Vega', date: '2023-11-02', image: 'https://picsum.photos/seed/blog2/800/400', excerpt: 'Los chatbots y el análisis de sentimiento están revolucionando la forma en que las empresas interactúan con sus clientes.', content: '<p>La Inteligencia Artificial está transformando el servicio al cliente, ofreciendo respuestas instantáneas 24/7 y personalizando la comunicación a una escala sin precedentes. Los chatbots, por ejemplo, pueden resolver el 80% de las consultas comunes de forma inmediata.</p><p>Además, el análisis de sentimiento permite a las empresas monitorear la satisfacción del cliente en tiempo real a través de redes sociales y encuestas, identificando problemas antes de que escalen. Esto no solo mejora la experiencia del cliente, sino que también optimiza los recursos del equipo de soporte.</p>' }
];

const initialize = () => {
    if (!localStorage.getItem('nodica_services')) {
        localStorage.setItem('nodica_services', JSON.stringify(initialServices));
    }
    if (!localStorage.getItem('nodica_posts')) {
        localStorage.setItem('nodica_posts', JSON.stringify(initialPosts));
    }
    if (!localStorage.getItem('nodica_solutions')) {
        localStorage.setItem('nodica_solutions', JSON.stringify(initialSolutions));
    }
};

const getServices = () => JSON.parse(localStorage.getItem('nodica_services')) || [];
const getServiceById = (id) => getServices().find(service => service.id === parseInt(id));

const getSolutions = () => JSON.parse(localStorage.getItem('nodica_solutions')) || [];
const getSolutionById = (id) => getSolutions().find(solution => solution.id === parseInt(id));

const getPosts = () => JSON.parse(localStorage.getItem('nodica_posts')) || [];
const getPostById = (id) => getPosts().find(post => post.id === parseInt(id));

const savePost = (post) => {
    const posts = getPosts();
    post.id = posts.length > 0 ? Math.max(...posts.map(p => p.id)) + 1 : 1;
    post.date = new Date().toISOString().split('T')[0]; // YYYY-MM-DD
    posts.push(post);
    localStorage.setItem('nodica_posts', JSON.stringify(posts));
    return post;
};

export const NodicaStore = { initialize, getServices, getServiceById, getSolutions, getSolutionById, getPosts, getPostById, savePost };
