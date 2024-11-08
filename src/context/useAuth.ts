import { useContext } from "react";
import AuthContext from "./AuthContext";

// Define the type for the AuthContext value
interface AuthContextType {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
  modelOpen: boolean;
  setModelOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

// Use the context with the correct types
export const useAuth = () => useContext(AuthContext) as AuthContextType;
