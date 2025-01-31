const gustosHelado=[];
gustosHelado.push("frutilla");
gustosHelado.push("vainilla");
gustosHelado.push("dulce de leche");
gustosHelado.push("granizado");
gustosHelado.push("flan");
gustosHelado.push("chocolate");
gustosHelado.push("maracuya");
gustosHelado.push("melon");
gustosHelado.push("crema americana");
gustosHelado.push("limon");

console.log(gustosHelado)

gustosHelado.reverse();

console.log(gustosHelado)

//Mediante una funcion que le agrega gustos de helados a una nueva lista y se posiciona del primer agregado va al ultimo
const listaHelados = [];
function agregarHelado(coleccion, nuevohelado){
    coleccion.unshift(nuevohelado);
}

agregarHelado(listaHelados,"frutilla")
agregarHelado(listaHelados,"bainilla")

console.log(listaHelados)