import React from "react";
import Categories from "../widgets/entryPage/categories";
import EntryComponent from "../widgets/entryPage/entryComponent";
import AnimatedPage from "../animation/AnimatedPage";

export default function Entrypage({setLoading}) {
  return (
    <AnimatedPage>
      <EntryComponent/>
    </AnimatedPage>
  );
}
