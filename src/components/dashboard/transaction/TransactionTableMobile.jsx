// import { useSelector } from "react-redux";
// import styles from "./TransactionMobile.module.css";
// import { selectTransactions } from "../../../redux/transactions/transactionSelectors";
// import formatDate from "../../../utils/formatDate";
// import editIcon from "../../../assets/icons/editIcon.svg";
// // import transactionsOperations from "../../../redux/transactions/transactionOperations";

// export const TransactionTableMobile = () => {
//   const transactionsAll = useSelector(selectTransactions);

//   // console.log(transactionsAll)
//   // const shortenCategory = (category) => {
//   //   const words = category.split(" ");
//   //   return words.length > 1 ? words[0] : category;
//   // };
//   return (
//     <>
//       {transactionsAll.length === 0 && (
//         <>
//           <p className={styles.transactionsText}>
//             You have not made any transactions yet
//           </p>
//         </>
//       )}
//       {transactionsAll.length > 0 &&
//         transactionsAll.map(({ _id, date, income, category, comment, sum }) => (
//           <table
//             key={_id}
//             className={`${styles.transactionTable} ${
//               income ? styles.income : styles.expens
//             }`}
//           >
//             <thead className={styles.tableHead}>
//               <tr>
//                 <th>Date</th>
//                 <th>Type</th>
//                 <th>Category</th>
//                 <th>Comment</th>
//                 <th>Sum</th>
//                 <th>
//                   <button className={styles.btnDelete}>Delete</button>
//                 </th>
//               </tr>
//             </thead>
//             <tbody className={styles.tbody}>
//               <tr>
//                 <td> {formatDate(date)} </td>
//                 <td>{income ? "+" : "-"}</td>
//                 <td>{category}</td>
//                 <td>{comment}</td>
//                 <td
//                   className={`${income ? styles.incomeSum : styles.expensSum}`}
//                 >
//                   {sum}
//                 </td>
//                 <td>
//                   <button className={styles.editBtn}>
//                     <img src={editIcon} alt="Edit pen icon" />
//                     <p className={styles.btnText}>Edit</p>
//                   </button>
//                 </td>
//               </tr>
//             </tbody>
//           </table>
//         ))}
//     </>
//   );
// };

import { useSelector } from "react-redux";
import styles from "./TransactionMobile.module.css";
import { selectTransactions } from "../../../redux/transactions/transactionSelectors";
import formatDate from "../../../utils/formatDate";
import editIcon from "../../../assets/icons/editIcon.svg";

export const TransactionTableMobile = () => {
  const transactionsAll = useSelector(selectTransactions);
  return (
    <>
      {transactionsAll.length === 0 && (
        <>
          <p className={styles.transactionsText}>
            You have not made any transactions yet
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
                <td className={styles.tableD}>{formatDate(date)}</td>
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
                  <button className={styles.btnDelete}>Delete</button>
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
