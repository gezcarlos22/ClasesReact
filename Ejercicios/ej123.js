const alumnos = [
    "carlos", "victoria", "lautaro", "esteban",
    "fede", "santi", "tomas", "benja"
]

console.log(alumnos[1].toUpperCase())
console.log(alumnos[5].toUpperCase())
console.log(alumnos.length)

//otra solucion 
let listaModificada=[];
for (i=0; i<alumnos.length;i++) {
    if (i==1 || i==5){
        listaModificada += alumnos[i].toUpperCase()+ " ";
    } else {
        listaModificada += alumnos[i] + " "
    }
}

console.log(listaModificada);    
console.log(alumnos.length)
