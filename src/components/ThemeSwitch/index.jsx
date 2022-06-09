import React from 'react';
import "./style.css";


export const ThemeSwitch = (invert, setInvert, theme, setTheme) => {


  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    setInvert(!invert);
  }

  return (
    <div className="theme-switch-wrapper">
      <label className="theme-switch" htmlFor="checkbox">
        <input
          type="checkbox" id="checkbox"
          onChange={switchTheme} />
        <div className="slider round"></div>
      </label>
      <em></em>
    </div>

  )
}