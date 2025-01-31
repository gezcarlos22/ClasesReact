function test() {
    if (true) {
      let numero1 = 5;
      const numero2 = 10;
    }
    console.log(numero1);
    console.log(numero2);
}
  
test();

//generara un error porque el console.log que se encuentra dentro de la funcion no puede leer las variables temporales que se encuentra dentro del if.