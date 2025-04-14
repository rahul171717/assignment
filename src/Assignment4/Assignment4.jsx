import { useState } from 'react';
import FDCalculator from './FDCalculator';
import RDTracker from './RDTracker';
import ThemeSwitcher from './ThemeSwitcher';
import '../Assignmentcommon.css';

export default function Assignment4() {
  const [activeComponent, setActiveComponent] = useState(null);

  return (
    <div className="assignment-container">
      <h1>Assignment 4: Event Handling and Theming in React</h1>
      <div className="button-group">
        <button onClick={() => setActiveComponent('FDCalculator')}>FD Maturity Calculator</button>
        <button onClick={() => setActiveComponent('RDTracker')}>RD Contribution Tracker</button>
        <button onClick={() => setActiveComponent('ThemeSwitcher')}>Theme Switcher</button>
      </div>
      <div className="component-display">
        {activeComponent === 'FDCalculator' && <FDCalculator />}
        {activeComponent === 'RDTracker' && <RDTracker />}
        {activeComponent === 'ThemeSwitcher' && <ThemeSwitcher />}
      </div>
    </div>
  );
}
