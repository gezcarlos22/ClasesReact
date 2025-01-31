const numeros = [];

for (i=0;i<=10000;i++){
    numeros.push(i);
}

console.log(numeros)

function sumarNumeros(array){
    let resultado = 0
    for (i=0;i<=array.length-1;i++){
        resultado += i;
    }
    console.log(`resultado: ${resultado}`)
    if (resultado === 50005000){
        console.log("El ejercicio es correcto")
    } else {
        console.log("Verificar el ejercicio para obtener el resultado esperado!!!")
    }
}

sumarNumeros(numeros)