import { TPokemonData } from "../../../types/types";

type TPokemonImageProps = {
  pokemonData: TPokemonData
}

function PokemonImage({pokemonData}: TPokemonImageProps) {
  return (
    <div className="image-wrapper">
      <img src="/img/pokemons/ivysaur.png" className="pokemon-image" alt={`Pokemon ${pokemonData.name}`} width={475} height={475}/>
    </div>
  );
}

export default PokemonImage;
