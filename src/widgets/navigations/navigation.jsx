import React from "react";
import { NavLink } from "react-router-dom";
import "./navigation.css";

export default function Navigation() {
  return (
    <div className="navigation-outer">
      <div className="navigation-inner">
        <NavLink activeClassName="nav-active" to="/home">
          <img
            src="/images/icons8-fish-and-chips-50.png"
            className={`img-fluid icons }`}
            width={30}
            alt=""
          />
        </NavLink>
        <NavLink activeClassName="nav-active" to="/entries">
          <img
            src="/images/icons8-coming-soon-50.png"
            className={`img-fluid icons ve" `}
            width={30}
            alt=""
          />
        </NavLink>
        <NavLink activeClassName="nav-active" to="/workout">
          <img
            src="/images/icons8-creative-commons-remix-50.png"
            className={`img-fluid icons `}
            width={30}
            alt=""
          />
        </NavLink>
        <NavLink activeClassName="nav-active" to="/profile">
          <img
            src="/images/icons8-customer-50.png"
            className={`img-fluid icons `}
            width={30}
            alt=""
          />
        </NavLink>
      </div>
    </div>
  );
}
