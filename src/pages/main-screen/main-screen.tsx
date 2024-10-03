import { useState } from 'react';
import reactLogo from '../../assets/react.svg';
import CardsList from '../../components/cards-list/cards-list';
import { Helmet } from 'react-helmet-async';
import { TPokemonApi } from '../../types/types';

type TMainScreenProps = {
  pokemonApi: TPokemonApi
}

function MainScreen({pokemonApi}: TMainScreenProps) {
  const [count, setCount] = useState(0)

  return (
    <div className="page">
      <Helmet>
        <title>Pokemons</title>
      </Helmet>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className='page-title'>Pokémons</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <CardsList pokemonsData={[1, 2, 3]} />
    </div>
  );
}

export default MainScreen;