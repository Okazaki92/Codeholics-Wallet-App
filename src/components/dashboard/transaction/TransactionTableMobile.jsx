import { useSelector } from "react-redux";
import styles from "./TransactionMobile.module.css";
import { selectTransactions } from "../../../redux/transactions/transactionSelectors";
import moment from "moment";
import transactionsOperations from "../../../redux/transactions/transactionOperations";
import { useDispatch } from "react-redux";
import editIcon from "../../../assets/icons/editIcon.svg";

export const TransactionTableMobile = () => {
  const transactionsAll = useSelector(selectTransactions);

  const dispatch = useDispatch();

  // const handleClick = () => {console.log(id)}
  // console.log(transactionsAll)
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
        transactionsAll.map(({ _id, date, income, category, comment, sum }) => (
          <table
            key={_id}
            className={`${styles.transactionTable} ${
              income ? styles.income : styles.expens
            }`}
          >
            <tbody className={styles.tbody}>
              <tr className={styles.tableR}>
                <td className={styles.tableH}>Date</td>
                <td className={styles.tableD}>
                  {" "}
                  {moment(date).format("DD.MM.YYYY")}
                </td>
              </tr>
              <tr className={styles.tableR}>
                <td className={styles.tableH}>Type</td>
                <td className={styles.tableD}>{income ? "+" : "-"}</td>
              </tr>
              <tr className={styles.tableR}>
                <td className={styles.tableH}>Category</td>
                <td className={styles.tableD}>{category}</td>
              </tr>
              <tr className={styles.tableR}>
                <td className={styles.tableH}>Comment</td>
                <td className={styles.tableD}>{comment || "-"}</td>
              </tr>
              <tr className={styles.tableR}>
                <td className={styles.tableH}>Sum</td>
                <td
                  className={`${income ? styles.incomeSum : styles.expensSum}`}
                >
                  {sum}
                </td>
              </tr>
              <tr className={styles.tableR}>
                <td className={styles.tableH}>
                  <button
                    type="button"
                    onClick={() =>
                      dispatch(transactionsOperations.deleteTransaction(_id))
                    }
                    className={styles.btnDelete}
                  >
                    Delete
                  </button>
                </td>
                <td className={styles.tableD}>
                  <button className={styles.editBtn}>
                    <img src={editIcon} alt="Edit pen icon" />
                    <p className={styles.btnText}>Edit</p>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        ))}
    </>
  );
};
