import PropTypes from "prop-types";
import styles from "./TransactionDesk.module.css";
export const TransactionTableDesk = ({
  date,
  income,
  category,
  comment,
  sum,
  // balance,
}) => {
  return (
    <>
      <tr className={styles.bodyString}>
        <td className={styles.date}> {date} </td>
        <td>{income ? "+" : "-"}</td>
        <td className={styles.category}>{category}</td>
        <td className={styles.comment}>
         {comment} 
        </td>
        <td className={`${income ? styles.incomeSum : styles.expensSum}`}>
          {sum}{" "}
        </td>
        {/* <td className={styles.balance}>{balance} </td> */}
      </tr>
    </>
  );
};


TransactionTableDesk.propTypes = {
  id: PropTypes.string,
  date:PropTypes.string,
  name: PropTypes.string,
  income: PropTypes.bool,
  category: PropTypes.string,
  comment: PropTypes.string,
  sum: PropTypes.number,

};
