import React from "react";
import { FriendListItem } from "../FriendListItem";
import styles from "./friendList.module.css";
export const FriendList = ({ friends }) => {
  return (
    <ul className={`${styles.container} lato`}>
      {friends.map((friend, index) => (
        <li key={index}>
          <FriendListItem friend={friend} />
        </li>
      ))}
    </ul>
  );
};
