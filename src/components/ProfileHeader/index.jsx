import React from "react";
import Avatar from "../Avatar";
import styles from "./profileHeader.module.css";
import HeaderInfo from "../HeaderInfo";
const ProfileHeader = ({ image, name, tag, location }) => {
  return (
    <div className={`${styles.container}`}>
      <Avatar image={image} />
      <HeaderInfo name={name} tag={tag} location={location} />
    </div>
  );
};

export default ProfileHeader;
