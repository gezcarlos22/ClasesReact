const mascota: {
    nombre:string;
    edad: number;
    fechaDeNacimiento?: string;
} = {
    nombre: "simon",
    edad: 8
}

function mostrarDatosMascota (mascota: {
    nombre:string;
    edad: number;
    fechaDeNacimiento?: string;
} ) {
    if (mascota["fechaDeNacimiento"]){
       console.log(`La mascota nació en ${mascota.fechaDeNacimiento}`) 
    }
    console.log(`La mascota se llama ${mascota.nombre} y tiene ${mascota.edad}`)
}

mostrarDatosMascota(mascota);

export default {}