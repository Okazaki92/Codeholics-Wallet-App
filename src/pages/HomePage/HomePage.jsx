import { Fragment, useEffect } from "react";
import { useSelector } from "react-redux";
import Media from "react-media";
import { ToastContainer, toast } from "react-toastify";


// components

import {
  TransactionTableMobile,
  TransactionDesk,
} from "../../components/dashboard/transaction/";

import { NavMenuMobile } from "../../components/dashboard/navMenu/NavMenuMobile";
import { NavMenu } from "../../components/dashboard/navMenu/NavMenu";
// import { Currency } from "../components";
// import { Ballance } from "../components";
import styles from "./HomePage.module.css";

const HomePage = () => {
  const { error } = useSelector((state) => state.transactions);

  useEffect(() => {
    if (error) {
      toast(error);
    }
  }, [error]);

  return (
    <>
     
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
                <ToastContainer />
                <NavMenuMobile />
                {/* <Ballance /> */}
                <div className={styles.containerTable}>
                  <TransactionTableMobile />
                </div>
              </>
            )}
            {matches.medium && (
              <>
                <ToastContainer />
                <div className={styles.currency}>
                  <div className={styles.nav_ballance}>
                    <NavMenu />
                    {/* <Ballance /> */}
                  </div>
                  {/* <Currency /> */}
                </div>
                <div className={styles.containerTable}>
                  <TransactionDesk />
                </div>
              </>
            )}
            {matches.large && (
              <>
                <ToastContainer />
                <div className={styles.largeSize}>
                  <div className={styles.leftSize}>
                    <NavMenu />
                    {/* <Ballance />
                    <Currency /> */}
                  </div>
                  <div className={styles.rightSize}>
                    <div className={styles.containerTable}>
                      <TransactionDesk />
                    </div>
                  </div>
                </div>
              </>
            )}
          </Fragment>
        )}
      </Media>
    </>
  );
};
export default HomePage;
