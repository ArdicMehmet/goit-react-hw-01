import React from "react";
import styles from "./profileContent.module.css";
import ProfileStats from "../ProfileStats";
export const ProfileContent = ({ stats }) => {
  return (
    <div className={`${styles.container}`}>
      <ProfileStats stats={stats} />
    </div>
  );
};
