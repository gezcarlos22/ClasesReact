const persona = {
    nombre: "Carlos", 
    apellido: "Gez", 
    edad: 26, 
    ciudad: "Villa Dolores",
    soltero: true,
    saludar() {
      console.log(`Hola ${this.nombre} ${this.apellido}`);
    },
    mostrarInformacion() {
      console.log("Soltero:", this.soltero);
      console.log("Tengo", this.edad, "años y vivo en", this.ciudad);
    }
  };
  

  for (const propiedad in persona) {
    if (typeof persona[propiedad] === 'function') {
      persona[propiedad](); 
    } else {
      console.log(`${propiedad} : ${persona[propiedad]} `);
    }
  }
