import { Outlet, Navigate } from "react-router-dom";

import { loadStorage } from "../../helpers/localStorage";

const UnauthenticatedRoute = ({ redirectPath = "/login", children }) => {
  const isConnected = loadStorage("user_connected");
  if (isConnected !== "true") {
    return <Navigate to={redirectPath} />;
  }

  return children ? children : <Outlet />;
};

export default UnauthenticatedRoute;
