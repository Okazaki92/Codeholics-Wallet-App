import { useSelector } from "react-redux";


import styles from "./TransactionDesk.module.css";
import { TransactionTableDesk } from "./TransactionTableDesk";

// import transactionsOperations from "../../../redux/transactions/transactionOperations";

import { selectTransactions } from "../../../redux/transactions/transactionSelectors";

export const TransactionDesk = () => {



  const  transactionsAll  = useSelector(selectTransactions);
  

  // console.log(transactionsAll)

  return (
    <>
    
      {transactionsAll.length === 0 && (
        <>
          <p className={styles.transactionsText}>
          
            You haven't made any transactions yet
          </p>
        </>
      )}
      {transactionsAll.length > 0 && (
        <>
          <table className={styles.transactionTable}>
            <thead>
              <tr className={styles.headString}>
                <th className={styles.headDate}>Date</th>
                <th>Type</th>
                <th className={styles.headCategory}>Category</th>
                <th className={styles.headComment}>Comment</th>
                <th className={styles.headSum}>Sum</th>
                {/* <th className={styles.headBalance}>Balance</th> */}
              </tr>
            </thead>
            <tbody className="">
              {transactionsAll.map(
                ({
                  _id,
                  date,
                  income,
                  category,
                  comment,
                  sum,
                  balance,
                }) => (
                  <TransactionTableDesk
                    key={_id}
                    date={date}
                    isIncome={income}
                    category={category}
                    comment={comment}
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
