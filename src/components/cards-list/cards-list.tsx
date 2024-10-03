import './cards-list.css';
import Card from "../card/card";
import { TPokemonsList } from '../../types/types';

type CardsListProps = {
  pokemonsData: TPokemonsList;
}

function CardsList({pokemonsData}: CardsListProps) {
  return (
    <ul className="pokemons-list">
      {pokemonsData.map((pokemonName) => <li className="pokemons-list-item" key={pokemonName}><Card pokemonName={pokemonName}/></li>)}
    </ul>
  )
}

export default CardsList;