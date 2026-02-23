/**
 * Caselyn Portfolio - Translation System
 * Supports: ES (Español), CA (Català), EN (English)
 */

const translations = {
    es: {
        // Nav
        'nav.servicios': 'Servicios',
        'nav.portafolio': 'Portafolio',
        'nav.proceso': 'Proceso',
        'nav.faq': 'FAQ',
        'nav.contacto': 'Contacto',

        // Hero
        'hero.title': 'Diseño web profesional para negocios locales',
        'hero.subtitle': 'Ayudamos a restaurantes, comercios y servicios a destacar en el mundo digital. Webs rápidas, profesionales y orientadas a resultados, sin importar dónde estés.',
        'hero.cta.whatsapp': 'Hablar por WhatsApp',
        'hero.cta.portfolio': 'Ver trabajos',

        // Social Proof
        'social.title': 'Diseñamos para negocios que quieren destacar',
        'social.stat1.number': '100%',
        'social.stat1.label': 'Móvil primero',
        'social.stat2.number': 'Rápido',
        'social.stat2.label': 'Carga instantánea',
        'social.stat3.number': '24h',
        'social.stat3.label': 'Tiempo de respuesta',

        // Services
        'services.title': 'Diseño Web Profesional para Restaurantes y Comercios',
        'services.description': 'Tres servicios diseñados para que tu negocio crezca en internet',
        'services.card1.title': 'Diseño Web',
        'services.card1.description': 'Tu negocio en internet, listo para vender. Diseños profesionales que transmiten confianza y facilitan el contacto con tus clientes.',
        'services.card2.title': 'Desarrollo Web',
        'services.card2.description': 'Rápida, profesional y fácil de actualizar. Tu web funcionará perfectamente en cualquier dispositivo y será fácil de encontrar en Google.',
        'services.card3.title': 'Estrategia Digital',
        'services.card3.description': 'Te ayudamos a llegar a más clientes. Desde Google Maps hasta redes sociales, te acompañamos para que tu negocio sea visible donde tus clientes te buscan.',

        // Portfolio
        'portfolio.title': 'Webs que funcionan para negocios reales',
        'portfolio.description': 'Cada web está diseñada para convertir visitantes en clientes',
        'portfolio.card1.tag': 'Restaurante',
        'portfolio.card1.title': 'Casa Luna',
        'portfolio.card1.description': 'Web profesional con carta digital y reservas por WhatsApp. Aumento del 40% en consultas de clientes.',
        'portfolio.card1.result.label': 'Resultado:',
        'portfolio.card1.result.value': '+40% consultas nuevas',
        'portfolio.card1.badge1': 'Carta digital',
        'portfolio.card1.badge2': 'WhatsApp',
        'portfolio.card1.badge3': 'SEO local',
        'portfolio.card2.tag': 'Salón de Belleza',
        'portfolio.card2.title': 'Studio Belle',
        'portfolio.card2.description': 'Sitio elegante con galería de servicios y citas online. Captación de clientes nuevos cada semana.',
        'portfolio.card2.result.label': 'Resultado:',
        'portfolio.card2.result.value': '8-12 citas / semana',
        'portfolio.card2.badge1': 'Galería',
        'portfolio.card2.badge2': 'Citas online',
        'portfolio.card2.badge3': 'Mobile-first',
        'portfolio.card3.tag': 'Servicios Profesionales',
        'portfolio.card3.title': 'FixNow',
        'portfolio.card3.description': 'Landing page optimizada con formulario de contacto directo. Mayor profesionalidad percibida por los clientes.',
        'portfolio.card3.result.label': 'Resultado:',
        'portfolio.card3.result.value': '3x más solicitudes',
        'portfolio.card3.badge1': 'Landing page',
        'portfolio.card3.badge2': 'Formulario',
        'portfolio.card3.badge3': 'SEO optimizado',

        // Process
        'process.title': 'Cómo creamos tu página web',
        'process.description': 'Un proceso simple y transparente, sin sorpresas',
        'process.step1.title': 'Consulta inicial',
        'process.step1.description': 'Hablamos de tu negocio, tus objetivos y qué necesitas comunicar. Sin compromisos, sin presión.',
        'process.step2.title': 'Diseño personalizado',
        'process.step2.description': 'Creamos un diseño único para tu marca. Te mostramos cómo quedará tu web antes de empezar a programar.',
        'process.step3.title': 'Desarrollo y ajustes',
        'process.step3.description': 'Construimos tu web con la mejor tecnología. Revisamos juntos cada detalle hasta que esté perfecta.',
        'process.step4.title': 'Lanzamiento',
        'process.step4.description': 'Tu web sale al mundo. Te enseñamos a usarla y quedamos disponibles para cualquier duda o cambio que necesites.',

        // FAQ
        'faq.title': 'Preguntas sobre diseño web para negocios locales',
        'faq.description': 'Respuestas claras a las dudas más comunes',
        'faq.q1': '¿Cuánto cuesta una página web para mi restaurante o negocio?',
        'faq.a1': 'El precio depende de lo que necesites: desde webs sencillas para mostrar tu menú o servicios, hasta sistemas con reservas online. Te damos presupuesto claro desde el primer día, sin sorpresas. La mayoría de proyectos están listos en 2-4 semanas.',
        'faq.q2': '¿Necesito una web si mi negocio es local?',
        'faq.a2': 'Sí. Hoy en día la mayoría de clientes buscan en Google o redes sociales antes de decidir. Una web profesional te da credibilidad, te hace visible y facilita que te contacten. Es tu mejor vendedor trabajando 24/7.',
        'faq.q3': '¿Funciona bien en móviles?',
        'faq.a3': 'Sí, siempre. Diseñamos pensando primero en móvil, porque es donde la mayoría de tus clientes verán tu web. Se verá perfecta en cualquier dispositivo.',
        'faq.q4': '¿Qué incluye el diseño web profesional?',
        'faq.a4': 'Incluye diseño a medida, desarrollo responsive (se ve perfecto en móvil), optimización de velocidad, SEO básico para Google, formulario de contacto, y configuración completa. Te lo entregamos listo para recibir clientes.',
        'faq.q5': '¿Me ayudáis con el dominio y hosting?',
        'faq.a5': 'Sí, nos encargamos de todo. Te ayudamos a elegir el mejor dominio y nos ocupamos de la parte técnica para que no tengas que preocuparte de nada.',
        'faq.q6': '¿Ofrecéis garantía?',
        'faq.a6': 'Tu web funcionará correctamente desde el día uno. Si hay algún problema técnico en los primeros 30 días, lo solucionamos sin coste adicional.',

        // Contact
        'contact.title': 'Hablemos de tu proyecto',
        'contact.description': 'Trabajamos con negocios de todo el mundo. Cuéntanos qué necesitas y te responderemos con una propuesta clara y sin compromiso.',
        'contact.cta.whatsapp': 'Hablar por WhatsApp',
        'contact.trust': 'Respuesta en menos de 24h',
        'contact.form.name': 'Nombre',
        'contact.form.name.placeholder': 'Tu nombre',
        'contact.form.email': 'Email o Teléfono',
        'contact.form.email.placeholder': 'Para poder contactarte',
        'contact.form.message': 'Cuéntanos sobre tu proyecto',
        'contact.form.message.placeholder': 'Qué tipo de negocio tienes y qué necesitas',
        'contact.form.submit': 'Enviar mensaje',

        // Footer
        'footer.copyright': '© 2026 Caselyn. Diseño web profesional para negocios locales.',
        'footer.privacy': 'Privacidad',
        'footer.cookies': 'Cookies',
    },

    ca: {
        // Nav
        'nav.servicios': 'Serveis',
        'nav.portafolio': 'Portafoli',
        'nav.proceso': 'Procés',
        'nav.faq': 'FAQ',
        'nav.contacto': 'Contacte',

        // Hero
        'hero.title': 'Disseny web professional per a negocis locals',
        'hero.subtitle': "Ajudem a restaurants, comerços i serveis a destacar al món digital. Webs ràpides, professionals i orientades a resultats, siguis on siguis.",
        'hero.cta.whatsapp': 'Parlar per WhatsApp',
        'hero.cta.portfolio': 'Veure treballs',

        // Social Proof
        'social.title': 'Dissenyem per a negocis que volen destacar',
        'social.stat1.number': '100%',
        'social.stat1.label': 'Mòbil primer',
        'social.stat2.number': 'Ràpid',
        'social.stat2.label': 'Càrrega instantània',
        'social.stat3.number': '24h',
        'social.stat3.label': 'Temps de resposta',

        // Services
        'services.title': 'Disseny Web Professional per a Restaurants i Comerços',
        'services.description': 'Tres serveis dissenyats perquè el teu negoci creixi a internet',
        'services.card1.title': 'Disseny Web',
        'services.card1.description': "El teu negoci a internet, llest per vendre. Dissenys professionals que transmeten confiança i faciliten el contacte amb els teus clients.",
        'services.card2.title': 'Desenvolupament Web',
        'services.card2.description': "Ràpida, professional i fàcil d'actualitzar. La teva web funcionarà perfectament en qualsevol dispositiu i serà fàcil de trobar a Google.",
        'services.card3.title': 'Estratègia Digital',
        'services.card3.description': "T'ajudem a arribar a més clients. Des de Google Maps fins a xarxes socials, t'acompanyem perquè el teu negoci sigui visible on els teus clients et busquen.",

        // Portfolio
        'portfolio.title': 'Webs que funcionen per a negocis reals',
        'portfolio.description': 'Cada web està dissenyada per convertir visitants en clients',
        'portfolio.card1.tag': 'Restaurant',
        'portfolio.card1.title': 'Casa Luna',
        'portfolio.card1.description': 'Web professional amb carta digital i reserves per WhatsApp. Augment del 40% en consultes de clients.',
        'portfolio.card1.result.label': 'Resultat:',
        'portfolio.card1.result.value': '+40% consultes noves',
        'portfolio.card1.badge1': 'Carta digital',
        'portfolio.card1.badge2': 'WhatsApp',
        'portfolio.card1.badge3': 'SEO local',
        'portfolio.card2.tag': 'Saló de Bellesa',
        'portfolio.card2.title': 'Studio Belle',
        'portfolio.card2.description': 'Lloc elegant amb galeria de serveis i cites online. Captació de clients nous cada setmana.',
        'portfolio.card2.result.label': 'Resultat:',
        'portfolio.card2.result.value': '8-12 cites / setmana',
        'portfolio.card2.badge1': 'Galeria',
        'portfolio.card2.badge2': 'Cites online',
        'portfolio.card2.badge3': 'Mobile-first',
        'portfolio.card3.tag': 'Serveis Professionals',
        'portfolio.card3.title': 'FixNow',
        'portfolio.card3.description': 'Landing page optimitzada amb formulari de contacte directe. Major professionalitat percebuda pels clients.',
        'portfolio.card3.result.label': 'Resultat:',
        'portfolio.card3.result.value': '3x més sol·licituds',
        'portfolio.card3.badge1': 'Landing page',
        'portfolio.card3.badge2': 'Formulari',
        'portfolio.card3.badge3': 'SEO optimitzat',

        // Process
        'process.title': 'Com creem la teva pàgina web',
        'process.description': 'Un procés simple i transparent, sense sorpreses',
        'process.step1.title': 'Consulta inicial',
        'process.step1.description': 'Parlem del teu negoci, els teus objectius i què necessites comunicar. Sense compromisos, sense pressió.',
        'process.step2.title': 'Disseny personalitzat',
        'process.step2.description': 'Creem un disseny únic per a la teva marca. Et mostrem com quedarà la teva web abans de començar a programar.',
        'process.step3.title': 'Desenvolupament i ajustos',
        'process.step3.description': 'Construïm la teva web amb la millor tecnologia. Revisem junts cada detall fins que sigui perfecta.',
        'process.step4.title': 'Llançament',
        'process.step4.description': 'La teva web surt al món. T\'ensenyem a fer-la servir i quedem disponibles per a qualsevol dubte o canvi que necessitis.',

        // FAQ
        'faq.title': 'Preguntes sobre disseny web per a negocis locals',
        'faq.description': 'Respostes clares als dubtes més comuns',
        'faq.q1': 'Quant costa una pàgina web per al meu restaurant o negoci?',
        'faq.a1': 'El preu depèn del que necessitis: des de webs senzilles per mostrar el teu menú o serveis, fins a sistemes amb reserves online. Et donem pressupost clar des del primer dia, sense sorpreses. La majoria de projectes estan llestos en 2-4 setmanes.',
        'faq.q2': 'Necessito una web si el meu negoci és local?',
        'faq.a2': 'Sí. Avui dia la majoria de clients busquen a Google o xarxes socials abans de decidir. Una web professional et dona credibilitat, et fa visible i facilita que et contactin. És el teu millor venedor treballant 24/7.',
        'faq.q3': 'Funciona bé en mòbils?',
        'faq.a3': 'Sí, sempre. Dissenyem pensant primer en mòbil, perquè és on la majoria dels teus clients veuran la teva web. Es veurà perfecta en qualsevol dispositiu.',
        'faq.q4': 'Què inclou el disseny web professional?',
        'faq.a4': 'Inclou disseny a mida, desenvolupament responsive (es veu perfecte en mòbil), optimització de velocitat, SEO bàsic per a Google, formulari de contacte, i configuració completa. Et lliurem llest per rebre clients.',
        'faq.q5': "M'ajudeu amb el domini i hosting?",
        'faq.a5': "Sí, ens encarreguem de tot. T'ajudem a triar el millor domini i ens ocupem de la part tècnica perquè no hagis de preocupar-te de res.",
        'faq.q6': 'Oferiu garantia?',
        'faq.a6': 'La teva web funcionarà correctament des del primer dia. Si hi ha algun problema tècnic en els primers 30 dies, ho solucionem sense cost addicional.',

        // Contact
        'contact.title': 'Parlem del teu projecte',
        'contact.description': "Treballem amb negocis de tot el món. Explica'ns què necessites i et respondrem amb una proposta clara i sense compromís.",
        'contact.cta.whatsapp': 'Parlar per WhatsApp',
        'contact.trust': 'Resposta en menys de 24h',
        'contact.form.name': 'Nom',
        'contact.form.name.placeholder': 'El teu nom',
        'contact.form.email': 'Email o Telèfon',
        'contact.form.email.placeholder': 'Per poder contactar-te',
        'contact.form.message': "Explica'ns sobre el teu projecte",
        'contact.form.message.placeholder': 'Quin tipus de negoci tens i què necessites',
        'contact.form.submit': 'Enviar missatge',

        // Footer
        'footer.copyright': '© 2026 Caselyn. Disseny web professional per a negocis locals.',
        'footer.privacy': 'Privacitat',
        'footer.cookies': 'Cookies',
    },

    en: {
        // Nav
        'nav.servicios': 'Services',
        'nav.portafolio': 'Portfolio',
        'nav.proceso': 'Process',
        'nav.faq': 'FAQ',
        'nav.contacto': 'Contact',

        // Hero
        'hero.title': 'Professional web design for local businesses',
        'hero.subtitle': 'We help restaurants, shops, and services stand out in the digital world. Fast, professional websites focused on results, no matter where you are.',
        'hero.cta.whatsapp': 'Chat on WhatsApp',
        'hero.cta.portfolio': 'View our work',

        // Social Proof
        'social.title': 'We design for businesses that want to stand out',
        'social.stat1.number': '100%',
        'social.stat1.label': 'Mobile first',
        'social.stat2.number': 'Fast',
        'social.stat2.label': 'Instant loading',
        'social.stat3.number': '24h',
        'social.stat3.label': 'Response time',

        // Services
        'services.title': 'Professional Web Design for Restaurants and Businesses',
        'services.description': 'Three services designed to grow your business online',
        'services.card1.title': 'Web Design',
        'services.card1.description': 'Your business online, ready to sell. Professional designs that build trust and make it easy for your customers to get in touch.',
        'services.card2.title': 'Web Development',
        'services.card2.description': 'Fast, professional, and easy to update. Your website will work perfectly on any device and be easy to find on Google.',
        'services.card3.title': 'Digital Strategy',
        'services.card3.description': 'We help you reach more customers. From Google Maps to social media, we make sure your business is visible where your customers are looking.',

        // Portfolio
        'portfolio.title': 'Websites that work for real businesses',
        'portfolio.description': 'Each website is designed to convert visitors into customers',
        'portfolio.card1.tag': 'Restaurant',
        'portfolio.card1.title': 'Casa Luna',
        'portfolio.card1.description': 'Professional website with digital menu and WhatsApp bookings. 40% increase in customer inquiries.',
        'portfolio.card1.result.label': 'Result:',
        'portfolio.card1.result.value': '+40% new inquiries',
        'portfolio.card1.badge1': 'Digital menu',
        'portfolio.card1.badge2': 'WhatsApp',
        'portfolio.card1.badge3': 'Local SEO',
        'portfolio.card2.tag': 'Beauty Salon',
        'portfolio.card2.title': 'Studio Belle',
        'portfolio.card2.description': 'Elegant site with service gallery and online appointments. New clients acquired every week.',
        'portfolio.card2.result.label': 'Result:',
        'portfolio.card2.result.value': '8-12 appointments / week',
        'portfolio.card2.badge1': 'Gallery',
        'portfolio.card2.badge2': 'Online booking',
        'portfolio.card2.badge3': 'Mobile-first',
        'portfolio.card3.tag': 'Professional Services',
        'portfolio.card3.title': 'FixNow',
        'portfolio.card3.description': 'Optimized landing page with direct contact form. Greater perceived professionalism by clients.',
        'portfolio.card3.result.label': 'Result:',
        'portfolio.card3.result.value': '3x more requests',
        'portfolio.card3.badge1': 'Landing page',
        'portfolio.card3.badge2': 'Contact form',
        'portfolio.card3.badge3': 'SEO optimized',

        // Process
        'process.title': 'How we create your website',
        'process.description': 'A simple and transparent process, no surprises',
        'process.step1.title': 'Initial consultation',
        'process.step1.description': 'We talk about your business, your goals, and what you need to communicate. No commitments, no pressure.',
        'process.step2.title': 'Custom design',
        'process.step2.description': "We create a unique design for your brand. We show you how your website will look before we start coding.",
        'process.step3.title': 'Development and revisions',
        'process.step3.description': "We build your website with the best technology. We review every detail together until it's perfect.",
        'process.step4.title': 'Launch',
        'process.step4.description': 'Your website goes live. We teach you how to use it and remain available for any questions or changes you need.',

        // FAQ
        'faq.title': 'Questions about web design for local businesses',
        'faq.description': 'Clear answers to the most common questions',
        'faq.q1': 'How much does a website cost for my restaurant or business?',
        'faq.a1': 'The price depends on what you need: from simple websites to showcase your menu or services, to systems with online reservations. We give you a clear quote from day one, no surprises. Most projects are ready in 2-4 weeks.',
        'faq.q2': 'Do I need a website if my business is local?',
        'faq.a2': 'Yes. Today most customers search on Google or social media before making a decision. A professional website gives you credibility, makes you visible, and makes it easy for customers to contact you. It\'s your best salesperson working 24/7.',
        'faq.q3': 'Does it work well on mobile?',
        'faq.a3': 'Yes, always. We design mobile-first, because that\'s where most of your customers will see your website. It will look perfect on any device.',
        'faq.q4': 'What does professional web design include?',
        'faq.a4': 'It includes custom design, responsive development (looks perfect on mobile), speed optimization, basic SEO for Google, contact form, and complete setup. We deliver it ready to receive customers.',
        'faq.q5': 'Do you help with domain and hosting?',
        'faq.a5': "Yes, we take care of everything. We help you choose the best domain and handle all the technical aspects so you don't have to worry about anything.",
        'faq.q6': 'Do you offer a guarantee?',
        'faq.a6': 'Your website will work correctly from day one. If there is any technical issue within the first 30 days, we fix it at no additional cost.',

        // Contact
        'contact.title': "Let's talk about your project",
        'contact.description': "We work with businesses worldwide. Tell us what you need and we'll respond with a clear, no-commitment proposal.",
        'contact.cta.whatsapp': 'Chat on WhatsApp',
        'contact.trust': 'Response within 24h',
        'contact.form.name': 'Name',
        'contact.form.name.placeholder': 'Your name',
        'contact.form.email': 'Email or Phone',
        'contact.form.email.placeholder': 'So we can reach you',
        'contact.form.message': 'Tell us about your project',
        'contact.form.message.placeholder': 'What type of business do you have and what do you need',
        'contact.form.submit': 'Send message',

        // Footer
        'footer.copyright': '© 2026 Caselyn. Professional web design for local businesses.',
        'footer.privacy': 'Privacy',
        'footer.cookies': 'Cookies',
    },
};

/**
 * Apply translations to all elements with data-i18n attribute
 */
function applyTranslations(lang) {
    const t = translations[lang];
    if (!t) return;

    // Update text content
    document.querySelectorAll('[data-i18n]').forEach((el) => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) {
            el.textContent = t[key];
        }
    });

    // Update placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (t[key]) {
            el.setAttribute('placeholder', t[key]);
        }
    });

    // Update html lang attribute
    document.documentElement.setAttribute('lang', lang);
}
