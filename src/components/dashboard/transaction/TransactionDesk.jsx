import { useSelector } from "react-redux";

import styles from "./TransactionDesk.module.css";
import { TransactionTableDesk } from "./TransactionTableDesk";

import { selectTransactions } from "../../../redux/transactions/transactionSelectors";
import { selectIsModalUpdateOpen } from "../../../redux/global/globalSelectors";
import { ModalUpdateTransaction } from "../../ModalUpdateTransaction/ModalUpdateTransaction";

export const TransactionDesk = () => {
  const transactionsAll = useSelector(selectTransactions);
  const openModal = useSelector(selectIsModalUpdateOpen);
  const testId = useSelector((state) =>
    state.transactions.operations.find(
      (transaction) => transaction._id === openModal
    )
  );
  return (
    <>
      {transactionsAll.length === 0 && (
        <>
          <p className={styles.transactionsText}>
            You haven`t made any transactions yet
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
                ({ _id, date, income, category, comment, sum }) => (
                  <TransactionTableDesk
                    key={_id}
                    id={_id}
                    date={date}
                    income={income}
                    category={category}
                    comment={comment || "-"}
                    sum={sum}
                  />
                )
              )}
            </tbody>
          </table>
          {testId && (
            <ModalUpdateTransaction id={testId._id} income={testId.income} />
          )}
        </>
      )}
    </>
  );
};
