import React from "react";
import styles from "./profileStats.module.css";
import ProfileStat from "../ProfileStat";
const ProfileStats = () => {
  return (
    <ul className={`${styles.container}`}>
      <ProfileStat />
      <ProfileStat />
      <ProfileStat />
    </ul>
  );
};

export default ProfileStats;
