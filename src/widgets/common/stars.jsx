import React from "react";

export default function Stars({ rate }) {
  const zero = (
    <div className="d-flex align-items-center">
      <img src="/images/icons8-star-50 (1).png" width={12} height={12} alt="" />
      <img src="/images/icons8-star-50 (1).png" width={12} height={12} alt="" />
      <img src="/images/icons8-star-50 (1).png" width={12} height={12} alt="" />
      <img src="/images/icons8-star-50 (1).png" width={12} height={12} alt="" />
      <img src="/images/icons8-star-50 (1).png" width={12} height={12} alt="" />
    </div>
  );
  const one = (
    <div className="d-flex align-items-center">
      <img src="/images/icons8-star-50.png" width={12} height={12} alt="" />
      <img src="/images/icons8-star-50 (1).png" width={12} height={12} alt="" />
      <img src="/images/icons8-star-50 (1).png" width={12} height={12} alt="" />
      <img src="/images/icons8-star-50 (1).png" width={12} height={12} alt="" />
      <img src="/images/icons8-star-50 (1).png" width={12} height={12} alt="" />
    </div>
  );
  const two = (
    <div className="d-flex align-items-center">
      <img src="/images/icons8-star-50.png" width={12} height={12} alt="" />
      <img src="/images/icons8-star-50.png" width={12} height={12} alt="" />
      <img src="/images/icons8-star-50 (1).png" width={12} height={12} alt="" />
      <img src="/images/icons8-star-50 (1).png" width={12} height={12} alt="" />
      <img src="/images/icons8-star-50 (1).png" width={12} height={12} alt="" />
    </div>
  );
  const three = (
    <div className="d-flex align-items-center">
      <img src="/images/icons8-star-50.png" width={12} height={12} alt="" />
      <img src="/images/icons8-star-50.png" width={12} height={12} alt="" />
      <img src="/images/icons8-star-50.png" width={12} height={12} alt="" />
      <img src="/images/icons8-star-50 (1).png" width={12} height={12} alt="" />
      <img src="/images/icons8-star-50 (1).png" width={12} height={12} alt="" />
    </div>
  );
  const four = (
    <div className="d-flex align-items-center">
      <img src="/images/icons8-star-50.png" width={12} height={12} alt="" />
      <img src="/images/icons8-star-50.png" width={12} height={12} alt="" />
      <img src="/images/icons8-star-50.png" width={12} height={12} alt="" />
      <img src="/images/icons8-star-50.png" width={12} height={12} alt="" />
      <img src="/images/icons8-star-50 (1).png" width={12} height={12} alt="" />
    </div>
  );
  const five = (
    <div className="d-flex align-items-center">
      <img src="/images/icons8-star-50.png" width={12} height={12} alt="" />
      <img src="/images/icons8-star-50.png" width={12} height={12} alt="" />
      <img src="/images/icons8-star-50.png" width={12} height={12} alt="" />
      <img src="/images/icons8-star-50.png" width={12} height={12} alt="" />
      <img src="/images/icons8-star-50.png" width={12} height={12} alt="" />
      <img src="/images/icons8-star-50.png" width={12} height={12} alt="" />
    </div>
  );
  const calculate = (rate) => {
    if (rate === 0) {
      return zero;
    } else if (rate === 1) {
      return one;
    } else if (rate === 2) {
      return two;
    } else if (rate === 3) {
      return three;
    } else if (rate === 4) {
      return four;
    } else if (rate === 5) {
      return five;
    } else {
      return zero;
    }
  };
  return calculate(rate);
}
