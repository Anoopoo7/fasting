import React from "react";
import AnimatedPage from "../../animation/AnimatedPage";
import BasicDetails from "./basicDetails";
import Label from "./label";
import Privacy from "./privacy";
import TimeData from "./timeData";

export default function NewEntryComponent({
  basicDetails,
  timeDateShedules,
  labels,
  privacy,
  handleClick,
}) {
  return (
    <div className="new-entry-outer">
      <h5>Create New Plan</h5>
      <small className="m-3">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa impedit
        eligendi hic minima neque obcaecati.
      </small>
      <hr />
      <div className="cards m-2">
        <div className="card" onClick={() => handleClick("basicDetails")}>
          <div className="card-body">Basic Details</div>
          {basicDetails && <AnimatedPage> <BasicDetails /></AnimatedPage>}
          {/* <img
            src="/images/icons8-down-24.png"
            className="tick p-2"
            width={30}
            alt=""
          /> */}
          <img
            src="/images/icons8-checked-checkbox-24.png"
            className="tick"
            width={30}
            alt=""
          />
        </div>
      </div>
      <div className="cards m-2">
        <div className="card" onClick={() => handleClick("timeDateShedules")}>
          <div className="card-body">Time-Data Schedules</div>
          {timeDateShedules && <AnimatedPage><TimeData /></AnimatedPage>}
          <img
            src="/images/icons8-down-24.png"
            className="tick p-2"
            width={30}
            alt=""
          />
          {/* <img
            src="/images/icons8-checked-checkbox-24.png"
            className="tick"
            width={30}
            alt=""
          /> */}
        </div>
      </div>
      <div className="cards m-2">
        <div className="card" onClick={() => handleClick("labels")}>
          <div className="card-body">Labels</div>
          {labels && <AnimatedPage><Label /></AnimatedPage>}
          {/* <img
            src="/images/icons8-down-24.png"
            className="tick p-2"
            width={30}
            alt=""
          /> */}
          <img
            src="/images/icons8-checked-checkbox-24.png"
            className="tick"
            width={30}
            alt=""
          />
        </div>
      </div>
      <div className="cards m-2">
        <div className="card" onClick={() => handleClick("privacy")}>
          <div className="card-body">Privacy & Settings</div>
          {privacy && <AnimatedPage><Privacy /></AnimatedPage>}
          <img
            src="/images/icons8-down-24.png"
            className="tick p-2"
            width={30}
            alt=""
          />
          {/* <img
            src="/images/icons8-checked-checkbox-24.png"
            className="tick"
            width={30}
            alt=""
          /> */}
        </div>
      </div>
      <button className="btn btn-dark cards" disabled={true}>
        Submit
      </button>
    </div>
  );
}
