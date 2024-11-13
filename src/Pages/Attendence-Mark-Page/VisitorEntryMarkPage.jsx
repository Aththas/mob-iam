import React from 'react'
import '../Page-style/pagestyle.css'
import HeadBar from '../../Components/Headbar-Section/HeadBar'
import SideBar from '../../Components/Sidebar-Section/SideBar'
import VisitorEntryMark from '../../Components/Attendence-Mark-Section/VisitorEntryMark'

const VisitorEntryMarkPage = () => {
  return (
    <div className='admin-container'>
        <HeadBar/>
        <div className="main-container">
            <SideBar  title={8}/>
            <VisitorEntryMark/>
        </div>
    </div>
  )
}

export default VisitorEntryMarkPage