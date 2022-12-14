import React from "react";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { ImSpinner2 } from "react-icons/im";
import { AuthContext } from "../Contexts/Authprovider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="max-w-6xl mx-auto">
        <ImSpinner2 class="animate-spin h-5 w-5 mr-3 ..."></ImSpinner2>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }
  return children;
};

export default PrivateRoute;
