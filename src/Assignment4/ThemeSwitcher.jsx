import { useState } from 'react';
import '../Assignmentcommon.css';

export default function ThemeSwitcher() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.className = isDarkMode ? 'light-theme' : 'dark-theme';
  };

  return (
    <div className="theme-switcher-container">
      <h2>Theme Switcher</h2>
      <button onClick={toggleTheme}>
        Switch to {isDarkMode ? 'Light' : 'Dark'} Mode
      </button>
    </div>
  );
}
