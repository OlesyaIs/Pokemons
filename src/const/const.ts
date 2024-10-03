const DEFAULT_POKEMON_IMAGE_SRC = '/img/pokemons/default.png';
const POKEMONS_PER_PAGE = 20;
const PAGES_AMOUNT = 6;

enum AppRoute {
  Main = '/',
  Pokemon = '/:id'
}

export {
  DEFAULT_POKEMON_IMAGE_SRC,
  POKEMONS_PER_PAGE,
  PAGES_AMOUNT,
  AppRoute
}