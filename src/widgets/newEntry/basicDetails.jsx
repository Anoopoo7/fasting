import React, { useRef } from "react";

export default function BasicDetails({ setData, data }) {
  let name = useRef("");
  let foodType = useRef("");
  let ageGroup = useRef("");
  let duration = useRef("");
  const handleClicks = () => {
    setData({
      ...data, BASICDATA: {
        name: name.current.value,
        foodType: foodType.current.value,
        ageGroup: ageGroup.current.value,
        duration: duration.current.value
      }
    })
  }

  return (
    <div className="m-2">
      <input
        type="text"
        className="form-control form-control-sm mt-2"
        placeholder="Name of the plan"
        ref={name}
      />
      <select className="form-control form-control-sm mt-2" ref={foodType}>
        <option disabled={false}>select food Type</option>
        <option disabled={false}>Vegetarien</option>
        <option disabled={false}>Non vegetarien</option>
      </select>

      <select className="form-control form-control-sm mt-2" ref={ageGroup}>
        <option disabled={false}>select Age Group</option>
        <option disabled={false}>Babies</option>
        <option disabled={false}>Adults</option>
        <option disabled={false}>Grand Members</option>
      </select>

      <input
        type="number"
        className="form-control form-control-sm mt-2"
        placeholder="Duration (Days)"
        ref={duration}
      />
      <button className="btn btn-dark form-control form-control-sm mt-2"
        onClick={handleClicks}
      >
        next
      </button>
    </div>
  );
}
