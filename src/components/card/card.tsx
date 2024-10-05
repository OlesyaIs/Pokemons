import './card.css';

import { capitalizeFirstLetter } from "../../utils/utils";
import PokemonImage from "../shared/pokemon-image/pokemon-image";
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const/const';
import { TPokemonShortData } from '../../types/types';

type TCardProps = {
  pokemon: TPokemonShortData;
}

function Card({pokemon}: TCardProps) {
  const pokemonPath = `${AppRoute.Main}${pokemon.id}`;
  return (
    <Link to={pokemonPath} className="card card--pokemon">
      <h2 className='card__title'>{capitalizeFirstLetter(pokemon.name)}</h2>
      <PokemonImage pokemonName={pokemon.name} />
    </Link>
  );
}

export default Card;
