'use client';
// ThemeContext.tsx
import React, { createContext, useState, useContext, ReactNode } from 'react';

// Define the shape of your context state
interface ThemeContextState {
  layoutTheme: boolean;
  setLayoutTheme: (newValue: boolean) => void;
}

// Create the context with an empty default value
const ThemeContext = createContext<ThemeContextState | undefined>(undefined);

// Provider component
export const ThemeContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [layoutTheme, setLayoutTheme] = useState<boolean>(false);

  return (
    <ThemeContext.Provider value={{ layoutTheme, setLayoutTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook for consuming the context
export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useBooleanContext must be used within a ThemeContextProvider');
  }
  return context;
};
