"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function mostrarDatosDeLaColeccion(data) {
    if (Array.isArray(data)) {
        var animales_1 = data;
        animales_1.forEach(function (animal) {
            console.log("Raza: ".concat(animal.raza));
            console.log("Muerde: ".concat(animal.muerde));
            console.log("Color: ".concat(animal.color));
            console.log();
        });
    }
    else {
        console.log("El parametro no es una coleccion de Animal");
    }
}
;
var animales = [
    {
        raza: "Cocker",
        muerde: true,
        color: ["negro"],
    },
    {
        raza: "Persa",
        muerde: false,
        color: ["marron", "blanco"],
    },
    {
        raza: "León Africano",
        muerde: true,
        color: ["marron", "negro"],
    },
];
mostrarDatosDeLaColeccion(animales);
exports.default = {};
