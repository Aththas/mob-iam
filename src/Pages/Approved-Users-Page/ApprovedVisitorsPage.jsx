import React from 'react'
import '../Page-style/pagestyle.css'
import HeadBar from '../../Components/Headbar-Section/HeadBar'
import SideBar from '../../Components/Sidebar-Section/SideBar'
import ApprovedVisitors from '../../Components/Approved-Users-Section/ApprovedVisitors'

const ApprovedVisitorsPage = () => {
    return (
        <div className='admin-container'>
            <HeadBar/>
            <div className="main-container">
                <SideBar title={11}/>
                <ApprovedVisitors/>
            </div>
        </div>
      )
}

export default ApprovedVisitorsPage