import React from 'react'
import '../Page-style/pagestyle.css'
import HeadBar from '../../Components/Headbar-Section/HeadBar'
import SideBar from '../../Components/Sidebar-Section/SideBar'
import AttendenceMark from '../../Components/Attendence-Mark-Section/AttendenceMark'

const VisitorEntryMarkPage = () => {
  return (
    <div className='admin-container'>
        <HeadBar/>
        <div className="main-container">
            <SideBar  title={8}/>
            <AttendenceMark/>
        </div>
    </div>
  )
}

export default VisitorEntryMarkPage