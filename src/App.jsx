import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Assignment from './Assignment';
import FixedDepositSummary from './Assignment1/FixedDepositeSummary';
import Assignment2 from './Assignment2/Assignment2';
import Assignment3 from './Assignment3/Assignment3';
import FDAndRDPortal from './Assignment3/FDandRDPortal';
import InvestmentDetailRoutes from './Assignment3/InvestmentDetailRoutes';
import UserDashboardNavigation from './Assignment3/UserDashboardNavigation';
import Assignment4 from './Assignment4/Assignment4';
import Assignment5 from './Assignment5/Assignment5';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Assignment />} />
        <Route path="/assignment1" element={<FixedDepositSummary/>} />
        <Route path="/assignment2" element={<Assignment2 />} />
        <Route path="/assignment3" element={<Assignment3 />} />
        <Route path="/assignment4" element={<Assignment4/>}/>
        <Route path="/assignment5" element={<Assignment5/>}/>

        {/* Assignment 3 internal routes */}
        <Route path="/assignment3/fd-rd-portal/*" element={<FDAndRDPortal />} />
        <Route path="/assignment3/dashboard/*" element={<UserDashboardNavigation />} />
        <Route path="/assignment3/investments/*" element={<InvestmentDetailRoutes />} />
      </Routes>
    </Router>
  );
}

export default App;