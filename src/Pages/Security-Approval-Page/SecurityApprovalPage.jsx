import React from 'react'
import '../Page-style/pagestyle.css'
import HeadBar from '../../Components/Headbar-Section/HeadBar'
import SideBar from '../../Components/Sidebar-Section/SideBar'
import SecurityApproval from '../../Components/Security-Approval-Section/SecurityApproval'

const SecurityApprovalPage = () => {
  return (
    <div className='admin-container'>
        <HeadBar/>
        <div className="main-container">
            <SideBar/>
            <SecurityApproval/>
        </div>
    </div>
  )
}

export default SecurityApprovalPage