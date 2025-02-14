const tieneError = true;

function crearPromesa () {
    return new Promise((onSuccess, onError)=>{
        if (tieneError){
            onError(new Error("muy feo no cumplir las promesas!!!"));
        } else {
            onSuccess("Se resolvió con éxito la promesa")
        }
    })
}

const promesa = crearPromesa()

promesa
    .then(mensaje=>{
        console.log(mensaje)
    })
    .catch(error=>{
        console.error("Error:", error.message);
    });