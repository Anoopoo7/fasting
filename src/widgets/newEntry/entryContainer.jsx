import React, { useEffect } from "react";
import NewEntryComponent from "./entryComponent";
import { useState } from "react";
import planServices from "../../services/planServices";
import "./entry.css";
import userStorage from "../../localStorage/userStorage";
import { useHistory } from "react-router-dom";

export default function NewEntryContainer({ setLoading }) {
  const [basicDetails, setBasicDetails] = useState(false);
  const [timeDateShedules, setTimeDateShedules] = useState(false);
  const [labels, setLabels] = useState(false);
  const [privacy, setprivacy] = useState(false);
  const [data, setData] = useState({});
  const [submit, setSubmit] = useState(true);

  const history = useHistory();

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
  useEffect(() => {
    if (data.TIMEDATA != null && data.BASICDATA != null) {
      setSubmit(false);
    }
  }, [data])

  const submitPlan = async () => {
    const userId = userStorage.getUser() ? userStorage.getUser().id : false;
    const sendingdata = {
      name: data.BASICDATA.name,
      foodType: data.BASICDATA.foodType,
      ageGroup: data.BASICDATA.ageGroup,
      duration: data.BASICDATA.duration,
      fasting_items: data.TIMEDATA,
      labels: ["weight loss"],
      visible: true,
      accesseble: true,
      createdBy: userId,
      category: [
        "body fit"
      ]
    }
    setLoading(true);
    const success = await planServices.ceateNewPlan(sendingdata);
    console.log(success);
    if (success) {
      history.push("/success")
    }
    setLoading(false);

  }

  return (
    <div>
      <NewEntryComponent
        basicDetails={basicDetails}
        timeDateShedules={timeDateShedules}
        labels={labels}
        privacy={privacy}
        handleClick={handleClick}
        data={data}
        setData={setData}
        submit={submit}
        submitPlan={submitPlan}
      />
    </div>
  );
}
