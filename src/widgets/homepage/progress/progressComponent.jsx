import React, { useEffect, useState } from "react";
import Progresstracking from "./progresstracking";
import planServices from "../../../services/planServices";
import "./progress.css";
import fastingplanStore from "../../../localStorage/fastingplanStore";
import planUtils from "../../../utils/planUtils";

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
    }
  }
  useEffect(() => {
    let plan = fastingplanStore.getFastingPlan();
    if (plan) {
      let activeplan = planUtils.verifyPlan(plan);
      if (activeplan) {
        setCurrentPlan({ ...plan, fasting_items: activeplan });
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
          <div className="m-5">
            <h6 className="text-center">Searching for your dietPlan, please wait!</h6>
            <div className="d-flex justify-content-center">
              <div class="lds-ellipsis">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          </div>
          :
          <Progresstracking currentplan={currentplan} />
      }
    </div>
  );
}
