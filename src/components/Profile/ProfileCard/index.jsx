import React from "react";
import styles from "./profileCard.module.css";
import ProfileHeader from "../ProfileHeader";
import { ProfileContent } from "../ProfileContent";
const ProfileCard = ({ name, tag, location, image, stats }) => {
  return (
    <div className={`${styles.container} lato`}>
      <ProfileHeader image={image} name={name} tag={tag} location={location} />
      <ProfileContent stats={stats} />
    </div>
  );
};

export default ProfileCard;
