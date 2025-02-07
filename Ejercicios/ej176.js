//Ejemplo 1 - Al ejecutarlo la consola nos devolvera undefined; ya que var inicializa agregando un valor undefineda la variable.
//console.log(numero1);
//var numero1 = 10; 

//Ejemplo 2 - la funcion funciona correctamente.
//saludar();

//function saludar() {
  //console.log("Hola Mundo!");
//}

//Ejemplo 3 - la variable no esta definida antes de ser llamada, al ser let la variable esto nos tira un error de inicializacion
//console.log(numero2);
//let numero2 = 20;

//Ejemplo 4 - Primero genera la variable undefined y luego le da un valor a la variable y la imprime 
//function prueba() {
//  console.log(numero3);
//  var numero3 = 5;
//  console.log(numero3);
//}

//prueba();

//Ejemplo 5 No va a funcionar, js declara la variable var undefined y esta no puede ser una funcion cuando se llama. 
//saludar();

//var saludar = function () {
  //console.log("Hola Mundo!");
//};

//Ejemplo 6 no va a fincionar ya que la variable no esta inicializada al momento de ser llamada.
{
  console.log(numero4);
  let numero4 = 15;
}