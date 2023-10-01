import { useSelector } from "react-redux";
import styles from "./TransactionMobile.module.css";

import { selectTransactions } from "../../../redux/transactions/transactionSelectors";

import  moment from 'moment';
import transactionsOperations from "../../../redux/transactions/transactionOperations";
import {useDispatch} from 'react-redux'




export const TransactionTableMobile = () => {
  

  const  transactionsAll  = useSelector(selectTransactions);
  
  const dispatch = useDispatch();

  // const handleClick = () => {console.log(id)}
  console.log(transactionsAll)
  // const handleClick = (id) => {dispatch(transactionsOperations.deleteTransaction(id))}

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
          ({ _id, date, income, category, comment, sum}) => (
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
                  <td> {moment(date).format("DD.MM.YYYY")} </td>
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
                   <button type="button" onClick={() => dispatch(transactionsOperations.deleteTransaction(_id))}>Delete</button>
                  </td>
                </tr>
              </tbody>
            </table>
          )
        )}
    </>
  );
};
