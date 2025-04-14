import { useState } from 'react';
import '../Assignmentcommon.css'; // Import the common stylesheet

export default function FixedDepositSummaryCard({ depositAmount, interestRate, tenure, maturityAmount }) {
  const [detailed, setDetailed] = useState(false);

  return (
    <div className="assignment-card">
      <h2>Fixed Deposit Summary</h2>

      <div className="detail-row">
        <span><strong>Deposit:</strong></span>
        <span>₹{depositAmount}</span>
      </div>

      <div className="detail-row">
        <span><strong>Interest Rate:</strong></span>
        <span>{interestRate}%</span>
      </div>

      <div className="detail-row">
        <span><strong>Tenure:</strong></span>
        <span>{tenure} months</span>
      </div>

      {detailed && (
        <div className="detail-row">
          <span><strong>Maturity Amount:</strong></span>
          <span>₹{maturityAmount}</span>
        </div>
      )}

      <button
        className="assignment-button"
        onClick={() => setDetailed(prev => !prev)}
      >
        {detailed ? 'Summary View' : 'Detailed View'}
      </button>
    </div>
  );
}
