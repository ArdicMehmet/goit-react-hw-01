import React from "react";
import styles from "./profileStat.module.css";
const ProfileStat = () => {
  return (
    <li className={`${styles.container}`}>
      <span className={`${styles.statName}`}>Followers</span>
      <span className={`${styles.statContent}`}>1000</span>
    </li>
  );
};

export default ProfileStat;
