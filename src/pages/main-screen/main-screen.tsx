import { useState } from 'react';
import CardsList from '../../components/cards-list/cards-list';
import { Helmet } from 'react-helmet-async';
import { TPokemonApi, TPokemonsList } from '../../types/types';
import Pagination from '../../components/pagination/pagination';
import { POKEMONS_PER_PAGE } from '../../const/const';
import { adaptPokemonsList } from '../../utils/data-utils';

type TMainScreenProps = {
  pokemonApi: TPokemonApi
}

function MainScreen({pokemonApi}: TMainScreenProps) {
  const [pokemons, setPokemons] = useState<TPokemonsList>([]);

  const onPageChange = (currentPageNumber: number) => {
    const offset = POKEMONS_PER_PAGE * (currentPageNumber - 1);
    pokemonApi.getList(offset, POKEMONS_PER_PAGE)
      .then((response) => {
        const {data} = response;
        const pokemonsList = adaptPokemonsList(data.results);
        setPokemons(pokemonsList);
      })
  }

  return (
    <div className="page">
      <Helmet>
        <title>Pokémons</title>
      </Helmet>
      <h1 className='page-title'>Pokémons</h1>
      <CardsList pokemonsData={pokemons} />
      <Pagination totalItems={120} itemsPerPage={20} onPageChange={onPageChange} />
    </div>
  );
}

export default MainScreen;