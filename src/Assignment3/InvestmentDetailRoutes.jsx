import { BrowserRouter, Routes, Route, Link, useParams } from 'react-router-dom';

function InvestmentList() {
  const sampleInvestments = [1, 2, 3];
  return (
    <div className="assignment-card">
      <h3>Select an Investment</h3>
      {sampleInvestments.map(id => (
        <div key={id}>
          <Link to={`/investment/${id}`}>Investment #{id}</Link>
        </div>
      ))}
    </div>
  );
}

function InvestmentDetail() {
  const { id } = useParams();
  return <div className="assignment-card">Details for Investment ID: {id}</div>;
}

export default function InvestmentDetailRoutes() {
  return (
   
      <Routes>
        <Route path="/" element={<InvestmentList />} />
        <Route path="/investment/:id" element={<InvestmentDetail />} />
      </Routes>
    
  );
}
