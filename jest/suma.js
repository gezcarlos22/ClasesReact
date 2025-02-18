export function suma (numero1,numero2){
    if (typeof numero1==="string" || numero1==="string") {
        let n1 = +numero1;
        let n2 = +numero2;
        return n1+n2;
    } else {
        return numero1 + numero2
    }
}