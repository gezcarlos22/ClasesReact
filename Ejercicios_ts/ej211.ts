type Mascota = {
    nombre:string;
    edad: number;
    fechaDeNacimiento?: string;
}

const mascota1: Mascota = {
    nombre: "simon",
    edad: 8
}

const mascota2: Mascota = {
    nombre: "caty",
    edad: 8,
    fechaDeNacimiento: "05/09/2017"
}

function mostrarDatosMascota (mascota: Mascota): void {
    if (mascota["fechaDeNacimiento"]){
       console.log(`La mascota nació en ${mascota.fechaDeNacimiento}`) 
    }
    console.log(`La mascota se llama ${mascota.nombre} y tiene ${mascota.edad}`)
}

mostrarDatosMascota(mascota1);
mostrarDatosMascota(mascota2);

export default {}