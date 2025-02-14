function saludar() {
    console.log(this);
}
//En este caso, cuando llamamos a saludar() directamente en el contexto global, this hace referencia al objeto global.

saludar();

//call(thisArg, arg1, arg2, ...): Llama a una función con un valor específico para this. Los argumentos adicionales se pasan a la función.
//apply(thisArg, [argsArray]): Similar a call, pero los argumentos adicionales se pasan como un array.
//bind(thisArg, arg1, arg2, ...): Crea una nueva función con un valor fijo para this.