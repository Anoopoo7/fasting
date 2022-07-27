import React, { useEffect, useState } from "react";
import AnimatedPage from "../animation/AnimatedPage";
import EntryDetailsComponent from "../widgets/entryDetails/entryDetailsComponent";

export default function EntryDetails({ setLoading }) {

  return (
    <AnimatedPage>
      <EntryDetailsComponent setLoading={setLoading} />
    </AnimatedPage>
  );
}
