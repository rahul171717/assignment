import { useState } from 'react';
import '../Assignmentcommon.css';

export default function RDTracker() {
  const [monthlyContribution, setMonthlyContribution] = useState(1000);
  const [tenure, setTenure] = useState(12); // Default tenure in months
  const interestRate = 6; // Fixed interest rate for RD

  const totalInvestment = monthlyContribution * tenure;
  const maturityAmount = totalInvestment + (totalInvestment * (interestRate / 100));

  return (
    <div className="tracker-container">
      <h2>RD Contribution Tracker</h2>
      <div className="contribution-controls">
        <button onClick={() => setMonthlyContribution(monthlyContribution + 500)}>+</button>
        <span>₹{monthlyContribution}</span>
        <button onClick={() => setMonthlyContribution(monthlyContribution - 500)}>-</button>
      </div>
      <p>Tenure: {tenure} months</p>
      <p>Total Investment: ₹{totalInvestment}</p>
      <p>Estimated Maturity Amount: ₹{maturityAmount.toFixed(2)}</p>
    </div>
  );
}
