function sumarNumeros(inicio, fin) {
    var suma = 0;
    for (var i = inicio; i <= fin; i++) {
        suma += i;
    }
    return "".concat(suma);
}
console.log(sumarNumeros(0, 10));
console.log(sumarNumeros(20, 30));
console.log(sumarNumeros(5, 50));
