import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../Contexts/Authprovider/AuthProvider";

const ServiceDetails = () => {
  const service = useLoaderData();
  const { _id, name, price, img, description } = service;

  const { user } = useContext(AuthContext);

  const handleAddReview = (event) => {
    event.preventDefault();
    const form = event.target;
    const userName = user?.displayName || "unregistered";
    const email = user?.email || "unregistered";
    const userImg = user?.photoURL || "unregistered";
    const message = form.message.value;

    const review = {
      service: _id,
      serviceImg: img,
      serviceName: name,
      userName: userName,
      userImg,
      email,
      message,
    };
    fetch(
      "https://b6a11-service-review-server-side-risaadodx.vercel.app/reviews",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(review),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          alert("Review added successfully");
          form.reset();
        }
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="mt-28 max-w-6xl mx-auto">
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
      <hr className="mt-40" />

      <form onSubmit={handleAddReview} className="mt-20 rounded-lg mb-20">
        <hr />
        <div>
          <textarea
            name="message"
            className="textarea w-2/4 mt-4 h-60 input-bordered"
            placeholder="Your Message"
          ></textarea>{" "}
        </div>
        <input
          type="submit"
          name=""
          id=""
          value="Add review"
          className="btn hover:btn btn-success text-white w-full mt-5 w-2/4"
        />
      </form>
    </div>
  );
};

export default ServiceDetails;
