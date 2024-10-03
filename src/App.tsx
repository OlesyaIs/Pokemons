import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import { useState } from 'react'
import './App.css'
import PokemonScreen from './pages/pokemon-screen/pokemon-screen'
import MainScreen from './pages/main-screen/main-screen'
import { AppRoute } from './const/const';
import { pokemons } from './api';
import { getList } from './api/pokemons.api';

function AppLayout() {
  return (
  <div className="App">
    <Outlet />
  </div>
  )
}

function App() {
  const [count, setCount] = useState(0);
  const test = getList(0, 6);
  console.log(test);

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route path={AppRoute.Main} element={<MainScreen pokemonApi={pokemons}/>} />
            <Route path={AppRoute.Pokemon} element={<PokemonScreen  pokemonApi={pokemons}/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  )
}

export default App
