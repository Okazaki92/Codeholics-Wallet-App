import css from "./RegistrationPage.module.css";
import RegisterForm from "../../components/RegisterForm/RegisterForm";

const RegistrationPage = () => {
  return (
    <div className={css.pageContainer}>
      <div className={css.content}>
        <div className={css.desktopLogo}>
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
