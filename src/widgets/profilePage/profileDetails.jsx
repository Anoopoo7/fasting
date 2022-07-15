import React from "react";

export default function ProfileDetails({ completed, setCompleted, goSettings }) {
  return (
    <div className="profile-outer">
      <div className="profile-pic">
        <img src="" alt="" />
      </div>
      <br />
      <b>Abu Abraham</b>
      <small>abu.abraham@gmail.com</small>
      <i className="p-2 pl-4 pr-4 text-center text-secondary">
        <small>
          ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
          veritatis, repudiandae illo animi ex sed.'
        </small>
      </i>
      <div className="switcher">
        <small className={`sm1 ${completed ? "active" : ""}`} onClick={() => { setCompleted(true) }}>completed</small>
        <small className={`sm2 ${!completed ? "active" : ""}`} onClick={() => { setCompleted(false) }}>Dropped</small>
        <img onClick={goSettings} className="settings-icon" src="/images/icons8-setting-64.png" width={25} alt="" />
      </div>
    </div>
  );
}
