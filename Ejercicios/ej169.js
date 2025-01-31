function obtenerFuncion() {
    const nombre = "JavaScript";
  
    function mostrarMensaje() {
      console.log("Yo <3 " + nombre);
    }
  
    mostrarMensaje();
  }
  
obtenerFuncion()

//puede leer tranquilamente el codigo, ya que la funcion mostrar mensaje puede leer la const que se encuenta en la funcion padre,
