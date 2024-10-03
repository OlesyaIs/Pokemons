import { useState } from "react";
import { TPokemonData } from "../../../types/types";
import { DEFAULT_POKEMON_IMAGE_SRC } from "../../../const/const";

type TPokemonImageProps = {
  pokemonData: TPokemonData
}

function PokemonImage({pokemonData}: TPokemonImageProps) {
  const currentSrc = `/img/pokemons/${pokemonData.name}.png`;
  const [imgSrc, setImgSrc] = useState(currentSrc);
  return (
    <div className="image-wrapper">
      <img
        src={imgSrc}
        onError={() => setImgSrc(DEFAULT_POKEMON_IMAGE_SRC)}
        className="pokemon-image"
        alt={`Pokemon ${pokemonData.name}`}
        width={475}
        height={475}
      />
    </div>
  );
}

export default PokemonImage;
