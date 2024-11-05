import React from "react";
import styles from "./profile.module.css";
import ProfileHeader from "../ProfileHeader";
import { ProfileContent } from "../ProfileContent";
const Profile = () => {
  return (
    <div className={`${styles.container} lato`}>
      <ProfileHeader />
      <ProfileContent />
    </div>
  );
};

export default Profile;
