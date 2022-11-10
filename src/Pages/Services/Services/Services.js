import React, { useEffect, useState } from "react";
import ServiceCard from "../ServiceCard/ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch(
      "https://b6a11-service-review-server-side-risaadodx.vercel.app/services"
    )
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold">Meet Our Local Guides:</h2>
      <div className="grid grid-cols-3 gap-6 mt-12 ">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
