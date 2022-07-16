import React from "react";
import "../widgets/profilePage/profile.css";
import AnimatedPage from "../animation/AnimatedPage";
import ProfileContainer from "../widgets/profilePage/profileContainer";

export default function ProfilePage({setLoading}) {
  return (
    <AnimatedPage>
      <ProfileContainer setLoading={setLoading} />
    </AnimatedPage>
  );
}
