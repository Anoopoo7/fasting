import React, { useEffect, useState } from "react";
import Pagination from "../common/pagination";
import Categories from "./categories";
import planServices from "../../services/planServices";
import Entry from "./entry";
import "./entry.css";
import ContentLoader from "../common/contentLoader";
import fastingplanStore from "../../localStorage/fastingplanStore";

export default function EntryComponent() {
  const [plans, setPlans] = useState(null);
  const [loading, setLoading] = useState(false);

  const getPlans = async (page) => {
    setLoading(true);
    const plan = await planServices.getListedPlan(page);
    setLoading(false);
    setPlans(plan);
  }

  const setSelectPlan = (plan) => {
    fastingplanStore.setSelectedPlan(plan);
  }
  useEffect(() => {
    getPlans(0);
  }, []);
  return (
    <div>
      <Categories />
      <div className="input-group">
        <input
          type="text"
          className="form-control m-2"
          aria-label="Small"
          aria-describedby="inputGroup"
          placeholder="Search name"
        />
      </div>
      <div className="entry-outer">
        {
          loading ? <ContentLoader /> :
            plans && plans.fastingPlan && plans && plans.fastingPlan.map(each => <Entry plan={each} setSelectPlan={setSelectPlan} />)
        }
        {!loading && plans && (plans.pages > 1) && <Pagination count={plans.pages} clickFunction={getPlans} currentPage={plans.currentPage} />}
      </div>
    </div>
  );
}
