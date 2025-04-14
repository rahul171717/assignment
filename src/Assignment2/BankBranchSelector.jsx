import { useState } from 'react';
import '../Assignmentcommon.css';

const branches = {
  Bangalore: { address: 'MG Road, Bangalore', code: 'BNG123', ifsc: 'BANK0001' },
  Mumbai: { address: 'Andheri East, Mumbai', code: 'MUM456', ifsc: 'BANK0002' },
  Delhi: { address: 'Connaught Place, Delhi', code: 'DEL789', ifsc: 'BANK0003' },
};

export default function BankBranchSelector() {
  const [selected, setSelected] = useState('');
  const branch = branches[selected];

  return (
    <div className="assignment-section">
      <h2>Bank Branch Selector</h2>
      <div className="assignment-card">
        <div className="detail-row">
          <label>Select Branch:</label>
          <select className="assignment-input" value={selected} onChange={(e) => setSelected(e.target.value)}>
            <option value="">-- Select --</option>
            {Object.keys(branches).map((city) => (
              <option key={city} value={city}>{city}</option>
            ))}
          </select>
        </div>

        {branch && (
          <div className="mt-4">
            <p><strong>Address:</strong> {branch.address}</p>
            <p><strong>Branch Code:</strong> {branch.code}</p>
            <p><strong>IFSC:</strong> {branch.ifsc}</p>
          </div>
        )}
      </div>
    </div>
  );
}
