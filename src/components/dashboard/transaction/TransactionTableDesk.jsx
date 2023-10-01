import PropTypes from "prop-types";
import styles from "./TransactionDesk.module.css";
import formatDate from "../../../utils/formatDate";
import editIcon from "../../../assets/icons/editIcon.svg";
export const TransactionTableDesk = ({
  date,
  income,
  category,
  comment,
  sum,
}) => {
  return (
    <>
      <tr className={styles.bodyString}>
        <td className={styles.date}> {formatDate(date)} </td>
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
          <button className={styles.btnDelete}>Delete</button>
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
