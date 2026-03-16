# Portafolio Web - Virgen Abogados

Sitio estático profesional construido con HTML, CSS y JavaScript.

## Estructura base (simple)

- `index.html` -> Página principal
- `styles/main.css` -> Estilos globales y responsive
- `scripts/main.js` -> Interacciones básicas
- `assets/` -> Imágenes, logo, favicon y recursos visuales

## Cómo abrirlo en local

1. Abre la carpeta del proyecto en VS Code.
2. Abre `index.html` en el navegador.
3. Si tienes la extensión Live Server, puedes usar "Open with Live Server".

## Personalización rápida

1. Reemplaza nombre, teléfono, correo y enlaces de WhatsApp en `index.html`.
2. Cambia colores en `:root` de `styles/main.css`.
3. Agrega tu logo y fotos en `assets/`.
4. Si activas formulario real luego, conecta con Formspree o EmailJS.

## Formulario a correo (sin backend)

El formulario quedó configurado con FormSubmit para enviar mensajes directamente a `virgenabogados@gmail.com`.

Importante: la primera vez que alguien envíe el formulario, FormSubmit enviará un correo de verificación a esa cuenta. Debes confirmar ese correo para activar los envíos.

## Recomendación de despliegue

- Hosting sugerido: Vercel o Netlify (gratuito para iniciar).
- Dominio: Namecheap / Cloudflare Registrar / GoDaddy.
- Flujo recomendado: subir repo a GitHub y conectar a Vercel/Netlify para deploy automático.

## Próximo paso (cuando quieras React)

Cuando este sitio esté validado con tu clienta, migramos el diseño a React + Vite para mantenimiento por componentes.