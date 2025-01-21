const dia = 7;
let nombreDelDia = null;

switch (dia) {
    case 1:
        nombreDelDia = "Lunes";
    break;
    case 2:
        nombreDelDia = "Martes";
    break;
    case 3:
        nombreDelDia = "Miercoles";
    break;
    case 4:
        nombreDelDia = "Jueves";
    break;
    case 5:
        nombreDelDia = "Viernes";
    break;
    case 6:
        nombreDelDia = "Sabado";
    break;
    case 7:
        nombreDelDia = "Domingo";
    break;
    default:
        nombreDelDia = "Error";
}

console.log(nombreDelDia);