import { useState } from 'react';
import '../Assignmentcommon.css';

export default function RDContributionTracker({ initialContribution, tenure }) {
  const [contribution, setContribution] = useState(initialContribution);

  const totalInvested = contribution * tenure;
  const estimatedMaturity = totalInvested + (totalInvested * 0.06); // assuming 6% return

  return (
    <div className="assignment-card">
      <h2>RD Contribution Tracker</h2>

      <div className="detail-row">
        <label>
          <strong>Monthly Contribution:</strong> ₹
          <input
            type="number"
            value={contribution}
            onChange={(e) => setContribution(Number(e.target.value))}
            className="assignment-input"
          />
        </label>
      </div>

      <div className="detail-row">
        <span><strong>Tenure:</strong></span>
        <span>{tenure} months</span>
      </div>

      <div className="detail-row">
        <span><strong>Total Invested:</strong></span>
        <span>₹{totalInvested}</span>
      </div>

      <div className="detail-row">
        <span><strong>Estimated Maturity:</strong></span>
        <span>₹{estimatedMaturity.toFixed(2)}</span>
      </div>
    </div>
  );
}
