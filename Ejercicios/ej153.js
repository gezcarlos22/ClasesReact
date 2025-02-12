const aritmetica = {
    suma: function(i,j){
        if (typeof i !== 'number' || typeof j !== 'number') {
            console.error('Los parámetros deben ser números');
            return;
        }
        console.log(i + j);
    },
    resta: function(i,j){
        if (typeof i !== 'number' || typeof j !== 'number') {
            console.error('Los parámetros deben ser números');
            return;
        }
        console.log(i - j);
    },
    multiplicar: function(i,j){
        if (typeof i !== 'number' || typeof j !== 'number') {
            console.error('Los parámetros deben ser números');
            return;
        }
        console.log(i * j);
    },
    dividir: function(i,j){
        if (typeof i !== 'number' || typeof j !== 'number') {
            console.error('Los parámetros deben ser números');
            return;
        }
        console.log(i / j);
    },
    mostrarModulo: function(i,j){
        if (typeof i !== 'number' || typeof j !== 'number') {
            console.error('Los parámetros deben ser números');
            return;
        }
        console.log(i % j);
    }
}

aritmetica.suma(2, 10);
aritmetica.resta(10, 5);
aritmetica.multiplicar(3, 100);
aritmetica.dividir(40, 2);
aritmetica.mostrarModulo(20, 2)