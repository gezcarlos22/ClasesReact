function saludar(mensaje, despedida) {
    console.log(mensaje);
    despedida();
}
  
function despedirse() {
    console.log("¡chau!");
}
  

saludar("Bienvenidos a JavaScript", despedirse);