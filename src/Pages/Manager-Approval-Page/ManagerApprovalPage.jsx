import React from 'react'
import '../Page-style/pagestyle.css'
import HeadBar from '../../Components/Headbar-Section/HeadBar'
import SideBar from '../../Components/Sidebar-Section/SideBar'
import ManagerApproval from '../../Components/Manager-Approval-Section/ManagerApproval'

const ManagerApprovalPage = () => {
  return (
    <div className='admin-container'>
        <HeadBar/>
        <div className="main-container">
            <SideBar/>
            <ManagerApproval/>
        </div>
    </div>
  )
}

export default ManagerApprovalPage