import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const AuthenticatedRoute = ({ redirectPath = "/login", children }) => {
  const { isConnected } = useSelector((state) => state.login);

  if (!isConnected) {
    return <Navigate to={redirectPath} />;
  }

  return children ? children : <Outlet />;
};

export default AuthenticatedRoute;
