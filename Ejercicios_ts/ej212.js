"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mascota1 = {
    nombre: "simon",
    edad: 8
};
var mascota2 = {
    nombre: "caty",
    edad: 8,
    fechaDeNacimiento: "05/09/2017"
};
function mostrarDatosMascota(mascota) {
    if (mascota["fechaDeNacimiento"]) {
        console.log("La mascota naci\u00F3 en ".concat(mascota.fechaDeNacimiento));
    }
    console.log("La mascota se llama ".concat(mascota.nombre, " y tiene ").concat(mascota.edad));
}
mostrarDatosMascota(mascota1);
mostrarDatosMascota(mascota2);
exports.default = {};
