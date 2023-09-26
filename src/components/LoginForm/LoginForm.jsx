import { useDispatch, useSelector } from "react-redux";
import { logIn } from "../../redux/auth/operations.js";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import css from "./LoginForm.module.css";
import logo from "../../assets/icons/logo.svg";
import email from "../../assets/icons/email.svg";
import lock from "../../assets/icons/lock.svg";
import { useNavigate } from "react-router-dom";
import { setAuthError } from "../../redux/auth/selectors";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Nieprawidłowy adres email")
    .required("To pole jest wymagane"),
  password: Yup.string()
    .min(6, "Hasło musi mieć co najmniej 6 znaków")
    .max(12, "Hasło nie może mieć więcej niż 12 znaków")
    .required("To pole jest wymagane"),
});

const LoginForm = () => {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.auth.error);
  const navigate = useNavigate();

  const handleSubmit = async (values, { resetForm }) => {
    try {
      const result = await dispatch(logIn(values));

      if (logIn.fulfilled.match(result)) {
        resetForm();
        navigate("/");
      }
    } catch (err) {
      console.error(err.message);
      dispatch(setAuthError("Login failed ⚠"));
    }
  };

  return (
    <>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className={css["login-form-container"]} autoComplete="off">
          <img className={css["logo-svg"]} src={logo} alt="wallet icon" />
          <div className={css["input-container"]}>
            <img className={css["input-svg"]} src={email} alt="Email icon" />
            <Field type="email" name="email" placeholder="Email" />
            <ErrorMessage name="email" component="div" className={css.error} />
          </div>
          <div className={css["input-container"]}>
            <img className={css["input-svg"]} src={lock} alt="lock icon" />

            <Field type="password" name="password" placeholder="Password" />
            <ErrorMessage
              name="password"
              component="div"
              className={css.error}
            />
          </div>
          <div className={css["button-container"]}>
            <button
              type="submit"
              className={`${css.button} ${css["login-button"]}`}
            >
              LOG IN
            </button>
            <Link to="/register"></Link>
            <button
              type="button"
              className={`${css.button} ${css["registration-button"]}`}
            >
              REGISTER
            </button>
            {error && <div className={css.error}>{error}</div>}
          </div>
        </Form>
      </Formik>
    </>
  );
};
export default LoginForm;
