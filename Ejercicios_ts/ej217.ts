function mostrarDatosDeLaColeccion (data: unknown) {
    if (Array.isArray(data)){
        const animales: Animal[] = data as Animal[];

        animales.forEach((animal)=>{
            console.log(`Raza: ${animal.raza}`);
            console.log(`Muerde: ${animal.muerde}`);
            console.log(`Color: ${animal.color}`);
            console.log();
        });
    } else {
        console.log("El parametro no es una coleccion de Animal");
    }
};

interface Animal {
    raza: string;
    muerde: boolean;
    color: ("marron" | "negro" | "blanco" | "gris")[];
}

const animales: Animal[] = [
    {
      raza: "Cocker",
      muerde: true,
      color: ["negro"],
    },
    {
      raza: "Persa",
      muerde: false,
      color: ["marron", "blanco"],
    },
    {
      raza: "León Africano",
      muerde: true,
      color: ["marron", "negro"],
    },
  ];

mostrarDatosDeLaColeccion(animales);

export default {};