import React from "react";
import ProfileDetails from "../widgets/profilePage/profileDetails";
import "../widgets/profilePage/profile.css";
import FastPlan from "../widgets/profilePage/fastPlan";
import AnimatedPage from "../animation/AnimatedPage";

export default function ProfilePage() {
  return (
    <AnimatedPage>
      <ProfileDetails />
      <FastPlan />
    </AnimatedPage>
  );
}
