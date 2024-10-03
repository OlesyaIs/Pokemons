import './home-button.css';

import { Link } from "react-router-dom";
import { AppRoute } from "../../../const/const";

function HomeButton() {
  return (
    <div className="home-button">
        <Link to={AppRoute.Main}>
          <img src="/img/pokeball.svg" className="home-button__logo" alt="pokeball" width={60} height={60}/>
          <span className="home-button__text">Pokémons</span>
        </Link>
    </div>
  );
}

export default HomeButton;