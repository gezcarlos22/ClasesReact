let suma = 0;
for (let contador = 0; contador <= 1000; contador++) {
    suma+=contador;  
    if (suma > 100) {
      console.log(suma);
      break;
    }
}