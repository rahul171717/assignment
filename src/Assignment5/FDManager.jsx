// assignment5/FDManager.jsx
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFD, markFDAsMatured } from './actions';

export default function FDManager() {
  const [amount, setAmount] = useState('');
  const [tenure, setTenure] = useState('');
  const [rate, setRate] = useState('');
  const dispatch = useDispatch();
  const fdList = useSelector(state => state.fdList);

  const handleAddFD = () => {
    if (amount && tenure && rate) {
      dispatch(addFD({ amount, tenure, rate }));
      setAmount('');
      setTenure('');
      setRate('');
    }
  };

  return (
    <div>
      <h2>FD Manager</h2>
      <input placeholder="Amount" value={amount} onChange={e => setAmount(e.target.value)} />
      <input placeholder="Tenure" value={tenure} onChange={e => setTenure(e.target.value)} />
      <input placeholder="Interest Rate" value={rate} onChange={e => setRate(e.target.value)} />
      <button onClick={handleAddFD}>Add FD</button>

      <ul>
        {fdList.map((fd, index) => (
          <li key={index}>
            ₹{fd.amount} for {fd.tenure} months at {fd.rate}%
            — <strong>{fd.matured ? 'Matured' : 'Active'}</strong>
            {!fd.matured && <button onClick={() => dispatch(markFDAsMatured(index))}>Mark as Matured</button>}
          </li>
        ))}
      </ul>
    </div>
  );
}
