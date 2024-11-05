import React from "react";
import Avatar from "../Avatar";
import styles from "./profileHeader.module.css";
import HeaderInfo from "../HeaderInfo";
const ProfileHeader = () => {
  return (
    <div className={`${styles.container}`}>
      <Avatar />
      <HeaderInfo />
    </div>
  );
};

export default ProfileHeader;
