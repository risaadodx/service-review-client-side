import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ServiceCard from "../Services/ServiceCard/ServiceCard";
import Banner from "./Banner/Banner";

const Home = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch(
      "https://b6a11-service-review-server-side-risaadodx.vercel.app/services"
    )
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <Banner></Banner>
      <div className="max-w-6xl mx-auto px-5 lg:px-0">
        <h2 className="text-2xl font-bold">Meet Our Local Guides:</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-12 ">
          {services.slice(0, 3).map((service) => (
            <ServiceCard key={service._id} service={service}></ServiceCard>
          ))}
        </div>
      </div>
      <div className="text-center my-12">
        <Link to="/services">
          <button className="btn btn-outline hover:btn-success ">
            See All
          </button>
        </Link>
      </div>
      <div className="flex flex-col lg:flex-row justify-between bg-gray-100 px-5 lg:px-36 py-20 mt-20 text-center">
        <h1 className="text-2xl lg:text-3xl font-bold py-5 lg:py-0">
          24x7 <br />
          Support
        </h1>
        <hr className=" border border-gray-300 lg:h-20" />
        <h1 className="text-2xl lg:text-3xl font-bold py-5 lg:py-0">
          100+ <br />
          Guides
        </h1>
        <hr className=" border border-gray-300 lg:h-20" />
        <h1 className="text-2xl lg:text-3xl font-bold py-5 lg:py-0">
          600+ <br />
          Members
        </h1>
        <hr className=" border border-gray-300 lg:h-20" />
        <h1 className="text-2xl lg:text-3xl font-bold py-5 lg:py-0">
          Fast & <br />
          Protected Services
        </h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 max-w-6xl mx-auto mt-20 px-5 lg:px-0">
        <div
          className="hero min-h-screen "
          style={{
            backgroundImage: `url("https://images.pexels.com/photos/6109664/pexels-photo-6109664.jpeg?auto=compress&cs=tinysrgb&w=600")`,
            borderRadius: "16px",
          }}
        >
          <div className="hero-overlay bg-opacity-60 rounded-2xl"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <Link to="/services">
                <button className="btn btn-success hover:btn-accent">
                  Find a guide
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage: `url("https://images.pexels.com/photos/5225257/pexels-photo-5225257.jpeg?auto=compress&cs=tinysrgb&w=600")`,
            borderRadius: "16px",
          }}
        >
          <div className="hero-overlay bg-opacity-60 rounded-2xl"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <Link to="/addService">
                <button className="btn btn-success hover:btn-accent">
                  Become a guide
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
