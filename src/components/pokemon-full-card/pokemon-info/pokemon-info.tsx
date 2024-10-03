import './pokemon-info.css';

import { TPokemonData } from "../../../types/types"
import { capitalizeFirstLetter } from '../../../utils/utils';

type TPokemonInfoProps = {
  pokemonData: TPokemonData
}

function PokemonInfo({pokemonData}: TPokemonInfoProps) {
  return (
    <div className='pokemon-info-wrapper'>
      <table className='pokemon-info'>
        <caption className='pokemon-info__title'>Pokémon info</caption>
        <tbody>
          <tr>
            <th>Name</th>
            <td>{capitalizeFirstLetter(pokemonData.name)}</td>
          </tr>
          <tr>
            <th>Base experience</th>
            <td>{pokemonData.baseExperience}</td>
          </tr>
          <tr>
            <th>Height</th>
            <td>{pokemonData.height} deci</td>
          </tr>
          <tr>
            <th>Weight</th>
            <td>{pokemonData.weight} hg</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default PokemonInfo;
