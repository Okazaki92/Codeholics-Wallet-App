
import styles from "./TransactionDesk.module.css";
export const TransactionTableDesk = ({
  date,
  isIncome,
  category,
  comment,
  sum,
  balance,
}) => {
  return (
    <>
      <tr className={styles.bodyString}>
        <td className={styles.date}> {date} </td>
        <td>{isIncome ? "+" : "-"}</td>
        <td className={styles.category}>{category}</td>
        <td className={styles.comment}>{comment}</td>
        <td className={`${isIncome ? styles.incomeSum : styles.expensSum}`}>
          {sum}
        </td>
        <td className={styles.balance}>{balance} </td>
      </tr>
    </>
  );
};
