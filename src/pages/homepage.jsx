import React from "react";
import Herobanner from "../widgets/homepage/herobanner";
import Navbar from "../widgets/homepage/navbar";
import ProgressComponent from "../widgets/homepage/progress/progressComponent";
import AnimatedPage from "../animation/AnimatedPage";

export default function Homepage() {
  return (
    <AnimatedPage>
      <Navbar />
      <Herobanner />
      <ProgressComponent />
    </AnimatedPage>
  );
}
