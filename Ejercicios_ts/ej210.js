var mascota = {
    nombre: "simon",
    edad: 8
};
function mostrarDatosMascota(mascota) {
    if (mascota["fechaDeNacimiento"]) {
        console.log("La mascota naci\u00F3 en ".concat(mascota.fechaDeNacimiento));
    }
    console.log("La mascota se llama ".concat(mascota.nombre, " y tiene ").concat(mascota.edad));
}
mostrarDatosMascota(mascota);
