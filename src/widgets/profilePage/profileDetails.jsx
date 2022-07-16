import React from "react";

export default function ProfileDetails({ completed, setCompleted, goSettings, curretUser }) {
  return (
    <div className="profile-outer">
      <div className="profile-pic">
        <img className="profile-img" src={curretUser.image} alt="" />
      </div>
      <br />
      <b>{curretUser.first_name}</b>
      <small>{curretUser.email}</small>
      <i className="p-2 pl-4 pr-4 text-center text-secondary">
        <small>
          '{curretUser.bio} '
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
