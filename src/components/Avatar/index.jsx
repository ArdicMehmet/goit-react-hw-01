import React from "react";
import AvatarImage from "../AvatarImage";
import styles from "./avatar.module.css";
const Avatar = ({ image }) => {
  return (
    <div className={`${styles.container}`}>
      <AvatarImage image={image} />
    </div>
  );
};

export default Avatar;
