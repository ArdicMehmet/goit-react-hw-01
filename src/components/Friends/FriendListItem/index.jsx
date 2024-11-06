import React from "react";
import styles from "./friendListItem.module.css";
import Avatar from "../Avatar";
export const FriendListItem = ({ friend }) => {
  return (
    <div className={`${styles.container}`}>
      <Avatar avatar={friend.avatar} />
      <p className={`${styles.name}`}>{friend.name}</p>
      <p
        className={`${styles.status} ${
          friend.isOnline ? styles.active : styles.passive
        }`}
      >
        {friend.isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};
