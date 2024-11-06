import React from "react";
import styles from "./transactionHistory.module.css";
const TransactionHistory = () => {
  return (
    <table className={`${styles.container}`}>
      <caption className={`${styles.caption}`}>TransactionHistory </caption>
      <thead className={`${styles.head}`}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody className={`${styles.body}`}>
        <tr>
          <td>Invoice</td>
          <td>125</td>
          <td>USD</td>
        </tr>
        <tr>
          <td>Withdrawal</td>
          <td>85</td>
          <td>USD</td>
        </tr>
      </tbody>
    </table>
  );
};

export default TransactionHistory;
