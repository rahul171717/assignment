import { useState } from 'react';
import '../Assignmentcommon.css';

export default function FDCalculator() {
  const [deposit, setDeposit] = useState('');
  const [tenure, setTenure] = useState('');
  const [interestRate, setInterestRate] = useState(5); // Default interest rate
  const [maturityAmount, setMaturityAmount] = useState(null);

  // Adjust interest rate based on tenure
  const adjustInterestRate = (tenure) => {
    if (tenure >= 60) {
      setInterestRate(7);
    } else if (tenure >= 36) {
      setInterestRate(6.5);
    } else {
      setInterestRate(5);
    }
  };

  const calculateMaturity = () => {
    const principal = parseFloat(deposit);
    const rate = interestRate / 100;
    const time = parseFloat(tenure) / 12; // Convert months to years
    const maturity = principal * Math.pow(1 + rate, time);
    setMaturityAmount(maturity.toFixed(2));
  };

  return (
    <div className="calculator-container">
      <h2>FD Maturity Calculator</h2>
      <label>
        Deposit Amount: ₹
        <input
          type="number"
          value={deposit}
          onChange={(e) => setDeposit(e.target.value)}
        />
      </label>
      <label>
        Tenure (months):
        <input
          type="number"
          value={tenure}
          onChange={(e) => {
            setTenure(e.target.value);
            adjustInterestRate(e.target.value);
          }}
        />
      </label>
      <p>Interest Rate: {interestRate}%</p>
      <button onClick={calculateMaturity}>Calculate Maturity</button>
      {maturityAmount && <p>Maturity Amount: ₹{maturityAmount}</p>}
    </div>
  );
}
