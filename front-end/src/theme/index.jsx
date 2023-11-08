import React, { createContext, useContext, useState } from 'react';
import lightColors from './lightMode';
import darkColors from './darkMode';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useState('light');

  console.log("theeeee", themeMode)
  const handleChangeTheme = (theme) => {
    console.log("test1", theme)
    if (theme === "dark") {
        setThemeMode('dark');
    } else {
        setThemeMode('light');
    }
  };

  const defaultColors = themeMode === 'light' ? lightColors : darkColors;

  return (
    <ThemeContext.Provider value={{ themeMode, handleChangeTheme, defaultColors }}>
      {children}
    </ThemeContext.Provider>
  );
};