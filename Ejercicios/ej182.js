const animales = ["perro", "gato", "delfin", "elefante"];

const animalesMayus = animales.map(animal => animal.toUpperCase())

console.log("Animales:")
animalesMayus.forEach(animal => {
    console.log(`- ${animal}`);
});