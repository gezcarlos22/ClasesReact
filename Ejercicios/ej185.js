let contador = 1;

const intervalId =setInterval(()=>{
    contador === 1? console.log(`Paso ${contador} segundo.`) : console.log(`Pasaron ${contador} segundos.`);
    contador++;

    if (contador === 11) {
        clearInterval(intervalId);
        console.log("Fin del contador, pasaron 10 segundos.");
    }
}, 1000);


