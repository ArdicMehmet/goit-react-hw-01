import React from "react";
import styles from "./avatarImage.module.css";
const AvatarImage = () => {
  return (
    <img
      className={`${styles.avatarImage}`}
      src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
      alt="User avatar"
    />
  );
};
export default AvatarImage;
