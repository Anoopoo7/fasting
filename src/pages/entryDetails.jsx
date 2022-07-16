import React from "react";
import ProgressComponent from "../widgets/homepage/progress/progressComponent";
import AnimatedPage from "../animation/AnimatedPage";

export default function EntryDetails({setLoading}) {
  return (
    <AnimatedPage>
      <ProgressComponent />
    </AnimatedPage>
  );
}
