import React, { useEffect, useState } from "react";
import Progresstracking from "./progresstracking";
import planServices from "../../../services/planServices";
import "./progress.css";
import fastingplanStore from "../../../localStorage/fastingplanStore";
import planUtils from "../../../utils/planUtils";
import ContentLoader from "../../common/contentLoader";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

export default function ProgressComponent({ setLoadingGlobal }) {
  const history = useHistory();

  const [currentplan, setCurrentPlan] = useState(false);
  const [loading, setLoading] = useState(false);
  const [completeModal, setCompleteModel] = useState(false);
  const [completeModalData, setCompleteModalData] = useState({});
  const [currentItem, setcurrentItem] = useState({});


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
  }, []);

  const submitModal = () => {
    let FastingPlan = fastingplanStore.getFastingPlan()
    let plan = FastingPlan.fastingPlan.fasting_items.map(item => {
      if (item.time === currentItem.time) {
        item.status = "DONE"
      }
      return item;
    });
    FastingPlan.fastingPlan.fasting_items = plan;
    setCompleteModel(false);
    setLoadingGlobal(true);
    const completed = planServices.updatePlanItemStatus(FastingPlan.fastingPlan);
    setLoadingGlobal(false);
    if (completed) {
      history.push("/success")
    }
  }

  const handleModal = (item) => {
    if (!planUtils.verifyPlanUpdation(item)) {
      toast.error('You cannot complete this now!', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }
    setCompleteModel(true);
    setCompleteModalData(item);
    setcurrentItem(item);
  }

  return (
    <div>
      {
        loading ?
          <ContentLoader /> : <Progresstracking
            currentplan={currentplan}
            completeModal={completeModal}
            completeModalData={completeModalData}
            handleModal={handleModal}
            setCompleteModel={setCompleteModel}
            submitModal={submitModal}
          />
      }
    </div>
  );
}
