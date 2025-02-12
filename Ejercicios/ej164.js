const numeros = [1,2,3,4,5,6,7,8,9,10];

function forEach (coleccion,funcion){
    for (let i = 0; i < coleccion.length; i++) {
        funcion(coleccion[i], i);
    }
}

function imprimirElemento(elemento, indice){
    console.log(`${indice}:${elemento}`)
}

forEach(numeros,imprimirElemento)