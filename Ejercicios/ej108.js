function ordenarNumeros(numero1, numero2, numero3, descendente = false) {
    const numeros = [numero1, numero2, numero3];
  
    if (descendente) {
      numeros.sort((a, b) => b - a); // Ordena de mayor a menor
    } else {
      numeros.sort((a, b) => a - b); // Ordena de menor a mayor
    }
  
    console.log(numeros.join(', ')); 
  }

  ordenarNumeros(10, 8, 25); 
  ordenarNumeros(10, 8, 25, true); 

