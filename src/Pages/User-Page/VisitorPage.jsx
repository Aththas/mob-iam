import React from 'react'
import '../Page-style/pagestyle.css'
import HeadBar from '../../Components/Headbar-Section/HeadBar'
import SideBar from '../../Components/Sidebar-Section/SideBar'
import Visitor from '../../Components/Users-Section/Visitor'

const VisitorPage = () => {
  return (
    <div className='admin-container'>
        <HeadBar/>
        <div className="main-container">
            <SideBar title={9}/>
            <Visitor/>
        </div>
    </div>
  )
}

export default VisitorPage