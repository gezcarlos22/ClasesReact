const persona = {
    nombre: "Nicolas",
    saludar: function () {
      console.log(this);
    //dentro de saludar hace referencia al objeto persona. Esto se debe a que saludar es un método del objeto persona. Cuando se llama a saludar, this se establece automáticamente en el objeto al que pertenece el método.
    // Imprime:   nombre: 'Nicolas', saludar: [Function: saludar], saludar2: [Function: saludar2]} (el objeto persona)
    console.log(this.nombre);
    //Al imprimir this.nombre, estamos accediendo a la propiedad nombre del objeto persona.
    // Imprime: Nicolas
    },
    saludar2: () => {
      console.log(this);
      //this dentro de saludar2 hace referencia al objeto global (por lo general, window).
      // Imprime: {}
    },
};

//En las funciones normales, el valor de this puede variar según el contexto de la llamada. En las funciones flecha, el valor de this es léxico y se hereda del contexto en el que se define la función flecha.

persona.saludar()
persona.saludar2()