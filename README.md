<div align="center">
	<img src="assets/logo-va.png" alt="Logo Virgen Abogados" width="120" />
	<h1>Virgen Abogados App</h1>
	<p><strong>Landing legal profesional</strong> enfocada en confianza, claridad y conversión de clientes.</p>

	<p>
		<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
		<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
		<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=111" alt="JavaScript" />
		<img src="https://img.shields.io/badge/Responsive-Ready-0B1F36?style=for-the-badge" alt="Responsive" />
	</p>
</div>

---

## Navegación Rápida

1. [Vista del producto](#vista-del-producto)
2. [Experiencia de interfaz](#experiencia-de-interfaz)
3. [Arquitectura visual](#arquitectura-visual)
4. [Métricas del sitio](#métricas-del-sitio)
5. [Estructura del proyecto](#estructura-del-proyecto)
6. [Guía local](#guía-local)
7. [Formulario con EmailJS](#formulario-con-emailjs)
8. [Personalización de diseño](#personalización-de-diseño)
9. [Despliegue](#despliegue)

## Vista del producto

<table>
	<tr>
		<td width="50%" valign="top">
			<h3>Objetivo</h3>
			<p>Presentar a Virgen Abogados con una imagen sólida y elegante, facilitando el contacto por varios canales sin fricción.</p>
			<h3>Resultado</h3>
			<p>Landing one-page con identidad de marca, servicios, proceso de trabajo, prueba social y formulario activo.</p>
		</td>
		<td width="50%" valign="top">
			<h3>Canales de conversión</h3>
			<ul>
				<li>WhatsApp directo</li>
				<li>Correo electrónico</li>
				<li>Formulario integrado con EmailJS</li>
				<li>Instagram profesional</li>
			</ul>
		</td>
	</tr>
</table>

## Experiencia de interfaz

<table>
	<tr>
		<th>Bloque</th>
		<th>Propósito UX</th>
		<th>Valor para el cliente</th>
	</tr>
	<tr>
		<td>Hero de marca</td>
		<td>Comunicar posicionamiento legal premium</td>
		<td>Primera impresión sólida y confiable</td>
	</tr>
	<tr>
		<td>Perfil profesional</td>
		<td>Mostrar trayectoria y enfoque humano</td>
		<td>Genera credibilidad</td>
	</tr>
	<tr>
		<td>Servicios en tarjetas</td>
		<td>Lectura rápida de especialidades</td>
		<td>Identifica si el bufete cubre su necesidad</td>
	</tr>
	<tr>
		<td>Proceso de trabajo</td>
		<td>Reducir incertidumbre del usuario</td>
		<td>Expectativas claras del servicio</td>
	</tr>
	<tr>
		<td>Testimonios</td>
		<td>Prueba social</td>
		<td>Incrementa confianza antes de contactar</td>
	</tr>
	<tr>
		<td>Formulario + accesos directos</td>
		<td>Eliminar fricción de contacto</td>
		<td>Mejora tasa de conversión</td>
	</tr>
</table>

## Arquitectura visual

### Flujo general del sitio

```mermaid
flowchart LR
	A[Usuario llega al sitio] --> B[Navega secciones]
	B --> C[Servicios]
	B --> D[Testimonios]
	C --> E[Contacto]
	D --> E
	E --> F[WhatsApp]
	E --> G[Correo]
	E --> H[Formulario]
	H --> I[EmailJS]
	I --> J[Bandeja de entrada]
```

### Flujo del formulario

```mermaid
sequenceDiagram
	participant U as Usuario
	participant W as Web
	participant JS as scripts/main.js
	participant E as EmailJS
	participant M as Correo de destino

	U->>W: Envía formulario
	W->>JS: submit
	JS->>JS: Estado Enviando...
	JS->>E: send(service, template, params)
	alt Exitoso
		E-->>JS: OK
		JS-->>W: Mensaje de éxito + reset
		E-->>M: Entrega correo
	else Fallo
		E-->>JS: Error
		JS-->>W: Mensaje de error
	end
	JS->>W: Reactiva botón
```

## Métricas del sitio

- Secciones principales: 7
- Servicios publicados: 5
- Testimonios: 2
- Pasos del proceso: 3
- Canales de contacto: 4

```mermaid
xychart-beta
	title "Cobertura funcional"
	x-axis [Secciones, Servicios, Testimonios, Proceso, Contacto]
	y-axis "Cantidad" 0 --> 8
	bar [7, 5, 2, 3, 4]
```

## Estructura del proyecto

```text
VirgenAbogadosApp/
|-- index.html
|-- README.md
|-- assets/
|   |-- Firma Correo.html
|   |-- logo-va.png
|   `-- diana-posada-virgen.jpeg
|-- scripts/
|   `-- main.js
`-- styles/
		`-- main.css
```

## Guía local

1. Abre el proyecto en VS Code.
2. Ejecuta con una de estas opciones:
	 - Abrir index.html en navegador.
	 - Usar Live Server para recarga automática.
3. Validar en desktop y móvil.

## Formulario con EmailJS

El formulario usa EmailJS desde scripts/main.js con:

- EMAILJS_PUBLIC_KEY
- EMAILJS_SERVICE_ID
- EMAILJS_TEMPLATE_ID

Campos que envía:

- from_name
- from_email
- from_phone
- message
- sent_at

Pasos para configurar en otra cuenta:

1. Crear servicio y plantilla en EmailJS.
2. Reemplazar claves en scripts/main.js.
3. Hacer prueba de envío real.

## Personalización de diseño

<table>
	<tr>
		<th>Qué cambiar</th>
		<th>Dónde</th>
	</tr>
	<tr>
		<td>Textos, enlaces y datos de contacto</td>
		<td>index.html</td>
	</tr>
	<tr>
		<td>Paleta, tipografía, espaciados y componentes</td>
		<td>styles/main.css</td>
	</tr>
	<tr>
		<td>Comportamiento del menú y formulario</td>
		<td>scripts/main.js</td>
	</tr>
	<tr>
		<td>Logo y fotografía profesional</td>
		<td>assets/</td>
	</tr>
</table>

## Despliegue

Opciones sugeridas:

- Netlify
- Vercel
- GitHub Pages

Flujo recomendado:

1. Publicar repositorio en GitHub.
2. Conectar el repo al hosting.
3. Configurar dominio personalizado.
4. Verificar HTTPS y formulario en producción.

---

Desarrollado para presencia digital legal en Itagüí, Antioquia, con enfoque en confianza de marca y conversión de contactos.

Ultima actualizacion: 2026-05-27.a mantenimiento por componentes.
