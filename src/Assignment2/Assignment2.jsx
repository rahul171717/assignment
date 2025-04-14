import { useState } from 'react';
import '../Assignmentcommon.css';
import RDPlanForm from './RDPlanForm';
import FDInvestmentForm from './FDInstallmentForm';
import BankBranchSelector from './BankBranchSelector';


export default function Assignment2() {
  const [selectedForm, setSelectedForm] = useState('rd');

  return (
    <div className="assignment-section full-screen">
      <h1>Assignment 2: Form Handling & UI</h1>

      <div className="assignment-card button-group-horizontal">
        <button className="assignment-button" onClick={() => setSelectedForm('rd')}>RD Plan Form</button>
        <button className="assignment-button" onClick={() => setSelectedForm('fd')}>FD Investment Form</button>
        <button className="assignment-button" onClick={() => setSelectedForm('bank')}>Bank Branch Selector</button>
      </div>

      <div className="assignment-form-container">
        {selectedForm === 'rd' && <RDPlanForm />}
        {selectedForm === 'fd' && <FDInvestmentForm />}
        {selectedForm === 'bank' && <BankBranchSelector />}
      </div>
    </div>
  );
}
