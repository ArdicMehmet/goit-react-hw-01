import React from "react";
import styles from "./profile.module.css";
import ProfileHeader from "../ProfileHeader";
import { ProfileContent } from "../ProfileContent";
const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={`${styles.container} lato`}>
      <ProfileHeader image={image} name={name} tag={tag} location={location} />
      <ProfileContent stats={stats} />
    </div>
  );
};

export default Profile;
