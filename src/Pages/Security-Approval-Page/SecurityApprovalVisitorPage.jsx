import React from 'react'
import '../Page-style/pagestyle.css'
import HeadBar from '../../Components/Headbar-Section/HeadBar'
import SideBar from '../../Components/Sidebar-Section/SideBar'
import SecurityApprovalVisitor from '../../Components/Security-Approval-Section/SecurityApprovalVisitor'

const SecurityApprovalVisitorPage = () => {
  return (
    <div className='admin-container'>
        <HeadBar/>
        <div className="main-container">
            <SideBar title={10}/>
            <SecurityApprovalVisitor/>
        </div>
    </div>
  )
}

export default SecurityApprovalVisitorPage