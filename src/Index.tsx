import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./context/useAuth";
import { LoginRouter } from "./routes/login-route/LoginRouter";

// Define the types for the component state and props
const Index: React.FC = () => {
  const [authAdmin, setAuthAdmin] = useState<boolean>(false); // explicitly typed as boolean
  const navigate = useNavigate();
  const { modelOpen, login } = useAuth(); // assuming useAuth() returns proper types

  useEffect(() => {
    const pageLoadHandler = () => {
      const adminToken = localStorage.getItem("admin-token");
      if (adminToken) {
        localStorage.removeItem("admin-token");
      }
    };
    pageLoadHandler();
  }, []);

  useEffect(() => {
    const isAuth = localStorage.getItem("auth-token");

    if (isAuth && modelOpen === false) {
      navigate("/admin-console");
      login();
      setAuthAdmin(true);
    }
  }, [login, modelOpen, navigate]);

  return <>{authAdmin === false && <LoginRouter />}</>;
};

export default Index;
