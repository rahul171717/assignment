// assignment5/RDTracker.jsx
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addRD, adjustRDContribution } from './actions';

export default function RDTracker() {
  const [amount, setAmount] = useState('');
  const dispatch = useDispatch();
  const rdList = useSelector(state => state.rdList);

  const handleAddRD = () => {
    if (amount) {
      dispatch(addRD(Number(amount)));
      setAmount('');
    }
  };

  return (
    <div>
      <h2>RD Tracker</h2>
      <input
        type="number"
        placeholder="Monthly Contribution"
        value={amount}
        onChange={e => setAmount(e.target.value)}
      />
      <button onClick={handleAddRD}>Add RD</button>

      <ul>
        {rdList.map((rd, index) => (
          <li key={index}>
            ₹{rd.amount} x {rd.tenure} months = ₹{rd.amount * rd.tenure}
            <button onClick={() => dispatch(adjustRDContribution(index, 1))}>+</button>
            <button onClick={() => dispatch(adjustRDContribution(index, -1))}>-</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
