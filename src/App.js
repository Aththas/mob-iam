import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './Pages/Login-page/LoginPage';
import DashboardPage from './Pages/Dashboard-page/DashboardPage';
import UserPage from './Pages/User-Page/UserPage';
import AttendencePage from './Pages/Attendence-Page/AttendencePage';
import ManagerApprovalPage from './Pages/Manager-Approval-Page/ManagerApprovalPage';
import SecurityApprovalPage from './Pages/Security-Approval-Page/SecurityApprovalPage';
import ApprovedUsersPage from './Pages/Approved-Users-Page/ApprovedUsersPage';
import AttendenceMarkPage from './Pages/Attendence-Mark-Page/AttendenceMarkPage';
import UsersAttendencePage from './Pages/Users-Attendence-Page/UsersAttendencePage';
import VisitorPage from './Pages/User-Page/VisitorPage';
import SecurityApprovalVisitorPage from './Pages/Security-Approval-Page/SecurityApprovalVisitorPage';
import ApprovedVisitorsPage from './Pages/Approved-Users-Page/ApprovedVisitorsPage';
import VisitorEntryMarkPage from './Pages/Attendence-Mark-Page/VisitorEntryMarkPage';
import VisitorEntryPage from './Pages/Attendence-Page/VisitorEntryPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LoginPage/>}/>
        <Route path='/dashboard' element={<DashboardPage/>}/>

        <Route path='/user' element={<UserPage/>}/>
        <Route path='/visitor' element={<VisitorPage/>}/>
        
        <Route path='/approved-user' element={<ApprovedUsersPage/>}/>
        <Route path='/approved-visitor' element={<ApprovedVisitorsPage/>}/>
        
        <Route path='/attendence' element={<AttendencePage/>}/>
        <Route path='/attendence-visitor' element={<VisitorEntryPage/>}/>
        
        <Route path='/user-attendence' element={<UsersAttendencePage/>}/>
        
        <Route path='/mark-attendence' element={<AttendenceMarkPage/>}/>
        <Route path='/mark-attendence-visitor' element={<VisitorEntryMarkPage/>}/>
        
        <Route path='/manager-approval' element={<ManagerApprovalPage/>}/>
        
        <Route path='/security-approval' element={<SecurityApprovalPage/>}/>
        <Route path='/security-approval-visitor' element={<SecurityApprovalVisitorPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
