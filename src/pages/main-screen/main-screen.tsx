import { useState } from 'react';
import CardsList from '../../components/cards-list/cards-list';
import { Helmet } from 'react-helmet-async';
import { TPokemonApi, TPokemonsList } from '../../types/types';
import Pagination from '../../components/pagination/pagination';
import { LOAD_DATA_ERROR_MESSAGE, POKEMONS_PER_PAGE } from '../../const/const';
import { adaptPokemonsList } from '../../utils/data-utils';
import ErrorMessage from '../../components/shared/error-message/error-message';

type TMainScreenProps = {
  pokemonApi: TPokemonApi
}

function MainScreen({pokemonApi}: TMainScreenProps) {
  const [pokemons, setPokemons] = useState<TPokemonsList>([]);
  const [error, setError] = useState<string | null>(null);

  const onPageChange = (currentPageNumber: number) => {
    const offset = POKEMONS_PER_PAGE * (currentPageNumber - 1);
    setError(null);

    pokemonApi.getList(offset, POKEMONS_PER_PAGE)
      .then((response) => {
        const {data} = response;
        const pokemonsList = adaptPokemonsList(data.results);
        setPokemons(pokemonsList);
      })
      .catch(() => {
        setError(LOAD_DATA_ERROR_MESSAGE);
      })
  }

  return (
    <div className="page">
      <Helmet>
        <title>Pokémons</title>
      </Helmet>
      <main className='main'>
        <h1 className='page-title'>Pokémons</h1>
        {error
          ? <ErrorMessage errorText={error} />
          : <CardsList pokemonsData={pokemons} />
        }
        
        <Pagination totalItems={120} itemsPerPage={20} onPageChange={onPageChange} />
      </main>
    </div>
  );
}

export default MainScreen;