import React from "react";
import NewEntryContainer from "../widgets/newEntry/entryContainer";
import AnimatedPage from "../animation/AnimatedPage";

export default function Workoutpage() {
  return (
    <AnimatedPage>
      <NewEntryContainer />
    </AnimatedPage>
  );
}
