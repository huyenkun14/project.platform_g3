import React, { createContext, useState } from 'react';
import lightColors from './lightMode';
import darkColors from './darkMode';
import lovelyColors from './lovelyMode';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useState('light');
  console.log("theeeee", themeMode)
  const handleChangeTheme = (theme) => {
    console.log("test1", theme)
    if (theme === "dark") {
      setThemeMode('dark');
    } else if (theme === "lovely") {
      setThemeMode('lovely');
    }
    else {
      setThemeMode('light');
    }
  };
  let defaultColors
  if (themeMode === "dark") {
    defaultColors = darkColors;
  } else if (themeMode === "lovely") {
    defaultColors = lovelyColors;
  }
  else {
    defaultColors = lightColors;
  }
  return (
    <ThemeContext.Provider value={{ themeMode, handleChangeTheme, defaultColors }}>
      {children}
    </ThemeContext.Provider>
  );
};