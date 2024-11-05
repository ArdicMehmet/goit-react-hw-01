import React from "react";
import AvatarImage from "../AvatarImage";
import styles from "./avatar.module.css";
const Avatar = () => {
  return (
    <div className={`${styles.container}`}>
      <AvatarImage />
    </div>
  );
};

export default Avatar;
