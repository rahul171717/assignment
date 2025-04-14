// RDPlanForm.jsx
import { useState } from 'react';
import '../Assignmentcommon.css';

export default function RDPlanForm() {
  const [monthly, setMonthly] = useState('');
  const [tenure, setTenure] = useState('');
  const [bank, setBank] = useState('');
  const [summary, setSummary] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const total = monthly * tenure;
    setSummary({ monthly, tenure, bank, total });
  };

  return (
    <div className="assignment-section">
      <h2>RD Plan Creation</h2>
      <form onSubmit={handleSubmit} className="assignment-card">
        <div className="detail-row">
          <label>Monthly Contribution:</label>
          <input className="assignment-input" type="number" value={monthly} onChange={(e) => setMonthly(e.target.value)} required />
        </div>
        <div className="detail-row">
          <label>Tenure (Months):</label>
          <input className="assignment-input" type="number" value={tenure} onChange={(e) => setTenure(e.target.value)} required />
        </div>
        <div className="detail-row">
          <label>Bank Name:</label>
          <input className="assignment-input" type="text" value={bank} onChange={(e) => setBank(e.target.value)} required />
        </div>
        <button className="assignment-button" type="submit">Show Summary</button>

        {summary && (
          <div className="mt-4">
            <p><strong>Bank:</strong> {summary.bank}</p>
            <p><strong>Total Invested:</strong> ₹{summary.total}</p>
          </div>
        )}
      </form>
    </div>
  );
}
