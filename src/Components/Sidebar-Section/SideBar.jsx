import React from 'react'
import './SideBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faClipboardList, faTachometerAlt, faPen, faUserCheck } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


const SideBar = () => {
  return (
    <div className='sibebar'>
        <div className='sidebar-menu'>
        <ul className='nav-list'>
          <li>
              <div className='list-item'>
                <p style={{fontWeight: 'bold'}}>Intern Management</p>
              </div>      
          </li>
          <li>
            <Link to="/attendence">
              <div className='list-item'>
                <FontAwesomeIcon icon={faClipboardList} className='icon' />
                <p style={{marginLeft: '1.5vw'}}>Entries - (S)</p>
              </div>
            </Link>       
          </li>
          <li>
            <Link to="/mark-attendence">
              <div className='list-item'>
                <FontAwesomeIcon icon={faClipboardList} className='icon' />
                <p style={{marginLeft: '1.5vw'}}>Mark Entry - (S)</p>
              </div>
            </Link>       
          </li>
          <li>
            <Link to="/user">
              <div className='list-item'>
                <FontAwesomeIcon icon={faUser} className='icon'/>
                <p style={{marginLeft: '1.3vw'}}>Interns Request - (HR)</p>
              </div>
            </Link> 
          </li>
          <li>
            <Link to="/manager-approval">
              <div className='list-item'>
                <FontAwesomeIcon icon={faPen} className='icon'/>
                <p style={{marginLeft: '1.3vw'}}>Manager Approval - (M)</p>
              </div>
            </Link> 
          </li>
          <li>
            <Link to="/security-approval">
              <div className='list-item'>
                <FontAwesomeIcon icon={faPen} className='icon'/>
                <p style={{marginLeft: '1.2vw'}}>Security Approval - (S)</p>
              </div>
            </Link> 
          </li>
          <li>
            <Link to="/approved-user">
              <div className='list-item'>
                <FontAwesomeIcon icon={faUserCheck} className='icon'/>
                <p style={{marginLeft: '1.2vw'}}>Approved Interns - (S)</p>
              </div>
            </Link> 
          </li>
        </ul>

        <ul className='nav-list'>
          <li>
              <div className='list-item'>
                <p style={{fontWeight: 'bold'}}>Visitor Management</p>
              </div>      
          </li>
          <li>
            <Link to="/attendence">
              <div className='list-item'>
                <FontAwesomeIcon icon={faClipboardList} className='icon' />
                <p style={{marginLeft: '1.5vw'}}>Entries - (S)</p>
              </div>
            </Link>       
          </li>
          <li>
            <Link to="/mark-attendence">
              <div className='list-item'>
                <FontAwesomeIcon icon={faClipboardList} className='icon' />
                <p style={{marginLeft: '1.5vw'}}>Mark Entry - (S)</p>
              </div>
            </Link>       
          </li>
          <li>
            <Link to="/user">
              <div className='list-item'>
                <FontAwesomeIcon icon={faUser} className='icon'/>
                <p style={{marginLeft: '1.3vw'}}>Interns Request - (HR)</p>
              </div>
            </Link> 
          </li>
          <li>
            <Link to="/security-approval">
              <div className='list-item'>
                <FontAwesomeIcon icon={faPen} className='icon'/>
                <p style={{marginLeft: '1.2vw'}}>Security Approval - (S)</p>
              </div>
            </Link> 
          </li>
          <li>
            <Link to="/approved-user">
              <div className='list-item'>
                <FontAwesomeIcon icon={faUserCheck} className='icon'/>
                <p style={{marginLeft: '1.2vw'}}>Approved Interns - (S)</p>
              </div>
            </Link> 
          </li>
        </ul>
        <div className="today-report-generation">
            <button className='today-report-btn'>Today Report</button>
        </div>
      </div>
    </div>
  )
}

export default SideBar