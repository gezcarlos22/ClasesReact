function crearMultiplicador(numero1) {
    return function (numero2) {
        return numero1 * numero2;
    };
}

const multiplicarPor5 = crearMultiplicador(5);

// Llamamos a la función interna que retorna crearMultiplicador con el número 3
const resultado = multiplicarPor5(3);

// Mostramos el resultado en la consola
console.log(resultado); // Imprime 15