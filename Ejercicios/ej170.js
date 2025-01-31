function contar() {
    let contador = 0;
    return function () {
      contador++;
      console.log(contador);
    };
  }
  
const incrementar = contar();
incrementar();
incrementar();
incrementar();
incrementar();

//la funcion funciona sin ningun problema;
