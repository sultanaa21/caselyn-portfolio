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
        'faq.q2': '¿Qué incluye el contacto inicial?',
        'faq.a2': 'Revisamos qué quieres crear o mejorar y te decimos qué tendría más sentido hacer primero.',
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

        // About / GEO
        'about.title': 'Qué es Caselyn',
        'about.text': 'Caselyn es una agencia digital que crea webs, campañas y automatizaciones para negocios que quieren crecer. Trabajamos proyectos como landings, webs completas, campañas, formularios, reservas, seguimiento de contactos y mantenimiento.',
        'about.item1': 'Webs y landings para presentar negocios, servicios o campañas.',
        'about.item2': 'Marketing para mantener coherencia entre web, redes, anuncios y contacto.',
        'about.item3': 'Automatización para conectar formularios, contactos y herramientas.',
        'about.item4': 'Mantenimiento para mantener la web actualizada y funcionando bien.',

        // Diagnostico page
        'diag.title': 'Cuéntanos tu proyecto',
        'diag.subtitle': 'Dinos qué quieres crear o mejorar y revisaremos la mejor forma de ayudarte.',
        'diag.form.name': 'Nombre',
        'diag.form.name.placeholder': '',
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
        'diag.form.business.placeholder': '',
        'diag.form.website': 'Web actual',
        'diag.form.website.placeholder': '',
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
        'diag.form.message.placeholder': '',
        'diag.form.submit': 'Enviar solicitud',
        'diag.form.success': 'Solicitud enviada. Nos ponemos en contacto contigo en breve.',
        'diag.form.error': 'Algo ha fallado. Intenta de nuevo o escríbenos directamente.',
        'diag.form.error.name': 'Introduce tu nombre.',
        'diag.form.error.email': 'Introduce un email válido.',
        'diag.form.error.business': 'Indica el nombre de tu negocio.',
        'diag.form.error.service': 'Selecciona qué quieres crear o mejorar.',
        'diag.form.error.message.short': 'El mensaje debe tener al menos 10 caracteres.',
        'diag.form.error.message.long': 'El mensaje es demasiado largo (máximo 5000 caracteres).',
        'diag.form.picker.no.results': 'Sin resultados',

        // Footer
        'footer.tagline': 'Webs, marketing y automatización para negocios que quieren crecer.',
        'footer.col.services': 'Servicios',
        'footer.col.explore': 'Explorar',
        'footer.col.social': 'Social',
        'footer.link.webs': 'Webs y landings',
        'footer.link.marketing': 'Marketing',
        'footer.link.automation': 'Automatización',
        'footer.link.maintenance': 'Mantenimiento',
        'footer.link.examples': 'Ejemplos',
        'footer.link.process': 'Proceso',
        'footer.link.faq': 'FAQ',
        'footer.link.contact': 'Contacto',
        'footer.rights': 'Todos los derechos reservados.',
        'footer.copyright': '© 2026 Caselyn.',
        'footer.privacy': 'Privacidad',
        'footer.cookies': 'Cookies',

        // Legal Pages - Shared
        'nav.inicio': 'Inicio',
        'legal.back': '← Volver al inicio',

        // Privacy Policy
        'privacy.title': 'Política de Privacidad',
        'privacy.updated': '<strong>Última actualización:</strong> 13 de junio de 2026',
        'privacy.intro1': 'En esta Política de Privacidad te explicamos cómo tratamos los datos personales que puedes facilitarnos a través de esta web.',
        'privacy.intro2': 'Caselyn es un proyecto digital en fase inicial enfocado en webs, marketing y automatización para negocios. Actualmente no somos una sociedad constituida ni actuamos como una empresa registrada. Esta política se ha redactado para explicar de forma clara qué datos recogemos, para qué los usamos y qué derechos tienes.',
        'privacy.s1.title': '1. Responsable del tratamiento',
        'privacy.s1.p1': 'Responsable del tratamiento: Caselyn<br />Email de contacto: <a href="mailto:caselyncontact@gmail.com" class="legal-link">caselyncontact@gmail.com</a><br />Web: <a href="https://caselyn.es" class="legal-link">https://caselyn.es</a>',
        'privacy.s1.p2': 'Caselyn actúa actualmente como nombre del proyecto desde el que se gestionan las solicitudes recibidas a través de esta web.',
        'privacy.s1.p3': 'Esta identificación es provisional y podrá actualizarse si el proyecto pasa a operar bajo una persona física identificada, autónomo, sociedad u otra forma jurídica.',
        'privacy.s2.title': '2. Qué datos recogemos',
        'privacy.s2.p1': 'Cuando utilizas el formulario de contacto de la web, podemos recoger los datos que nos facilitas voluntariamente, como:',
        'privacy.s2.li1': 'Nombre.',
        'privacy.s2.li2': 'Email.',
        'privacy.s2.li3': 'Teléfono.',
        'privacy.s2.li4': 'Prefijo telefónico o país.',
        'privacy.s2.li5': 'Negocio o marca.',
        'privacy.s2.li6': 'Web actual, si la indicas.',
        'privacy.s2.li7': 'Tipo de proyecto o servicio solicitado.',
        'privacy.s2.li8': 'Mensaje o información que incluyas en el formulario.',
        'privacy.s2.p2': 'Además, por motivos técnicos y de seguridad, podemos tratar datos asociados al envío del formulario, como:',
        'privacy.s2.li9': 'Dirección IP.',
        'privacy.s2.li10': 'Fecha y hora de envío.',
        'privacy.s2.li11': 'Datos técnicos básicos necesarios para procesar la solicitud y prevenir abusos.',
        'privacy.s2.p3': 'También podemos guardar la preferencia de idioma de la web en el almacenamiento local del navegador para recordar el idioma seleccionado por el usuario.',
        'privacy.s2.p4': 'No solicitamos datos especialmente sensibles. Te pedimos que no incluyas en el formulario información sensible o innecesaria, como datos de salud, documentos de identidad, datos bancarios, contraseñas u otra información confidencial.',
        'privacy.s3.title': '3. Para qué usamos tus datos',
        'privacy.s3.p1': 'Usamos los datos recibidos a través del formulario para:',
        'privacy.s3.li1': 'Responder a tu solicitud de contacto.',
        'privacy.s3.li2': 'Entender qué quieres crear, mejorar o consultar.',
        'privacy.s3.li3': 'Preparar una propuesta, presupuesto o información sobre nuestros servicios si lo solicitas.',
        'privacy.s3.li4': 'Mantener la comunicación relacionada con tu solicitud o posible proyecto.',
        'privacy.s3.li5': 'Proteger la web frente a abusos, spam, usos indebidos o problemas técnicos.',
        'privacy.s3.p2': 'No utilizamos los datos del formulario para enviarte newsletters, campañas comerciales recurrentes ni publicidad personalizada.',
        'privacy.s3.p3': 'Si en el futuro incorporamos comunicaciones comerciales, email marketing, remarketing o sistemas similares, actualizaremos esta política y solicitaremos el consentimiento correspondiente cuando sea necesario.',
        'privacy.s4.title': '4. Base legal del tratamiento',
        'privacy.s4.p1': 'La base legal principal para tratar los datos que nos envías mediante el formulario es la aplicación de medidas precontractuales solicitadas por ti, ya que utilizamos esos datos para responder a tu consulta, valorar tu solicitud o preparar una posible propuesta.',
        'privacy.s4.p2': 'El tratamiento de datos técnicos necesarios para seguridad, prevención de abuso, mantenimiento de la web o resolución de incidencias se basa en nuestro interés legítimo en mantener la web segura y operativa.',
        'privacy.s4.p3': 'Si en el futuro tratamos tus datos para finalidades distintas, como comunicaciones comerciales no relacionadas con tu solicitud inicial, lo haremos únicamente cuando exista una base legal adecuada, como tu consentimiento.',
        'privacy.s5.title': '5. Dónde se almacenan y qué proveedores intervienen',
        'privacy.s5.p1': 'Para poder recibir y gestionar las solicitudes de contacto utilizamos proveedores tecnológicos externos.',
        'privacy.s5.p2': 'Actualmente pueden intervenir los siguientes servicios:',
        'privacy.s5.li1': 'Vercel: alojamiento de la web y ejecución de la API del formulario.',
        'privacy.s5.li2': 'Supabase: almacenamiento de los datos enviados mediante el formulario.',
        'privacy.s5.li3': 'Resend: envío de notificaciones internas por email cuando recibimos una solicitud.',
        'privacy.s5.li4': 'Gmail / Google: recepción y gestión del correo electrónico asociado a la solicitud.',
        'privacy.s5.p3': 'Estos proveedores pueden tratar datos personales por cuenta de Caselyn para prestar los servicios técnicos necesarios. No utilizamos estos proveedores para vender tus datos ni para publicidad personalizada.',
        'privacy.s5.p4': 'Algunos proveedores pueden estar ubicados fuera del Espacio Económico Europeo o utilizar infraestructura internacional. En esos casos, el tratamiento deberá realizarse con garantías adecuadas conforme a la normativa aplicable de protección de datos.',
        'privacy.s6.title': '6. Inteligencia artificial y automatizaciones',
        'privacy.s6.p1': 'Actualmente no utilizamos herramientas de inteligencia artificial para tomar decisiones automatizadas sobre las solicitudes recibidas ni para elaborar perfiles de las personas que contactan con nosotros.',
        'privacy.s6.p2': 'Es posible que en el futuro utilicemos herramientas de automatización o inteligencia artificial para organizar solicitudes, clasificar contactos o mejorar procesos internos. Si eso ocurre y afecta al tratamiento de datos personales, actualizaremos esta Política de Privacidad para informar de forma adecuada sobre las herramientas, finalidades y garantías aplicables.',
        'privacy.s7.title': '7. Durante cuánto tiempo conservamos tus datos',
        'privacy.s7.p1': 'Conservaremos los datos durante el tiempo necesario para atender tu solicitud y gestionar la comunicación relacionada.',
        'privacy.s7.p2': 'Como criterio general:',
        'privacy.s7.li1': 'Si la solicitud no se convierte en proyecto, podremos conservar los datos durante un máximo de 12 meses desde el último contacto.',
        'privacy.s7.li2': 'Si existe una relación profesional o proyecto en curso, conservaremos los datos durante el tiempo necesario para gestionar el proyecto y cumplir posibles obligaciones legales, administrativas o fiscales.',
        'privacy.s7.li3': 'Los datos técnicos relacionados con seguridad, prevención de abuso o incidencias podrán conservarse durante el tiempo necesario para resolver o prevenir dichos problemas.',
        'privacy.s7.p3': 'Puedes solicitar la eliminación de tus datos en cualquier momento, salvo que exista una obligación legal o motivo legítimo para conservarlos durante más tiempo.',
        'privacy.s8.title': '8. Con quién compartimos tus datos',
        'privacy.s8.p1': 'No vendemos tus datos ni los compartimos con terceros para fines comerciales o publicitarios.',
        'privacy.s8.p2': 'Solo podrán acceder a tus datos los proveedores técnicos necesarios para el funcionamiento de la web, el formulario, el almacenamiento de solicitudes y la recepción de emails, como Vercel, Supabase, Resend y Gmail/Google.',
        'privacy.s8.p3': 'También podríamos comunicar datos si fuera necesario para cumplir una obligación legal, atender una solicitud de una autoridad competente o proteger nuestros derechos en caso de uso indebido de la web.',
        'privacy.s9.title': '9. Tus derechos',
        'privacy.s9.p1': 'Tienes derecho a:',
        'privacy.s9.li1': 'Acceder a tus datos personales.',
        'privacy.s9.li2': 'Solicitar la rectificación de datos inexactos.',
        'privacy.s9.li3': 'Solicitar la supresión de tus datos.',
        'privacy.s9.li4': 'Solicitar la limitación del tratamiento.',
        'privacy.s9.li5': 'Oponerte al tratamiento en determinados casos.',
        'privacy.s9.li6': 'Solicitar la portabilidad de tus datos cuando sea aplicable.',
        'privacy.s9.li7': 'Retirar tu consentimiento si algún tratamiento se basa en consentimiento.',
        'privacy.s9.p2': 'Puedes ejercer estos derechos escribiendo a: <a href="mailto:caselyncontact@gmail.com" class="legal-link">caselyncontact@gmail.com</a>',
        'privacy.s9.p3': 'Para poder gestionar tu solicitud, es posible que necesitemos pedirte información adicional para confirmar tu identidad.',
        'privacy.s9.p4': 'También tienes derecho a presentar una reclamación ante la Agencia Española de Protección de Datos si consideras que el tratamiento de tus datos no cumple la normativa aplicable.',
        'privacy.s10.title': '10. Seguridad',
        'privacy.s10.p1': 'Aplicamos medidas técnicas y organizativas razonables para proteger los datos personales frente a pérdida, acceso no autorizado, alteración o uso indebido.',
        'privacy.s10.p2': 'Entre otras medidas, la web utiliza conexión HTTPS y los datos se gestionan mediante proveedores tecnológicos especializados.',
        'privacy.s10.p3': 'Aun así, ningún sistema es completamente infalible, por lo que te recomendamos no enviar información sensible o innecesaria a través del formulario.',
        'privacy.s11.title': '11. Menores de edad',
        'privacy.s11.p1': 'Esta web está dirigida principalmente a negocios, profesionales o personas interesadas en servicios digitales.',
        'privacy.s11.p2': 'No solicitamos intencionadamente datos de menores de edad. Si detectamos que hemos recibido datos personales de un menor sin autorización cuando esta sea necesaria, podremos eliminarlos.',
        'privacy.s12.title': '12. Enlaces a redes sociales y terceros',
        'privacy.s12.p1': 'La web puede incluir enlaces a plataformas externas como Instagram, TikTok o YouTube.',
        'privacy.s12.p2': 'Al hacer clic en esos enlaces, abandonarás la web de Caselyn y pasarás a estar sujeto a las políticas de privacidad y cookies de cada plataforma. Caselyn no controla el tratamiento de datos que puedan realizar esas plataformas externas.',
        'privacy.s13.title': '13. Cambios en esta Política de Privacidad',
        'privacy.s13.p1': 'Podemos actualizar esta Política de Privacidad para reflejar cambios en la web, en las herramientas utilizadas, en los servicios ofrecidos o en la normativa aplicable.',
        'privacy.s13.p2': 'Cuando hagamos cambios relevantes, actualizaremos la fecha indicada al inicio de esta página.',

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
        'faq.q2': 'Què inclou el contacte inicial?',
        'faq.a2': 'Revisem què vols crear o millorar i et diem què tindria més sentit fer primer.',
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

        // About / GEO
        'about.title': 'Què és Caselyn',
        'about.text': 'Caselyn és una agència digital que crea webs, campanyes i automatitzacions per a negocis que volen créixer. Treballem projectes com landings, webs completes, campanyes, formularis, reserves, seguiment de contactes i manteniment.',
        'about.item1': 'Webs i landings per presentar negocis, serveis o campanyes.',
        'about.item2': 'Màrqueting per mantenir coherència entre web, xarxes, anuncis i contacte.',
        'about.item3': 'Automatització per connectar formularis, contactes i eines.',
        'about.item4': 'Manteniment per mantenir la web actualitzada i funcionant bé.',

        // Diagnostico page
        'diag.title': 'Explica\'ns el teu projecte',
        'diag.subtitle': 'Digues-nos què vols crear o millorar i revisarem la millor manera d\'ajudar-te.',
        'diag.form.name': 'Nom',
        'diag.form.name.placeholder': '',
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
        'diag.form.business.placeholder': '',
        'diag.form.website': 'Web actual',
        'diag.form.website.placeholder': '',
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
        'diag.form.message.placeholder': '',
        'diag.form.submit': 'Enviar sol·licitud',
        'diag.form.success': 'Sol·licitud enviada. Ens posem en contacte amb tu aviat.',
        'diag.form.error': 'Alguna cosa ha fallat. Torna-ho a intentar o escriu-nos directament.',
        'diag.form.error.name': 'Introdueix el teu nom.',
        'diag.form.error.email': 'Introdueix un email vàlid.',
        'diag.form.error.business': 'Indica el nom del teu negoci.',
        'diag.form.error.service': 'Selecciona què vols crear o millorar.',
        'diag.form.error.message.short': 'El missatge ha de tenir almenys 10 caràcters.',
        'diag.form.error.message.long': 'El missatge és massa llarg (màxim 5000 caràcters).',
        'diag.form.picker.no.results': 'Sense resultats',

        // Footer
        'footer.tagline': 'Webs, màrqueting i automatització per a negocis que volen créixer.',
        'footer.col.services': 'Serveis',
        'footer.col.explore': 'Explorar',
        'footer.col.social': 'Social',
        'footer.link.webs': 'Webs i landings',
        'footer.link.marketing': 'Màrqueting',
        'footer.link.automation': 'Automatització',
        'footer.link.maintenance': 'Manteniment',
        'footer.link.examples': 'Exemples',
        'footer.link.process': 'Procés',
        'footer.link.faq': 'FAQ',
        'footer.link.contact': 'Contacte',
        'footer.rights': 'Tots els drets reservats.',
        'footer.copyright': '© 2026 Caselyn.',
        'footer.privacy': 'Privacitat',
        'footer.cookies': 'Cookies',

        // Legal Pages - Shared
        'nav.inicio': 'Inici',
        'legal.back': '← Tornar a l\'inici',

        // Privacy Policy
        'privacy.title': 'Política de Privacitat',
        'privacy.updated': '<strong>Última actualització:</strong> 13 de juny de 2026',
        'privacy.intro1': 'En aquesta Política de Privacitat t\'expliquem com tractem les dades personals que pots facilitar-nos a través d\'aquesta web.',
        'privacy.intro2': 'Caselyn és un projecte digital en fase inicial enfocat en webs, màrqueting i automatització per a negocis. Actualment no som una societat constituïda ni actuem com una empresa registrada. Aquesta política s\'ha redactat per explicar de forma clara quines dades recollim, per a què les fem servir i quins drets tens.',
        'privacy.s1.title': '1. Responsable del tractament',
        'privacy.s1.p1': 'Responsable del tractament: Caselyn<br />Email de contacte: <a href="mailto:caselyncontact@gmail.com" class="legal-link">caselyncontact@gmail.com</a><br />Web: <a href="https://caselyn.es" class="legal-link">https://caselyn.es</a>',
        'privacy.s1.p2': 'Caselyn actua actualment com a nom del projecte des del qual es gestionen les sol·licituds rebudes a través d\'aquesta web.',
        'privacy.s1.p3': 'Aquesta identificació és provisional i podrà actualitzar-se si el projecte passa a operar sota una persona física identificada, autònom, societat o altra forma jurídica.',
        'privacy.s2.title': '2. Quines dades recollim',
        'privacy.s2.p1': 'Quan fas servir el formulari de contacte de la web, podem recollir les dades que ens facilites voluntàriament, com:',
        'privacy.s2.li1': 'Nom.',
        'privacy.s2.li2': 'Email.',
        'privacy.s2.li3': 'Telèfon.',
        'privacy.s2.li4': 'Prefix telefònic o país.',
        'privacy.s2.li5': 'Negoci o marca.',
        'privacy.s2.li6': 'Web actual, si l\'indiques.',
        'privacy.s2.li7': 'Tipus de projecte o servei sol·licitat.',
        'privacy.s2.li8': 'Missatge o informació que incloguis al formulari.',
        'privacy.s2.p2': 'A més, per motius tècnics i de seguretat, podem tractar dades associades a l\'enviament del formulari, com:',
        'privacy.s2.li9': 'Adreça IP.',
        'privacy.s2.li10': 'Data i hora d\'enviament.',
        'privacy.s2.li11': 'Dades tècniques bàsiques necessàries per processar la sol·licitud i prevenir abusos.',
        'privacy.s2.p3': 'També podem guardar la preferència d\'idioma de la web en l\'emmagatzematge local del navegador per recordar l\'idioma seleccionat per l\'usuari.',
        'privacy.s2.p4': 'No sol·licitem dades especialment sensibles. Et demanem que no incloguis al formulari informació sensible o innecessària, com dades de salut, documents d\'identitat, dades bancàries, contrasenyes o altra informació confidencial.',
        'privacy.s3.title': '3. Per a què fem servir les teves dades',
        'privacy.s3.p1': 'Fem servir les dades rebudes a través del formulari per:',
        'privacy.s3.li1': 'Respondre a la teva sol·licitud de contacte.',
        'privacy.s3.li2': 'Entendre què vols crear, millorar o consultar.',
        'privacy.s3.li3': 'Preparar una proposta, pressupost o informació sobre els nostres serveis si ho sol·licites.',
        'privacy.s3.li4': 'Mantenir la comunicació relacionada amb la teva sol·licitud o possible projecte.',
        'privacy.s3.li5': 'Protegir la web davant d\'abusos, spam, usos indeguts o problemes tècnics.',
        'privacy.s3.p2': 'No fem servir les dades del formulari per enviar-te newsletters, campanyes comercials recurrents ni publicitat personalitzada.',
        'privacy.s3.p3': 'Si en el futur incorporem comunicacions comercials, email màrqueting, remarketing o sistemes similars, actualitzarem aquesta política i sol·licitarem el consentiment corresponent quan sigui necessari.',
        'privacy.s4.title': '4. Base legal del tractament',
        'privacy.s4.p1': 'La base legal principal per tractar les dades que ens envies mitjançant el formulari és l\'aplicació de mesures precontractuals sol·licitades per tu, ja que fem servir aquestes dades per respondre a la teva consulta, valorar la teva sol·licitud o preparar una possible proposta.',
        'privacy.s4.p2': 'El tractament de dades tècniques necessàries per seguretat, prevenció d\'abús, manteniment de la web o resolució d\'incidències es basa en el nostre interès legítim en mantenir la web segura i operativa.',
        'privacy.s4.p3': 'Si en el futur tractem les teves dades per a finalitats diferents, com comunicacions comercials no relacionades amb la teva sol·licitud inicial, ho farem únicament quan existeixi una base legal adequada, com el teu consentiment.',
        'privacy.s5.title': '5. On s\'emmagatzemen i quins proveïdors intervenen',
        'privacy.s5.p1': 'Per poder rebre i gestionar les sol·licituds de contacte fem servir proveïdors tecnològics externs.',
        'privacy.s5.p2': 'Actualment poden intervenir els serveis següents:',
        'privacy.s5.li1': 'Vercel: allotjament de la web i execució de l\'API del formulari.',
        'privacy.s5.li2': 'Supabase: emmagatzematge de les dades enviades mitjançant el formulari.',
        'privacy.s5.li3': 'Resend: enviament de notificacions internes per email quan rebem una sol·licitud.',
        'privacy.s5.li4': 'Gmail / Google: recepció i gestió del correu electrònic associat a la sol·licitud.',
        'privacy.s5.p3': 'Aquests proveïdors poden tractar dades personals per compte de Caselyn per prestar els serveis tècnics necessaris. No fem servir aquests proveïdors per vendre les teves dades ni per publicitat personalitzada.',
        'privacy.s5.p4': 'Alguns proveïdors poden estar ubicats fora de l\'Espai Econòmic Europeu o fer servir infraestructura internacional. En aquests casos, el tractament s\'haurà de realitzar amb garanties adequades d\'acord amb la normativa aplicable de protecció de dades.',
        'privacy.s6.title': '6. Intel·ligència artificial i automatitzacions',
        'privacy.s6.p1': 'Actualment no fem servir eines d\'intel·ligència artificial per prendre decisions automatitzades sobre les sol·licituds rebudes ni per elaborar perfils de les persones que contacten amb nosaltres.',
        'privacy.s6.p2': 'És possible que en el futur fem servir eines d\'automatització o intel·ligència artificial per organitzar sol·licituds, classificar contactes o millorar processos interns. Si això succeeix i afecta al tractament de dades personals, actualitzarem aquesta Política de Privacitat per informar de forma adequada sobre les eines, finalitats i garanties aplicables.',
        'privacy.s7.title': '7. Durant quant de temps conservem les teves dades',
        'privacy.s7.p1': 'Conservarem les dades durant el temps necessari per atendre la teva sol·licitud i gestionar la comunicació relacionada.',
        'privacy.s7.p2': 'Com a criteri general:',
        'privacy.s7.li1': 'Si la sol·licitud no es converteix en projecte, podrem conservar les dades durant un màxim de 12 mesos des de l\'últim contacte.',
        'privacy.s7.li2': 'Si existeix una relació professional o projecte en curs, conservarem les dades durant el temps necessari per gestionar el projecte i complir possibles obligacions legals, administratives o fiscals.',
        'privacy.s7.li3': 'Les dades tècniques relacionades amb seguretat, prevenció d\'abús o incidències podran conservar-se durant el temps necessari per resoldre o prevenir aquests problemes.',
        'privacy.s7.p3': 'Pots sol·licitar l\'eliminació de les teves dades en qualsevol moment, llevat que existeixi una obligació legal o motiu legítim per conservar-les durant més temps.',
        'privacy.s8.title': '8. Amb qui compartim les teves dades',
        'privacy.s8.p1': 'No venem les teves dades ni les compartim amb tercers per a fins comercials o publicitaris.',
        'privacy.s8.p2': 'Només podran accedir a les teves dades els proveïdors tècnics necessaris per al funcionament de la web, el formulari, l\'emmagatzematge de sol·licituds i la recepció d\'emails, com Vercel, Supabase, Resend i Gmail/Google.',
        'privacy.s8.p3': 'També podríem comunicar dades si fos necessari per complir una obligació legal, atendre una sol·licitud d\'una autoritat competent o protegir els nostres drets en cas d\'ús indegut de la web.',
        'privacy.s9.title': '9. Els teus drets',
        'privacy.s9.p1': 'Tens dret a:',
        'privacy.s9.li1': 'Accedir a les teves dades personals.',
        'privacy.s9.li2': 'Sol·licitar la rectificació de dades inexactes.',
        'privacy.s9.li3': 'Sol·licitar la supressió de les teves dades.',
        'privacy.s9.li4': 'Sol·licitar la limitació del tractament.',
        'privacy.s9.li5': 'Oposar-te al tractament en determinats casos.',
        'privacy.s9.li6': 'Sol·licitar la portabilitat de les teves dades quan sigui aplicable.',
        'privacy.s9.li7': 'Retirar el teu consentiment si algun tractament es basa en consentiment.',
        'privacy.s9.p2': 'Pots exercir aquests drets escrivint a: <a href="mailto:caselyncontact@gmail.com" class="legal-link">caselyncontact@gmail.com</a>',
        'privacy.s9.p3': 'Per poder gestionar la teva sol·licitud, és possible que necessitem demanar-te informació addicional per confirmar la teva identitat.',
        'privacy.s9.p4': 'També tens dret a presentar una reclamació davant l\'Agència Espanyola de Protecció de Dades si consideres que el tractament de les teves dades no compleix la normativa aplicable.',
        'privacy.s10.title': '10. Seguretat',
        'privacy.s10.p1': 'Apliquem mesures tècniques i organitzatives raonables per protegir les dades personals davant de pèrdua, accés no autoritzat, alteració o ús indegut.',
        'privacy.s10.p2': 'Entre altres mesures, la web utilitza connexió HTTPS i les dades es gestionen mitjançant proveïdors tecnològics especialitzats.',
        'privacy.s10.p3': 'Tot i així, cap sistema és completament infal·lible, per la qual cosa et recomanem no enviar informació sensible o innecessària a través del formulari.',
        'privacy.s11.title': '11. Menors d\'edat',
        'privacy.s11.p1': 'Aquesta web està dirigida principalment a negocis, professionals o persones interessades en serveis digitals.',
        'privacy.s11.p2': 'No sol·licitem intencionadament dades de menors d\'edat. Si detectem que hem rebut dades personals d\'un menor sense autorització quan aquesta sigui necessària, podrem eliminar-les.',
        'privacy.s12.title': '12. Enllaços a xarxes socials i tercers',
        'privacy.s12.p1': 'La web pot incloure enllaços a plataformes externes com Instagram, TikTok o YouTube.',
        'privacy.s12.p2': 'En fer clic en aquests enllaços, abandonaràs la web de Caselyn i passaràs a estar subjecte a les polítiques de privacitat i cookies de cada plataforma. Caselyn no controla el tractament de dades que puguin realitzar aquestes plataformes externes.',
        'privacy.s13.title': '13. Canvis en aquesta Política de Privacitat',
        'privacy.s13.p1': 'Podem actualitzar aquesta Política de Privacitat per reflectir canvis a la web, en les eines utilitzades, en els serveis oferts o en la normativa aplicable.',
        'privacy.s13.p2': 'Quan fem canvis rellevants, actualitzarem la data indicada a l\'inici d\'aquesta pàgina.',

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
        'faq.q2': 'What does the initial contact include?',
        'faq.a2': 'We review what you want to create or improve and tell you what would make the most sense to do first.',
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

        // About / GEO
        'about.title': 'What is Caselyn',
        'about.text': 'Caselyn is a digital agency that creates websites, campaigns and automations for businesses that want to grow. We work on projects like landing pages, full websites, campaigns, forms, bookings, contact tracking and maintenance.',
        'about.item1': 'Websites and landing pages to present businesses, services or campaigns.',
        'about.item2': 'Marketing to keep consistency across website, social media, ads and contact.',
        'about.item3': 'Automation to connect forms, contacts and tools.',
        'about.item4': 'Maintenance to keep the website up to date and running well.',

        // Diagnostico page
        'diag.title': 'Tell us about your project',
        'diag.subtitle': 'Tell us what you want to create or improve and we will find the best way to help.',
        'diag.form.name': 'Name',
        'diag.form.name.placeholder': '',
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
        'diag.form.business.placeholder': '',
        'diag.form.website': 'Current website',
        'diag.form.website.placeholder': '',
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
        'diag.form.message.placeholder': '',
        'diag.form.submit': 'Send request',
        'diag.form.success': 'Request sent. We will be in touch shortly.',
        'diag.form.error': 'Something went wrong. Please try again or write to us directly.',
        'diag.form.error.name': 'Please enter your name.',
        'diag.form.error.email': 'Please enter a valid email address.',
        'diag.form.error.business': 'Please enter your business name.',
        'diag.form.error.service': 'Please select what you want to create or improve.',
        'diag.form.error.message.short': 'The message must be at least 10 characters.',
        'diag.form.error.message.long': 'The message is too long (maximum 5000 characters).',
        'diag.form.picker.no.results': 'No results',

        // Footer
        'footer.tagline': 'Websites, marketing and automation for businesses that want to grow.',
        'footer.col.services': 'Services',
        'footer.col.explore': 'Explore',
        'footer.col.social': 'Social',
        'footer.link.webs': 'Websites & Landings',
        'footer.link.marketing': 'Marketing',
        'footer.link.automation': 'Automation',
        'footer.link.maintenance': 'Maintenance',
        'footer.link.examples': 'Examples',
        'footer.link.process': 'Process',
        'footer.link.faq': 'FAQ',
        'footer.link.contact': 'Contact',
        'footer.rights': 'All rights reserved.',
        'footer.copyright': '© 2026 Caselyn.',
        'footer.privacy': 'Privacy',
        'footer.cookies': 'Cookies',

        // Legal Pages - Shared
        'nav.inicio': 'Home',
        'legal.back': '← Back to home',

        // Privacy Policy
        'privacy.title': 'Privacy Policy',
        'privacy.updated': '<strong>Last updated:</strong> June 13, 2026',
        'privacy.intro1': 'In this Privacy Policy we explain how we handle the personal data you may provide to us through this website.',
        'privacy.intro2': 'Caselyn is a digital project in its early stages focused on websites, marketing and automation for businesses. We are not currently a registered company or incorporated entity. This policy has been drafted to clearly explain what data we collect, how we use it and what rights you have.',
        'privacy.s1.title': '1. Data Controller',
        'privacy.s1.p1': 'Data Controller: Caselyn<br />Contact email: <a href="mailto:caselyncontact@gmail.com" class="legal-link">caselyncontact@gmail.com</a><br />Website: <a href="https://caselyn.es" class="legal-link">https://caselyn.es</a>',
        'privacy.s1.p2': 'Caselyn currently acts as the project name through which requests received via this website are managed.',
        'privacy.s1.p3': 'This identification is provisional and may be updated if the project starts operating under an identified individual, self-employed person, company or other legal form.',
        'privacy.s2.title': '2. What data we collect',
        'privacy.s2.p1': 'When you use the contact form on the website, we may collect the data you voluntarily provide, such as:',
        'privacy.s2.li1': 'Name.',
        'privacy.s2.li2': 'Email.',
        'privacy.s2.li3': 'Phone.',
        'privacy.s2.li4': 'Phone prefix or country.',
        'privacy.s2.li5': 'Business or brand.',
        'privacy.s2.li6': 'Current website, if provided.',
        'privacy.s2.li7': 'Type of project or service requested.',
        'privacy.s2.li8': 'Message or information included in the form.',
        'privacy.s2.p2': 'In addition, for technical and security reasons, we may process data associated with the form submission, such as:',
        'privacy.s2.li9': 'IP address.',
        'privacy.s2.li10': 'Date and time of submission.',
        'privacy.s2.li11': 'Basic technical data necessary to process the request and prevent abuse.',
        'privacy.s2.p3': 'We may also save the language preference of the website in the browser\'s local storage to remember the language selected by the user.',
        'privacy.s2.p4': 'We do not request particularly sensitive data. We ask that you do not include sensitive or unnecessary information in the form, such as health data, identity documents, bank details, passwords or other confidential information.',
        'privacy.s3.title': '3. How we use your data',
        'privacy.s3.p1': 'We use the data received through the form to:',
        'privacy.s3.li1': 'Respond to your contact request.',
        'privacy.s3.li2': 'Understand what you want to create, improve or consult.',
        'privacy.s3.li3': 'Prepare a proposal, quote or information about our services if requested.',
        'privacy.s3.li4': 'Maintain communication related to your request or potential project.',
        'privacy.s3.li5': 'Protect the website against abuse, spam, misuse or technical issues.',
        'privacy.s3.p2': 'We do not use the form data to send you newsletters, recurring commercial campaigns or personalised advertising.',
        'privacy.s3.p3': 'If we incorporate commercial communications, email marketing, remarketing or similar systems in the future, we will update this policy and request the corresponding consent when necessary.',
        'privacy.s4.title': '4. Legal basis for processing',
        'privacy.s4.p1': 'The main legal basis for processing the data you send us through the form is the application of pre-contractual measures requested by you, as we use that data to respond to your query, assess your request or prepare a possible proposal.',
        'privacy.s4.p2': 'The processing of technical data required for security, abuse prevention, website maintenance or incident resolution is based on our legitimate interest in keeping the website secure and operational.',
        'privacy.s4.p3': 'If we process your data for different purposes in the future, such as commercial communications unrelated to your initial request, we will only do so where there is an appropriate legal basis, such as your consent.',
        'privacy.s5.title': '5. Where data is stored and which providers are involved',
        'privacy.s5.p1': 'To receive and manage contact requests we use external technology providers.',
        'privacy.s5.p2': 'The following services may currently be involved:',
        'privacy.s5.li1': 'Vercel: website hosting and execution of the form API.',
        'privacy.s5.li2': 'Supabase: storage of data submitted through the form.',
        'privacy.s5.li3': 'Resend: sending internal email notifications when we receive a request.',
        'privacy.s5.li4': 'Gmail / Google: receiving and managing email associated with the request.',
        'privacy.s5.p3': 'These providers may process personal data on behalf of Caselyn to provide the necessary technical services. We do not use these providers to sell your data or for personalised advertising.',
        'privacy.s5.p4': 'Some providers may be located outside the European Economic Area or use international infrastructure. In such cases, processing must be carried out with appropriate safeguards in accordance with applicable data protection regulations.',
        'privacy.s6.title': '6. Artificial intelligence and automation',
        'privacy.s6.p1': 'We currently do not use artificial intelligence tools to make automated decisions about requests received or to profile the people who contact us.',
        'privacy.s6.p2': 'We may use automation or artificial intelligence tools in the future to organise requests, classify contacts or improve internal processes. If this occurs and affects the processing of personal data, we will update this Privacy Policy to adequately inform about the tools, purposes and applicable safeguards.',
        'privacy.s7.title': '7. How long we keep your data',
        'privacy.s7.p1': 'We will retain the data for as long as necessary to handle your request and manage the related communication.',
        'privacy.s7.p2': 'As a general guideline:',
        'privacy.s7.li1': 'If the request does not become a project, we may retain the data for a maximum of 12 months from the last contact.',
        'privacy.s7.li2': 'If there is a professional relationship or ongoing project, we will retain the data for as long as necessary to manage the project and comply with possible legal, administrative or fiscal obligations.',
        'privacy.s7.li3': 'Technical data related to security, abuse prevention or incidents may be retained for as long as necessary to resolve or prevent such issues.',
        'privacy.s7.p3': 'You may request the deletion of your data at any time, unless there is a legal obligation or legitimate reason to retain it for longer.',
        'privacy.s8.title': '8. Who we share your data with',
        'privacy.s8.p1': 'We do not sell your data or share it with third parties for commercial or advertising purposes.',
        'privacy.s8.p2': 'Only the technical providers necessary for the operation of the website, the form, the storage of requests and the receipt of emails may access your data, such as Vercel, Supabase, Resend and Gmail/Google.',
        'privacy.s8.p3': 'We may also disclose data if necessary to comply with a legal obligation, respond to a request from a competent authority or protect our rights in the event of misuse of the website.',
        'privacy.s9.title': '9. Your rights',
        'privacy.s9.p1': 'You have the right to:',
        'privacy.s9.li1': 'Access your personal data.',
        'privacy.s9.li2': 'Request the rectification of inaccurate data.',
        'privacy.s9.li3': 'Request the erasure of your data.',
        'privacy.s9.li4': 'Request the restriction of processing.',
        'privacy.s9.li5': 'Object to processing in certain cases.',
        'privacy.s9.li6': 'Request the portability of your data where applicable.',
        'privacy.s9.li7': 'Withdraw your consent if any processing is based on consent.',
        'privacy.s9.p2': 'You can exercise these rights by writing to: <a href="mailto:caselyncontact@gmail.com" class="legal-link">caselyncontact@gmail.com</a>',
        'privacy.s9.p3': 'To process your request, we may need to ask you for additional information to confirm your identity.',
        'privacy.s9.p4': 'You also have the right to lodge a complaint with the Spanish Data Protection Agency if you consider that the processing of your data does not comply with applicable regulations.',
        'privacy.s10.title': '10. Security',
        'privacy.s10.p1': 'We apply reasonable technical and organisational measures to protect personal data against loss, unauthorised access, alteration or misuse.',
        'privacy.s10.p2': 'Among other measures, the website uses an HTTPS connection and data is managed through specialised technology providers.',
        'privacy.s10.p3': 'However, no system is completely infallible, so we recommend not sending sensitive or unnecessary information through the form.',
        'privacy.s11.title': '11. Minors',
        'privacy.s11.p1': 'This website is primarily aimed at businesses, professionals or individuals interested in digital services.',
        'privacy.s11.p2': 'We do not intentionally request data from minors. If we detect that we have received personal data from a minor without the necessary authorisation, we may delete it.',
        'privacy.s12.title': '12. Links to social media and third parties',
        'privacy.s12.p1': 'The website may include links to external platforms such as Instagram, TikTok or YouTube.',
        'privacy.s12.p2': 'By clicking on those links, you will leave the Caselyn website and will be subject to the privacy and cookie policies of each platform. Caselyn does not control the data processing that those external platforms may carry out.',
        'privacy.s13.title': '13. Changes to this Privacy Policy',
        'privacy.s13.p1': 'We may update this Privacy Policy to reflect changes to the website, the tools used, the services offered or applicable regulations.',
        'privacy.s13.p2': 'When we make significant changes, we will update the date shown at the top of this page.',

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
        'faq.q2': 'Que comprend le premier contact ?',
        'faq.a2': 'Nous analysons ce que vous souhaitez créer ou améliorer et vous indiquons ce qu\'il serait le plus pertinent de faire en premier.',
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

        // About / GEO
        'about.title': 'Qu\'est-ce que Caselyn',
        'about.text': 'Caselyn est une agence digitale qui crée des sites web, des campagnes et des automatisations pour les entreprises qui veulent se développer. Nous travaillons sur des projets comme des landing pages, des sites complets, des campagnes, des formulaires, des réservations, le suivi des contacts et la maintenance.',
        'about.item1': 'Sites web et landing pages pour présenter des entreprises, des services ou des campagnes.',
        'about.item2': 'Marketing pour maintenir la cohérence entre le site, les réseaux, les annonces et le contact.',
        'about.item3': 'Automatisation pour connecter les formulaires, les contacts et les outils.',
        'about.item4': 'Maintenance pour garder le site à jour et en bon fonctionnement.',

        // Diagnostico page
        'diag.title': 'Parlez-nous de votre projet',
        'diag.subtitle': 'Dites-nous ce que vous voulez créer ou améliorer et nous étudierons la meilleure façon de vous aider.',
        'diag.form.name': 'Nom',
        'diag.form.name.placeholder': '',
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
        'diag.form.business.placeholder': '',
        'diag.form.website': 'Site actuel',
        'diag.form.website.placeholder': '',
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
        'diag.form.message.placeholder': '',
        'diag.form.submit': 'Envoyer la demande',
        'diag.form.success': 'Demande envoyée. Nous vous contacterons rapidement.',
        'diag.form.error': 'Un problème est survenu. Réessayez ou écrivez-nous directement.',
        'diag.form.error.name': 'Veuillez entrer votre nom.',
        'diag.form.error.email': 'Veuillez entrer une adresse email valide.',
        'diag.form.error.business': 'Veuillez indiquer le nom de votre entreprise.',
        'diag.form.error.service': 'Veuillez sélectionner ce que vous souhaitez créer ou améliorer.',
        'diag.form.error.message.short': 'Le message doit contenir au moins 10 caractères.',
        'diag.form.error.message.long': 'Le message est trop long (maximum 5000 caractères).',
        'diag.form.picker.no.results': 'Aucun résultat',

        // Footer
        'footer.tagline': 'Sites web, marketing et automatisation pour les entreprises qui veulent grandir.',
        'footer.col.services': 'Services',
        'footer.col.explore': 'Explorer',
        'footer.col.social': 'Social',
        'footer.link.webs': 'Sites & Landings',
        'footer.link.marketing': 'Marketing',
        'footer.link.automation': 'Automatisation',
        'footer.link.maintenance': 'Maintenance',
        'footer.link.examples': 'Exemples',
        'footer.link.process': 'Processus',
        'footer.link.faq': 'FAQ',
        'footer.link.contact': 'Contact',
        'footer.rights': 'Tous droits réservés.',
        'footer.copyright': '© 2026 Caselyn.',
        'footer.privacy': 'Confidentialité',
        'footer.cookies': 'Cookies',

        // Legal Pages - Shared
        'nav.inicio': 'Accueil',
        'legal.back': '← Retour à l\'accueil',

        // Privacy Policy
        'privacy.title': 'Politique de Confidentialité',
        'privacy.updated': '<strong>Dernière mise à jour :</strong> 13 juin 2026',
        'privacy.intro1': 'Dans cette Politique de Confidentialité, nous vous expliquons comment nous traitons les données personnelles que vous pouvez nous fournir via ce site web.',
        'privacy.intro2': 'Caselyn est un projet digital en phase initiale axé sur les sites web, le marketing et l\'automatisation pour les entreprises. Nous ne sommes actuellement pas une société constituée ni une entreprise enregistrée. Cette politique a été rédigée pour expliquer clairement quelles données nous collectons, comment nous les utilisons et quels sont vos droits.',
        'privacy.s1.title': '1. Responsable du traitement',
        'privacy.s1.p1': 'Responsable du traitement : Caselyn<br />Email de contact : <a href="mailto:caselyncontact@gmail.com" class="legal-link">caselyncontact@gmail.com</a><br />Site web : <a href="https://caselyn.es" class="legal-link">https://caselyn.es</a>',
        'privacy.s1.p2': 'Caselyn agit actuellement comme nom du projet depuis lequel sont gérées les demandes reçues via ce site web.',
        'privacy.s1.p3': 'Cette identification est provisoire et pourra être mise à jour si le projet passe à opérer sous une personne physique identifiée, un travailleur indépendant, une société ou une autre forme juridique.',
        'privacy.s2.title': '2. Quelles données nous collectons',
        'privacy.s2.p1': 'Lorsque vous utilisez le formulaire de contact du site, nous pouvons collecter les données que vous nous fournissez volontairement, telles que :',
        'privacy.s2.li1': 'Nom.',
        'privacy.s2.li2': 'Email.',
        'privacy.s2.li3': 'Téléphone.',
        'privacy.s2.li4': 'Préfixe téléphonique ou pays.',
        'privacy.s2.li5': 'Entreprise ou marque.',
        'privacy.s2.li6': 'Site actuel, si vous l\'indiquez.',
        'privacy.s2.li7': 'Type de projet ou service demandé.',
        'privacy.s2.li8': 'Message ou informations inclus dans le formulaire.',
        'privacy.s2.p2': 'De plus, pour des raisons techniques et de sécurité, nous pouvons traiter des données associées à l\'envoi du formulaire, telles que :',
        'privacy.s2.li9': 'Adresse IP.',
        'privacy.s2.li10': 'Date et heure d\'envoi.',
        'privacy.s2.li11': 'Données techniques de base nécessaires pour traiter la demande et prévenir les abus.',
        'privacy.s2.p3': 'Nous pouvons également enregistrer la préférence de langue du site dans le stockage local du navigateur pour mémoriser la langue sélectionnée par l\'utilisateur.',
        'privacy.s2.p4': 'Nous ne demandons pas de données particulièrement sensibles. Nous vous demandons de ne pas inclure dans le formulaire d\'informations sensibles ou inutiles, telles que des données de santé, des documents d\'identité, des coordonnées bancaires, des mots de passe ou d\'autres informations confidentielles.',
        'privacy.s3.title': '3. Comment nous utilisons vos données',
        'privacy.s3.p1': 'Nous utilisons les données reçues via le formulaire pour :',
        'privacy.s3.li1': 'Répondre à votre demande de contact.',
        'privacy.s3.li2': 'Comprendre ce que vous souhaitez créer, améliorer ou consulter.',
        'privacy.s3.li3': 'Préparer une proposition, un devis ou des informations sur nos services si vous le demandez.',
        'privacy.s3.li4': 'Maintenir la communication liée à votre demande ou projet potentiel.',
        'privacy.s3.li5': 'Protéger le site contre les abus, le spam, les utilisations abusives ou les problèmes techniques.',
        'privacy.s3.p2': 'Nous n\'utilisons pas les données du formulaire pour vous envoyer des newsletters, des campagnes commerciales récurrentes ou de la publicité personnalisée.',
        'privacy.s3.p3': 'Si nous intégrons à l\'avenir des communications commerciales, de l\'email marketing, du remarketing ou des systèmes similaires, nous mettrons à jour cette politique et demanderons le consentement correspondant lorsque cela sera nécessaire.',
        'privacy.s4.title': '4. Base légale du traitement',
        'privacy.s4.p1': 'La base légale principale pour traiter les données que vous nous envoyez via le formulaire est l\'application de mesures précontractuelles demandées par vous, car nous utilisons ces données pour répondre à votre demande, évaluer votre requête ou préparer une proposition éventuelle.',
        'privacy.s4.p2': 'Le traitement des données techniques nécessaires à la sécurité, la prévention des abus, la maintenance du site ou la résolution d\'incidents est basé sur notre intérêt légitime à maintenir le site sécurisé et opérationnel.',
        'privacy.s4.p3': 'Si nous traitons vos données à des fins différentes à l\'avenir, comme des communications commerciales non liées à votre demande initiale, nous ne le ferons que lorsqu\'il existera une base légale appropriée, telle que votre consentement.',
        'privacy.s5.title': '5. Où les données sont stockées et quels fournisseurs interviennent',
        'privacy.s5.p1': 'Pour recevoir et gérer les demandes de contact, nous utilisons des fournisseurs technologiques externes.',
        'privacy.s5.p2': 'Les services suivants peuvent actuellement intervenir :',
        'privacy.s5.li1': 'Vercel : hébergement du site et exécution de l\'API du formulaire.',
        'privacy.s5.li2': 'Supabase : stockage des données envoyées via le formulaire.',
        'privacy.s5.li3': 'Resend : envoi de notifications internes par email lorsque nous recevons une demande.',
        'privacy.s5.li4': 'Gmail / Google : réception et gestion des emails associés à la demande.',
        'privacy.s5.p3': 'Ces fournisseurs peuvent traiter des données personnelles pour le compte de Caselyn afin de fournir les services techniques nécessaires. Nous n\'utilisons pas ces fournisseurs pour vendre vos données ni pour de la publicité personnalisée.',
        'privacy.s5.p4': 'Certains fournisseurs peuvent être situés hors de l\'Espace Économique Européen ou utiliser une infrastructure internationale. Dans ces cas, le traitement devra être effectué avec des garanties appropriées conformément à la réglementation applicable en matière de protection des données.',
        'privacy.s6.title': '6. Intelligence artificielle et automatisations',
        'privacy.s6.p1': 'Nous n\'utilisons pas actuellement d\'outils d\'intelligence artificielle pour prendre des décisions automatisées sur les demandes reçues ni pour établir des profils des personnes qui nous contactent.',
        'privacy.s6.p2': 'Il est possible que nous utilisions à l\'avenir des outils d\'automatisation ou d\'intelligence artificielle pour organiser les demandes, classifier les contacts ou améliorer les processus internes. Si cela se produit et affecte le traitement des données personnelles, nous mettrons à jour cette Politique de Confidentialité pour informer de manière adéquate sur les outils, les finalités et les garanties applicables.',
        'privacy.s7.title': '7. Durée de conservation de vos données',
        'privacy.s7.p1': 'Nous conserverons les données pendant le temps nécessaire pour traiter votre demande et gérer la communication associée.',
        'privacy.s7.p2': 'En règle générale :',
        'privacy.s7.li1': 'Si la demande ne se concrétise pas en projet, nous pouvons conserver les données pendant une durée maximale de 12 mois à compter du dernier contact.',
        'privacy.s7.li2': 'S\'il existe une relation professionnelle ou un projet en cours, nous conserverons les données pendant le temps nécessaire pour gérer le projet et respecter les éventuelles obligations légales, administratives ou fiscales.',
        'privacy.s7.li3': 'Les données techniques liées à la sécurité, la prévention des abus ou les incidents pourront être conservées pendant le temps nécessaire pour résoudre ou prévenir ces problèmes.',
        'privacy.s7.p3': 'Vous pouvez demander la suppression de vos données à tout moment, sauf s\'il existe une obligation légale ou un motif légitime de les conserver plus longtemps.',
        'privacy.s8.title': '8. Avec qui nous partageons vos données',
        'privacy.s8.p1': 'Nous ne vendons pas vos données et ne les partageons pas avec des tiers à des fins commerciales ou publicitaires.',
        'privacy.s8.p2': 'Seuls les fournisseurs techniques nécessaires au fonctionnement du site, du formulaire, au stockage des demandes et à la réception des emails peuvent accéder à vos données, tels que Vercel, Supabase, Resend et Gmail/Google.',
        'privacy.s8.p3': 'Nous pourrions également communiquer des données si cela est nécessaire pour respecter une obligation légale, répondre à une demande d\'une autorité compétente ou protéger nos droits en cas d\'utilisation abusive du site.',
        'privacy.s9.title': '9. Vos droits',
        'privacy.s9.p1': 'Vous avez le droit de :',
        'privacy.s9.li1': 'Accéder à vos données personnelles.',
        'privacy.s9.li2': 'Demander la rectification des données inexactes.',
        'privacy.s9.li3': 'Demander la suppression de vos données.',
        'privacy.s9.li4': 'Demander la limitation du traitement.',
        'privacy.s9.li5': 'Vous opposer au traitement dans certains cas.',
        'privacy.s9.li6': 'Demander la portabilité de vos données lorsque cela est applicable.',
        'privacy.s9.li7': 'Retirer votre consentement si un traitement est basé sur le consentement.',
        'privacy.s9.p2': 'Vous pouvez exercer ces droits en écrivant à : <a href="mailto:caselyncontact@gmail.com" class="legal-link">caselyncontact@gmail.com</a>',
        'privacy.s9.p3': 'Pour traiter votre demande, il est possible que nous ayons besoin de vous demander des informations supplémentaires pour confirmer votre identité.',
        'privacy.s9.p4': 'Vous avez également le droit de déposer une plainte auprès de l\'Agence Espagnole de Protection des Données si vous estimez que le traitement de vos données ne respecte pas la réglementation applicable.',
        'privacy.s10.title': '10. Sécurité',
        'privacy.s10.p1': 'Nous appliquons des mesures techniques et organisationnelles raisonnables pour protéger les données personnelles contre la perte, l\'accès non autorisé, l\'altération ou l\'utilisation abusive.',
        'privacy.s10.p2': 'Entre autres mesures, le site utilise une connexion HTTPS et les données sont gérées par des fournisseurs technologiques spécialisés.',
        'privacy.s10.p3': 'Cependant, aucun système n\'est complètement infaillible, c\'est pourquoi nous vous recommandons de ne pas envoyer d\'informations sensibles ou inutiles via le formulaire.',
        'privacy.s11.title': '11. Mineurs',
        'privacy.s11.p1': 'Ce site est principalement destiné aux entreprises, aux professionnels ou aux personnes intéressées par les services numériques.',
        'privacy.s11.p2': 'Nous ne demandons pas intentionnellement de données de mineurs. Si nous détectons que nous avons reçu des données personnelles d\'un mineur sans l\'autorisation nécessaire, nous pourrons les supprimer.',
        'privacy.s12.title': '12. Liens vers les réseaux sociaux et tiers',
        'privacy.s12.p1': 'Le site peut inclure des liens vers des plateformes externes telles qu\'Instagram, TikTok ou YouTube.',
        'privacy.s12.p2': 'En cliquant sur ces liens, vous quitterez le site Caselyn et serez soumis aux politiques de confidentialité et de cookies de chaque plateforme. Caselyn ne contrôle pas le traitement des données que ces plateformes externes pourraient effectuer.',
        'privacy.s13.title': '13. Modifications de cette Politique de Confidentialité',
        'privacy.s13.p1': 'Nous pouvons mettre à jour cette Politique de Confidentialité pour refléter des changements sur le site, dans les outils utilisés, dans les services offerts ou dans la réglementation applicable.',
        'privacy.s13.p2': 'Lorsque nous apportons des changements importants, nous mettrons à jour la date indiquée au début de cette page.',

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
