import { REGEX_ID_IN_URL } from '../const/const';
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

const getIdFromUrl = (url: string): number => {
  const match = url.match(REGEX_ID_IN_URL);
  let id = 0;

  if (match) {
    id = parseInt(match[1], 10);
  }

  return id
}

const adaptPokemonsList = (data: TPokemonsRawList): TPokemonsList => {
  const pokemonsList = data.map((pokemon) => ({
    name: pokemon.name,
    id: getIdFromUrl(pokemon.url)
  }));

  return pokemonsList;
};

export { adaptFullPokemonData, adaptPokemonsList };