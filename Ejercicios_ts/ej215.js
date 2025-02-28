var alumnos = ["Nicolas", "Clara", "Manuel", "Alejandra"];
function mostrarAlumnos(alumno) {
    console.log("ID: ".concat(alumno[0], " Alumno: ").concat(alumno[1]));
}
;
alumnos.forEach(function (nombre, indice) {
    mostrarAlumnos([indice, nombre]);
});
