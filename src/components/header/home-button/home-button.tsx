import './home-button.css';

import { NavLink } from "react-router-dom";
import { AppRoute } from "../../../const/const";

function HomeButton() {
  return (
    <div className="home-button">
        <NavLink to={AppRoute.Main}>
          <img src="/img/pokeball.svg" className="home-button__logo" alt="pokeball" width={60} height={60}/>
        </NavLink>
    </div>
  );
}

export default HomeButton;