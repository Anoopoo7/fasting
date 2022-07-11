import React from "react";
import { useState } from "react";

export default function TimeData() {
  const [entrydata, setData] = useState([]);
  const handleAdd = () => {
    const time = document.getElementById("time").value;
    const data = document.getElementById("data").value;
    console.log(entrydata);
    setData([...entrydata, { time, data }]);
  };
  return (
    <div className="m-2">
      <div className="d-flex">
        <input
          type="time"
          className="form-control form-control-sm mt-2 flex-1 time-fi"
          id="time"
        />
        <input
          type="text"
          className="form-control form-control-sm mt-2 flex-2 txt-fi"
          placeholder="Name of the plan"
          id="data"
        />
      </div>
      <button
        className="form-control btn-dark form-control-sm mt-2 btn mb-4"
        onClick={handleAdd}
      >
        Add
      </button>
      {entrydata &&
        Array.isArray(entrydata) &&
        entrydata.map((each) => (
          <div className="d-flex">
            <div className="time-fi">{each.time}</div>
            <div className="txt-fi text-justify">{each.data}</div>
          </div>
        ))}
      {Array.isArray(entrydata) && entrydata.length>0 && <button
        className="form-control form-control-sm mt-2 btn btn-dark mb-4"
        // onClick={handleAdd}
      >
        next
      </button>}
    </div>
  );
}
