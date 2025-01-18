const ingresos = 1000;
const ganancias = 600;
const impuestos = 500;

//Este mes se esperan los siguientes objetivos:
//Generar al menos 800 pesos o más de ingreso
//Gastar menos de 400 pesos de impuestos
//Se Paga bono si se ganan 600 pesos de ganancias justo

console.log(`Objetivo de ingresos: ${ingresos>= 800}`);
console.log(`Objetivo de impuestos: ${impuestos < 400}`);
console.log(`Bono de ganancias: ${ganancias == 600}`);