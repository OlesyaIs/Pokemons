import { useState } from 'react'
import './App.css'
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import PokemonScreen from './pages/pokemon-screen/pokemon-screen'
import MainScreen from './pages/main-screen/main-screen'
import { AppRoute } from './const/const';

function AppLayout() {
  return (
  <div className="App">
    <Outlet />
  </div>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route path={AppRoute.Main} element={<MainScreen />} />
            <Route path={AppRoute.Pokemon} element={<PokemonScreen />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  )
}

export default App
