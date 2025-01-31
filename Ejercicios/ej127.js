const listaHelados = [];
function agregarHelado(coleccion, nuevohelado){
    coleccion.unshift(nuevohelado);
}

agregarHelado(listaHelados,"frutilla")
agregarHelado(listaHelados,"bainilla")
agregarHelado(listaHelados,"flan")
agregarHelado(listaHelados,"chocolate")

console.log(listaHelados)

//sacar los 2 primeros sabores porque no tienen stock y ponerlos en otra lista
const sinStock = [];
for (i=0; i<listaHelados.length-1;i++){
    if (i==0 || i==1){
        sinStock.push(listaHelados[i])
        listaHelados.shift()
    }
}
console.log(listaHelados);
console.log(sinStock);

