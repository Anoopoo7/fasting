import React from "react";
import "./navigation.css";

export default function Navigation() {
  const path = window.location.pathname;
  console.log(path);
  return (
    <div className="navigation-outer">
      <div className="navigation-inner">
        <a href="/">
          <img
            src="/images/icons8-fish-and-chips-50.png"
            className={`img-fluid icons ${path === "/" ? "icon-active" : ""}`}
            width={30}
            alt=""
          />
        </a>
        <a href="/entries">
          <img
            src="/images/icons8-coming-soon-50.png"
            className={`img-fluid icons ${
              path === "/entries" ? "icon-active" : ""
            }`}
            width={30}
            alt=""
          />
        </a>
        <a href="/workout">
          <img
            src="/images/icons8-creative-commons-remix-50.png"
            className={`img-fluid icons ${
              path === "/workout" ? "icon-active" : ""
            }`}
            width={30}
            alt=""
          />
        </a>
        <a href="/profile">
          <img
            src="/images/icons8-customer-50.png"
            className={`img-fluid icons ${
              path === "/profile" ? "icon-active" : ""
            }`}
            width={30}
            alt=""
          />
        </a>
      </div>
    </div>
  );
}
