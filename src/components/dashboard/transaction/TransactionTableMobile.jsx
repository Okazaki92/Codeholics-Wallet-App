import { useSelector } from "react-redux";




import styles from "./TransactionMobile.module.css";


// import transactionsOperations from "../../../redux/transactions/transactionOperations";

import { selectTransactions } from "../../../redux/transactions/transactionSelectors";



export const TransactionTableMobile = () => {
  

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
      {transactionsAll.length > 0 &&
        transactionsAll.map(
          ({ _id, date, income, category, comment, sum, balance }) => (
            <table
              key={_id}
              className={`${styles.transactionTable} ${
                income ? styles.income : styles.expens
              }`}
            >
              <thead className={styles.tableHead}>
                <tr>
                  <th>Date</th>
                  <th>Type</th>
                  <th>Category</th>
                  <th>Comment</th>
                  <th>Sum</th>
                  {/* <th>Balance</th> */}
                </tr>
              </thead>
              <tbody className={styles.tbody}>
                <tr>
                  <td> {date} </td>
                  <td>{income ? "+" : "-"}</td>
                  <td>{category}</td>
                  <td>
                    
                    {comment} 
                    
                  </td>
                  <td
                    className={`${
                      income ? styles.incomeSum : styles.expensSum
                    }`}
                  >
                    {sum}
                  </td>
                  <td>
                    {balance}
                  </td>
                </tr>
              </tbody>
            </table>
          )
        )}
    </>
  );
};
