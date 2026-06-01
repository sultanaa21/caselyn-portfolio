/**
 * Caselyn Portfolio - Translation System
 * Supports: ES (Español), CA (Català), EN (English)
 */

const translations = {
    es: {
        // Nav
        'nav.servicios': 'Servicios',
        'nav.portafolio': 'Ejemplos',
        'nav.proceso': 'Proceso',
        'nav.faq': 'FAQ',
        'nav.contacto': 'Contactar',

        // Hero
        'hero.title': 'Webs, marketing y automatización para negocios que quieren crecer.',
        'hero.subtitle': 'Diseñamos webs, lanzamos campañas y automatizamos procesos simples para que tu negocio consiga más contactos, reservas y ventas sin complicarse con la tecnología.',
        'hero.cta.primary': 'Contactar',
        'hero.cta.examples': 'Ver ejemplos',

        // Trust
        'trust.card1.title': 'Web clara',
        'trust.card1.desc': 'Tu negocio explicado de forma simple y profesional.',
        'trust.card2.title': 'Contacto fácil',
        'trust.card2.desc': 'Canales de contacto visibles y bien integrados.',
        'trust.card3.title': 'Preparada para crecer',
        'trust.card3.desc': 'Estructura lista para campañas, reservas y nuevas herramientas.',

        // Portfolio
        'portfolio.title': 'Ejemplos',
        'portfolio.description': 'Conceptos y proyectos visuales de webs para distintos tipos de negocio.',
        'portfolio.badge.featured': 'Destacado',
        'portfolio.cta.live': 'Ver proyecto',
        'portfolio.cta.soon': 'Próximamente',
        'portfolio.melt.title': 'MELT',
        'portfolio.melt.category': 'Hamburguesería',
        'portfolio.melt.tagline': 'Web visual para presentar marca, producto y contacto de forma clara.',
        'portfolio.juicy-brava.title': 'Juicy Brava',
        'portfolio.juicy-brava.category': 'Batidos & Smoothies',
        'portfolio.juicy-brava.tagline': 'Landing para negocio de batidos frescos en la Costa Brava.',
        'portfolio.juicy-brava.stack.0': 'Next.js',
        'portfolio.juicy-brava.stack.1': 'Framer Motion',
        'portfolio.juicy-brava.stack.2': 'Tailwind CSS',
        'portfolio.sa-gavina-mar.title': 'Sa Gavina Mar',
        'portfolio.sa-gavina-mar.category': 'Hotel boutique',
        'portfolio.sa-gavina-mar.tagline': 'Web visual para presentar estancia, habitaciones, experiencias y reservas.',
        'portfolio.sa-gavina-mar.stack.0': 'Visual web',
        'portfolio.sa-gavina-mar.stack.1': 'Reservas',
        'portfolio.sa-gavina-mar.stack.2': 'Concepto',
        'portfolio.personajes-virtuales-ia.title': 'Personajes Virtuales IA',
        'portfolio.personajes-virtuales-ia.category': 'IA & Contenido Digital',
        'portfolio.personajes-virtuales-ia.tagline': 'Landing para servicio de creación de contenido digital con IA.',
        'portfolio.personajes-virtuales-ia.stack.0': 'Next.js',
        'portfolio.personajes-virtuales-ia.stack.1': 'Framer Motion',
        'portfolio.personajes-virtuales-ia.stack.2': 'Tailwind CSS',
        'portfolio.frankburger.title': 'FrankBurger',
        'portfolio.frankburger.category': 'Restauración',
        'portfolio.frankburger.tagline': 'Web para hamburguesería con menú, historia y contacto directo.',
        'portfolio.frankburger.stack.0': 'Next.js',
        'portfolio.frankburger.stack.1': 'Tailwind CSS',
        'portfolio.azul-croissant.title': 'Azul Croissant',
        'portfolio.azul-croissant.category': 'Panadería & Café',
        'portfolio.azul-croissant.tagline': 'Web para panadería artesanal con carta, ubicación y pedidos.',
        'portfolio.azul-croissant.stack.0': 'Next.js',
        'portfolio.azul-croissant.stack.1': 'Tailwind CSS',

        // Process
        'process.title': 'Proceso',
        'process.description': 'De la primera idea al lanzamiento, con pasos claros.',
        'process.step1.title': 'Diagnóstico',
        'process.step1.description': 'Revisamos tu negocio, tu web actual y lo que quieres mejorar.',
        'process.step2.title': 'Propuesta',
        'process.step2.description': 'Definimos qué tiene sentido hacer: web, marketing, automatización o mantenimiento.',
        'process.step3.title': 'Diseño y desarrollo',
        'process.step3.description': 'Creamos la solución con una estructura clara y adaptada al negocio.',
        'process.step4.title': 'Lanzamiento',
        'process.step4.description': 'Publicamos, revisamos y dejamos todo listo para empezar a usarlo.',

        // FAQ
        'faq.title': 'Preguntas frecuentes',
        'faq.description': 'Respuestas directas a las dudas más comunes.',
        'faq.q1': '¿Solo hacéis páginas web?',
        'faq.a1': 'No. También trabajamos campañas, automatizaciones y mantenimiento según lo que necesite el proyecto.',
        'faq.q2': '¿Cómo empezamos?',
        'faq.a2': 'Revisamos tu situación actual y te decimos qué tendría más sentido mejorar primero.',
        'faq.q3': '¿Puedo pedir solo una landing o web?',
        'faq.a3': 'Sí. Podemos trabajar una landing, una web completa o una mejora concreta.',
        'faq.q4': '¿También lleváis campañas?',
        'faq.a4': 'Sí. Podemos ayudarte con campañas y landings preparadas para captar clientes.',
        'faq.q5': '¿Ofrecéis mantenimiento?',
        'faq.a5': 'Sí. Podemos encargarnos de cambios, soporte y revisión técnica mensual.',
        'faq.q6': '¿Tenéis precios cerrados?',
        'faq.a6': 'Depende del proyecto. Primero revisamos qué necesitas y después preparamos una propuesta clara.',
        'faq.q7': '¿Cómo empezamos?',
        'faq.a7': 'Contáctanos y revisamos qué necesita tu negocio antes de proponerte nada.',

        // CTA Final
        'cta.title': '¿Tienes algo en mente?',
        'cta.text': 'Cuéntanos qué quieres crear o mejorar y vemos cómo podemos ayudarte.',
        'cta.button': 'Contactar',

        // Diagnostico page
        'diag.title': 'Cuéntanos tu proyecto',
        'diag.subtitle': 'Dinos qué quieres crear o mejorar y revisaremos la mejor forma de ayudarte.',
        'diag.form.name': 'Nombre',
        'diag.form.name.placeholder': 'Nombre y apellido',
        'diag.form.email': 'Email',
        'diag.form.email.placeholder': '',
        'diag.form.phone': 'Teléfono',
        'diag.form.phone.placeholder': '',
        'diag.form.phone.optional': '(opcional)',
        'diag.form.phone.prefix.es': '🇪🇸 +34',
        'diag.form.phone.prefix.fr': '🇫🇷 +33',
        'diag.form.phone.prefix.ad': '🇦🇩 +376',
        'diag.form.phone.prefix.uk': '🇬🇧 +44',
        'diag.form.phone.prefix.us': '🇺🇸 +1',
        'diag.form.phone.prefix.other': 'Otro',
        'diag.form.business': 'Negocio o marca',
        'diag.form.business.placeholder': 'Nombre del negocio o marca',
        'diag.form.website': 'Web actual',
        'diag.form.website.placeholder': 'https://...',
        'diag.form.website.optional': '(si tienes)',
        'diag.form.service': '¿Qué quieres crear o mejorar?',
        'diag.form.service.default': 'Selecciona una opción',
        'diag.form.service.opt1': 'Web nueva',
        'diag.form.service.opt2': 'Landing',
        'diag.form.service.opt3': 'Rediseño web',
        'diag.form.service.opt4': 'Marketing / campañas',
        'diag.form.service.opt5': 'Automatización',
        'diag.form.service.opt6': 'Mantenimiento',
        'diag.form.service.opt7': 'No lo tengo claro',
        'diag.form.message': 'Mensaje',
        'diag.form.message.placeholder': 'Cuéntanos qué tienes en mente.',
        'diag.form.submit': 'Enviar solicitud',
        'diag.form.success': 'Solicitud enviada. Nos ponemos en contacto contigo en breve.',
        'diag.form.error': 'Algo ha fallado. Intenta de nuevo o escríbenos directamente.',

        // Footer
        'footer.copyright': '© 2026 Caselyn.',
        'footer.privacy': 'Privacidad',
        'footer.cookies': 'Cookies',

        // Legal Pages - Shared
        'nav.inicio': 'Inicio',
        'legal.back': '← Volver al inicio',

        // Privacy Policy
        'privacy.title': 'Política de Privacidad',
        'privacy.updated': '<strong>Última actualización:</strong> 3 de febrero de 2026',
        'privacy.s1.title': '1. Responsable del tratamiento',
        'privacy.s1.p1': '<strong>Identidad:</strong> Caselyn<br /><strong>Email de contacto:</strong> <a href="mailto:caselyncontact@gmail.com" style="color: var(--color-accent)">caselyncontact@gmail.com</a>',
        'privacy.s2.title': '2. ¿Qué datos recogemos?',
        'privacy.s2.p1': 'Cuando rellenas el formulario de contacto de esta web, recogemos únicamente:',
        'privacy.s2.li1': '<strong>Nombre:</strong> para saber cómo dirigirnos a ti',
        'privacy.s2.li2': '<strong>Email o teléfono:</strong> para poder responderte',
        'privacy.s2.li3': '<strong>Mensaje:</strong> para entender qué necesitas',
        'privacy.s2.li4': '<strong>Dirección IP:</strong> dato técnico que se registra automáticamente para seguridad',
        'privacy.s2.p2': 'No recogemos ningún otro dato. No usamos cookies de seguimiento ni herramientas de análisis de comportamiento.',
        'privacy.s3.title': '3. ¿Para qué usamos tus datos?',
        'privacy.s3.p1': 'Utilizamos tus datos exclusivamente para:',
        'privacy.s3.li1': 'Responder a tu solicitud de información',
        'privacy.s3.li2': 'Enviarte presupuesto o información sobre nuestros servicios si nos lo pides',
        'privacy.s3.p2': '<strong>Base legal:</strong> Tu consentimiento al rellenar y enviar el formulario.',
        'privacy.s4.title': '4. ¿Dónde se almacenan tus datos?',
        'privacy.s4.p1': 'Los datos del formulario se almacenan en:',
        'privacy.s4.li1': '<strong>Supabase:</strong> servicio de base de datos cloud que cumple con RGPD y tiene servidores en la UE',
        'privacy.s4.li2': '<strong>Resend:</strong> servicio de email que nos notifica cuando recibes un mensaje (encargado del tratamiento)',
        'privacy.s4.p2': 'Ambos proveedores actúan como encargados del tratamiento bajo contrato y cumplen con la normativa europea de protección de datos.',
        'privacy.s5.title': '5. ¿Cuánto tiempo conservamos tus datos?',
        'privacy.s5.p1': 'Conservamos tus datos:',
        'privacy.s5.li1': 'Hasta que atendemos tu solicitud',
        'privacy.s5.li2': 'Si hay un proyecto en curso, hasta que finalice y se resuelvan las gestiones administrativas necesarias',
        'privacy.s5.li3': 'Si ejerces tu derecho de supresión, los eliminaremos de forma inmediata (salvo obligaciones legales)',
        'privacy.s6.title': '6. ¿Compartimos tus datos con terceros?',
        'privacy.s6.p1': 'No vendemos ni compartimos tus datos con terceros para fines comerciales o publicitarios.',
        'privacy.s6.p2': 'Los únicos terceros que tienen acceso a tus datos son los proveedores técnicos mencionados (Supabase y Resend), que actúan bajo nuestras instrucciones para el funcionamiento de la web.',
        'privacy.s7.title': '7. Tus derechos',
        'privacy.s7.p1': 'Según el RGPD, tienes derecho a:',
        'privacy.s7.li1': '<strong>Acceso:</strong> saber qué datos tenemos sobre ti',
        'privacy.s7.li2': '<strong>Rectificación:</strong> corregir datos incorrectos',
        'privacy.s7.li3': '<strong>Supresión:</strong> pedirnos que eliminemos tus datos',
        'privacy.s7.li4': '<strong>Limitación:</strong> restringir el uso de tus datos',
        'privacy.s7.li5': '<strong>Portabilidad:</strong> recibir tus datos en formato legible',
        'privacy.s7.li6': '<strong>Oposición:</strong> oponerte al tratamiento de tus datos',
        'privacy.s7.p2': 'Para ejercer cualquiera de estos derechos, escríbenos a <a href="mailto:caselyncontact@gmail.com" style="color: var(--color-accent)">caselyncontact@gmail.com</a>',
        'privacy.s7.p3': 'También tienes derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD) si crees que no cumplimos con la normativa.',
        'privacy.s8.title': '8. Seguridad',
        'privacy.s8.p1': 'Aplicamos medidas técnicas y organizativas para proteger tus datos frente a accesos no autorizados, pérdida o alteración. Esto incluye conexiones HTTPS cifradas y almacenamiento en servidores seguros.',
        'privacy.s9.title': '9. Cambios en esta política',
        'privacy.s9.p1': 'Nos reservamos el derecho de actualizar esta política. Si hay cambios importantes, los comunicaremos en esta misma página indicando la fecha de la última actualización.',

        // Cookie Policy
        'cookies.title': 'Política de Cookies',
        'cookies.updated': '<strong>Última actualización:</strong> 3 de febrero de 2026',
        'cookies.s1.title': '1. ¿Qué son las cookies?',
        'cookies.s1.p1': 'Las cookies son pequeños archivos de texto que las páginas web guardan en tu navegador para recordar información sobre tu visita.',
        'cookies.s2.title': '2. ¿Qué cookies usamos?',
        'cookies.s2.p1': '<strong>Esta web NO utiliza cookies de terceros, cookies de seguimiento ni cookies publicitarias.</strong>',
        'cookies.s2.p2': 'Solo utilizamos cookies técnicas estrictamente necesarias para el funcionamiento básico de la web, como:',
        'cookies.s2.li1': 'Cookies de sesión del navegador',
        'cookies.s2.li2': 'Preferencias técnicas básicas (si las hubiera)',
        'cookies.s2.p3': 'Estas cookies son imprescindibles para que la web funcione correctamente y <strong>no requieren tu consentimiento</strong> según la normativa vigente.',
        'cookies.s3.title': '3. Lo que NO hacemos',
        'cookies.s3.p1': 'En Caselyn valoramos tu privacidad. Por eso, esta web:',
        'cookies.s3.li1': '❌ <strong>No usa Google Analytics</strong> ni ninguna otra herramienta de análisis',
        'cookies.s3.li2': '❌ <strong>No rastrea tu comportamiento</strong> en la web',
        'cookies.s3.li3': '❌ <strong>No muestra publicidad</strong> personalizada',
        'cookies.s3.li4': '❌ <strong>No comparte tus datos</strong> con terceros para marketing',
        'cookies.s3.li5': '❌ <strong>No instala cookies</strong> de redes sociales o servicios externos',
        'cookies.s4.title': '4. ¿Necesitas aceptar cookies?',
        'cookies.s4.p1': '<strong>No.</strong> Como esta web solo usa cookies técnicas necesarias, no estamos obligados a mostrarte un banner de cookies ni pedirte consentimiento.',
        'cookies.s4.p2': 'Puedes navegar libremente sin preocuparte por rastreadores ni seguimiento publicitario.',
        'cookies.s5.title': '5. ¿Cómo puedes gestionar las cookies?',
        'cookies.s5.p1': 'Si aún así quieres deshabilitar todas las cookies (incluidas las técnicas), puedes hacerlo desde la configuración de tu navegador:',
        'cookies.s5.li1': '<strong>Chrome:</strong> Configuración → Privacidad y seguridad → Cookies',
        'cookies.s5.li2': '<strong>Firefox:</strong> Opciones → Privacidad y seguridad → Cookies',
        'cookies.s5.li3': '<strong>Safari:</strong> Preferencias → Privacidad → Cookies',
        'cookies.s5.li4': '<strong>Edge:</strong> Configuración → Privacidad → Cookies',
        'cookies.s5.p2': 'Ten en cuenta que deshabilitar las cookies técnicas puede afectar al funcionamiento básico de la web.',
        'cookies.s6.title': '6. Cambios en esta política',
        'cookies.s6.p1': 'Si en el futuro incorporamos nuevas funcionalidades que requieran cookies, actualizaremos esta política y te informaremos adecuadamente.',
        'cookies.s7.title': '7. Contacto',
        'cookies.s7.p1': 'Si tienes dudas sobre nuestra política de cookies, puedes escribirnos a <a href="mailto:caselyncontact@gmail.com" style="color: var(--color-accent)">caselyncontact@gmail.com</a>',
    },

    ca: {
        // Nav
        'nav.servicios': 'Serveis',
        'nav.portafolio': 'Exemples',
        'nav.proceso': 'Procés',
        'nav.faq': 'FAQ',
        'nav.contacto': 'Contactar',

        // Hero
        'hero.title': 'Webs, màrqueting i automatització per a negocis que volen créixer.',
        'hero.subtitle': "Dissenyem webs, llancem campanyes i automatitzem processos simples perquè el teu negoci aconsegueixi més contactes, reserves i vendes sense complicar-se amb la tecnologia.",
        'hero.cta.primary': 'Contactar',
        'hero.cta.examples': 'Veure exemples',

        // Trust
        'trust.card1.title': 'Web clara',
        'trust.card1.desc': 'El teu negoci explicat de forma simple i professional.',
        'trust.card2.title': 'Contacte fàcil',
        'trust.card2.desc': 'Canals de contacte visibles i ben integrats.',
        'trust.card3.title': 'Preparada per créixer',
        'trust.card3.desc': 'Estructura llesta per a campanyes, reserves i noves eines.',

        // Portfolio
        'portfolio.title': 'Exemples',
        'portfolio.description': 'Conceptes i projectes visuals de webs per a diferents tipus de negoci.',
        'portfolio.badge.featured': 'Destacat',
        'portfolio.cta.live': 'Veure projecte',
        'portfolio.cta.soon': 'Pròximament',
        'portfolio.melt.title': 'MELT',
        'portfolio.melt.category': 'Hamburgueseria',
        'portfolio.melt.tagline': 'Web visual per presentar marca, producte i contacte de forma clara.',
        'portfolio.juicy-brava.title': 'Juicy Brava',
        'portfolio.juicy-brava.category': 'Batuts & Smoothies',
        'portfolio.juicy-brava.tagline': 'Landing per a negoci de batuts frescos a la Costa Brava.',
        'portfolio.juicy-brava.stack.0': 'Next.js',
        'portfolio.juicy-brava.stack.1': 'Framer Motion',
        'portfolio.juicy-brava.stack.2': 'Tailwind CSS',
        'portfolio.sa-gavina-mar.title': 'Sa Gavina Mar',
        'portfolio.sa-gavina-mar.category': 'Hotel boutique',
        'portfolio.sa-gavina-mar.tagline': 'Web visual per presentar estada, habitacions, experiències i reserves.',
        'portfolio.sa-gavina-mar.stack.0': 'Web visual',
        'portfolio.sa-gavina-mar.stack.1': 'Reserves',
        'portfolio.sa-gavina-mar.stack.2': 'Concepte',
        'portfolio.personajes-virtuales-ia.title': 'Personatges Virtuals IA',
        'portfolio.personajes-virtuales-ia.category': 'IA & Contingut Digital',
        'portfolio.personajes-virtuales-ia.tagline': 'Landing per a servei de creació de contingut digital amb IA.',
        'portfolio.personajes-virtuales-ia.stack.0': 'Next.js',
        'portfolio.personajes-virtuales-ia.stack.1': 'Framer Motion',
        'portfolio.personajes-virtuales-ia.stack.2': 'Tailwind CSS',
        'portfolio.frankburger.title': 'FrankBurger',
        'portfolio.frankburger.category': 'Restauració',
        'portfolio.frankburger.tagline': 'Web per a hamburgueseria amb menú, història i contacte directe.',
        'portfolio.frankburger.stack.0': 'Next.js',
        'portfolio.frankburger.stack.1': 'Tailwind CSS',
        'portfolio.azul-croissant.title': 'Azul Croissant',
        'portfolio.azul-croissant.category': 'Fleca & Cafè',
        'portfolio.azul-croissant.tagline': 'Web per a fleca artesanal amb carta, ubicació i comandes.',
        'portfolio.azul-croissant.stack.0': 'Next.js',
        'portfolio.azul-croissant.stack.1': 'Tailwind CSS',

        // Process
        'process.title': 'Procés',
        'process.description': 'De la primera idea al llançament, amb passos clars.',
        'process.step1.title': 'Diagnòstic',
        'process.step1.description': 'Revisem el teu negoci, la teva web actual i el que vols millorar.',
        'process.step2.title': 'Proposta',
        'process.step2.description': 'Definim què té sentit fer: web, màrqueting, automatització o manteniment.',
        'process.step3.title': 'Disseny i desenvolupament',
        'process.step3.description': 'Creem la solució amb una estructura clara i adaptada al negoci.',
        'process.step4.title': 'Llançament',
        'process.step4.description': 'Publiquem, revisem i deixem tot llest per començar a usar-ho.',

        // FAQ
        'faq.title': 'Preguntes freqüents',
        'faq.description': 'Respostes directes als dubtes més comuns.',
        'faq.q1': 'Només feu pàgines web?',
        'faq.a1': 'No. També treballem campanyes, automatitzacions i manteniment segons el que necessiti el projecte.',
        'faq.q2': 'Com comencem?',
        'faq.a2': 'Revisem la teva situació actual i et diem què tindria més sentit millorar primer.',
        'faq.q3': 'Puc demanar només una landing o web?',
        'faq.a3': 'Sí. Podem treballar una landing, una web completa o una millora concreta.',
        'faq.q4': 'També porteu campanyes?',
        'faq.a4': 'Sí. Podem ajudar-te amb campanyes i landings preparades per captar clients.',
        'faq.q5': 'Oferiu manteniment?',
        'faq.a5': 'Sí. Podem encarregar-nos de canvis, suport i revisió tècnica mensual.',
        'faq.q6': 'Teniu preus tancats?',
        'faq.a6': 'Depèn del projecte. Primer revisem què necessites i després preparem una proposta clara.',
        'faq.q7': 'Com comencem?',
        'faq.a7': 'Contacta\'ns i revisem què necessita el teu negoci abans de proposar-te res.',

        // CTA Final
        'cta.title': 'Tens alguna cosa en ment?',
        'cta.text': 'Explica\'ns què vols crear o millorar i veiem com podem ajudar-te.',
        'cta.button': 'Contactar',

        // Diagnostico page
        'diag.title': 'Explica\'ns el teu projecte',
        'diag.subtitle': 'Digues-nos què vols crear o millorar i revisarem la millor manera d\'ajudar-te.',
        'diag.form.name': 'Nom',
        'diag.form.name.placeholder': 'Nom i cognoms',
        'diag.form.email': 'Email',
        'diag.form.email.placeholder': '',
        'diag.form.phone': 'Telèfon',
        'diag.form.phone.placeholder': '',
        'diag.form.phone.optional': '(opcional)',
        'diag.form.phone.prefix.es': '🇪🇸 +34',
        'diag.form.phone.prefix.fr': '🇫🇷 +33',
        'diag.form.phone.prefix.ad': '🇦🇩 +376',
        'diag.form.phone.prefix.uk': '🇬🇧 +44',
        'diag.form.phone.prefix.us': '🇺🇸 +1',
        'diag.form.phone.prefix.other': 'Altre',
        'diag.form.business': 'Negoci o marca',
        'diag.form.business.placeholder': 'Nom del negoci o marca',
        'diag.form.website': 'Web actual',
        'diag.form.website.placeholder': 'https://...',
        'diag.form.website.optional': '(si en tens)',
        'diag.form.service': 'Què vols crear o millorar?',
        'diag.form.service.default': 'Selecciona una opció',
        'diag.form.service.opt1': 'Web nova',
        'diag.form.service.opt2': 'Landing',
        'diag.form.service.opt3': 'Redisseny web',
        'diag.form.service.opt4': 'Màrqueting / campanyes',
        'diag.form.service.opt5': 'Automatització',
        'diag.form.service.opt6': 'Manteniment',
        'diag.form.service.opt7': 'No ho tinc clar',
        'diag.form.message': 'Missatge',
        'diag.form.message.placeholder': "Explica'ns què tens en ment.",
        'diag.form.submit': 'Enviar sol·licitud',
        'diag.form.success': 'Sol·licitud enviada. Ens posem en contacte amb tu aviat.',
        'diag.form.error': 'Alguna cosa ha fallat. Torna-ho a intentar o escriu-nos directament.',

        // Footer
        'footer.copyright': '© 2026 Caselyn.',
        'footer.privacy': 'Privacitat',
        'footer.cookies': 'Cookies',

        // Legal Pages - Shared
        'nav.inicio': 'Inici',
        'legal.back': '← Tornar a l\'inici',

        // Privacy Policy
        'privacy.title': 'Política de Privacitat',
        'privacy.updated': '<strong>Última actualització:</strong> 3 de febrer de 2026',
        'privacy.s1.title': '1. Responsable del tractament',
        'privacy.s1.p1': '<strong>Identitat:</strong> Caselyn<br /><strong>Email de contacte:</strong> <a href="mailto:caselyncontact@gmail.com" style="color: var(--color-accent)">caselyncontact@gmail.com</a>',
        'privacy.s2.title': '2. Quines dades recollim?',
        'privacy.s2.p1': 'Quan omples el formulari de contacte d\'aquesta web, recollim únicament:',
        'privacy.s2.li1': '<strong>Nom:</strong> per saber com dirigir-nos a tu',
        'privacy.s2.li2': '<strong>Email o telèfon:</strong> per poder respondre\'t',
        'privacy.s2.li3': '<strong>Missatge:</strong> per entendre què necessites',
        'privacy.s2.li4': '<strong>Adreça IP:</strong> dada tècnica que es registra automàticament per seguretat',
        'privacy.s2.p2': 'No recollim cap altra dada. No fem servir cookies de seguiment ni eines d\'anàlisi de comportament.',
        'privacy.s3.title': '3. Per a què fem servir les teves dades?',
        'privacy.s3.p1': 'Utilitzem les teves dades exclusivament per:',
        'privacy.s3.li1': 'Respondre a la teva sol·licitud d\'informació',
        'privacy.s3.li2': 'Enviar-te pressupost o informació sobre els nostres serveis si ens ho demanes',
        'privacy.s3.p2': '<strong>Base legal:</strong> El teu consentiment en omplir i enviar el formulari.',
        'privacy.s4.title': '4. On s\'emmagatzemen les teves dades?',
        'privacy.s4.p1': 'Les dades del formulari s\'emmagatzemen a:',
        'privacy.s4.li1': '<strong>Supabase:</strong> servei de base de dades cloud que compleix amb el RGPD i té servidors a la UE',
        'privacy.s4.li2': '<strong>Resend:</strong> servei d\'email que ens notifica quan reps un missatge (encarregat del tractament)',
        'privacy.s4.p2': 'Ambdós proveïdors actuen com a encarregats del tractament sota contracte i compleixen amb la normativa europea de protecció de dades.',
        'privacy.s5.title': '5. Quant de temps conservem les teves dades?',
        'privacy.s5.p1': 'Conservem les teves dades:',
        'privacy.s5.li1': 'Fins que atenem la teva sol·licitud',
        'privacy.s5.li2': 'Si hi ha un projecte en curs, fins que finalitzi i es resolguin les gestions administratives necessàries',
        'privacy.s5.li3': 'Si exerceixes el teu dret de supressió, les eliminarem de forma immediata (excepte obligacions legals)',
        'privacy.s6.title': '6. Compartim les teves dades amb tercers?',
        'privacy.s6.p1': 'No venem ni compartim les teves dades amb tercers per a fins comercials o publicitaris.',
        'privacy.s6.p2': 'Els únics tercers que tenen accés a les teves dades són els proveïdors tècnics esmentats (Supabase i Resend), que actuen sota les nostres instruccions per al funcionament de la web.',
        'privacy.s7.title': '7. Els teus drets',
        'privacy.s7.p1': 'Segons el RGPD, tens dret a:',
        'privacy.s7.li1': '<strong>Accés:</strong> saber quines dades tenim sobre tu',
        'privacy.s7.li2': '<strong>Rectificació:</strong> corregir dades incorrectes',
        'privacy.s7.li3': '<strong>Supressió:</strong> demanar-nos que eliminem les teves dades',
        'privacy.s7.li4': '<strong>Limitació:</strong> restringir l\'ús de les teves dades',
        'privacy.s7.li5': '<strong>Portabilitat:</strong> rebre les teves dades en format llegible',
        'privacy.s7.li6': '<strong>Oposició:</strong> oposar-te al tractament de les teves dades',
        'privacy.s7.p2': 'Per exercir qualsevol d\'aquests drets, escriu-nos a <a href="mailto:caselyncontact@gmail.com" style="color: var(--color-accent)">caselyncontact@gmail.com</a>',
        'privacy.s7.p3': 'També tens dret a presentar una reclamació davant l\'Agència Espanyola de Protecció de Dades (AEPD) si creus que no complim amb la normativa.',
        'privacy.s8.title': '8. Seguretat',
        'privacy.s8.p1': 'Apliquem mesures tècniques i organitzatives per protegir les teves dades davant d\'accessos no autoritzats, pèrdua o alteració. Això inclou connexions HTTPS xifrades i emmagatzematge en servidors segurs.',
        'privacy.s9.title': '9. Canvis en aquesta política',
        'privacy.s9.p1': 'Ens reservem el dret d\'actualitzar aquesta política. Si hi ha canvis importants, els comunicarem en aquesta mateixa pàgina indicant la data de l\'última actualització.',

        // Cookie Policy
        'cookies.title': 'Política de Cookies',
        'cookies.updated': '<strong>Última actualització:</strong> 3 de febrer de 2026',
        'cookies.s1.title': '1. Què són les cookies?',
        'cookies.s1.p1': 'Les cookies són petits arxius de text que les pàgines web guarden al teu navegador per recordar informació sobre la teva visita.',
        'cookies.s2.title': '2. Quines cookies fem servir?',
        'cookies.s2.p1': '<strong>Aquesta web NO utilitza cookies de tercers, cookies de seguiment ni cookies publicitàries.</strong>',
        'cookies.s2.p2': 'Només utilitzem cookies tècniques estrictament necessàries per al funcionament bàsic de la web, com:',
        'cookies.s2.li1': 'Cookies de sessió del navegador',
        'cookies.s2.li2': 'Preferències tècniques bàsiques (si n\'hi hagués)',
        'cookies.s2.p3': 'Aquestes cookies són imprescindibles perquè la web funcioni correctament i <strong>no requereixen el teu consentiment</strong> segons la normativa vigent.',
        'cookies.s3.title': '3. El que NO fem',
        'cookies.s3.p1': 'A Caselyn valorem la teva privacitat. Per això, aquesta web:',
        'cookies.s3.li1': '❌ <strong>No fa servir Google Analytics</strong> ni cap altra eina d\'anàlisi',
        'cookies.s3.li2': '❌ <strong>No rastreja el teu comportament</strong> a la web',
        'cookies.s3.li3': '❌ <strong>No mostra publicitat</strong> personalitzada',
        'cookies.s3.li4': '❌ <strong>No comparteix les teves dades</strong> amb tercers per a màrqueting',
        'cookies.s3.li5': '❌ <strong>No instal·la cookies</strong> de xarxes socials o serveis externs',
        'cookies.s4.title': '4. Necessites acceptar cookies?',
        'cookies.s4.p1': '<strong>No.</strong> Com que aquesta web només fa servir cookies tècniques necessàries, no estem obligats a mostrar-te un banner de cookies ni demanar-te consentiment.',
        'cookies.s4.p2': 'Pots navegar lliurement sense preocupar-te per rastrejadors ni seguiment publicitari.',
        'cookies.s5.title': '5. Com pots gestionar les cookies?',
        'cookies.s5.p1': 'Si tot i així vols deshabilitar totes les cookies (incloses les tècniques), pots fer-ho des de la configuració del teu navegador:',
        'cookies.s5.li1': '<strong>Chrome:</strong> Configuració → Privacitat i seguretat → Cookies',
        'cookies.s5.li2': '<strong>Firefox:</strong> Opcions → Privacitat i seguretat → Cookies',
        'cookies.s5.li3': '<strong>Safari:</strong> Preferències → Privacitat → Cookies',
        'cookies.s5.li4': '<strong>Edge:</strong> Configuració → Privacitat → Cookies',
        'cookies.s5.p2': 'Tingues en compte que deshabilitar les cookies tècniques pot afectar el funcionament bàsic de la web.',
        'cookies.s6.title': '6. Canvis en aquesta política',
        'cookies.s6.p1': 'Si en el futur incorporem noves funcionalitats que requereixin cookies, actualitzarem aquesta política i t\'informarem adequadament.',
        'cookies.s7.title': '7. Contacte',
        'cookies.s7.p1': 'Si tens dubtes sobre la nostra política de cookies, pots escriure\'ns a <a href="mailto:caselyncontact@gmail.com" style="color: var(--color-accent)">caselyncontact@gmail.com</a>',
    },

    en: {
        // Nav
        'nav.servicios': 'Services',
        'nav.portafolio': 'Examples',
        'nav.proceso': 'Process',
        'nav.faq': 'FAQ',
        'nav.contacto': 'Contact',

        // Hero
        'hero.title': 'Websites, marketing and automation for businesses that want to grow.',
        'hero.subtitle': 'We design websites, run campaigns and automate simple processes so your business gets more contacts, bookings and sales without the tech headache.',
        'hero.cta.primary': 'Contact us',
        'hero.cta.examples': 'See examples',

        // Trust
        'trust.card1.title': 'Clear website',
        'trust.card1.desc': 'Your business explained simply and professionally.',
        'trust.card2.title': 'Easy contact',
        'trust.card2.desc': 'Visible contact channels, properly integrated.',
        'trust.card3.title': 'Ready to grow',
        'trust.card3.desc': 'Structure ready for campaigns, bookings and new tools.',

        // Portfolio
        'portfolio.title': 'Examples',
        'portfolio.description': 'Visual concepts and projects for different types of business.',
        'portfolio.badge.featured': 'Featured',
        'portfolio.cta.live': 'View project',
        'portfolio.cta.soon': 'Coming soon',
        'portfolio.melt.title': 'MELT',
        'portfolio.melt.category': 'Burger Joint',
        'portfolio.melt.tagline': 'Visual website to present brand, product and contact clearly.',
        'portfolio.juicy-brava.title': 'Juicy Brava',
        'portfolio.juicy-brava.category': 'Smoothies & Drinks',
        'portfolio.juicy-brava.tagline': 'Landing for a fresh smoothie business on the Costa Brava.',
        'portfolio.juicy-brava.stack.0': 'Next.js',
        'portfolio.juicy-brava.stack.1': 'Framer Motion',
        'portfolio.juicy-brava.stack.2': 'Tailwind CSS',
        'portfolio.sa-gavina-mar.title': 'Sa Gavina Mar',
        'portfolio.sa-gavina-mar.category': 'Boutique hotel',
        'portfolio.sa-gavina-mar.tagline': 'Visual website for presenting stays, rooms, experiences and bookings.',
        'portfolio.sa-gavina-mar.stack.0': 'Visual web',
        'portfolio.sa-gavina-mar.stack.1': 'Bookings',
        'portfolio.sa-gavina-mar.stack.2': 'Concept',
        'portfolio.personajes-virtuales-ia.title': 'Virtual Characters AI',
        'portfolio.personajes-virtuales-ia.category': 'AI & Digital Content',
        'portfolio.personajes-virtuales-ia.tagline': 'Landing for an AI-powered digital content creation service.',
        'portfolio.personajes-virtuales-ia.stack.0': 'Next.js',
        'portfolio.personajes-virtuales-ia.stack.1': 'Framer Motion',
        'portfolio.personajes-virtuales-ia.stack.2': 'Tailwind CSS',
        'portfolio.frankburger.title': 'FrankBurger',
        'portfolio.frankburger.category': 'Restaurants',
        'portfolio.frankburger.tagline': 'Website for a burger joint with menu, story and direct contact.',
        'portfolio.frankburger.stack.0': 'Next.js',
        'portfolio.frankburger.stack.1': 'Tailwind CSS',
        'portfolio.azul-croissant.title': 'Azul Croissant',
        'portfolio.azul-croissant.category': 'Bakery & Coffee',
        'portfolio.azul-croissant.tagline': 'Website for an artisan bakery with menu, location and orders.',
        'portfolio.azul-croissant.stack.0': 'Next.js',
        'portfolio.azul-croissant.stack.1': 'Tailwind CSS',

        // Process
        'process.title': 'Process',
        'process.description': 'From the first idea to launch, with clear steps.',
        'process.step1.title': 'Diagnosis',
        'process.step1.description': 'We review your business, your current website and what you want to improve.',
        'process.step2.title': 'Proposal',
        'process.step2.description': 'We define what makes sense: website, marketing, automation or maintenance.',
        'process.step3.title': 'Design and development',
        'process.step3.description': 'We build the solution with a clear structure adapted to the business.',
        'process.step4.title': 'Launch',
        'process.step4.description': 'We publish, review and leave everything ready to start using it.',

        // FAQ
        'faq.title': 'Frequently asked questions',
        'faq.description': 'Direct answers to the most common questions.',
        'faq.q1': 'Do you only build websites?',
        'faq.a1': 'No. We also work on campaigns, automations and maintenance depending on what the project needs.',
        'faq.q2': 'How do we start?',
        'faq.a2': 'We review your current situation and tell you what would make the most sense to improve first.',
        'faq.q3': 'Can I just ask for a landing page or a website?',
        'faq.a3': 'Yes. We can work on a landing page, a full website or a specific improvement.',
        'faq.q4': 'Do you also run campaigns?',
        'faq.a4': 'Yes. We can help with campaigns and landing pages designed to attract clients.',
        'faq.q5': 'Do you offer maintenance?',
        'faq.a5': 'Yes. We can handle updates, support and monthly technical reviews.',
        'faq.q6': 'Do you have fixed prices?',
        'faq.a6': 'It depends on the project. We first review what you need and then put together a clear proposal.',
        'faq.q7': 'How do we start?',
        'faq.a7': 'Contact us and we will review what your business needs before proposing anything.',

        // CTA Final
        'cta.title': 'Got something in mind?',
        'cta.text': 'Tell us what you want to create or improve and we will see how we can help.',
        'cta.button': 'Contact us',

        // Diagnostico page
        'diag.title': 'Tell us about your project',
        'diag.subtitle': 'Tell us what you want to create or improve and we will find the best way to help.',
        'diag.form.name': 'Name',
        'diag.form.name.placeholder': 'Full name',
        'diag.form.email': 'Email',
        'diag.form.email.placeholder': '',
        'diag.form.phone': 'Phone',
        'diag.form.phone.placeholder': '',
        'diag.form.phone.optional': '(optional)',
        'diag.form.phone.prefix.es': '🇪🇸 +34',
        'diag.form.phone.prefix.fr': '🇫🇷 +33',
        'diag.form.phone.prefix.ad': '🇦🇩 +376',
        'diag.form.phone.prefix.uk': '🇬🇧 +44',
        'diag.form.phone.prefix.us': '🇺🇸 +1',
        'diag.form.phone.prefix.other': 'Other',
        'diag.form.business': 'Business or brand',
        'diag.form.business.placeholder': 'Business or brand name',
        'diag.form.website': 'Current website',
        'diag.form.website.placeholder': 'https://...',
        'diag.form.website.optional': '(if you have one)',
        'diag.form.service': 'What do you want to create or improve?',
        'diag.form.service.default': 'Select an option',
        'diag.form.service.opt1': 'New website',
        'diag.form.service.opt2': 'Landing page',
        'diag.form.service.opt3': 'Website redesign',
        'diag.form.service.opt4': 'Marketing / campaigns',
        'diag.form.service.opt5': 'Automation',
        'diag.form.service.opt6': 'Maintenance',
        'diag.form.service.opt7': 'Not sure yet',
        'diag.form.message': 'Message',
        'diag.form.message.placeholder': 'Tell us what you have in mind.',
        'diag.form.submit': 'Send request',
        'diag.form.success': 'Request sent. We will be in touch shortly.',
        'diag.form.error': 'Something went wrong. Please try again or write to us directly.',

        // Footer
        'footer.copyright': '© 2026 Caselyn.',
        'footer.privacy': 'Privacy',
        'footer.cookies': 'Cookies',

        // Legal Pages - Shared
        'nav.inicio': 'Home',
        'legal.back': '← Back to home',

        // Privacy Policy
        'privacy.title': 'Privacy Policy',
        'privacy.updated': '<strong>Last updated:</strong> February 3, 2026',
        'privacy.s1.title': '1. Data Controller',
        'privacy.s1.p1': '<strong>Identity:</strong> Caselyn<br /><strong>Contact email:</strong> <a href="mailto:caselyncontact@gmail.com" style="color: var(--color-accent)">caselyncontact@gmail.com</a>',
        'privacy.s2.title': '2. What data do we collect?',
        'privacy.s2.p1': 'When you fill out the contact form on this website, we only collect:',
        'privacy.s2.li1': '<strong>Name:</strong> so we know how to address you',
        'privacy.s2.li2': '<strong>Email or phone:</strong> so we can reply to you',
        'privacy.s2.li3': '<strong>Message:</strong> to understand what you need',
        'privacy.s2.li4': '<strong>IP address:</strong> technical data automatically recorded for security',
        'privacy.s2.p2': 'We do not collect any other data. We do not use tracking cookies or behavioral analysis tools.',
        'privacy.s3.title': '3. What do we use your data for?',
        'privacy.s3.p1': 'We use your data exclusively to:',
        'privacy.s3.li1': 'Respond to your information request',
        'privacy.s3.li2': 'Send you a quote or information about our services if you request it',
        'privacy.s3.p2': '<strong>Legal basis:</strong> Your consent when filling out and submitting the form.',
        'privacy.s4.title': '4. Where is your data stored?',
        'privacy.s4.p1': 'The form data is stored in:',
        'privacy.s4.li1': '<strong>Supabase:</strong> a cloud database service that complies with GDPR and has servers in the EU',
        'privacy.s4.li2': '<strong>Resend:</strong> an email service that notifies us when you send a message (data processor)',
        'privacy.s4.p2': 'Both providers act as data processors under contract and comply with European data protection regulations.',
        'privacy.s5.title': '5. How long do we keep your data?',
        'privacy.s5.p1': 'We keep your data:',
        'privacy.s5.li1': 'Until we respond to your request',
        'privacy.s5.li2': 'If there is an ongoing project, until it is completed and the necessary administrative tasks are resolved',
        'privacy.s5.li3': 'If you exercise your right to erasure, we will delete them immediately (except for legal obligations)',
        'privacy.s6.title': '6. Do we share your data with third parties?',
        'privacy.s6.p1': 'We do not sell or share your data with third parties for commercial or advertising purposes.',
        'privacy.s6.p2': 'The only third parties with access to your data are the technical providers mentioned (Supabase and Resend), who act under our instructions for the operation of the website.',
        'privacy.s7.title': '7. Your rights',
        'privacy.s7.p1': 'Under the GDPR, you have the right to:',
        'privacy.s7.li1': '<strong>Access:</strong> know what data we have about you',
        'privacy.s7.li2': '<strong>Rectification:</strong> correct inaccurate data',
        'privacy.s7.li3': '<strong>Erasure:</strong> ask us to delete your data',
        'privacy.s7.li4': '<strong>Restriction:</strong> restrict the use of your data',
        'privacy.s7.li5': '<strong>Portability:</strong> receive your data in a readable format',
        'privacy.s7.li6': '<strong>Objection:</strong> object to the processing of your data',
        'privacy.s7.p2': 'To exercise any of these rights, write to us at <a href="mailto:caselyncontact@gmail.com" style="color: var(--color-accent)">caselyncontact@gmail.com</a>',
        'privacy.s7.p3': 'You also have the right to file a complaint with the Spanish Data Protection Agency (AEPD) if you believe we are not complying with the regulations.',
        'privacy.s8.title': '8. Security',
        'privacy.s8.p1': 'We apply technical and organizational measures to protect your data against unauthorized access, loss, or alteration. This includes encrypted HTTPS connections and storage on secure servers.',
        'privacy.s9.title': '9. Changes to this policy',
        'privacy.s9.p1': 'We reserve the right to update this policy. If there are significant changes, we will communicate them on this page indicating the date of the last update.',

        // Cookie Policy
        'cookies.title': 'Cookie Policy',
        'cookies.updated': '<strong>Last updated:</strong> February 3, 2026',
        'cookies.s1.title': '1. What are cookies?',
        'cookies.s1.p1': 'Cookies are small text files that websites store in your browser to remember information about your visit.',
        'cookies.s2.title': '2. What cookies do we use?',
        'cookies.s2.p1': '<strong>This website does NOT use third-party cookies, tracking cookies, or advertising cookies.</strong>',
        'cookies.s2.p2': 'We only use strictly necessary technical cookies for the basic operation of the website, such as:',
        'cookies.s2.li1': 'Browser session cookies',
        'cookies.s2.li2': 'Basic technical preferences (if any)',
        'cookies.s2.p3': 'These cookies are essential for the website to function properly and <strong>do not require your consent</strong> under current regulations.',
        'cookies.s3.title': '3. What we do NOT do',
        'cookies.s3.p1': 'At Caselyn we value your privacy. That is why this website:',
        'cookies.s3.li1': '❌ <strong>Does not use Google Analytics</strong> or any other analytics tool',
        'cookies.s3.li2': '❌ <strong>Does not track your behavior</strong> on the website',
        'cookies.s3.li3': '❌ <strong>Does not show personalized advertising</strong>',
        'cookies.s3.li4': '❌ <strong>Does not share your data</strong> with third parties for marketing',
        'cookies.s3.li5': '❌ <strong>Does not install cookies</strong> from social networks or external services',
        'cookies.s4.title': '4. Do you need to accept cookies?',
        'cookies.s4.p1': '<strong>No.</strong> Since this website only uses necessary technical cookies, we are not required to show you a cookie banner or ask for your consent.',
        'cookies.s4.p2': 'You can browse freely without worrying about trackers or advertising tracking.',
        'cookies.s5.title': '5. How can you manage cookies?',
        'cookies.s5.p1': 'If you still want to disable all cookies (including technical ones), you can do so from your browser settings:',
        'cookies.s5.li1': '<strong>Chrome:</strong> Settings → Privacy and security → Cookies',
        'cookies.s5.li2': '<strong>Firefox:</strong> Options → Privacy and security → Cookies',
        'cookies.s5.li3': '<strong>Safari:</strong> Preferences → Privacy → Cookies',
        'cookies.s5.li4': '<strong>Edge:</strong> Settings → Privacy → Cookies',
        'cookies.s5.p2': 'Please note that disabling technical cookies may affect the basic functionality of the website.',
        'cookies.s6.title': '6. Changes to this policy',
        'cookies.s6.p1': 'If in the future we incorporate new features that require cookies, we will update this policy and inform you accordingly.',
        'cookies.s7.title': '7. Contact',
        'cookies.s7.p1': 'If you have questions about our cookie policy, you can write to us at <a href="mailto:caselyncontact@gmail.com" style="color: var(--color-accent)">caselyncontact@gmail.com</a>',
    },

    fr: {
        // Nav
        'nav.servicios': 'Services',
        'nav.portafolio': 'Exemples',
        'nav.proceso': 'Processus',
        'nav.faq': 'FAQ',
        'nav.contacto': 'Nous contacter',

        // Hero
        'hero.title': 'Sites web, marketing et automatisation pour les entreprises qui veulent grandir.',
        'hero.subtitle': 'Nous créons des sites web, lançons des campagnes et automatisons des processus simples pour que votre entreprise obtienne plus de contacts, réservations et ventes sans se compliquer avec la technologie.',
        'hero.cta.primary': 'Nous contacter',
        'hero.cta.examples': 'Voir les exemples',

        // Trust
        'trust.card1.title': 'Site clair',
        'trust.card1.desc': 'Votre entreprise expliquée simplement et professionnellement.',
        'trust.card2.title': 'Contact facile',
        'trust.card2.desc': 'Canaux de contact visibles et bien intégrés.',
        'trust.card3.title': 'Prêt à grandir',
        'trust.card3.desc': 'Structure prête pour les campagnes, réservations et nouveaux outils.',

        // Portfolio
        'portfolio.title': 'Exemples',
        'portfolio.description': 'Concepts visuels et projets de sites pour différents types d\'entreprise.',
        'portfolio.badge.featured': 'Vedette',
        'portfolio.cta.live': 'Voir le projet',
        'portfolio.cta.soon': 'À venir',
        'portfolio.melt.title': 'MELT',
        'portfolio.melt.category': 'Boutique de burgers',
        'portfolio.melt.tagline': 'Site visuel pour présenter la marque, le produit et le contact clairement.',
        'portfolio.juicy-brava.title': 'Juicy Brava',
        'portfolio.juicy-brava.category': 'Smoothies & Boissons',
        'portfolio.juicy-brava.tagline': 'Landing pour un commerce de smoothies frais sur la Costa Brava.',
        'portfolio.juicy-brava.stack.0': 'Next.js',
        'portfolio.juicy-brava.stack.1': 'Framer Motion',
        'portfolio.juicy-brava.stack.2': 'Tailwind CSS',
        'portfolio.sa-gavina-mar.title': 'Sa Gavina Mar',
        'portfolio.sa-gavina-mar.category': 'Hôtel boutique',
        'portfolio.sa-gavina-mar.tagline': 'Site visuel pour présenter le séjour, les chambres, les expériences et les réservations.',
        'portfolio.sa-gavina-mar.stack.0': 'Web visuel',
        'portfolio.sa-gavina-mar.stack.1': 'Réservations',
        'portfolio.sa-gavina-mar.stack.2': 'Concept',
        'portfolio.personajes-virtuales-ia.title': 'Personnages Virtuels IA',
        'portfolio.personajes-virtuales-ia.category': 'IA & Contenu Digital',
        'portfolio.personajes-virtuales-ia.tagline': 'Landing pour un service de création de contenu digital avec IA.',
        'portfolio.personajes-virtuales-ia.stack.0': 'Next.js',
        'portfolio.personajes-virtuales-ia.stack.1': 'Framer Motion',
        'portfolio.personajes-virtuales-ia.stack.2': 'Tailwind CSS',
        'portfolio.frankburger.title': 'FrankBurger',
        'portfolio.frankburger.category': 'Restauration',
        'portfolio.frankburger.tagline': 'Site pour un restaurant de burgers avec menu, histoire et contact direct.',
        'portfolio.frankburger.stack.0': 'Next.js',
        'portfolio.frankburger.stack.1': 'Tailwind CSS',
        'portfolio.azul-croissant.title': 'Azul Croissant',
        'portfolio.azul-croissant.category': 'Boulangerie & Café',
        'portfolio.azul-croissant.tagline': 'Site pour une boulangerie artisanale avec carte, localisation et commandes.',
        'portfolio.azul-croissant.stack.0': 'Next.js',
        'portfolio.azul-croissant.stack.1': 'Tailwind CSS',

        // Process
        'process.title': 'Processus',
        'process.description': 'De la première idée au lancement, avec des étapes claires.',
        'process.step1.title': 'Diagnostic',
        'process.step1.description': 'Nous analysons votre activité, votre site actuel et ce que vous voulez améliorer.',
        'process.step2.title': 'Proposition',
        'process.step2.description': 'Nous définissons ce qui a du sens : site, marketing, automatisation ou maintenance.',
        'process.step3.title': 'Design et développement',
        'process.step3.description': 'Nous créons la solution avec une structure claire adaptée à l\'activité.',
        'process.step4.title': 'Lancement',
        'process.step4.description': 'Nous publions, vérifions et laissons tout prêt pour commencer à l\'utiliser.',

        // FAQ
        'faq.title': 'Questions fréquentes',
        'faq.description': 'Des réponses directes aux questions les plus courantes.',
        'faq.q1': 'Vous ne faites que des sites web ?',
        'faq.a1': 'Non. Nous travaillons aussi sur des campagnes, des automatisations et de la maintenance selon les besoins du projet.',
        'faq.q2': 'Comment commencer ?',
        'faq.a2': 'Nous analysons votre situation actuelle et vous indiquons ce qu\'il serait le plus pertinent d\'améliorer en premier.',
        'faq.q3': 'Puis-je demander seulement une landing ou un site ?',
        'faq.a3': 'Oui. Nous pouvons travailler sur une landing page, un site complet ou une amélioration spécifique.',
        'faq.q4': 'Gérez-vous aussi des campagnes ?',
        'faq.a4': 'Oui. Nous pouvons vous aider avec des campagnes et des landings conçues pour attirer des clients.',
        'faq.q5': 'Proposez-vous de la maintenance ?',
        'faq.a5': 'Oui. Nous pouvons nous occuper des modifications, du support et des révisions techniques mensuelles.',
        'faq.q6': 'Avez-vous des tarifs fixes ?',
        'faq.a6': 'Cela dépend du projet. Nous analysons d\'abord vos besoins puis nous préparons une proposition claire.',
        'faq.q7': 'Comment commencer ?',
        'faq.a7': 'Contactez-nous et nous analyserons les besoins de votre entreprise avant de vous proposer quoi que ce soit.',

        // CTA Final
        'cta.title': 'Vous avez quelque chose en tête ?',
        'cta.text': 'Dites-nous ce que vous voulez créer ou améliorer et nous verrons comment vous aider.',
        'cta.button': 'Nous contacter',

        // Diagnostico page
        'diag.title': 'Parlez-nous de votre projet',
        'diag.subtitle': 'Dites-nous ce que vous voulez créer ou améliorer et nous étudierons la meilleure façon de vous aider.',
        'diag.form.name': 'Nom',
        'diag.form.name.placeholder': 'Nom et prénom',
        'diag.form.email': 'Email',
        'diag.form.email.placeholder': '',
        'diag.form.phone': 'Téléphone',
        'diag.form.phone.placeholder': '',
        'diag.form.phone.optional': '(facultatif)',
        'diag.form.phone.prefix.es': '🇪🇸 +34',
        'diag.form.phone.prefix.fr': '🇫🇷 +33',
        'diag.form.phone.prefix.ad': '🇦🇩 +376',
        'diag.form.phone.prefix.uk': '🇬🇧 +44',
        'diag.form.phone.prefix.us': '🇺🇸 +1',
        'diag.form.phone.prefix.other': 'Autre',
        'diag.form.business': 'Entreprise ou marque',
        'diag.form.business.placeholder': 'Nom de l\'entreprise ou marque',
        'diag.form.website': 'Site actuel',
        'diag.form.website.placeholder': 'https://...',
        'diag.form.website.optional': '(si vous en avez un)',
        'diag.form.service': 'Que voulez-vous créer ou améliorer ?',
        'diag.form.service.default': 'Sélectionnez une option',
        'diag.form.service.opt1': 'Nouveau site web',
        'diag.form.service.opt2': 'Landing page',
        'diag.form.service.opt3': 'Refonte du site',
        'diag.form.service.opt4': 'Marketing / campagnes',
        'diag.form.service.opt5': 'Automatisation',
        'diag.form.service.opt6': 'Maintenance',
        'diag.form.service.opt7': 'Je ne sais pas encore',
        'diag.form.message': 'Message',
        'diag.form.message.placeholder': 'Dites-nous ce que vous avez en tête.',
        'diag.form.submit': 'Envoyer la demande',
        'diag.form.success': 'Demande envoyée. Nous vous contacterons rapidement.',
        'diag.form.error': 'Un problème est survenu. Réessayez ou écrivez-nous directement.',

        // Footer
        'footer.copyright': '© 2026 Caselyn.',
        'footer.privacy': 'Confidentialité',
        'footer.cookies': 'Cookies',

        // Legal Pages - Shared
        'nav.inicio': 'Accueil',
        'legal.back': '← Retour à l\'accueil',

        // Privacy Policy
        'privacy.title': 'Politique de Confidentialité',
        'privacy.updated': '<strong>Dernière mise à jour :</strong> 3 février 2026',
        'privacy.s1.title': '1. Responsable du traitement',
        'privacy.s1.p1': '<strong>Identité :</strong> Caselyn<br /><strong>Email de contact :</strong> <a href="mailto:caselyncontact@gmail.com" style="color: var(--color-accent)">caselyncontact@gmail.com</a>',
        'privacy.s2.title': '2. Quelles données collectons-nous ?',
        'privacy.s2.p1': 'Lorsque vous remplissez le formulaire de contact de ce site, nous ne collectons que :',
        'privacy.s2.li1': '<strong>Nom :</strong> pour savoir comment nous adresser à vous',
        'privacy.s2.li2': '<strong>Email ou téléphone :</strong> pour pouvoir vous répondre',
        'privacy.s2.li3': '<strong>Message :</strong> pour comprendre vos besoins',
        'privacy.s2.li4': '<strong>Adresse IP :</strong> donnée technique enregistrée automatiquement pour la sécurité',
        'privacy.s2.p2': 'Nous ne collectons aucune autre donnée. Nous n\'utilisons pas de cookies de suivi ni d\'outils d\'analyse comportementale.',
        'privacy.s3.title': '3. À quoi servent vos données ?',
        'privacy.s3.p1': 'Nous utilisons vos données exclusivement pour :',
        'privacy.s3.li1': 'Répondre à votre demande d\'information',
        'privacy.s3.li2': 'Vous envoyer un devis ou des informations sur nos services si vous le demandez',
        'privacy.s3.p2': '<strong>Base légale :</strong> Votre consentement en remplissant et envoyant le formulaire.',
        'privacy.s4.title': '4. Où sont stockées vos données ?',
        'privacy.s4.p1': 'Les données du formulaire sont stockées dans :',
        'privacy.s4.li1': '<strong>Supabase :</strong> service de base de données cloud conforme au RGPD avec des serveurs dans l\'UE',
        'privacy.s4.li2': '<strong>Resend :</strong> service d\'email qui nous notifie lorsque vous envoyez un message (sous-traitant)',
        'privacy.s4.p2': 'Les deux fournisseurs agissent comme sous-traitants sous contrat et respectent la réglementation européenne sur la protection des données.',
        'privacy.s5.title': '5. Combien de temps conservons-nous vos données ?',
        'privacy.s5.p1': 'Nous conservons vos données :',
        'privacy.s5.li1': 'Jusqu\'à ce que nous répondions à votre demande',
        'privacy.s5.li2': 'S\'il y a un projet en cours, jusqu\'à sa finalisation et la résolution des démarches administratives nécessaires',
        'privacy.s5.li3': 'Si vous exercez votre droit de suppression, nous les supprimerons immédiatement (sauf obligations légales)',
        'privacy.s6.title': '6. Partageons-nous vos données avec des tiers ?',
        'privacy.s6.p1': 'Nous ne vendons ni ne partageons vos données avec des tiers à des fins commerciales ou publicitaires.',
        'privacy.s6.p2': 'Les seuls tiers ayant accès à vos données sont les fournisseurs techniques mentionnés (Supabase et Resend), qui agissent selon nos instructions pour le fonctionnement du site.',
        'privacy.s7.title': '7. Vos droits',
        'privacy.s7.p1': 'Selon le RGPD, vous avez le droit de :',
        'privacy.s7.li1': '<strong>Accès :</strong> savoir quelles données nous détenons sur vous',
        'privacy.s7.li2': '<strong>Rectification :</strong> corriger des données inexactes',
        'privacy.s7.li3': '<strong>Suppression :</strong> nous demander de supprimer vos données',
        'privacy.s7.li4': '<strong>Limitation :</strong> restreindre l\'utilisation de vos données',
        'privacy.s7.li5': '<strong>Portabilité :</strong> recevoir vos données dans un format lisible',
        'privacy.s7.li6': '<strong>Opposition :</strong> vous opposer au traitement de vos données',
        'privacy.s7.p2': 'Pour exercer l\'un de ces droits, écrivez-nous à <a href="mailto:caselyncontact@gmail.com" style="color: var(--color-accent)">caselyncontact@gmail.com</a>',
        'privacy.s7.p3': 'Vous avez également le droit de déposer une plainte auprès de l\'Agence Espagnole de Protection des Données (AEPD) si vous estimez que nous ne respectons pas la réglementation.',
        'privacy.s8.title': '8. Sécurité',
        'privacy.s8.p1': 'Nous appliquons des mesures techniques et organisationnelles pour protéger vos données contre les accès non autorisés, la perte ou l\'altération. Cela inclut des connexions HTTPS chiffrées et un stockage sur des serveurs sécurisés.',
        'privacy.s9.title': '9. Modifications de cette politique',
        'privacy.s9.p1': 'Nous nous réservons le droit de mettre à jour cette politique. En cas de changements importants, nous les communiquerons sur cette page en indiquant la date de la dernière mise à jour.',

        // Cookie Policy
        'cookies.title': 'Politique de Cookies',
        'cookies.updated': '<strong>Dernière mise à jour :</strong> 3 février 2026',
        'cookies.s1.title': '1. Que sont les cookies ?',
        'cookies.s1.p1': 'Les cookies sont de petits fichiers texte que les sites web stockent dans votre navigateur pour mémoriser des informations sur votre visite.',
        'cookies.s2.title': '2. Quels cookies utilisons-nous ?',
        'cookies.s2.p1': '<strong>Ce site n\'utilise PAS de cookies tiers, de cookies de suivi ni de cookies publicitaires.</strong>',
        'cookies.s2.p2': 'Nous n\'utilisons que des cookies techniques strictement nécessaires au fonctionnement de base du site, tels que :',
        'cookies.s2.li1': 'Cookies de session du navigateur',
        'cookies.s2.li2': 'Préférences techniques de base (le cas échéant)',
        'cookies.s2.p3': 'Ces cookies sont essentiels au bon fonctionnement du site et <strong>ne nécessitent pas votre consentement</strong> selon la réglementation en vigueur.',
        'cookies.s3.title': '3. Ce que nous ne faisons PAS',
        'cookies.s3.p1': 'Chez Caselyn, nous valorisons votre vie privée. C\'est pourquoi ce site :',
        'cookies.s3.li1': '❌ <strong>N\'utilise pas Google Analytics</strong> ni aucun autre outil d\'analyse',
        'cookies.s3.li2': '❌ <strong>Ne suit pas votre comportement</strong> sur le site',
        'cookies.s3.li3': '❌ <strong>N\'affiche pas de publicité</strong> personnalisée',
        'cookies.s3.li4': '❌ <strong>Ne partage pas vos données</strong> avec des tiers à des fins marketing',
        'cookies.s3.li5': '❌ <strong>N\'installe pas de cookies</strong> de réseaux sociaux ou de services externes',
        'cookies.s4.title': '4. Devez-vous accepter les cookies ?',
        'cookies.s4.p1': '<strong>Non.</strong> Comme ce site n\'utilise que des cookies techniques nécessaires, nous ne sommes pas tenus de vous afficher une bannière de cookies ni de vous demander votre consentement.',
        'cookies.s4.p2': 'Vous pouvez naviguer librement sans vous soucier des traceurs ou du suivi publicitaire.',
        'cookies.s5.title': '5. Comment gérer les cookies ?',
        'cookies.s5.p1': 'Si vous souhaitez quand même désactiver tous les cookies (y compris techniques), vous pouvez le faire depuis les paramètres de votre navigateur :',
        'cookies.s5.li1': '<strong>Chrome :</strong> Paramètres → Confidentialité et sécurité → Cookies',
        'cookies.s5.li2': '<strong>Firefox :</strong> Options → Vie privée et sécurité → Cookies',
        'cookies.s5.li3': '<strong>Safari :</strong> Préférences → Confidentialité → Cookies',
        'cookies.s5.li4': '<strong>Edge :</strong> Paramètres → Confidentialité → Cookies',
        'cookies.s5.p2': 'Veuillez noter que la désactivation des cookies techniques peut affecter le fonctionnement de base du site.',
        'cookies.s6.title': '6. Modifications de cette politique',
        'cookies.s6.p1': 'Si nous intégrons de nouvelles fonctionnalités nécessitant des cookies à l\'avenir, nous mettrons à jour cette politique et vous en informerons.',
        'cookies.s7.title': '7. Contact',
        'cookies.s7.p1': 'Si vous avez des questions sur notre politique de cookies, vous pouvez nous écrire à <a href="mailto:caselyncontact@gmail.com" style="color: var(--color-accent)">caselyncontact@gmail.com</a>',
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

    // Update HTML content (for elements containing links, bold, etc.)
    document.querySelectorAll('[data-i18n-html]').forEach((el) => {
        const key = el.getAttribute('data-i18n-html');
        if (t[key]) {
            el.innerHTML = t[key];
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
// Expose to window for access from other scripts/modules
window.applyTranslations = applyTranslations;
window.translations = translations;

// ============================================================================
// Language Selector — Shared across all pages
// ============================================================================

/**
 * Initialize the language selector dropdown.
 * Call this once after the DOM is ready. Safe to call multiple times.
 */
function initLanguageSelector() {
  const LANG_OPTIONS = [
    {
      code: 'es',
      label: 'Español',
      flag: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 12" width="18" height="12" style="border-radius:3px"><rect width="18" height="12" fill="#AA151B"/><rect width="18" height="6" y="3" fill="#F1BF00"/></svg>`
    },
    {
      code: 'ca',
      label: 'Català',
      flag: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 12" width="18" height="12" style="border-radius:3px"><rect width="18" height="12" fill="#ffff00"/><rect width="18" height="1.33" y="1.33" fill="#d40000"/><rect width="18" height="1.33" y="4" fill="#d40000"/><rect width="18" height="1.33" y="6.66" fill="#d40000"/><rect width="18" height="1.33" y="9.33" fill="#d40000"/></svg>`
    },
    {
      code: 'en',
      label: 'English',
      flag: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 12" width="18" height="12" style="border-radius:3px"><rect width="18" height="12" fill="#012169"/><path d="M0,0 L18,12 M18,0 L0,12" stroke="#fff" stroke-width="2"/><path d="M0,0 L18,12 M18,0 L0,12" stroke="#C8102E" stroke-width="1"/><path d="M9,0 v12 M0,6 h18" stroke="#fff" stroke-width="3"/><path d="M9,0 v12 M0,6 h18" stroke="#C8102E" stroke-width="2"/></svg>`
    },
    {
      code: 'fr',
      label: 'Français',
      flag: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 12" width="18" height="12" style="border-radius:3px"><rect width="18" height="12" fill="#ED2939"/><rect width="12" height="12" fill="#fff"/><rect width="6" height="12" fill="#002395"/></svg>`
    },
  ];

  const langSelector = document.getElementById('lang-selector');
  const langTrigger = document.getElementById('lang-trigger');
  const langTriggerLabel = document.getElementById('lang-trigger-label');
  const langDropdown = document.getElementById('lang-dropdown');

  if (!langSelector || !langTrigger || !langDropdown) return;
  if (langSelector.dataset.initialized === 'true') return;
  langSelector.dataset.initialized = 'true';

  const savedLang = localStorage.getItem('caselyn-lang') || 'es';
  let currentLang = savedLang;

  const renderLangOptions = () => {
    langDropdown.innerHTML = '';
    LANG_OPTIONS.forEach(({ code, label }) => {
      const btn = document.createElement('button');
      btn.className = 'lang-option' + (code === currentLang ? ' active' : '');
      btn.setAttribute('data-lang', code);
      btn.setAttribute('type', 'button');
      const langConfig = LANG_OPTIONS.find(opt => opt.code === code);
      btn.innerHTML = `
        <span style="display:flex; align-items:center; gap:8px;">
          ${langConfig.flag}
          <span>${label}</span>
        </span>
      `;
      langDropdown.appendChild(btn);
    });
  };

  const setActiveLang = (lang) => {
    currentLang = lang;
    const langConfig = LANG_OPTIONS.find((opt) => opt.code === lang) || LANG_OPTIONS[0];
    langTriggerLabel.innerHTML = `
      <span style="display:flex; align-items:center; gap:6px;">
        ${langConfig.flag}
        <span>${langConfig.code.toUpperCase()}</span>
      </span>
    `;
    langDropdown.querySelectorAll('.lang-option').forEach((btn) => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });
  };

  const openDropdown = () => {
    langSelector.classList.add('open');
    langTrigger.setAttribute('aria-expanded', 'true');
  };

  const closeDropdown = () => {
    langSelector.classList.remove('open');
    langTrigger.setAttribute('aria-expanded', 'false');
  };

  const toggleDropdown = () => {
    if (langSelector.classList.contains('open')) {
      closeDropdown();
    } else {
      openDropdown();
    }
  };

  const selectLang = (lang) => {
    if (lang === currentLang) {
      closeDropdown();
      return;
    }
    setActiveLang(lang);
    localStorage.setItem('caselyn-lang', lang);
    applyTranslations(lang);
    if (typeof window.rerenderServicesSection === 'function') {
      window.rerenderServicesSection(lang);
    }
    closeDropdown();
  };

  const isDesktop = () => window.matchMedia('(min-width: 769px)').matches;
  let hoverTimeout = null;

  langSelector.addEventListener('mouseenter', () => {
    if (!isDesktop()) return;
    clearTimeout(hoverTimeout);
    hoverTimeout = setTimeout(openDropdown, 80);
  });

  langSelector.addEventListener('mouseleave', () => {
    if (!isDesktop()) return;
    clearTimeout(hoverTimeout);
    hoverTimeout = setTimeout(closeDropdown, 120);
  });

  langTrigger.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleDropdown();
  });

  langDropdown.addEventListener('click', (e) => {
    const option = e.target.closest('.lang-option');
    if (option) {
      e.stopPropagation();
      selectLang(option.dataset.lang);
    }
  });

  document.addEventListener('click', (e) => {
    if (!langSelector.contains(e.target)) {
      closeDropdown();
    }
  });

  langTrigger.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleDropdown();
    } else if (e.key === 'Escape') {
      closeDropdown();
      langTrigger.focus();
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      openDropdown();
      const first = langDropdown.querySelector('.lang-option');
      if (first) first.focus();
    }
  });

  langDropdown.addEventListener('keydown', (e) => {
    const options = [...langDropdown.querySelectorAll('.lang-option')];
    const idx = options.indexOf(document.activeElement);

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      const next = options[idx + 1] || options[0];
      next.focus();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const prev = options[idx - 1] || options[options.length - 1];
      prev.focus();
    } else if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      if (options[idx]) selectLang(options[idx].dataset.lang);
    } else if (e.key === 'Escape') {
      closeDropdown();
      langTrigger.focus();
    }
  });

  renderLangOptions();
  setActiveLang(currentLang);
  applyTranslations(currentLang);
}

window.initLanguageSelector = initLanguageSelector;

// Auto-initialize on load for service pages and other non-home pages
document.addEventListener('DOMContentLoaded', () => {
  initLanguageSelector();
});
