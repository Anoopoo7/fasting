import React from "react";
import ProfileDetails from "../widgets/profilePage/profileDetails";
import "../widgets/profilePage/profile.css";
import FastPlan from "../widgets/profilePage/fastPlan";

export default function ProfilePage() {
  return (
    <div>
      <ProfileDetails />
      <FastPlan />
    </div>
  );
}
