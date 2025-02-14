function crearPromesa (mensaje){
    return new Promise ((onSuccess)=>{onSuccess(mensaje)})
}

const promesa = crearPromesa("Se resolvió con éxito la promesa")

promesa.then(mensaje => {
    console.log(mensaje)
})