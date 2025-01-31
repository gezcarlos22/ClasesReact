const alumnos = [
    "carlos", "lautaro", "esteban",
    "fede", "santi",
]

const alumnas = [
    "laura", "cande", "victoria", "rita", "sofia"
]

const todos = alumnos.concat(alumnas)

console.log(alumnos[0]);
console.log(alumnos[1]);
console.log(alumnos[2]);
console.log(alumnos[3]);
console.log(alumnos[4]);

console.log("----------------")

let i = 0;
while (i<alumnas.length-1) {
    console.log(alumnas[i])
    i++;
}

console.log("----------------")

for (i=0;i<=todos.length-1;i++){
    console.log(todos[i]);
}
