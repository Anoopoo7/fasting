import React from "react";

export default function ProfileDetails() {
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
    </div>
  );
}
