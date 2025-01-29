import React from 'react'
import { useState, useEffect } from 'react'
import './Toggle.css'

const ToggleMode = () => {
    // Step 3: Get the saved theme from localStorage OR default to light mode
    const storedTheme = localStorage.getItem("theme") || "light";
    const [theme, setTheme] = useState(storedTheme);

    // Step 4: Apply the theme whenever it changes
    useEffect(() => {
        document.body.className = theme; // Apply theme to the body
        localStorage.setItem("theme", theme); // Save theme in localStorage
    }, [theme]);

    // Step 5: Toggle Theme
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

  return (
    <div className="container">
    <h1>{theme === "light" ? "Light Mode ☀️" : "Dark Mode 🌙"}</h1>
    <button onClick={toggleTheme} className="toggle-btn">
      Switch to {theme === "light" ? "Dark" : "Light"} Mode
        </button>
    </div>
  )
}

export default ToggleMode