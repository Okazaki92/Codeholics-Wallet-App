import { useSelector } from "react-redux";
import styles from "./TransactionDesk.module.css";
import { TransactionTableDesk } from "./TransactionTableDesk";
import { selectTransactions } from "../../../redux/transactions/transactionSelectors";

export const TransactionDesk = () => {
  const transactionsAll = useSelector(selectTransactions);

  return (
    <>
      {transactionsAll.length === 0 && (
        <>
          <p className={styles.transactionsText}>
            You have not made any transactions yet
          </p>
        </>
      )}
      {transactionsAll.length > 0 && (
        <>
          <table className={styles.transactionTable}>
            <thead className={styles.thead}>
              <tr className={styles.headString}>
                <th className={styles.headDate}>Date</th>
                <th>Type</th>
                <th className={styles.headCategory}>Category</th>
                <th className={styles.headComment}>Comment</th>
                <th className={styles.headSum}>Sum</th>
                <th></th>
              </tr>
            </thead>
            <tbody className="">
              {transactionsAll.map(
                ({ _id, date, income, category, comment, sum, balance }) => (
                  <TransactionTableDesk
                    key={_id}
                    date={date}
                    income={income}
                    category={category}
                    comment={comment || "-"}
                    sum={sum}
                    balance={balance}
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
