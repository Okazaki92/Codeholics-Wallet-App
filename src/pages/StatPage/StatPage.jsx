import { Fragment } from "react";
import Media from "react-media";

// import { NavMenuMobile } from "../../components/dashboard/navMenu/NavMenuMobile";
// import { NavMenu } from "../../components/dashboard/navMenu/NavMenu";
import styles from "./StatPage.module.css";
// import Balance from "../../components/Balance/Balance";
// import { Currency } from "../../components/Currency/Currency";
import Chart from "../../components/Chart/Chart";
import Table from "../../components/Table/Table";
// import { Diagram } from "../components";
// import { StatTable } from "../components/";

const StatPage = () => {
  // PRZYKŁADOWE DANE DO WYRENDEROWANIE KOMPONETÓW <CHART/> I <TABLE/>
  const dataToRender = [
    {
      category: "Main expenses",
      amount: 8700,
      color: "#FED057",
    },
    {
      category: "Products",
      amount: 3800.74,
      color: "#FFD8D0",
    },
    {
      category: "Car",
      amount: 1500,
      color: "#FD9498",
    },
    {
      category: "Self care",
      amount: 800.0,
      color: "#C5BAFF",
    },
    {
      category: "Child care",
      amount: 2208.5,
      color: "#6E78E8",
    },
    {
      category: "Household products",
      amount: 300,
      color: "#4A56E2",
    },
    {
      category: "Education",
      amount: 3400,
      color: "#81E1FF",
    },
    {
      category: "Leisure",
      amount: 1230,
      color: "#24CCA7",
    },
    {
      category: "Other expenses",
      amount: 610,
      color: "#00AD84",
    },
  ];

  return (
    <Media
      queries={{
        small: "(max-width: 767px)",
        medium: "(min-width: 768px) and (max-width: 1279px)",
        large: "(min-width: 1280px)",
      }}
    >
      {(matches) => (
        <Fragment>
          {matches.small && (
            <>
              {/* <NavMenuMobile /> */}
              <div className={styles.mobDiagram}>
                <h3 className={styles.stat}>Statistic</h3>
                <Chart dataToRender={dataToRender} />
                {/* <Diagram />
                <StatTable /> */}
                <Table dataToRender={dataToRender} />
              </div>
            </>
          )}
          {matches.medium && (
            <>
              {/* <div className={styles.currency}>
                <div>
                  <NavMenu />
                  <Balance />
                </div>
                <Currency />
              </div> */}
              <div className={styles.right}>
                <h3 className={styles.stat}>Statistic</h3>
                <div className={styles.chart}>
                  <div className={styles.diagram}>
                    {/* <Diagram /> */} <Chart dataToRender={dataToRender} />
                  </div>
                  <div className={styles.table}>
                    {/* <StatTable /> */} <Table dataToRender={dataToRender} />
                  </div>
                </div>
              </div>
            </>
          )}
          {matches.large && (
            <div className={styles.wrap}>
              {/* <div className={styles.left}>
                <NavMenu />
                <Balance />
                <Currency />
              </div> */}
              <div className={styles.right}>
                <h3 className={styles.stat}>Statistic</h3>
                <div className={styles.chart}>
                  {/* <Diagram /> */}
                  <Chart dataToRender={dataToRender} />
                  <div className={styles.table}>
                    {/* <StatTable /> */}
                    <Table dataToRender={dataToRender} />
                  </div>
                </div>
              </div>
            </div>
          )}
        </Fragment>
      )}
    </Media>
  );
};
export default StatPage;
