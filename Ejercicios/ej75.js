let contador = 0;
let secuencia = 0;
let suma = 1;

while (contador<10){
    console.log(secuencia);
    let temp = secuencia + suma;
    secuencia = suma;
    suma = temp; 
    contador++;
}