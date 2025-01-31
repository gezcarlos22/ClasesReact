function invertirTexto(texto){
    let textoinvertido = "";
    for (let i = texto.length-1;i>=0;i--){
        textoinvertido += texto[i];
    }
    console.log(textoinvertido);
}

invertirTexto("hola");

