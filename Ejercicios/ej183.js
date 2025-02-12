const contador = (function () {
    let acumulador = 0;
    return {
      increment: function () {acumulador++},
      getCount: function () {console.log(acumulador)},
      decrement: function() {acumulador--},
      reset: function () {acumulador=0}
    };
  })();
  
// Parte anterior del ejercicio
contador.increment();
contador.getCount();
contador.increment();
contador.getCount();

// Nuevo código
contador.decrement();
contador.getCount();
contador.reset();
contador.getCount();

//Qué pasa si tratamos de acceder la variable acumulador desde afuera de la función IIFE?.
//Obtendríamos un error, ya que la variable acumulador está fuera del alcance (scope) de cualquier código fuera de la IIFE.