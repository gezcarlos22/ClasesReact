const estadoProfesor = {
    nombre: "Nicolas",
    apellido: "Isnardi",
    amigos: ["Juan, Pablo, Char"],
    leGustaJavaScript: true,
};

const estadoAlumno = {
    nombre: "Carlos",
    apellido: "Gez",
    amigos: ["Viqui, Lautaro, Esteban"]
}

const nuevoEstado = {
    ...estadoProfesor,
    ...estadoAlumno
}

console.log(nuevoEstado)
