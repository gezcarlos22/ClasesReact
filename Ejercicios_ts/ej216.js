function mostrarMascota(mascota, tipo) {
    if (tipo == "perro") {
        console.log("La mascota es un Canino y se llama ".concat(mascota.nombre, " y tiene ").concat(mascota.edad, " a\u00F1os"));
    }
    else if (tipo == "gato") {
        console.log("La mascota es un Felino y se llama ".concat(mascota.nombre, " y tiene ").concat(mascota.edad, " a\u00F1os"));
    }
    else if (tipo == "mono") {
        console.log("La mascota es un Monito y se llama ".concat(mascota.nombre, " y tiene ").concat(mascota.edad, " a\u00F1os"));
    }
}
var perro = { nombre: "simon", edad: 10 };
var gato = { nombre: "ceniza", edad: 12 };
var mono = { nombre: "titi", edad: 5 };
mostrarMascota(mono, "mono");
mostrarMascota(perro, "perro");
mostrarMascota(gato, "gato");
