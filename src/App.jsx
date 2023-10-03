import { Suspense, lazy, useEffect } from "react";
import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import RestrictedRoute from "./components/RestrictedRoute/RestrictedRoute";
import ModalLogout from "./components/ModalLogout/ModalLogout";
import { Loader } from "./components/Loader/Loader";
import { selectIsRefreshing } from "./redux/auth/selectors";
import { refreshUser } from "./redux/auth/operations";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Footer from "./components/Footer/Footer";

const RegistrationPage = lazy(() =>
  import("./pages/RegistrationPage/RegistrationPage")
);
const DashboardPage = lazy(() => import("./pages/DashboardPage/DashboardPage"));
const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const StatisticPage = lazy(() => import("./pages/StatPage/StatPage"));
const CurrencyPage = lazy(() => import("./pages/CurrencyPage/CurrencyPage"));

function App() {
  const isRefreshing = useSelector(selectIsRefreshing);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  const { isModalLogoutOpen } = useSelector((state) => state.global);
  return isRefreshing ? (
    <>...</>
  ) : (
    <>
      {isModalLogoutOpen && <ModalLogout />}
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Navigate to="/register" />} />
          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/home" component={<LoginPage />} />
            }
          />
          <Route path="/register" element={<RegistrationPage />} />
          {/* <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/login"
                component={<RegistrationPage />}
              />
            }
          /> */}

          {/* <Route path="/:activeBtn" element={<DashboardPage />} /> */}
          <Route element={<DashboardPage />}>
            <Route
              path="/home"
              element={<PrivateRoute component={<HomePage />} />}
            />
            <Route
              path="/diagram"
              element={<PrivateRoute component={<StatisticPage />} />}
            />
            <Route
              path="/currency"
              element={<PrivateRoute component={<CurrencyPage />} />}
            />
          </Route>
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
        <Footer />
      </Suspense>
    </>
  );
}

export default App;
