# viajes-chile

**Viajes Chile** es un sitio web que proporciona información sobre destinos destacados en Chile, junto con un formulario de contacto para consultas. Utiliza tecnologías modernas como Bootstrap y Jquery para el diseño responsivo - animado, Google Font para la tipografía y Font Awesome para los íconos.

## Estructura del Proyecto

### 1. `index.html`
- **Encabezado (`<header>`)**
  - **Navegación (`<nav>`)**: Incluye un menú de navegación con enlaces a las diferentes secciones del sitio que navegan con un efecto Smooth Scroll.
  - **Carrusel (`<div id="carouselExample">`)**: Muestra imágenes rotativas destacadas.
  
- **Contenido Principal (`<main>`)**
  - **Quienes Somos (`<section id="quienes-somos">`)**: Una sección informativa sobre la empresa con iconos y texto descriptivo. Esta se oculta en dispositivos moviles.
  - **Destacados (`<section id="lugares-destacados">`)**: Una sección que presenta tarjetas de destinos destacados con imágenes y descripciones.
  - **Contacto (`<section id="contacto">`)**: Un formulario de contacto para que los usuarios envíen consultas. El botón "Enviar" posee un tooltip con informacióno adicional

- **Pie de Página (`<footer>`)**
  - **Información y Redes Sociales**: Muestra el nombre de la empresa y enlaces a redes sociales.

### 2. Recursos Externos
- **Fuentes de Google**: `Montserrat` para estilos tipográficos.
- **Font Awesome**: Para iconos.
- **Bootstrap**: Para el diseño responsivo y componentes interactivos.
- **jQuery**: Para funcionalidades adicionales.

### 3. Archivos de Estilo
- **CSS (`./assets/css/home.css`)**: Estilos personalizados para el sitio.

### 4. Archivos JavaScript
- **Bootstrap Bundle**: Incluye Popper.js y Bootstrap para interactividad.
- **jQuery**: Biblioteca para manipulación del DOM.
- **Main.js (`./assets/js/main.js`)**: Archivo JavaScript personalizado para funcionalidades específicas.
