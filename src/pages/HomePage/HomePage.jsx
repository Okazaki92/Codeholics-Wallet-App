import { Fragment } from "react";
import Media from "react-media";
import { ToastContainer } from "react-toastify";
import { useSelector } from "react-redux";

// components

import {
  TransactionTableMobile,
  TransactionDesk,
} from "../../components/dashboard/transaction/";

import styles from "./HomePage.module.css";

import ButtonAddTransaction from "./../../components/ButtonAddTransaction/ButtonAddTransaction";
import { ModalAddTransaction } from "../../components/ModalAddTransaction/ModalAddTransaction";
import { selectIsModalAddTransactionOpen } from "../../redux/global/globalSelectors";

import { TransactionPagination } from "../../components/Pagination/Pagination";

const HomePage = () => {
  const isModalAddTransaction = useSelector(selectIsModalAddTransactionOpen);

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
                <ButtonAddTransaction />
                {isModalAddTransaction && <ModalAddTransaction />}
                <ToastContainer />

                <div className={styles.containerTable}>
                  <TransactionTableMobile />
                </div>
              </>
            )}
            {matches.medium && (
              <>
                <ButtonAddTransaction />
                {isModalAddTransaction && <ModalAddTransaction />}

                <ToastContainer />
                <div className={styles.currency}></div>
                <div className={styles.containerTable}>
                  <TransactionDesk />
                </div>
              </>
            )}
            {matches.large && (
              <>
                <ButtonAddTransaction />
                {isModalAddTransaction && <ModalAddTransaction />}
                <ToastContainer />
                <div className={styles.largeSize}>
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
      <TransactionPagination />
    </>
  );
};
export default HomePage;
