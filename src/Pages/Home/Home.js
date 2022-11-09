import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ServiceCard from "../Services/ServiceCard/ServiceCard";
import Banner from "./Banner/Banner";

const Home = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <Banner></Banner>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold">Meet Our Local Guides:</h2>
        <div className="grid grid-cols-3 gap-6 mt-12 ">
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
      <div className="flex justify-between bg-gray-100 px-36 py-20 mt-20">
        <h1 className="text-3xl font-bold">
          24x7 <br />
          Support
        </h1>
        <hr className=" border border-gray-300 h-20" />
        <h1 className="text-3xl font-bold">
          100+ <br />
          Guides
        </h1>
        <hr className=" border border-gray-300 h-20" />
        <h1 className="text-3xl font-bold">
          600+ <br />
          Members
        </h1>
        <hr className=" border border-gray-300 h-20" />
        <h1 className="text-3xl font-bold">
          Fast & <br />
          Protected Services
        </h1>
      </div>
    </div>
  );
};

export default Home;
