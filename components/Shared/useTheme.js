/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

// Custom hook to handle theme state with localStorage
const useTheme = () => {
  const [theme, setTheme] = useState("dark");
  
  // useEffect(() => {
  //    localStorage.getItem("theme") || "dark";
  // }, []);
  // Initialize state with the initial theme

  // Effect to update the HTML class and localStorage when theme changes
  useEffect(() => {
    // Update the HTML class to enable dark mode if theme is "dark"
    document.documentElement.classList.toggle("light", theme === "light");
    // Store the current theme in localStorage
    localStorage.setItem("theme", theme);
  }, [theme]); // Re-run this effect whenever theme changes

  // Function to toggle between "dark" and "light" themes
  const toggleTheme = () => {
    // Calculate the new theme based on the current theme
    const newTheme = theme === "dark" ? "light" : "dark";
    // Update the theme state
    setTheme(newTheme);
  };

  // Return the theme and the function to toggle it
  return { theme, toggleTheme };
};

export default useTheme;
