import React from "react";
import Stars from "../common/stars";
import { Link } from "react-router-dom";

export default function Entry({ plan }) {
  return (
    <a href="/entry" className="entry-card text-dark">
      <h5>{plan.name}</h5>
      <table>
        <tr>
          <td>
            <small> Deficulty level </small>
          </td>
          <td>
            <Stars rate={plan.deficultyRate} />
          </td>
        </tr>
        <tr>
          <td>
            <small> Success rate </small>
          </td>
          <td>
            <Stars rate={plan.successRate} />
          </td>
        </tr>
      </table>
      <div className="labels">
        {plan.labels.includes("VEGETARIAN") && <img src="/images/icons8-vegetarian-mark-50.png" width={18} alt="" />}
        {plan.labels.includes("ADULTONLY") && <img src="/images/icons8-18-plus-50.png" width={20} alt="" />}
        {plan.labels.includes("EXPENSIVE") && <img src="/images/icons8-expensive-price-50.png" width={25} alt="" />}
        {plan.labels.includes("MEDICAL") && <img src="/images/icons8-hospital-3-24.png" width={22} alt="" />}
      </div>
      <div className="using">
        <h4>
          {plan.totalUsers} <img src="/images/icons8-youtube-live-50.png" width={20} alt="" />
        </h4>
      </div>
      <br />
      <br />
      <button className="btn">Start</button>
    </a>
  );
}
