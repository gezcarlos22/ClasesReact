function mostrarNumeros (numero=0){
    if (numero<=10){
        console.log(numero);
        mostrarNumeros(numero+1)
    }
}

mostrarNumeros()
mostrarNumeros(4)
