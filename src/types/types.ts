import { pokemons } from '../api';

export type TPokemonApi = typeof pokemons;

export type TPokemonRawData = {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  weight: number;
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
  img: string
}

export type TPokemonsRawList = TPokemonRawShortData[]

export type TPokemonsList = TPokemonShortData[];
