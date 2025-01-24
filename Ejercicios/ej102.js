const mostrarNombre = function (nombre) {
    const logitudNombre= nombre.length;
    const linea = "=".repeat(logitudNombre+4);
    console.log(linea);
    console.log(`= ${nombre} =`);
    console.log(linea);
}

mostrarNombre("Carlos");
