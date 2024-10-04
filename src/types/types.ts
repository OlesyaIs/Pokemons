import { pokemons } from '../api';

export type TPokemonApi = typeof pokemons;

type TPokemonSprites = {
  front_default: string;
  front_shiny	: string;
  front_female: string;
  front_shiny_female: string;
  back_default: string;
  back_shiny: string;
  back_female: string;
  back_shiny_female: string
}

export type TPokemonRawData = {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  weight: number;
  sprites: TPokemonSprites
}

export type TPokemonData = {
  id: number;
  name: string;
  baseExperience: number;
  height: number;
  weight: number;
  img: string
}

type TPokemonRawShortData = {
  name: string;
  url: string;
}

export type TPokemonShortData = {
  name: string;
  id: number;
}

export type TPokemonsRawList = TPokemonRawShortData[]

export type TPokemonsList = TPokemonShortData[];