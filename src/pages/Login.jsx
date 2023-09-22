import { HelmetProvider, Helmet } from "react-helmet-async";
import LoginForm from "../components/LoginForm/LoginForm";

const Login = () => (
  <HelmetProvider>
    <Helmet>
      <title>Finance App login</title>
    </Helmet>
    <>
      <LoginForm />
    </>
  </HelmetProvider>
);

export default Login;
