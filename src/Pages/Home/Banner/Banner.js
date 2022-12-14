import React from "react";
import { Link } from "react-router-dom";
import img from "../../../assets/images/guide.jpg";

const Banner = () => {
  return (
    <div className="mb-20">
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row px-5 lg:px-0">
          <img
            src={img}
            className="lg:w-2/3 rounded-lg lg:mr-5 mb-5 lg:mb-0"
            alt=""
          />
          <div>
            <h1 className="text-5xl font-bold">Find Your Tour Guide!</h1>
            <p className="py-6">
              Explore the greatest local guides our services. You won’t be
              disappointed
            </p>
            <Link to="/register">
              <button className="btn btn-success hover:btn-accent">
                Join Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
