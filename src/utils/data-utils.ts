import { TPokemonData, TPokemonRawData, TPokemonsList, TPokemonsRawList } from '../types/types';

const adaptFullPokemonData = (data: TPokemonRawData): TPokemonData => {
  const pokemonData = {
    id: data.id,
    name: data.name,
    baseExperience: data.base_experience,
    height: data.height,
    weight: data.weight,
    img: data.sprites.front_default
  }

  return pokemonData;
};

const adaptPokemonsList = (data: TPokemonsRawList): TPokemonsList => data.map((pokemon) => pokemon.name);

export { adaptFullPokemonData, adaptPokemonsList };