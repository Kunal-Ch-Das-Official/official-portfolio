'use client';
// ThemeContext.tsx
import React, { createContext, useState, useContext } from 'react';



// Create the context with an empty default value
const ThemeContext = createContext<any | undefined>(undefined);

// Provider component
export const ThemeContextProvider = (props: {children: React.ReactNode}) => {
  const [layoutTheme, setLayoutTheme] = useState<boolean>(false);

  return (
    <ThemeContext.Provider value={{ layoutTheme, setLayoutTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export function useThemeContext(){
  return useContext(ThemeContext);
}

