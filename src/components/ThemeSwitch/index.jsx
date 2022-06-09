import React from 'react';

export const ThemeSwitch = () => {

  // const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

  const switchTheme = (e) => {
    if (e.target.checked) {
      document.documentElement.setAttribute('data-theme', 'dark');
    }
    else {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }

  // toggleSwitch.addEventListener('change', switchTheme, false);

  return (
    <div class="theme-switch-wrapper">
      <label class="theme-switch" for="checkbox">
        <input
          type="checkbox" id="checkbox"
          onChange={switchTheme} />
        <div class="slider round"></div>
      </label>
      <em>Enable Dark Mode!</em>
    </div>

  )
}