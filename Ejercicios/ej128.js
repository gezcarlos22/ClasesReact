const listaHelados = [];
function agregarHelado(coleccion, nuevohelado){
    coleccion.unshift(nuevohelado);
}

agregarHelado(listaHelados,"frutilla")
agregarHelado(listaHelados,"bainilla")
agregarHelado(listaHelados,"flan")
agregarHelado(listaHelados,"chocolate")

console.log(listaHelados)

//Eliminar los 2 últimos gustos de la lista de helados
//Asignar los gustos eliminados en el array de gustos que no tienen stock

const sinStock = [];
const cantidadDeHelados= listaHelados.length-1;

for (i=cantidadDeHelados; i>=cantidadDeHelados-1 ;i--){
    if (i==cantidadDeHelados || cantidadDeHelados-1 ){
        sinStock.push(listaHelados[i])
        listaHelados.pop()
    }
}
console.log(listaHelados);
console.log(sinStock);