import './pokemon-image.css';

import { useState } from "react";
import { DEFAULT_POKEMON_IMAGE_SRC } from "../../../const/const";
import { getPathWithBasePart } from '../../../utils/utils';
import { TPokemonShortData } from '../../../types/types';

type TPokemonImageProps = {
  pokemon: TPokemonShortData,
}

function PokemonImage({pokemon}: TPokemonImageProps) {
  const defaultFullSrc = getPathWithBasePart(DEFAULT_POKEMON_IMAGE_SRC);
  
  const [imgSrc, setImgSrc] = useState(pokemon.img);
  return (
    <div className='pokemon-image-wrapper'>
      <img
        src={imgSrc}
        onError={() => setImgSrc(defaultFullSrc)}
        className='pokemon-image'
        alt={`Pokemon ${pokemon.name}`}
        width={100}
        height={100}
      />
    </div>
  );
}

export default PokemonImage;
