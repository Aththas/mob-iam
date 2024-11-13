import React from 'react'
import '../Page-style/pagestyle.css'
import HeadBar from '../../Components/Headbar-Section/HeadBar'
import SideBar from '../../Components/Sidebar-Section/SideBar'
import Attendence from '../../Components/Attendence-Section/Attendence'

const AttendencePage = () => {
  return (
    <div className='admin-container'>
        <HeadBar/>
        <div className="main-container">
            <SideBar title={1}/>
            <Attendence/>
        </div>
    </div>
  )
}

export default AttendencePage