import React from "react";
import styles from "./tableRow.module.css";
const TableRow = ({ type, amount, currency, rowType }) => {
  const classType =
    rowType == "Head" ? styles.headContainer : styles.transactionListItem;
  return (
    <tr className={`${classType} row`}>
      <td className={`${styles.column}`}>{type}</td>
      <td className={`${styles.column}`}>{amount}</td>
      <td className={`${styles.column}`}>{currency}</td>
    </tr>
  );
};

export default TableRow;
