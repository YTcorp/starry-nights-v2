import { Outlet, Navigate } from "react-router-dom";

import { loadStorage } from "../../helpers/localStorage";

const UnauthenticatedRoute = ({ redirectPath = "/", children }) => {
  const isConnected = loadStorage("user_connected");
  if (!isConnected) {
    return <Navigate to={redirectPath} />;
  }

  return children ? children : <Outlet />;
};

export default UnauthenticatedRoute;
