function numeroMasGrande (numero1, numero2){
    if ((typeof numero1 !== "number") || (typeof numero2 !== "number")){
        console.log("Esta función espera valores del tipo number")
        return;
    }

    if (numero1 > numero2){
        console.log(`El número ${numero1} es más grande que ${numero2}`)
    } else if (numero2 > numero1){
        console.log(`El número ${numero2} es más grande que ${numero1}`)
    } else {
        console.log(`Los dos números son ${numero1}`)
    }
}

numeroMasGrande(20,"10");