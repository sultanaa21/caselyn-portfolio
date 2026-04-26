# Caselyn Portfolio

Landing page corporativa y portafolio para agencia de diseño y desarrollo web, orientada a negocios locales.

## Descripción General

Caselyn Portfolio es una página web estática de alto rendimiento construida con tecnologías web nativas (HTML5, CSS3, JavaScript Vanilla) y desplegada en la infraestructura de Vercel. El proyecto destaca por su diseño premium minimalista, animaciones de alto rendimiento (GPU-accelerated) y un sistema robusto de captura de leads mediante funciones serverless (Vercel Functions).

## Características Principales

- **Arquitectura Serverless:** Backend implementado a través de funciones serverless de Vercel (`/api/contact.ts`) para el procesamiento seguro de formularios de contacto.
- **Efecto Liquid Glass (Web Component):** Implementación nativa de un Web Component (`<glass-element>`) que utiliza filtros SVG avanzados (`feDisplacementMap`) generados en tiempo de ejecución para crear un efecto visual de cristal líquido altamente optimizado, con *graceful degradation* para navegadores sin soporte.
- **Sistema i18n Nativo:** Internacionalización desarrollada 100% en Vanilla JS, soportando Español, Inglés, Francés (y Catalán), con almacenamiento persistente de preferencias sin dependencias externas.
- **Flujo de Captura de Leads Robusto:**
  - Validación doble (cliente y servidor).
  - Rate limiting en memoria (protección contra abusos).
  - Honeypot anti-spam.
  - Persistencia en base de datos PostgreSQL (Supabase).
  - Integración opcional con Webhooks (Google Sheets).
  - Envío de notificaciones transaccionales vía Resend.
- **Rendimiento y SEO:** Arquitectura libre de frameworks pesados que bloqueen el renderizado. Meta etiquetas completas y schema.org JSON-LD para SEO local.

## Stack Tecnológico

| Capa | Tecnologías |
| :--- | :--- |
| **Frontend** | HTML5, CSS3 (Custom Properties), JavaScript ES2021 (Vanilla) |
| **Backend (Serverless)** | Node.js, TypeScript (`@vercel/node`) |
| **Base de Datos** | Supabase (PostgreSQL) |
| **Emails Transaccionales** | Resend |
| **Hosting y Despliegue** | Vercel |
| **Integración Continua (CI)** | GitHub Actions |
| **Calidad de Código** | ESLint, Prettier, Stylelint, Husky |

## Estructura del Proyecto

```text
caselyn-portfolio/
├── .github/workflows/   # Pipelines de CI/CD
├── api/                 # Funciones Serverless de Vercel
│   └── contact.ts       # Endpoint POST /api/contact
├── public/              # Archivos estáticos (Directorio raíz del servidor web)
│   ├── index.html       # Landing page principal
│   ├── privacidad.html  # Política de privacidad
│   ├── cookies.html     # Política de cookies
│   ├── css/
│   │   └── styles.css   # Sistema de diseño y utilidades CSS
│   └── js/
│       ├── script.js             # Lógica de interfaz y cliente de API
│       ├── translations.js       # Diccionario y motor del sistema i18n
│       ├── glass-element.js      # Web Component custom para el header
│       └── displacement-utils.js # Utilidades matemáticas para filtros SVG
├── vercel.json          # Configuración de despliegue y cabeceras de seguridad
└── tsconfig.json        # Configuración de TypeScript (exclusivo para /api)
```

## Configuración y Desarrollo Local

### Requisitos Previos

- [Node.js](https://nodejs.org/) (versión 20 o superior recomendada).
- Cuenta en [Supabase](https://supabase.com/) (para persistencia de leads).
- Cuenta en [Resend](https://resend.com/) (para envío de emails).

### Instalación

1.  **Clonar el repositorio:**

    ```bash
    git clone https://github.com/sultanaa21/caselyn-portfolio.git
    cd caselyn-portfolio
    ```

2.  **Instalar dependencias de desarrollo:**

    ```bash
    npm install
    ```

3.  **Configurar Variables de Entorno:**
    El proyecto requiere variables de entorno para el funcionamiento de la API de contacto. Al usar Vercel, estas deben configurarse en el panel de control del proyecto, pero para desarrollo local con Vercel CLI (opcional), las variables necesarias son:

    | Variable | Descripción | Requerida |
    | :--- | :--- | :--- |
    | `SUPABASE_URL` | URL de tu proyecto Supabase | Sí |
    | `SUPABASE_SERVICE_ROLE_KEY` | Clave de servicio para escritura directa a la BD | Sí |
    | `RESEND_API_KEY` | Clave de API para el servicio de envío de correos | Sí |
    | `CONTACT_TO_EMAIL` | Dirección de destino para los leads (ej. `tu@email.com`) | Sí |
    | `CONTACT_FROM_EMAIL` | Dirección de remitente validada en Resend | Sí |
    | `GOOGLE_SHEETS_WEBHOOK_URL` | URL para integración con Google Sheets | No |
    | `SHEETS_WEBHOOK_SECRET` | Token de seguridad para el webhook | No |

### Ejecución Local

Para visualizar el Frontend, puedes utilizar cualquier servidor HTTP estático en la carpeta `public`:

```bash
# Usando npx y el paquete 'serve'
npx serve public
```

*Nota: Para probar la función serverless (`/api/contact`) de manera íntegra en desarrollo, se recomienda utilizar la herramienta CLI oficial de Vercel (`vercel dev`).*

### Comandos de Calidad de Código

El proyecto incluye herramientas para mantener la consistencia del código, las cuales se ejecutan automáticamente antes de cada commit mediante *husky*.

```bash
npm run lint       # Ejecuta ESLint y Stylelint
npm run lint:fix   # Corrige automáticamente errores de linting
npm run format     # Formatea el código con Prettier
```

## Despliegue

El proyecto está diseñado y configurado para un despliegue nativo y sin fricciones en **Vercel**.

1. Conecta tu repositorio de GitHub a tu cuenta de Vercel.
2. Vercel detectará automáticamente que es un proyecto estático con funciones serverless (no requiere `Build Command`).
3. Asegúrate de configurar las **Variables de Entorno** requeridas en la configuración del proyecto en Vercel.
4. Las cabeceras de seguridad y las políticas de enrutamiento ya se encuentran definidas en `vercel.json`.
