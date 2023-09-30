import { Suspense, lazy, useEffect } from "react";
import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import RestrictedRoute from "./components/RestrictedRoute/RestrictedRoute";
import ModalLogout from "./components/ModalLogout/ModalLogout";
import { Loader } from "./components/Loader/Loader";
import { refreshUser } from "./redux/auth/operations";
// import Layout from "./layout/Layout";

const RegistrationPage = lazy(() =>
  import("./pages/RegistrationPage/RegistrationPage")
);
const DashboardPage = lazy(() => import("./pages/DashboardPage/DashboardPage"));
const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const StatisticPage = lazy(() => import("./pages/StatPage/StatPage"));
const CurrencyPage = lazy(() => import("./pages/CurrencyPage/CurrencyPage"));

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  });
  const { isModalLogoutOpen } = useSelector((state) => state.global);
  return (
    <>
      {isModalLogoutOpen && <ModalLogout />}
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/home" component={<LoginPage />} />
            }
          />
          {/* <Route path="/register" element={<RegistrationPage />} /> */}
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/login"
                component={<RegistrationPage />}
              />
            }
          />

          {/* <Route path="/:activeBtn" element={<DashboardPage />} /> */}
          <Route element={<DashboardPage />}>
            <Route path="/home" element={<HomePage />} />
            <Route path="/diagram" element={<StatisticPage />} />
            <Route path="/currency" element={<CurrencyPage />} />
          </Route>
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
