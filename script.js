document.addEventListener('DOMContentLoaded', function() {
    const enlacesMenu = document.querySelectorAll('.menu-lateral a');
    const seccionesContenido = document.querySelectorAll('.contenido-seccion');

    enlacesMenu.forEach(enlace => {
        enlace.addEventListener('click', function(event) {
            event.preventDefault(); // Evita que el enlace recargue la página

            // Obtener el ID del contenido a mostrar desde el atributo data-target
            const targetId = this.getAttribute('data-target');
            const targetSeccion = document.getElementById(targetId);

            // 1. Quitar la clase 'activo' de todos los enlaces
            enlacesMenu.forEach(link => link.classList.remove('activo'));

            // 2. Añadir la clase 'activo' solo al enlace clickeado
            this.classList.add('activo');

            // 3. Ocultar todas las secciones de contenido
            seccionesContenido.forEach(seccion => seccion.classList.remove('activa'));

            // 4. Mostrar solo la sección de contenido correspondiente
            if (targetSeccion) {
                targetSeccion.classList.add('activa');
            }
        });
    });
});