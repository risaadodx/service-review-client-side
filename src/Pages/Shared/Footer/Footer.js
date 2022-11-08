import React from "react";
import logo from "../../../assets/logo.png";
import { FaTwitter, FaYoutube, FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="footer p-20 bg-success text-neutral-content flex justify-between align-middle mt-40">
        <div>
          <img style={{ width: "120px" }} src={logo} alt="" />
        </div>
        <p>Copyrights: Tourella | 2022.</p>
        <div>
          <div className="grid grid-flow-col gap-4">
            <Link>
              <FaTwitter className="text-2xl"></FaTwitter>
            </Link>
            <Link>
              <FaFacebook className="text-2xl"></FaFacebook>
            </Link>
            <Link>
              <FaYoutube className="text-2xl"></FaYoutube>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
