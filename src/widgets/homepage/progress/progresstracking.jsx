import React from "react";

export default function Progresstracking({ currentplan }) {
  const trackingElement = (each) => {
    return (
      <div className={`tracking-card ${each.status == "DONE" ? "bg-success" : each.status == "PASSED" ? "bg-secondary" : ""}`}>
        <div className="time"> {each.time}</div>
        <div className="description">{each.data}</div>
      </div>
    );
  };
  return (
    <div>
      {
        currentplan ?
          <div className="card m-2">
            <div className="card-body">
              <h5>{currentplan.fastingPlan.name}</h5>
              {
                currentplan.fasting_items.map(each => trackingElement(each))
              }
            </div>
          </div>
          :
          <div className="text-center mt-5">
            <img src="/giff/desolazione_empty_1.gif" alt="" width={350} />
            <br />
            <small>You have't activated any diet plan for Today !</small>
          </div>
      }
    </div>
  );
}
