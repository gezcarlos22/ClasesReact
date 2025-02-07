const gastos = [100,1000,200];
const sumaDeGastos = gastos.reduce(function(total,gasto){
    return total + gasto;
},0)

console.log(sumaDeGastos);