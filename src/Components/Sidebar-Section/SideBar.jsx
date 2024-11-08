import React from 'react'
import './SideBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faClipboardList, faTachometerAlt, faPen } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


const SideBar = () => {
  return (
    <div className='sibebar'>
        <div className='sidebar-menu'>
        <ul className='nav-list'>
          <li>
            <Link to="/dashboard">
              <div className='list-item'>
                <FontAwesomeIcon icon={faTachometerAlt} className='icon' />
                <p>Dashboard</p>
              </div>
            </Link>       
          </li>
          <li>
            <Link to="/attendence">
              <div className='list-item'>
                <FontAwesomeIcon icon={faClipboardList} className='icon' />
                <p>Attendence</p>
              </div>
            </Link>       
          </li>
          <li>
            <Link to="/user">
              <div className='list-item'>
                <FontAwesomeIcon icon={faUser} className='icon'/>
                <p>Interns</p>
              </div>
            </Link> 
          </li>
          <li>
            <Link to="/manager-approval">
              <div className='list-item'>
                <FontAwesomeIcon icon={faPen} className='icon'/>
                <p>Manager-Approval</p>
              </div>
            </Link> 
          </li>
        </ul>
      </div>
    </div>
  )
}

export default SideBar