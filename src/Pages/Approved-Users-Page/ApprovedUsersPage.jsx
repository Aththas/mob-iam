import React from 'react'
import '../Page-style/pagestyle.css'
import HeadBar from '../../Components/Headbar-Section/HeadBar'
import SideBar from '../../Components/Sidebar-Section/SideBar'
import ApprovedUsers from '../../Components/Approved-Users-Section/ApprovedUsers'

const ApprovedUsersPage = () => {
    return (
        <div className='admin-container'>
            <HeadBar/>
            <div className="main-container">
                <SideBar/>
                <ApprovedUsers/>
            </div>
        </div>
      )
}

export default ApprovedUsersPage