import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import loginImg from "../../assets/images/login.png";
import { AuthContext } from "../../Contexts/Authprovider/AuthProvider";

const Register = () => {
  const [error, setError] = useState("");
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const displayName = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(displayName, email, password);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
        form.reset();
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };
  const { providerLogin } = useContext(AuthContext);

  const googleProvider = new GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
      });
  };
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
          <form onSubmit={handleSubmit} className="card-body px-10 ">
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
            <div className="mb-4">
              <p className="text-error">{error}</p>
            </div>
            <div className="form-control mt-6">
              <input
                className="btn btn-success hover:btn text-white"
                type="submit"
                name="login"
                id=""
                value="Register"
              />
            </div>
            <p className="text-center">or sign up with</p>
            <div>
              <Link onClick={handleGoogleSignIn}>
                <button className="btn btn-outline hover:btn-success w-full ">
                  <FaGoogle className="m-2 text-2xl"></FaGoogle>Google
                </button>
              </Link>
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
