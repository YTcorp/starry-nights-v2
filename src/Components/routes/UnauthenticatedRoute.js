import { Outlet, Navigate } from "react-router-dom";

const UnauthenticatedRoute = ({ redirectPath = "/", children }) => {
  const isConnected = localStorage.getItem("user_connected");
  if (isConnected === "true") {
    return <Navigate to={redirectPath} />;
  }

  return children ? children : <Outlet />;
};

export default UnauthenticatedRoute;
