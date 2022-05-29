import React from "react";
// import profileicon from "images/icons8-male-user-50.png"

export default function Navbar() {
  return (
    <div className="row">
      <div className="container d-flex justify-content-between align-items-center m-2">
        <h4>Fasting</h4>
        <img
          src="/images/icons8-reddit-inbox-50.png"
          width={25}
          height={25}
          className="img- fluid"
          alt=""
        />
      </div>
    </div>
  );
}
