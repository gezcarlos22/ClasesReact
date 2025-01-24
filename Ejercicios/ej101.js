function datos(persona){
    console.log("Nombre:", persona.nombre);
    console.log("Edad:", persona.edad);
    console.log("Telefono:", persona.telefono);
    console.log("Calle:", persona.calle);
    console.log("Codigo Postal:", persona.codigoPostal);
    console.log("Casado:", persona.casado);

}

const persona = {
    nombre: "Carlos Gez",
    edad: 26,
    telefono: 3544,
    calle: "general artigas", 
    codigoPostal: 5000,
    casado: false,
}

datos(persona);
