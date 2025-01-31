function dividir(numero1, numero2) {
    try {
      if (numero2 === 0) {
        throw new Error("No se puede dividir por 0.");
      }
      return numero1 / numero2;
    } catch (error) {
      console.error(error.message);
    }
  }
  

console.log(dividir(10, 2)); // 5
console.log(dividir(10, 0)); // "No se puede dividir por 0."
console.log(dividir(15, 3)); // 5