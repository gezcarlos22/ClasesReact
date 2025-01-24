let contador = 0;
let secuencia = 0;
let suma = 1;

do{
    console.log(secuencia);
    let temp = secuencia + suma;
    secuencia = suma;
    suma = temp; 
    contador++;
} while (contador<10);