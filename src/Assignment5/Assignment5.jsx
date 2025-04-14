// assignment5/Assignment5.jsx
import React, { useState } from 'react';
import FDManager from './FDManager';
import RDTracker from './RDTracker';
import NotificationPanel from './NotificationPanel';
import { Provider } from 'react-redux';
import store from './store';
import '../Assignmentcommon.css';

export default function Assignment5() {
  const [view, setView] = useState('fd');

  return (
    <Provider store={store}>
      <div className="assignment-page">
        <div className="assignment-container">
          <h1>Assignment 5: Redux State Management</h1>

          <div className="assignment-buttons-vertical">
            <button onClick={() => setView('fd')}>FD Manager</button>
            <button onClick={() => setView('rd')}>RD Tracker</button>
            <button onClick={() => setView('notify')}>Notifications</button>
          </div>

          <div className="assignment-card">
            {view === 'fd' && <FDManager />}
            {view === 'rd' && <RDTracker />}
            {view === 'notify' && <NotificationPanel />}
          </div>
        </div>
      </div>
    </Provider>
  );
}
