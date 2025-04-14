import { useState } from 'react';
import '../Assignmentcommon.css';

export default function FDInvestmentForm() {
  const [amount, setAmount] = useState('');
  const [tenure, setTenure] = useState('');
  const interestRate = 6.5; // autofilled
  const [maturity, setMaturity] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const principal = parseFloat(amount);
    const years = parseFloat(tenure) / 12;
    const maturityValue = principal + (principal * interestRate * years) / 100;
    setMaturity(maturityValue.toFixed(2));
  };

  return (
    <div className="assignment-section">
      <h2>FD Investment Form</h2>
      <form onSubmit={handleSubmit} className="assignment-card">
        <div className="detail-row">
          <label>Deposit Amount:</label>
          <input className="assignment-input" type="number" value={amount} onChange={(e) => setAmount(e.target.value)} required />
        </div>
        <div className="detail-row">
          <label>Tenure (months):</label>
          <input className="assignment-input" type="number" value={tenure} onChange={(e) => setTenure(e.target.value)} required />
        </div>
        <div className="detail-row">
          <label>Interest Rate:</label>
          <input className="assignment-input" type="text" value={interestRate + '%'} readOnly />
        </div>
        <button className="assignment-button" type="submit">Calculate Maturity</button>
        {maturity && <p><strong>Maturity Amount:</strong> ₹{maturity}</p>}
      </form>
    </div>
  );
}
