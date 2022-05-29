import React from "react";

export default function Privacy() {
  return (
    <div className="label-outer">
      <table className="text-justify p-5">
        <tr>
          <td>
            <input type="checkbox" name="" id="" />
          </td>
          <td>Make it visibe to all</td>
        </tr>
        <tr>
          <td>
            <input type="checkbox" name="" id="" />
          </td>
          <td>Make it commentable</td>
        </tr>
        <tr>
            <td>

            </td>
          <small>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ipsum
            architecto nobis blanditiis nam, at exercitationem provident culpa
            temporibus perspiciatis?
          </small>
        </tr>
        <tr>
          <td>
            <input type="checkbox" name="" id="" />
          </td>
          <td>accept the privacy and policy</td>
        </tr>
      </table>
      <button className="btn btn-dark form-control form-control-sm m-2">
        next
      </button>
    </div>
  );
}
