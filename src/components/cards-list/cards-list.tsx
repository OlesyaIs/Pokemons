import './cards-list.css';
import Card from "../card/card";
import { TPokemonsList } from '../../types/types';

type CardsListProps = {
  pokemonsData: TPokemonsList;
}

function CardsList({pokemonsData}: CardsListProps) {
  return (
    <ul className="pokemons-list">
      {pokemonsData.map((pokemon) => <li className="pokemons-list-item" key={pokemon.name}><Card pokemon={pokemon}/></li>)}
    </ul>
  )
}

export default CardsList;
