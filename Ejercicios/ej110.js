function promedio (nota1,nota2,nota3,nota4,nota5){
    if (typeof nota1 !== 'number' || typeof nota2 !== 'number' || typeof nota3 !== 'number' || typeof nota4 !== 'number' || typeof nota5 !== 'number') {
        console.log("Error: Todos los parámetros deben ser números.");
        return;
      }
    
      const suma = nota1 + nota2 + nota3 + nota4 + nota5;
      const promedio = suma / 5;
      console.log("El promedio de la cursada es:", promedio);
}

promedio(1,2,3,4,5);