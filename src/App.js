import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './Pages/Login-page/LoginPage';
import DashboardPage from './Pages/Dashboard-page/DashboardPage';
import UserPage from './Pages/User-Page/UserPage';
import AttendencePage from './Pages/Attendence-Page/AttendencePage';
import ManagerApprovalPage from './Pages/Manager-Approval-Page/ManagerApprovalPage';
import SecurityApprovalPage from './Pages/Security-Approval-Page/SecurityApprovalPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LoginPage/>}/>
        <Route path='/dashboard' element={<DashboardPage/>}/>
        <Route path='/user' element={<UserPage/>}/>
        <Route path='/attendence' element={<AttendencePage/>}/>
        <Route path='/manager-approval' element={<ManagerApprovalPage/>}/>
        <Route path='/security-approval' element={<SecurityApprovalPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
