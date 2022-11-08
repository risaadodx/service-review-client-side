import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const ServiceDetails = () => {
  const service = useLoaderData();
  const { _id, name, price, img, description } = service;
  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <img style={{ width: "100px" }} src={img} alt="" />

          <h2 className="text-2xl font-bold ml-5">{name}</h2>
        </div>
        <div className="flex items-center">
          <div>
            <h2 className="text-2xl font-bold mr-5">Price: ${price}</h2>
          </div>
          <div>
            <Link>
              <button className="btn btn-outline hover:btn-success  w-full mt-5">
                Book Now
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-20">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ServiceDetails;
