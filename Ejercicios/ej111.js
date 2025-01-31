function esPar(numero){
    if (typeof numero === "number"){
        if (numero%2===0){
            console.log(`${numero} es par`);
        } else{
            console.log(`${numero} no es par`);
        }
    } else {
    console.log("El valor asignado no es un numero");
    }
}

esPar(2);
esPar(5);
esPar("hola");