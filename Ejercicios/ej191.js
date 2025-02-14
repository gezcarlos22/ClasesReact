const POKE_API = "https://pokeapi.co/api/v2/pokemon"

fetch(POKE_API)
.then((response) => {
    return response.json();
})
.then((listapokemon)=>{
    const pokemonName = listapokemon.results.slice(0,20).map(pokemon => {
        return pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
    })
    pokemonName.forEach((pokemon)=> {console.log("Pokemon:",pokemon)})
})
.catch((error)=>{
    console.log("ERROR");
    console.log(error)});