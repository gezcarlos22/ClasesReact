type Alumno = [number,string];

const alumnos: string[] = ["Nicolas", "Clara", "Manuel", "Alejandra"];

function mostrarAlumnos(alumno:Alumno){
    console.log(`ID: ${alumno[0]} Alumno: ${alumno[1]}`);
};

alumnos.forEach((nombre,indice) => {
    mostrarAlumnos([indice,nombre]);
});

export default {};