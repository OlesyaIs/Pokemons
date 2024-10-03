import './pokemon-full-card.css';
import { TPokemonData } from "../../types/types";
import PokemonImage from "./pokemon-image/pokemon-image";
import PokemonInfo from "./pokemon-info/pokemon-info";

type TPokemonFullCardProps = {
  pokemonData: TPokemonData
}

function PokemonFullCard({pokemonData}: TPokemonFullCardProps) {
  return (
    <section className="pokemon-full-card">
      <PokemonImage pokemonData={pokemonData} />
      <PokemonInfo pokemonData={pokemonData} />
    </section>
  );
}

export default PokemonFullCard;