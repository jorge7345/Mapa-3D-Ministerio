
document.addEventListener("DOMContentLoaded", function() {
    const modelViewer = document.getElementById('modelViewer');
    const label = document.getElementById('label');

    // Cargar el primer modelo .glb
    modelViewer.src = './modelos/Ministerio3D2.glb'; // Ruta relativa al primer modelo glb
    modelViewer.alt = 'Edificios'; // Descripción del primer modelo

    // Cargar el segundo modelo .glb
    const secondModel = document.createElement('model-viewer');
    secondModel.src = './modelos/mapGPS.glb'; // Ruta relativa al segundo modelo glb
    secondModel.alt = 'Segundo Edificio'; // Descripción del segundo modelo
    modelViewer.appendChild(secondModel);

    // Función para actualizar la posición de la etiqueta
    function updateLabelPosition() {
        // Obtener las dimensiones del contenedor del modelo
        const containerRect = modelViewer.getBoundingClientRect();

        // Calcular la posición de la etiqueta en relación con el contenedor del modelo
        const labelX = containerRect.width / 2; // centrado horizontalmente
        const labelY = containerRect.height * 0.8; // cerca de la parte inferior

        // Asignar la posición de la etiqueta
        label.style.left = labelX + 'px';
        label.style.top = labelY + 'px';

        // Solicitar la próxima animación de fotograma
        requestAnimationFrame(updateLabelPosition);
    }

    // Iniciar la actualización continua de la posición de la etiqueta
    updateLabelPosition();
});
