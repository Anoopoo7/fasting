import React from "react";
import Herobanner from "../widgets/homepage/herobanner";
import Navbar from "../widgets/homepage/navbar";
import ProgressComponent from "../widgets/homepage/progress/progressComponent";

export default function Homepage() {
  return (
    <div>
      <Navbar />
      <Herobanner />
      <ProgressComponent />
    </div>
  );
}
