import css from "./Layout.module.css";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import { Loader } from "../components/Loader/Loader";
import Navigation from "../components/Navigation/Navigation";

const Layout = () => {
  return (
    <div className={css["background"]}>
      <Header />
      <div className={css["container"]}>
        <div className={css["dashboard-section"]}>
          <Navigation />
          {/* Reszta komponentów tutaj */}
        </div>
        <div className={css["page-section"]}>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default Layout;
