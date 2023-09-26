import css from "./Header.module.css";
import { NavLink } from "react-router-dom";
import logo from "../../assets/icons/logo.svg";
import icon from "../../assets/icons/icons.svg";
// import { useSelector, useDispatch } from "react-redux";

const Header = () => {
  const headerVisible = false;
  // const user = useSelector((state) => state.session.user);
  // const dispatch = useDispatch();

  // const openModal = () => {
  //   dispatch(isModalLogoutOpen(true));
  // };
  return (
    <>
      {headerVisible ? (
        <div className={css["header"]}>
          <div className={css["header__logo"]}>
            <NavLink to="/home">
              <img src={logo} alt="Logo" className={css.logo} />
            </NavLink>
          </div>
          <div className={css["header__user"]}>
            <span className={css["username"]}>Name</span>
            <button type="button" className={css["exit-btn"]}>
              <svg className={css["exit-btn__icon"]} width="18" height="18">
                <use href={icon + `#icon__exit`} />
              </svg>
              <span className={css["exit-btn__text"]}>Exit</span>
            </button>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default Header;
