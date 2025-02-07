const numeros=[];
for(i=0;i<=100;i++){
    numeros.push(i);
} 

const numerosIncrementados = numeros.map(function(numero){
    return numero+= 10;
})

for(i=0;i<10;i++){
    console.log(`Indice ${i}; Valor original ${numeros[i]}; Valor incrementado: ${numerosIncrementados[i]}`)
}