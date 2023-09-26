import { useSelector } from "react-redux";

import styles from "./TransactionDesk.module.css";
import { TransactionTableDesk } from "./TransactionTableDesk";

export const TransactionDesk = () => {

  const { transactions } = useSelector((state) => state.transactions);
  return (
    <>
      {transactions.length === 0 && (
        <>
          <p className={styles.transactionsText}>
            {" "}
            You haven't made any transactions yet
          </p>
        </>
      )}
      {transactions.length > 0 && (
        <>
          <table className={styles.transactionTable}>
            <thead>
              <tr className={styles.headString}>
                <th className={styles.headDate}>Date</th>
                <th>Type</th>
                <th className={styles.headCategory}>Category</th>
                <th className={styles.headComment}>Comment</th>
                <th className={styles.headSum}>Sum</th>
                <th className={styles.headBalance}>Balance</th>
              </tr>
            </thead>
            <tbody className="">
              {transactions.map(
                ({
                  _id,
                  date,
                  isIncome,
                  category,
                  comment,
                  amount,
                  balance,
                }) => (
                  <TransactionTableDesk
                    key={_id}
                    date={date}
                    isIncome={isIncome}
                    category={category}
                    comment={comment}
                    sum={amount
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, " ")}
                    balance={balance
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, " ")}
                  />
                )
              )}
            </tbody>
          </table>
        </>
      )}
    </>
  );
};
