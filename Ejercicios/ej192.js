const POKE_API = "https://pokeapi.co/api/v2/pokemon"


async function getPokemon() {
    try {
        const response = await fetch(POKE_API);
        const listapokemon= await response.json();
        const pokemonName = listapokemon.results.slice(0,20).map(pokemon => {
            return pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
        })

        pokemonName.forEach((pokemon)=> {console.log("Pokemon:",pokemon)})
    } catch (error) {
        console.log("ERROR")
        console.log(error)
    }
}

getPokemon()