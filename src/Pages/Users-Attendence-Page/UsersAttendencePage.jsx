import React from 'react'
import '../Page-style/pagestyle.css'
import HeadBar from '../../Components/Headbar-Section/HeadBar'
import SideBar from '../../Components/Sidebar-Section/SideBar'
import UsersAttendence from '../../Components/Users-Attendence-Section/UsersAttendence'

const UsersAttendencePage = () => {
  return (
    <div className='admin-container'>
        <HeadBar/>
        <div className="main-container">
            <SideBar title={1}/>
            <UsersAttendence/>
        </div>
    </div>
  )
}

export default UsersAttendencePage