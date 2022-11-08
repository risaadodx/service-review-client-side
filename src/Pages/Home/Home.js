import React from "react";
import { Link } from "react-router-dom";
import Services from "../Services/Services/Services";
import Banner from "./Banner/Banner";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <div className="text-center my-12">
        <Link to="/services">
          <button className="btn btn-outline  btn-success">See All</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
