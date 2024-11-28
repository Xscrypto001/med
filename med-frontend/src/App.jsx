import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/login';
import HealthcareFundraiserDashboard from './pages/Dashboard';
import './index.css';
import Signup from './components/register';
//import Dashboard from './components/Dashboard';
import PayoutPage from './pages/payouts';
import MissionPage from './pages/info';
import HealthCampaignDetailPage from './pages/payment_page';

const App = () => {
  return (
     <Router>
       <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard/donations" element={<  HealthcareFundraiserDashboard />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/payouts" element={<PayoutPage />} />
        <Route path="/donate" element={<HealthCampaignDetailPage />} />
        <Route path="/info" element={<MissionPage />} />



      {/*   <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/signup" element={<Signup />} />
        {/*<Route path="/dashboard" element={<Dashboard />} />
        <Route path="/payout" element={<Payout />} />*/}
      </Routes> 
     </Router>
  );
};

export default App;
