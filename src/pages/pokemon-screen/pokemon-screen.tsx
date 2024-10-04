import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
import { TPokemonApi, TPokemonData } from "../../types/types";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { adaptFullPokemonData } from "../../utils/data-utils";
import { capitalizeFirstLetter } from "../../utils/utils";
import PokemonFullCard from "../../components/pokemon-full-card/pokemon-full-card";
import Header from "../../components/header/header";
import { AppRoute } from "../../const/const";

type TPokemonScreenProps = {
  pokemonApi: TPokemonApi
}

function PokemonScreen({pokemonApi}: TPokemonScreenProps) {
  const navigate = useNavigate();
  const params = useParams();
  const currentPokemonId = params.id;

  if (!currentPokemonId) {
    return <Navigate to={AppRoute.Main} />
  }

  const [currentPokemon, setCurrentPokemon] = useState<TPokemonData | null>(null);
  useEffect(() => {
    if (!currentPokemon) {
      pokemonApi.getOne(currentPokemonId)
        .then((response) => {
          const {data} = response;
          const pokemonData = adaptFullPokemonData(data);
          setCurrentPokemon(pokemonData);
        })
        .catch(() => {
          navigate(AppRoute.Error404)
        })
    }

    return (() => setCurrentPokemon(null))
  }, []);

  return (
    currentPokemon && (
        <div className="page pokemon-page">
          <Helmet>
            <title>Pokemon page</title>
          </Helmet>
          <Header />
          <main className="main pokemon-page__main">
            <h1 className="page-title">{capitalizeFirstLetter(currentPokemon.name)}</h1>
            <PokemonFullCard pokemonData={currentPokemon} />
          </main>
        </div>
      )
  );
}

export default PokemonScreen;
