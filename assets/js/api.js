const consultarDatos = async () => {
    const url = "../../animales.json";
    const response = await fetch(url);
    const datos = await response.json();
    console.table(datos.animales);
    return datos.animales;
};

export { consultarDatos };
