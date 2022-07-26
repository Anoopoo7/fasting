import React, { useEffect, useState } from "react";
import Progresstracking from "./progresstracking";
import planServices from "../../../services/planServices";
import "./progress.css";
import fastingplanStore from "../../../localStorage/fastingplanStore";
import planUtils from "../../../utils/planUtils";
import ContentLoader from "../../common/contentLoader";

export default function ProgressComponent() {
  const [currentplan, setCurrentPlan] = useState(false);
  const [loading, setLoading] = useState(false);

  const getUserPlan = async () => {
    setLoading(true);
    let plan = await planServices.getUserPlan();
    setLoading(false);
    let activeplan = planUtils.verifyPlan(plan);
    if (activeplan) {
      setCurrentPlan({ ...plan, fasting_items: activeplan });
    } else {
      fastingplanStore.deletePlan();
    }
  }
  useEffect(() => {
    let plan = fastingplanStore.getFastingPlan();
    if (plan) {
      let activeplan = planUtils.verifyPlan(plan);
      if (activeplan) {
        setCurrentPlan({ ...plan, fasting_items: activeplan });
      } else {
        fastingplanStore.deletePlan();
      }
    }
    else {
      getUserPlan();
    }
  }, [])
  return (
    <div>
      {
        loading ?
          <ContentLoader /> : <Progresstracking currentplan={currentplan} />
      }
    </div>
  );
}
