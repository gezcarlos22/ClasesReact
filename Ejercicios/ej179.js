function calcularPromedio (...numeros){
    let suma = 0;
    numeros.forEach((numero) => suma+= numero);
    return numeros.length === 0? 0 : (suma/numeros.length);
}



console.log(calcularPromedio(10, 20, 30));
console.log(calcularPromedio(5, 15, 25, 35, 45));
console.log(calcularPromedio(100, 200));
console.log(calcularPromedio());