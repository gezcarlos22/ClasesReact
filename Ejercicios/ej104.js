const fibonacci = function () {
    let secuencia = 0;
    let suma = 1;
    for(let contador = 0; contador < 10; contador++){
        console.log(secuencia);
        let temp = secuencia + suma;
        secuencia = suma;
        suma = temp; 
    }
}

fibonacci();