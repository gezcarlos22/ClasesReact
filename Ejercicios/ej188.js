/*function crearPromesa(){
    return new Promise ((onSuccess)=>{
        setTimeout(()=>{
            onSuccess("Pasaron 5 segundos y la promesa fue exitosa")
        },5000)
    });
}

const promesa = crearPromesa()

promesa.then((mensaje)=>{console.log(mensaje)})*/


/*function crearPromesa(delay){
    return new Promise ((onSuccess)=>{
        setTimeout(()=>{
            onSuccess((delay===1) ? `Paso ${delay} segundos y la promesa fue exitosa` : `Pasaron ${delay} segundos y la promesa fue exitosa`)
        },delay*1000)
    });
}

const promesa = crearPromesa(5)

promesa.then((mensaje)=>{console.log(mensaje)})*/


function crearPromesa(delay,tieneError=false){
    return new Promise ((onSuccess,onError)=>{
        setTimeout(()=>{
            if (tieneError){
                onError(new Error((delay===1) ? `Paso ${delay} segundos y la promesa NO fue exitosa` : `Pasaron ${delay} segundos y la promesa NO fue exitosa`));         
            } else {
                onSuccess((delay===1) ? `Paso ${delay} segundos y la promesa fue exitosa` : `Pasaron ${delay} segundos y la promesa fue exitosa`)
            }
        },delay*1000)
    });
}

const promesa = crearPromesa(3,true)

promesa
    .then((mensaje)=>{console.log(mensaje)})
    .catch((error)=>{console.log(error.message)})