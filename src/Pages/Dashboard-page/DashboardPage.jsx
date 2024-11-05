import React from 'react'
import './DashboardPage.css'
import HeadBar from '../../Components/Headbar-Section/HeadBar'
import SideBar from '../../Components/Sidebar-Section/SideBar'
import Dashboard from '../../Components/Dashboard-Section/Dashboard'

const DashboardPage = () => {
  return (
    <div className='admin-container'>
        <HeadBar/>
        <div className="main-container">
            <SideBar/>
            <Dashboard/>
        </div>
    </div>
  )
}

export default DashboardPage