import React from "react";
import styles from "./avatarImage.module.css";
const AvatarImage = ({ image }) => {
  return (
    <img
      className={`${styles.avatarImage}`}
      src={`${image}`}
      alt="User avatar"
    />
  );
};
export default AvatarImage;
