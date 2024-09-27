import { consultarDatos } from './api.js';
import { registrarAnimal, llenarOpcionesAnimales } from './datosForm.js';


(() => {
    const init = async () => {
        try {
            const animales = await consultarDatos();
            if (animales.length === 0) {
                console.warn("No se encontraron animales.");
            } else {
                llenarOpcionesAnimales(animales);
            }
        } catch (error) {
            console.error("Error al consultar los datos:", error);
        }
    };

    document.addEventListener('DOMContentLoaded', init);

    document.getElementById('btnRegistrar').addEventListener('click', () => {
        const animalSelect = document.getElementById('animal');
        const edadSelect = document.getElementById('edad');
        const comentariosTextarea = document.getElementById('comentarios');

        const nombre = animalSelect.value;
        const edad = edadSelect.value;
        const comentarios = comentariosTextarea.value;


        const selectedOption = animalSelect.options[animalSelect.selectedIndex];
        const imagen = selectedOption.dataset.imagen;
        const sonido = selectedOption.dataset.sonido;

        registrarAnimal(nombre, edad, comentarios, imagen, sonido);

        animalSelect.selectedIndex = 0;
        edadSelect.selectedIndex = 0;
        comentariosTextarea.value = '';
        const imagenContainer = document.getElementById('preview');
        imagenContainer.innerHTML = '';
    });
})();
