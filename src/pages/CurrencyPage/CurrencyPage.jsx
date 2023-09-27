import { Fragment, useEffect } from "react";
import Media from "react-media";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { NavMenuMobile } from "../../components/dashboard/navMenu/NavMenuMobile";
import { NavMenu } from "../../components/dashboard/navMenu/NavMenu";
import { Currency } from "../../components/Currency/Currency";
import { TransactionDesk } from "../../components/dashboard/transaction/";
import { Balance } from "../../components/Balance/Balance";
import styles from "../HomePage/HomePage.module.css";

const CurrencyPage = () => {
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
          small: "(max-width: 768px)",
          medium: "(min-width: 769px) and (max-width: 1280px)",
          large: "(min-width: 1281px)",
        }}
      >
        {(matches) => (
          <Fragment>
            {matches.small && (
              <>
                <NavMenuMobile />
                <div className={styles.currencyMob}>
                  <Currency />
                </div>
              </>
            )}
            {matches.medium && (
              <>
                <ToastContainer />
                <div className={styles.currency}>
                  <div className={styles.nav_ballance}>
                    <NavMenu />
                    <Balance />
                  </div>
                  <Currency />
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
                    <Balance />
                    <Currency />
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
export default CurrencyPage;
