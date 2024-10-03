import './cards-list.css';
import Card from "../card/card";

type CardsListProps = {
  pokemonsData: number[];
}

function CardsList({pokemonsData}: CardsListProps) {
  return (
    <ul className="pokemons-list">
      {pokemonsData.map((pokemon, index) => <li className="pokemons-list-item" key={index}><Card /></li>)}
    </ul>
  )
}

export default CardsList;