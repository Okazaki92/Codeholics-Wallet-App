import PropTypes from "prop-types";
import styles from "./TransactionDesk.module.css";
import moment from "moment";
import transactionsOperations from "../../../redux/transactions/transactionOperations";
import { useDispatch } from "react-redux";
import editIcon from "../../../assets/icons/editIcon.svg";
export const TransactionTableDesk = ({
  id,
  date,
  income,
  category,
  comment,
  sum,
}) => {
  const dispatch = useDispatch();
  // const handleClick = () => {console.log(`${id}`)}
  const handleClick = () => {
    dispatch(transactionsOperations.deleteTransaction(id));
  };

  return (
    <>
      <tr className={styles.bodyString}>
        <td className={styles.date}> {moment(date).format("DD.MM.YYYY")} </td>
        <td>{income ? "+" : "-"}</td>
        <td className={styles.category}>{category}</td>
        <td className={styles.comment}>{comment}</td>
        <td className={`${income ? styles.incomeSum : styles.expensSum}`}>
          {sum}{" "}
        </td>
        <td className={styles.buttons}>
          <button className={styles.editBtn}>
            <img src={editIcon} alt="Edit pen icon" />
          </button>
          <button
            type="button"
            onClick={handleClick}
            className={styles.btnDelete}
          >
            Delete
          </button>
        </td>
      </tr>
    </>
  );
};

TransactionTableDesk.propTypes = {
  id: PropTypes.string,
  date: PropTypes.string,
  name: PropTypes.string,
  income: PropTypes.bool,
  category: PropTypes.string,
  comment: PropTypes.string,
  sum: PropTypes.number,
};
