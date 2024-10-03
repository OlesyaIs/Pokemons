import './pokemon-image.css';

import { useState } from "react";
import { TPokemonData } from "../../../types/types";
import { DEFAULT_POKEMON_IMAGE_SRC } from "../../../const/const";

type TPokemonImageProps = {
  pokemonName: string
}

function PokemonImage({pokemonName}: TPokemonImageProps) {
  const currentSrc = `/img/pokemons/${pokemonName}.png`;
  const [imgSrc, setImgSrc] = useState(currentSrc);
  return (
    <div className="image-wrapper">
      <img
        src={imgSrc}
        onError={() => setImgSrc(DEFAULT_POKEMON_IMAGE_SRC)}
        className="pokemon-image"
        alt={`Pokemon ${pokemonName}`}
        width={100}
        height={100}
      />
    </div>
  );
}

export default PokemonImage;
