import { Outlet, Navigate } from "react-router-dom";

const UnauthenticatedRoute = ({ redirectPath = "/", children }) => {
  const isConnected = localStorage.getItem("user_connected");

  if (isConnected) {
    return <Navigate to={redirectPath} />;
  }

  return children ? children : <Outlet />;
};

export default UnauthenticatedRoute;
