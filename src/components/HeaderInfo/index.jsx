import React from "react";
import styles from "./headerInfo.module.css";
const HeaderInfo = () => {
  return (
    <div className={`${styles.container}`}>
      <p className={`${styles.name}`}>Petra Marica</p>
      <p className={`${styles.tag}`}>@pmarica</p>
      <p className={`${styles.location}`}>Salvador, Brasil</p>
    </div>
  );
};

export default HeaderInfo;
