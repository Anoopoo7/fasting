import React from "react";
import Stars from "../stars";
import { Link } from "react-router-dom";

export default function Entry() {
  return (
    <a href="/entry" className="entry-card text-dark">
      <h5>KETO</h5>
      <table>
        <tr>
          <td>
            <small> Deficulty level </small>
          </td>
          <td>
            <Stars rate={4} />
          </td>
        </tr>
        <tr>
          <td>
            <small> Success rate </small>
          </td>
          <td>
            <Stars rate={3} />
          </td>
        </tr>
      </table>
      <div className="labels">
        {/* <img src="/images/icons8-vegetarian-mark-50.png" width={18} alt="" /> */}
        <img src="/images/icons8-18-plus-50.png" width={20} alt="" />
        <img src="/images/icons8-expensive-price-50.png" width={25} alt="" />
        <img src="/images/icons8-hospital-3-24.png" width={22} alt="" />
      </div>
      <div className="using">
        <h4>
          547 <img src="/images/icons8-youtube-live-50.png" width={25} alt="" />
        </h4>
      </div>
      <br />
      <br />
      <button className="btn">Start</button>
    </a>
  );
}
