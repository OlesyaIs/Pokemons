import { TPokemonData, TPokemonRawData } from '../types/types';

function adaptFullPokemonData(data: TPokemonRawData): TPokemonData {
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

export { adaptFullPokemonData };