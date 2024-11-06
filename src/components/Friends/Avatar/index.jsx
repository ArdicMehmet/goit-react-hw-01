import React from "react";
import styles from "./avatar.module.css";
const Avatar = ({ avatar }) => {
  return (
    <div className={`${styles.container}`}>
      <img src={avatar} alt="Avatar" width="64" />
    </div>
  );
};

export default Avatar;
