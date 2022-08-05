import React from "react";

export default function Label({ setData, data }) {
  return (
    <div className="label-outer">
      <table>
        <tr>
          <td>
            <input type="checkbox" name="" id="" />
          </td>
          <td>item1</td>
        </tr>
        <tr>
          <td>
            <input type="checkbox" name="" id="" />
          </td>
          <td>item2</td>
        </tr>
        <tr>
          <td>
            <input type="checkbox" name="" id="" />
          </td>
          <td>item3</td>
        </tr>
      </table>
      <button className="btn btn-dark form-control form-control-sm m-2">
        next
      </button>
    </div>
  );
}
