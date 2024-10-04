import './pokemon-image.css';

import { useState } from "react";
import { DEFAULT_POKEMON_IMAGE_SRC } from "../../../const/const";
import { getPathWithBasePart } from '../../../utils/utils';

type TPokemonImageProps = {
  pokemonName: string
}

function PokemonImage({pokemonName}: TPokemonImageProps) {
  const currentSrc = `/img/pokemons/${pokemonName}.png`;
  const currentFullSrc = getPathWithBasePart(currentSrc);
  const defaultFullSrc = getPathWithBasePart(DEFAULT_POKEMON_IMAGE_SRC);
  
  const [imgSrc, setImgSrc] = useState(currentFullSrc);
  return (
    <div className='pokemon-image-wrapper'>
      <img
        src={imgSrc}
        onError={() => setImgSrc(defaultFullSrc)}
        className='pokemon-image'
        alt={`Pokemon ${pokemonName}`}
        width={100}
        height={100}
      />
    </div>
  );
}

export default PokemonImage;
