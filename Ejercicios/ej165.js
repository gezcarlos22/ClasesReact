const numeros = [1,2,3,4,5,6,7,8,9,10];

function map (coleccion,funcion){
    const nuevoArray = [];
    for (let i = 0; i < coleccion.length; i++) {
        const nuevoValor = funcion(coleccion[i]);
        nuevoArray.push(nuevoValor)
    }
    return nuevoArray;
}

function multiplicarPor2(numero){
    return numero*2
}


const dobleDeNumeros = map(numeros,multiplicarPor2)
console.log(dobleDeNumeros);