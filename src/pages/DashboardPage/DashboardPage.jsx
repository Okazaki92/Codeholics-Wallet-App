
import { lazy, Suspense, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";

import PurpleEllipse from "../../assets/icons/ellipse1.svg";
import PeachEllipse from "../../assets/icons/ellipse2.svg";
import styles from "../DashboardPage/DashboardPage.module.css";

const HomePage = lazy(() => import("../HomePage/HomePage"));
const StatPage = lazy(() => import("../StatPage/StatPage"));
const CurrencyPage = lazy(() => import("../CurrencyPage/CurrencyPage"));
const PageNotFound = lazy(() => import("../PageNotFound/PageNotFound"));


const DashboardPage = () => {
  const { activeBtn } = useParams();
  if (
    (activeBtn !== "home") &
    (activeBtn !== "currency") &
    (activeBtn !== "diagram")
  )
    return (
      <Suspense>
        <PageNotFound path="/home" />
      </Suspense>
    );
  return (
    
    <>
      <img className={styles.purple} src={PurpleEllipse} alt="logo" />
      <img className={styles.peach} src={PeachEllipse} alt="logo" />
      <div className={styles.dash}>
        <Header />
        {activeBtn === "home" && (
          <div>
            <HomePage />
          </div>
        )}
        {activeBtn === "diagram" && (
          <div>
            <StatPage />
          </div>
        )}
        {activeBtn === "currency" && (
          <div>
            <CurrencyPage />
          </div>
        )}
      </div>
    </>
  );
};
export default DashboardPage;
