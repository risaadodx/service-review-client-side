import React from "react";
import { Link } from "react-router-dom";
import img from "../../../assets/images/guide.jpg";

const Banner = () => {
  return (
    <div className="mb-20">
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row">
          <img src={img} className="w-2/3 rounded-lg " />
          <div>
            <h1 className="text-5xl font-bold">Find Your Tour Guide!</h1>
            <p className="py-6">
              Explore the greatest local guides our services. You won’t be
              disappointed
            </p>
            <Link>
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
