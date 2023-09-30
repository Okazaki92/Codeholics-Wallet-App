import css from "./RegistrationPage.module.css";
import RegisterForm from "../../components/RegisterForm/RegisterForm";
import phoneDespktop from "../../assets/images/phoneDesktop.svg";
const RegistrationPage = () => {
  return (
    <div className={css.pageContainer}>
      <div className={css.content}>
        <div className={css.desktopLogo}>
          <img
            src={phoneDespktop}
            alt="Woman and phone with wallet app"
            className={css.imgPhone}
          />
          <h2 className={css.headerRegistration}>Finance App</h2>
        </div>
        <div className={css.registrationFormContainer}>
          <RegisterForm />
        </div>
      </div>
    </div>
  );
};
export default RegistrationPage;
