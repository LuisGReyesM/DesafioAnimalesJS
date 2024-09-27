export function setupModal(animal) {
    const modalBody = document.querySelector("#exampleModal .modal-body");
        
    modalBody.innerHTML = `
        <img src="assets/imgs/${animal.img}" alt="${animal.nombre}" class="img-fluid mb-3">
        <h5>Nombre: ${animal.nombre}</h5>
        <p>Edad: ${animal.edad}</p>
        <p>Comentarios: ${animal.comentarios}</p>
    `;

    // Muestra el modal usando Bootstrap
    const modal = new bootstrap.Modal(document.getElementById('exampleModal'));
    modal.show();
}
