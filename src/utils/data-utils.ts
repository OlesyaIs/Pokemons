import { POKEMON_IMAGE_SRC, REGEX_ID_IN_URL } from '../const/const';
import { TPokemonData, TPokemonRawData, TPokemonsList, TPokemonsRawList } from '../types/types';
import { getPathWithBasePart } from './utils';

const getImgSrcPath = (pokemonName: string): string => getPathWithBasePart(POKEMON_IMAGE_SRC.replace('pokemonName', pokemonName));

const adaptFullPokemonData = (data: TPokemonRawData): TPokemonData => {
  const pokemonData = {
    id: data.id,
    name: data.name,
    baseExperience: data.base_experience,
    height: data.height,
    weight: data.weight,
    img: getImgSrcPath(data.name)
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
    id: getIdFromUrl(pokemon.url),
    img: getImgSrcPath(pokemon.name)
  }));

  return pokemonsList;
};

export { adaptFullPokemonData, adaptPokemonsList };
