// CustomerProfile.jsx
import React from 'react';
import '../Assignmentcommon.css';

export default function CustomerProfile({ name, totalFDs, totalRDs, totalInvestment }) {
  return (
    <div className="assignment-section">
      <div className="assignment-card">
        <h2>Customer Investment Profile</h2>

        <div className="detail-row">
          <span><strong>Name:</strong></span>
          <span>{name}</span>
        </div>

        <div className="detail-row">
          <span><strong>Total FDs:</strong></span>
          <span>₹{totalFDs}</span>
        </div>

        <div className="detail-row">
          <span><strong>Total RDs:</strong></span>
          <span>₹{totalRDs}</span>
        </div>

        <div className="detail-row">
          <span><strong>Total Investment:</strong></span>
          <span>₹{totalInvestment}</span>
        </div>
      </div>
    </div>
  );
}
