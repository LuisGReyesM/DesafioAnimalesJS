import { Animal, Leon, Lobo, Oso, Serpiente, Aguila } from './animal.js';
import { setupModal } from './modal.js';

const animalesRegistrados = [];

// Función para llenar las opciones del select
export function llenarOpcionesAnimales(animales) {
    const animalSelect = document.getElementById('animal');

    // Limpiar las opciones existentes antes de añadir nuevas
    animalSelect.innerHTML = '';

    // Agregar una opción vacía o un mensaje 
    const optionDefault = document.createElement('option');
    optionDefault.value = '';
    optionDefault.textContent = 'Seleccione un animal';
    optionDefault.disabled = true;
    optionDefault.selected = true;
    animalSelect.appendChild(optionDefault);

    animales.forEach(animal => {
        const option = document.createElement('option');
        option.value = animal.name;
        option.textContent = animal.name;
        option.dataset.imagen = animal.imagen;
        option.dataset.sonido = animal.sonido;
        animalSelect.appendChild(option);
    });

    async function mostrarImagen(imagen, nombre) {
        const imagenContainer = document.getElementById('preview');

        if (imagen) {
            imagenContainer.innerHTML = `<img src="assets/imgs/${imagen}" alt="${nombre}" class="img-fluid" style="max-width: 100%; height: auto;">`;
        } else {
            imagenContainer.innerHTML = '';
        }
    }

    // Función asincrínoca para mostrar la imagen
    animalSelect.addEventListener('change', async (event) => {
        const selectedOption = event.target.options[event.target.selectedIndex];
        const imagen = selectedOption.dataset.imagen;
        const nombre = selectedOption.value;

    // Llamar a la función asíncrona para mostrar la imagen
    await mostrarImagen(imagen, nombre);
    });
}

// Función para registrar un animal
export function registrarAnimal(nombre, edad, comentarios, imagen, sonido) {
    if (!nombre || !edad || !comentarios || edad === "Seleccione un rango de años") {
        alert("Por favor, complete todos los campos: animal, edad y comentarios.");
        return;
    }

    let nuevoAnimal;

    // Crear una instancia
    switch (nombre) {
        case "León":
            nuevoAnimal = new Leon(nombre, edad, imagen, comentarios, sonido);
            break;
        case "Lobo":
            nuevoAnimal = new Lobo(nombre, edad, imagen, comentarios, sonido);
            break;
        case "Oso":
            nuevoAnimal = new Oso(nombre, edad, imagen, comentarios, sonido);
            break;
        case "Serpiente":
            nuevoAnimal = new Serpiente(nombre, edad, imagen, comentarios, sonido);
            break;
        case "Águila":
            nuevoAnimal = new Aguila(nombre, edad, imagen, comentarios, sonido);
            break;
        default:
            nuevoAnimal = new Animal(nombre, edad, imagen, comentarios, sonido);
    }

    if (nuevoAnimal) {
        animalesRegistrados.push(nuevoAnimal);
        agregarANuevaFilaTabla(nuevoAnimal);

        // Reiniciar el formulario
        document.getElementById('animal').selectedIndex = 0;
        document.getElementById('edad').selectedIndex = 0;
        document.getElementById('comentarios').value = '';
        document.getElementById('preview').style.backgroundImage = "url(assets/imgs/lion.svg)";
    } else {
        alert("Por favor, complete todos los campos.");
    }
}
function agregarANuevaFilaTabla(animal) {
    const contenedorAnimales = document.getElementById('Animales');
    const nuevaTarjeta = document.createElement('div');
    nuevaTarjeta.classList.add('animal-card', 'col-12', 'col-md-6', 'col-lg-4', 'mb-3');


    nuevaTarjeta.innerHTML = `
        <div class="card bg-light p-2">
            <img  src="assets/imgs/${animal.img}" alt="${animal.nombre}" class="animal-img" style="cursor: pointer;">
            <audio src="assets/sounds/${animal.sonido}" controls>
                Tu navegador no soporta audio HTML5.
            </audio>        
        </div>
    `;

    contenedorAnimales.appendChild(nuevaTarjeta);

    const animalImg = nuevaTarjeta.querySelector('.animal-img');
    animalImg.addEventListener('click', () => {
        setupModal(animal);
    });
}



