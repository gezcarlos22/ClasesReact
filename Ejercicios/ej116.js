function mejorJugadorArgentino (i){
    if (typeof i === "number"){
        if (i===18 || i===5 || i===9 || i===19 || i===14 || i===16 || i===2 || i===12 || i===7 || i===10 || i===11 ){
            if (i===18){
                console.log(`${i}, Nery Pumpido`);
            } else if (i===5){
                console.log(`${i}, José Luis Brown`);
            } else if (i===9){
                console.log(`${i}, José Cuciuffo`);
            } else if (i===19){
                console.log(`${i}, Óscar Ruggeri`);
            } else if (i===14){
                console.log(`${i}, Ricardo Giusti`);
            } else if (i===16){
                console.log(`${i}, Julio Olarticoechea`);
            } else if (i===2){
                console.log(`${i}, Sergio Batista`);
            } else if (i===12){
                console.log(`${i}, Héctor Enrique`);
            } else if (i===7){
                console.log(`${i}, Jorge Burruchaga`);
            } else if (i===10){
                console.log(`${i}, Diego Armando Maradona`);
            } else{
                console.log(`${i}, Jorge Valdano`);
            }
        } else {
            console.log("Carlos Bilardo")
        }
    } else {
        console.log("No ingreso un numero")
    }
    
}

mejorJugadorArgentino(11);
mejorJugadorArgentino(24);
mejorJugadorArgentino("HOLA");