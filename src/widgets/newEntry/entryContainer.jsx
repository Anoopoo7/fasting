import React from "react";
import NewEntryComponent from "./entryComponent";
import { useState } from "react";
import "./entry.css";

export default function NewEntryContainer() {
  const [basicDetails, setBasicDetails] = useState(false);
  const [timeDateShedules, setTimeDateShedules] = useState(false);
  const [labels, setLabels] = useState(false);
  const [privacy, setprivacy] = useState(false);

  const resetFlag = () => {
    setBasicDetails(false);
    setTimeDateShedules(false);
    setLabels(false);
    setprivacy(false);
  };
  const handleClick = (dropDown) => {
    resetFlag();
    switch (dropDown) {
      case "basicDetails":
        setBasicDetails(true);
        break;
      case "timeDateShedules":
        setTimeDateShedules(true);
        break;
      case "labels":
        setLabels(true);
        break;
      case "privacy":
        setprivacy(true);
        break;
      default:
        break;
    }
  };
  return (
    <div>
      <NewEntryComponent
        basicDetails={basicDetails}
        timeDateShedules={timeDateShedules}
        labels={labels}
        privacy={privacy}
        handleClick={handleClick}
      />
    </div>
  );
}
