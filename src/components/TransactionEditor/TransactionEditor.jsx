import React, { useState } from "react";
import styles from "../Dashboard/transaction/TransactionDesk.module.css";

const TransactionEditor = ({
  id,
  date,
  income,
  category,
  comment,
  sum,
  onSave,
  onCancel,
}) => {
  const [editedTransaction, setEditedTransaction] = useState({
    id,
    date,
    income,
    category,
    comment,
    sum,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedTransaction({
      ...editedTransaction,
      [name]: value,
    });
  };

  const handleSave = () => {
    onSave(id, editedTransaction);
  };

  return (
    <tr className={styles.bodyString}>
      <td className={styles.date}>
        <input
          type="text"
          name="date"
          value={editedTransaction.date}
          onChange={handleInputChange}
        />
      </td>
      <td>
        <input
          type="checkbox"
          name="income"
          checked={editedTransaction.income}
          onChange={handleInputChange}
        />
      </td>
      <td className={styles.category}>
        <input
          type="text"
          name="category"
          value={editedTransaction.category}
          onChange={handleInputChange}
        />
      </td>
      <td className={styles.comment}>
        <input
          type="text"
          name="comment"
          value={editedTransaction.comment}
          onChange={handleInputChange}
        />
      </td>
      <td
        className={`${
          editedTransaction.income ? styles.incomeSum : styles.expensSum
        }`}
      >
        <input
          type="number"
          name="sum"
          value={editedTransaction.sum}
          onChange={handleInputChange}
        />
      </td>
      <td className={styles.buttons}>
        <button onClick={handleSave}>Save</button>
        <button onClick={onCancel}>Cancel</button>
      </td>
    </tr>
  );
};

export default TransactionEditor;