import css from "./DashboardPage.module.css";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import { Loader } from "../../components/Loader/Loader";
import Navigation from "../../components/Navigation/Navigation";
import Balance from "../../components/Balance/Balance";
import { Currency } from "../../components/Currency/Currency";

const DashboardPage = () => {
  return (
    <div className={css["background"]}>
      <Header />
      <div className={css["container"]}>
        <div className={css["dashboard-section"]}>
          <div className={css["dashboard-section__primary"]}>
            <Navigation />
            <Balance />
          </div>
          <div className={css["dashboard-section__primary"]}>
            <Currency />
          </div>
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

export default DashboardPage;
