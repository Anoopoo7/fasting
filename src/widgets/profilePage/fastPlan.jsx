import React from "react";

export default function FastPlan({ plans }) {
  return (
    <div className="profile-outer profile-scroller">
      {plans.map(plan =>
        <a href="/entry" className={`fastPlan-outer mt-3 ${plan.enabled ? "active" : ""}`}>
          <b>
            <h6>{plan.fastingPlan.name}</h6>
          </b>
          <b>
            <h6>{plan.startDate.split("T")[0]}</h6>
          </b>
        </a>)
      }
    </div>
  );
}
