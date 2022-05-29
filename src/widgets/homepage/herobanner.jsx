import React from "react";

export default function Herobanner() {
  return (
    <div
      id="carouselExampleSlidesOnly"
      className="carousel slide p-2"
      data-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            className="d-block w-100 carousal-height"
            src="https://img.freepik.com/free-vector/overweight-kids-training-plan-abstract-concept-vector-illustration-child-obesity-overweight-children-eating-disorder-energy-imbalance-kids-training-unhealthy-lifestyle-abstract-metaphor_335657-6054.jpg?w=2000"
            alt="First slide"
          />
          <div className="carousel-caption">
              {/* <button className="btn btn-dark">click</button> */}
          </div>
        </div>
        <div className="carousel-item">
          <img
            className="d-block w-100 carousal-height"
            src="https://img.freepik.com/free-vector/dukan-diet-abstract-concept-vector-illustration-weightloss-diet-low-carb-food-diet-plan-fatfree-dairy-oat-bran-vegetarian-proteins-limiting-carbohydrates-burn-fat-abstract-metaphor_335657-5960.jpg?w=2000"
            alt="Second slide"
          />
          <div className="carousel-caption">
              {/* <button className="btn btn-dark">click</button> */}
          </div>
        </div>
        <div className="carousel-item">
          <img
            className="d-block w-100 carousal-height"
            src="https://img.freepik.com/free-vector/smart-training-abstract-concept-vector-illustration-smart-training-online-programs-tools-new-gym-technology-fitness-coaching-application-improve-health-fat-loss-toning-abstract-metaphor_335657-6076.jpg?w=2000"
            alt="Third slide"
          />
          <div className="carousel-caption">
              {/* <button className="btn btn-dark">click</button> */}
          </div>
        </div>
      </div>
    </div>
  );
}
