import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function Dashboard() {
  return <div className="assignment-card">Dashboard Overview</div>;
}
function CreateFD() {
  return <div className="assignment-card">FD Creation Form</div>;
}
function CreateRD() {
  return <div className="assignment-card">RD Opening Form</div>;
}
function Support() {
  return <div className="assignment-card">Customer Support Section</div>;
}

export default function UserDashboardNavigation() {
  return (
    <div>
      <div className="assignment-card">
        <Link to="/dashboard">Dashboard</Link> | 
        <Link to="/create-fd">Create FD</Link> | 
        <Link to="/create-rd">Create RD</Link> | 
        <Link to="/support">Support</Link>
      </div>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/create-fd" element={<CreateFD />} />
        <Route path="/create-rd" element={<CreateRD />} />
        <Route path="/support" element={<Support />} />
      </Routes>
      </div>
   
  );
}
