import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { _id, name, img, price, description } = service;
  return (
    <div>
      <div className="card w-full border border-solid outline-1">
        <div className="p-6">
          <img
            className="rounded-lg"
            style={{ height: "208px", width: "318px" }}
            src={img}
            alt="Shoes"
          />
          <h2 className="card-title mt-5">{name}</h2>
          <div>
            {description.length > 100 ? (
              <p>{description.slice(0, 100) + "..."}</p>
            ) : (
              <p>{description}</p>
            )}
          </div>
          <div className="flex justify-between  mt-5">
            <p className=" font-bold text-red-500">Price: ${price}</p>
          </div>
          <Link to={`/checkout/${_id}`}>
            <button className="btn btn-outline hover:btn-success  w-full mt-5">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
