import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function Home() {
  return <div className="assignment-card">Welcome to FD & RD Portal</div>;
}
function FixedDeposit() {
  return <div className="assignment-card">FD Calculator Component</div>;
}
function RecurringDeposit() {
  return <div className="assignment-card">RD Summary Component</div>;
}
function InvestmentHistory() {
  return <div className="assignment-card">Investment History Component</div>;
}

export default function FDAndRDPortal() {
  return (
    <div>
    
      <div className="assignment-card">
        <Link to="/">Home</Link> | 
        <Link to="/fixed-deposit">FD</Link> | 
        <Link to="/recurring-deposit">RD</Link> | 
        <Link to="/investment-history">History</Link>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fixed-deposit" element={<FixedDeposit />} />
        <Route path="/recurring-deposit" element={<RecurringDeposit />} />
        <Route path="/investment-history" element={<InvestmentHistory />} />
      </Routes>
      </div>

  );
}
