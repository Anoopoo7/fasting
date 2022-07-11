import React from "react";

export default function ProfileDetails({logout}) {
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
      <div>
        <span className="btn btn-sm mr-2 btn btn-outline-dark">
          <img src="images/icons8-edit-64.png" width={15} alt="" />{" "}
          Edit
        </span>
        <span className="btn btn-sm ml-2 btn btn-outline-dark" onClick={logout}>
          <img src="images/icons8-logout-48.png" width={20} alt="" />{" "}
          logout
        </span>
      </div>
    </div>
  );
}
