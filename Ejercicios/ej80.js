let contador = 0;
let suma = 0;

do{
    if (contador % 2 !== 0) {
        suma+=contador
    }
    contador++;
} while (contador <=1000)

console.log(suma)