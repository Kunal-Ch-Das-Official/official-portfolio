import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/useAuth";

interface PrivateRouteProps {
  children: ReactNode; // `children` can be any valid React node (JSX elements, strings, numbers, etc.)
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <>{children}</> : <Navigate to="/" />;
};

export default PrivateRoute;
