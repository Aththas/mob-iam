import React from 'react'
import '../Page-style/pagestyle.css'
import HeadBar from '../../Components/Headbar-Section/HeadBar'
import SideBar from '../../Components/Sidebar-Section/SideBar'
import Users from '../../Components/Users-Section/Users'

const UserPage = () => {
  return (
    <div className='admin-container'>
        <HeadBar/>
        <div className="main-container">
            <SideBar title={3}/>
            <Users/>
        </div>
    </div>
  )
}

export default UserPage