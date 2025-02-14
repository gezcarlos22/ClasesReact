export function mostrarNumeros (inicio,fin) {
    if ((typeof inicio !== "number") || (typeof fin !== "number")){
        console.log("Esta función espera valores del tipo number");
        return;
    }

    if (inicio === fin){
        console.log(`Ambos parametros son ${inicio}`);
        return;
    }
    
    if (inicio < fin){
        //Incremento
        for  (let numero = inicio; numero <=fin; numero++){
            console.log(numero);
        }
    } else{
        //Decrece
        for  (let numero = inicio; numero >=fin; numero--){
            console.log(numero);
        }
    }
}

export const inicio = 0; 
export const fin = 100;