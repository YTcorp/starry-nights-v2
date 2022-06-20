import { Outlet, Navigate } from "react-router-dom";

const UnauthenticatedRoute = ({ redirectPath = "/", children }) => {
  const isConnected = localStorage.getItem("userConnected");

  console.log("authenticated ?", isConnected);
  if (!isConnected) {
    return <Navigate to={redirectPath} />;
  }

  return children ? children : <Outlet />;
};

export default UnauthenticatedRoute;
