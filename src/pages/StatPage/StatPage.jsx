import { Fragment } from "react";
import Media from "react-media";

import { NavMenuMobile } from "../../components/dashboard/navMenu/NavMenuMobile";
import { NavMenu } from "../../components/dashboard/navMenu/NavMenu";
import styles from "./StatPage.module.css";
import Balance from "../../components/Balance/Balance";
import { Currency } from "../../components/Currency/Currency";
// import { Diagram } from "../components";
// import { StatTable } from "../components/";

const StatPage = () => {
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
              <NavMenuMobile />
              <div className={styles.mobDiagram}>
                <h3 className={styles.stat}>Statistic</h3>
                {/* <Diagram />
                <StatTable /> */}
              </div>
            </>
          )}
          {matches.medium && (
            <>
              <div className={styles.currency}>
                <div>
                  <NavMenu />
                  <Balance />
                </div>
                <Currency />
              </div>
              <div className={styles.right}>
                <h3 className={styles.stat}>Statistic</h3>
                <div className={styles.chart}>
                  <div className={styles.diagram}>{/* <Diagram /> */}</div>
                  <div className={styles.table}>{/* <StatTable /> */}</div>
                </div>
              </div>
            </>
          )}
          {matches.large && (
            <div className={styles.wrap}>
              <div className={styles.left}>
                <NavMenu />
                <Balance />
                <Currency />
              </div>
              <div className={styles.right}>
                <h3 className={styles.stat}>Statistic</h3>
                <div className={styles.chart}>
                  {/* <Diagram /> */}
                  <div className={styles.table}>{/* <StatTable /> */}</div>
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
