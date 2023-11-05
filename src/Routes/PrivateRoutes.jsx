import { useContext } from "react";

import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";



const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  console.log(location.pathname);

  if (loading) {
    return <span className="loading loading-bars loading-lg"></span>
  }

  if (user?.email) {
    return children;
  }

  return <Navigate state={location.pathname} to="/signIn"></Navigate>
};

export default PrivateRoutes;