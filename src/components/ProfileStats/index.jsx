import React from "react";
import styles from "./profileStats.module.css";
import ProfileStat from "../ProfileStat";
const ProfileStats = ({ stats }) => {
  return (
    <ul className={`${styles.container}`}>
      {stats.map((stat, index) => (
        <ProfileStat key={index} name={stat.name} content={stat.content} />
      ))}
    </ul>
  );
};

export default ProfileStats;
