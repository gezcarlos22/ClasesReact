let suma = 0;
let resultado = 0;
for (let contador = 0; contador <= 10000; contador++) {
    if (contador % 2 === 0) {
        resultado+=contador
        suma++;
        if (suma===10){
            console.log(resultado);
            break;
        }
    }
} 