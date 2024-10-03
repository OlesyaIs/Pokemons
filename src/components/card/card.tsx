import './card.css';

import { capitalizeFirstLetter } from "../../utils/utils";
import PokemonImage from "../shared/pokemon-image/pokemon-image";
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const/const';

type TCardProps = {
  pokemonName: string;
}

function Card({pokemonName}: TCardProps) {
  const pokemonPath = `${AppRoute.Main}${pokemonName}`;
  return (
    <Link to={pokemonPath} className="card card--pokemon">
      <h2>{capitalizeFirstLetter(pokemonName)}</h2>
      <PokemonImage pokemonName={pokemonName} />
    </Link>
  );
}

export default Card;