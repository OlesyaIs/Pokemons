import { NavLink } from "react-router-dom";
import { AppRoute } from "../../const/const";

function HomeButton() {
  return (
    <div>
        <NavLink to={AppRoute.Main}>
          <img src="/img/pokeball.svg" className="logo" alt="pokeball" width={70} height={70}/>
        </NavLink>
    </div>
  );
}

export default HomeButton;