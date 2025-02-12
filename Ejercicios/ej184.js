const tiempo = 3 * 1000
const mensaje = function () {
    console.log("Pasaron 3 segundos");
};

setTimeout(mensaje,tiempo)
//setTimeout(()=>{console.log("Pasaron 3 segundos")},3000);