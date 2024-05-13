import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { authContext } from "../context/AuthContext";

const PrivateRoute = ({ children }) => {
  const { userData } = useContext(authContext);

  return (
    <>{userData && userData.length > 0 ? children : <Navigate to="/login" />}</>
  );
};

export default PrivateRoute;
