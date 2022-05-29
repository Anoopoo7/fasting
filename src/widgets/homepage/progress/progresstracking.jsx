import React from "react";

export default function Progresstracking() {
  const trackingElement = () => {
    return (
      <div className="tracking-card">
        <div className="time"> 06:30 am</div>
        <div className="description">Lorem, ipsum</div>
      </div>
    );
  };
  return (
    <div>
      <div className="card m-2">
        <div className="card-body">
          <h5>Keto level III</h5>
          {trackingElement()}
          {trackingElement()}
          {trackingElement()}
          {trackingElement()}
          {trackingElement()}
          {trackingElement()}
          {trackingElement()}
          {trackingElement()}
          {trackingElement()}
        </div>
      </div>
    </div>
  );
}
