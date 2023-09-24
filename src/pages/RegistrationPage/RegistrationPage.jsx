import css from "./RegistrationPage.module.css";
import walletLogo from "../../assets/icons/logo.svg";
import email from "../../assets/icons/email.svg";
import lock from "../../assets/icons/lock.svg";
import userIcon from "../../assets/icons/userIcon.svg";
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
         
          {/* <div className={css.registrationBox}>
            <div className={css.logo}>
              <img src={walletLogo} alt="Wallet logo" />
            </div>
            <ul className={css.inputList}>
              <li className={css.inputBox}>
                <div className={css.inputBox__icon}>
                  <img src={email} alt="Email icon" />
                </div>
                <input
                  type="email"
                  id="email"
                  placeholder="E-mail"
                  className={css.inputBox__input}
                />
              </li>
              <li className={css.inputBox}>
                <div className={css.inputBox__icon}>
                  <img src={lock} alt="Lock icon" />
                </div>
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  className={css.inputBox__input}
                />
              </li>
              <li className={css.inputBox}>
                <div className={css.inputBox__icon}>
                  <img src={lock} alt="Lock icon" />
                </div>
                <input
                  type="password"
                  id="confirmPassword"
                  placeholder="Confirm password"
                  className={css.inputBox__input}
                />
              </li>
              <li className={css.inputBox}>
                <div className={css.inputBox__icon}>
                  <img src={userIcon} alt="User icon" />
                </div>
                <input
                  type="text"
                  id="firstName"
                  placeholder="First name"
                  className={css.inputBox__input}
                />
              </li>
            </ul>
            <ul className={css.registrationBtnList}>
              <li>
                <button className={css.registrationBtnCurrentPage}>
                  REGISTER
                </button>
              </li>
              <li>
                <button className={css.registrationBtn}>LOG IN</button>
              </li>
            </ul>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
