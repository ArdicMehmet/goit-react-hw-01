import React from "react";
import styles from "./profileStat.module.css";
const ProfileStat = ({ name, content }) => {
  return (
    <li className={`${styles.container}`}>
      <span className={`${styles.statName}`}>{name}</span>
      <span className={`${styles.statContent}`}>{content}</span>
    </li>
  );
};

export default ProfileStat;
