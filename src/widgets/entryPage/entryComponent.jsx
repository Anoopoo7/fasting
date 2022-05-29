import React from "react";
import Categories from "./categories";
import Entry from "./entry";
import "./entry.css";

export default function EntryComponent() {
  return (
    <div>
      <Categories />
      <div className="input-group">
        <input
          type="text"
          className="form-control m-2"
          aria-label="Small"
          aria-describedby="inputGroup"
          placeholder="Search name"
        />
      </div>
      <div className="entry-outer">
        <Entry />
        <Entry />
        <Entry />
        <Entry />
        <Entry />
        <Entry />
        <Entry />
        <Entry />
        <Entry />
        <Entry />
        <Entry />
        <Entry />
        <Entry />
        <Entry />
        <Entry />
        <Entry />
        <Entry />
      </div>
    </div>
  );
}
