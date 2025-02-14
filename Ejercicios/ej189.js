function crearPromesa (mensaje){
    return new Promise ((onSuccess)=>{
        setTimeout(()=>{
            onSuccess(mensaje)
        },5000)
        })
}

const promesa = crearPromesa("Se resolvió con éxito la promesa")

promesa.then(mensaje => {
    console.log(mensaje)
})

async function mostrarPromesa (mensaje) {
    const resultado = await crearPromesa(mensaje)
    console.log(mensaje)
}

mostrarPromesa("Wow, estamos usando async / await")

