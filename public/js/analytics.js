/**
 * Vercel Analytics — self-hosted loader
 * Moved from inline <script> to external file to allow strict CSP
 * without 'unsafe-inline' in script-src.
 */
import { inject } from 'https://cdn.jsdelivr.net/npm/@vercel/analytics@1.3.2/dist/esm/index.js';
inject();
