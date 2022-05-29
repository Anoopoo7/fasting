import React from "react";

export default function BasicDetails() {
  return (
    <div className="m-2">
      <input
        type="text"
        className="form-control form-control-sm mt-2"
        placeholder="Name of the plan"
      />
      <select className="form-control form-control-sm mt-2">
        <option disabled={false}>select food Type</option>
        <option disabled={false}>Vegetarien</option>
        <option disabled={false}>Non vegetarien</option>
      </select>

      <select className="form-control form-control-sm mt-2">
        <option disabled={false}>select Age Group</option>
        <option disabled={false}>Babies</option>
        <option disabled={false}>Adults</option>
        <option disabled={false}>Grand Members</option>
      </select>

      <input
        type="number"
        className="form-control form-control-sm mt-2"
        placeholder="Duration (Days)"
      />
      <button className="btn btn-dark form-control form-control-sm mt-2">
        next
      </button>
    </div>
  );
}
