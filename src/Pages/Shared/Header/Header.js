import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";

const Header = () => {
  const menuItems = (
    <ul className="flex lg:flex-row flex-col ">
      <li className="mr-5">
        <Link to="/">Home</Link>
      </li>
      <li className="mr-5">
        <Link to="/">Services</Link>
      </li>
      <li className="mr-5">
        <Link to="/">Blog</Link>
      </li>
    </ul>
  );
  return (
    <div className="navbar bg-base-100 mb-12">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <Link to="/" className=" normal-case text-xl">
          <img style={{ width: "120px" }} src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">{menuItems}</div>
      <div className="navbar-end">
        <div>
          <Link className="text-decoration-none mr-3" to="/login">
            Login
          </Link>
        </div>
        <div>
          <Link className="text-decoration-none mr-3" to="/register">
            SignUp
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
