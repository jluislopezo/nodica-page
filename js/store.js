
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
};

const getServices = () => JSON.parse(localStorage.getItem('nodica_services')) || [];
const getServiceById = (id) => getServices().find(service => service.id === parseInt(id));

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

export const NodicaStore = { initialize, getServices, getServiceById, getPosts, getPostById, savePost };