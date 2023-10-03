import { useSelector } from "react-redux";
import styles from "./TransactionMobile.module.css";
import { selectTransactions } from "../../../redux/transactions/transactionSelectors";
import moment from "moment";
import transactionsOperations from "../../../redux/transactions/transactionOperations";
import { useDispatch } from "react-redux";
import editIcon from "../../../assets/icons/editIcon.svg";
import { selectIsModalUpdateOpen } from "../../../redux/global/globalSelectors";
import { setIsModalUpdateOpen } from "../../../redux/global/globalSlice";
import { ModalUpdateTransaction } from "../../ModalUpdateTransaction/ModalUpdateTransaction";

export const TransactionTableMobile = () => {
  const transactionsAll = useSelector(selectTransactions);
  const openModal = useSelector(selectIsModalUpdateOpen);
  const testId = useSelector((state) =>
    state.transactions.operations.find(
      (transaction) => transaction._id === openModal
    )
  );
  const dispatch = useDispatch();

  return (
    <>
      {transactionsAll.length === 0 && (
        <>
          <p className={styles.transactionsText}>
            You haven`t made any transactions yet
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
                  <button
                    onClick={() => dispatch(setIsModalUpdateOpen(_id, income))}
                    className={styles.editBtn}
                  >
                    <img src={editIcon} alt="Edit pen icon" />
                    <p className={styles.btnText}>Edit</p>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        ))}
      {openModal && (
        <ModalUpdateTransaction id={testId._id} income={testId.income} />
      )}
    </>
  );
};
