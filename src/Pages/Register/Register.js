import React from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import loginImg from "../../assets/images/login.png";

const Register = () => {
  return (
    <div className="hero mb-20">
      <div className="hero-content grid md:grid-cols-2  justify-between">
        <div className="w-3/4">
          <img src={loginImg} alt="" />
        </div>
        <div className="card   border-solid border-2 ">
          <h1 className=" pt-20 pb-4 text-center text-5xl font-bold">
            Register
          </h1>
          <form className="card-body px-10 ">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                name="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <Link href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <input
                className="btn btn-success hover:btn text-white"
                type="submit"
                name="login"
                id=""
                value="Login"
              />
            </div>
            <p className="text-center">or sign up with</p>
            <div className="flex flex-row justify-center">
              <FaFacebook className=" m-2"></FaFacebook>
              <FaGoogle className="m-2"></FaGoogle>
            </div>
            <p className="text-center text-md ">
              Do you have an account?{" "}
              <Link to="/login" className="text-success font-bold">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
