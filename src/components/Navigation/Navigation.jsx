import css from "./Navigation.module.css";
import icon from "../../assets/icons/icons.svg";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav id="navigation">
      <NavLink to="/home">
        <svg className={css["nav__icon"]}>
          <use href={icon + `#icon__baseline-home`} />
        </svg>
        <span className={css["nav__text"]}>Home </span>
      </NavLink>
      <NavLink to="/diagram">
        <svg className={css["nav__icon"]}>
          <use href={icon + `#icon__baseline-timeline`} />
        </svg>
        <span className={css["nav__text"]}>Statistics </span>
      </NavLink>
      <NavLink to="/currency">
        <svg className={css["nav__icon"]}>
          <use href={icon + `#icon__baseline-dolar`} />
        </svg>
        <span className={css["nav__text"]}>Currency </span>
      </NavLink>
    </nav>
  );
};

export default Navigation;
