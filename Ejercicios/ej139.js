const numeros=[];
for(i=0;i<=100;i++){
    numeros.push(i);
} 

const numerosPar = [];
const numerosImpar = [];

numeros.filter(function(numero){
    if (numero%2==0){
        return numerosPar.push(numero);
    } else {
        return numerosImpar.push(numero);
    }
})



console.log(numerosPar.slice(-10))
console.log(numerosImpar.slice(-10))