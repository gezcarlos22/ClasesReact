const dia = 5;
let nombreDelDia = null;

//Versión SWITCH
switch (dia) {
    case 1:
        nombreDelDia = "Lunes";
        console.log(`El día seleccionado es ${nombreDelDia}`);
    break;
    case 2:
        nombreDelDia = "Martes";
        console.log(`El día seleccionado es ${nombreDelDia}`);
    break;
    case 3:
        nombreDelDia = "Miercoles";
        console.log(`El día seleccionado es ${nombreDelDia}`);
    break;
    case 4:
        nombreDelDia = "Jueves";
        console.log(`El día seleccionado es ${nombreDelDia}`);
    break;
    case 5:
        nombreDelDia = "Viernes";
        console.log(`El día seleccionado es ${nombreDelDia}`);
    break;
    case 6:
        nombreDelDia = "Sabado";
        console.log(`El día seleccionado es ${nombreDelDia}`);
    break;
    case 7:
        nombreDelDia = "Domingo";
        console.log(`El día seleccionado es ${nombreDelDia}`);
    break;
    default:
        console.log("Por favor seleccionar un número de 1 a 7");
}

//Versión IF/ELSE/IF
if (dia === 1) { 
    nombreDelDia = "Lunes";
    console.log(`El día seleccionado es ${nombreDelDia}`);
} else if (dia===2){
    nombreDelDia = "Martes";
        console.log(`El día seleccionado es ${nombreDelDia}`);
} else if (dia===3){
    nombreDelDia = "Miercoles";
    console.log(`El día seleccionado es ${nombreDelDia}`);
} else if (dia===4){
    nombreDelDia = "Jueves";
        console.log(`El día seleccionado es ${nombreDelDia}`);
} else if (dia===5){
    nombreDelDia = "Viernes";
        console.log(`El día seleccionado es ${nombreDelDia}`);
} else if (dia===6){
    nombreDelDia = "Sabado";
        console.log(`El día seleccionado es ${nombreDelDia}`);
} else if (dia===7){
    nombreDelDia = "Domingo";
        console.log(`El día seleccionado es ${nombreDelDia}`);
} else {
    console.log("Por favor seleccionar un número de 1 a 7")
}