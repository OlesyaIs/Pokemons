import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
import { TPokemonApi, TPokemonData } from "../../types/types";
import { useParams } from "react-router-dom";
import { adaptFullPokemonData } from "../../utils/data-utils";
import { capitalizeFirstLetter } from "../../utils/utils";
import PokemonFullCard from "../../components/pokemon-full-card/pokemon-full-card";
import Header from "../../components/header/header";

type TPokemonScreenProps = {
  pokemonApi: TPokemonApi
}

function PokemonScreen({pokemonApi}: TPokemonScreenProps) {
  const params = useParams();
  const currentPokemonId = params.id;
  const [currentPokemon, setCurrentPokemon] = useState<TPokemonData | null>(null);
  useEffect(() => {
    if (!currentPokemon) {
      pokemonApi.getOne(2)
        .then((response) => {
          const {data} = response;
          console.log(data);
          const pokemonData = adaptFullPokemonData(data);
          setCurrentPokemon(pokemonData);
        })
    }

    return (() => setCurrentPokemon(null))
  }, []);

  console.log(currentPokemon);

  return (
    currentPokemon
      ? (
        <div className="page pokemon-page">
          <Helmet>
            <title>Pokemon page</title>
          </Helmet>
          <Header />
          <main className="pokemon-page__main">
            <h1 className="page-title">{capitalizeFirstLetter(currentPokemon.name)}</h1>
            <PokemonFullCard pokemonData={currentPokemon} />
          </main>
        </div>
      )
      : (<p>test failed</p>)
  );
}

export default PokemonScreen;
