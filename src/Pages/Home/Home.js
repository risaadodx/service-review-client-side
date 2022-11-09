import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ServiceCard from "../Services/ServiceCard/ServiceCard";
import Services from "../Services/Services/Services";
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
      <div>
        <h2 className="text-2xl font-bold">Meet Our Local Guides:</h2>
        <div className="grid grid-cols-3 gap-6 mt-12 ">
          {services.slice(0, 3).map((service) => (
            <ServiceCard key={service._id} service={service}></ServiceCard>
          ))}
        </div>
      </div>
      <div className="text-center my-12">
        <Link to="/services">
          <button className="btn btn-outline  btn-success">See All</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
