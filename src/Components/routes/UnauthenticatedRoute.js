import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const UnauthenticatedRoute = ({ redirectPath = "/", children }) => {
  const { isConnected } = useSelector((state) => state.login);
  // const isConnected = token.login;

  if (isConnected) {
    return <Navigate to={redirectPath} />;
  }

  return children ? children : <Outlet />;
};

export default UnauthenticatedRoute;
