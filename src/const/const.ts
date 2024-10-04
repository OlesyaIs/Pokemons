const DEFAULT_POKEMON_IMAGE_SRC = '/img/pokemons/default.png';
const POKEMONS_PER_PAGE = 20;
const PAGES_AMOUNT = 6;
const REGEX_ID_IN_URL = /(\d+)\/?$/;
const LOAD_DATA_ERROR_MESSAGE = 'Failed to load Pokémon data. Please try again later.';

enum AppRoute {
  Main = '/',
  Pokemon = '/:id',
  Error404 = '/error404'
}

export {
  DEFAULT_POKEMON_IMAGE_SRC,
  POKEMONS_PER_PAGE,
  PAGES_AMOUNT,
  REGEX_ID_IN_URL,
  LOAD_DATA_ERROR_MESSAGE,
  AppRoute
}
