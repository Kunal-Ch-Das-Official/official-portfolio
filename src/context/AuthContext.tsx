// Project: CBS Research Group Admin Dashboard
// Content: Context API file for private routing
// Date: 30/08/2024

import { createContext, useState, ReactNode } from "react";

// Define types for the context
interface AuthContextType {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
  modelOpen: boolean;
  setModelOpen: (open: boolean) => void;
}

// Initialize the context with a default value (null)
const AuthContext = createContext<AuthContextType | null>(null);

// Define props type for AuthProvider
interface AuthProviderProps {
  children: ReactNode;
}

// Check authentication handler
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [modelOpen, setModelOpen] = useState<boolean>(false);

  // Login handler
  const login = () => {
    setIsAuthenticated(true);
  };

  // Logout handler
  const logout = () => {
    setIsAuthenticated(false);
  };

  // Return context with all state and handlers
  return (
    <AuthContext.Provider
      value={{ isAuthenticated, login, logout, modelOpen, setModelOpen }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
