import React from "react";
import TableRow from "../TableRow";
import styles from "./transactionHistory.module.css";
const TransactionHistory = ({ items }) => {
  return (
    <table className={`${styles.container} lato`}>
      <caption className={`${styles.caption}`}>TransactionHistory </caption>
      <thead className={`${styles.head}`}>
        <TableRow
          type={"Type"}
          amount={"Amount"}
          currency={"Currency"}
          rowType={"Head"}
        />
      </thead>

      <tbody className={`${styles.body}`}>
        {items.map((item, index) => (
          <TableRow
            type={item.type}
            amount={item.amount}
            currency={item.currency}
            rowType={"row"}
          />
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
