import { useDispatch, useSelector } from "react-redux";
import { logIn } from "../../redux/auth/operations.js";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import css from "./LoginForm.module.css";
import logo from "../../assets/icons/logo.svg";
import email from "../../assets/icons/email.svg";
import lock from "../../assets/icons/lock.svg";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Nieprawidłowy adres email")
    .required("To pole jest wymagane"),
  password: Yup.string()
    .min(6, "Hasło musi mieć co najmniej 6 znaków")
    .max(12, "Hasło nie może mieć więcej niż 12 znaków")
    .required("To pole jest wymagane"),
});

export const LoginForm = () => {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.auth.error);

  const handleSubmit = (values, { resetForm }) => {
    dispatch(logIn(values)).then((result) => {
      if (logIn.fulfilled.match(result)) {
        // history.push("/dashboard")
      }
    });

    resetForm();
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
