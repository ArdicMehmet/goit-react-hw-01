import React from "react";
import styles from "./headerInfo.module.css";
const HeaderInfo = ({ name, tag, location }) => {
  return (
    <div className={`${styles.container}`}>
      <p className={`${styles.name}`}>{name}</p>
      <p className={`${styles.tag}`}>@{tag}</p>
      <p className={`${styles.location}`}>
        {location.city}, {location.country}
      </p>
    </div>
  );
};

export default HeaderInfo;
