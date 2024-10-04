import './App.css'
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import { pokemons } from './api';
import { AppRoute } from './const/const';
import MainScreen from './pages/main-screen/main-screen'
import PokemonScreen from './pages/pokemon-screen/pokemon-screen'
import Error404Screen from './pages/error404-screen/error404-screen';

function AppLayout() {
  return (
  <div className="App">
    <Outlet />
  </div>
  )
}

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter basename={AppRoute.Base}>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route path={AppRoute.Main} element={<MainScreen pokemonApi={pokemons}/>} />
            <Route path={AppRoute.Pokemon} element={<PokemonScreen  pokemonApi={pokemons}/>} />
            <Route path={AppRoute.Error404} element={<Error404Screen />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  )
}

export default App
