import css from "./LoginPage.module.css";
import loginPage from "../../assets/icons/loginPage.svg";
import ellipse1 from "../../assets/icons/ellipse1.svg";
import ellipse2 from "../../assets/icons/ellipse2.svg";
import LoginForm from "../../components/LoginForm/LoginForm";
import blur from "../../assets/icons/blur.svg";

const LoginPage = () => {
  return (
    <div className={css.loginPage}>
      <div className={css.mobile}>
        <LoginForm />
      </div>
      <div className={css.tablet}>
        <div className={css.topSection}>
          <img className={css.svg} src={loginPage} alt="SVG" />
          <p className={css.p}> Finance App</p>{" "}
          <img className={css.ellipse2} src={ellipse2} alt="Elipsa" />
        </div>{" "}
        <img className={css.blur} src={blur} alt="Ractangle" />
        <LoginForm />
        <img className={css.ellipse1} src={ellipse1} alt="Elipsa" />
        <div className={css.bottomSection}></div>{" "}
      </div>
    </div>
  );
};
export default LoginPage;
