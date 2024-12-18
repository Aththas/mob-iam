import React from 'react'
import '../Page-style/pagestyle.css'
import HeadBar from '../../Components/Headbar-Section/HeadBar'
import SideBar from '../../Components/Sidebar-Section/SideBar'
import Attendence from '../../Components/Attendence-Section/Attendence'
import VisitorEntry from '../../Components/Attendence-Section/VisitorEntry'

const VisitorEntryPage = () => {
  return (
    <div className='admin-container'>
        <HeadBar/>
        <div className="main-container">
            <SideBar title={7}/>
            <VisitorEntry/>
        </div>
    </div>
  )
}

export default VisitorEntryPage