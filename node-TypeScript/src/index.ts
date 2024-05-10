import { getPokemon } from "./generics/get-pokemon";

let pokemonId = 1000;

getPokemon(pokemonId)
    .then(pokemon => console.log(pokemon.sprites.front_default, pokemon))
    .catch(error => console.error(error))
    .finally(() => console.log('Pokemon Catched!'));
