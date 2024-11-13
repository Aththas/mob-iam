import React from 'react'
import './SideBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faClipboardList, faPen, faUserCheck } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


const SideBar = ({ title }) => {

  return (
    <div className='sibebar'>
        <div className='sidebar-menu'>
        <ul className='nav-list'>
          <div className='li-heading'>
              <div className='list-item'>
                <p>Intern Management</p>
              </div>      
          </div>
          <li className={title===1 ? 'active' : ''}>
            <Link to="/attendence">
              <div className='list-item'>
                <FontAwesomeIcon icon={faClipboardList} className='icon' />
                <p style={{marginLeft: '1.5vw'}}>Entries - (S)</p>
              </div>
            </Link>       
          </li>
          <li className={title===2 ? 'active' : ''}>
            <Link to="/mark-attendence">
              <div className='list-item'>
                <FontAwesomeIcon icon={faClipboardList} className='icon' />
                <p style={{marginLeft: '1.5vw'}}>Mark Entry - (S)</p>
              </div>
            </Link>       
          </li>
          <li className={title===3 ? 'active' : ''}>
            <Link to="/user">
              <div className='list-item'>
                <FontAwesomeIcon icon={faUser} className='icon'/>
                <p style={{marginLeft: '1.3vw'}}>Entry Request - (HR)</p>
              </div>
            </Link> 
          </li>
          <li className={title===4 ? 'active' : ''}>
            <Link to="/manager-approval">
              <div className='list-item'>
                <FontAwesomeIcon icon={faPen} className='icon'/>
                <p style={{marginLeft: '1.3vw'}}>Manager Approval - (M)</p>
              </div>
            </Link> 
          </li>
          <li className={title===5 ? 'active' : ''}>
            <Link to="/security-approval">
              <div className='list-item'>
                <FontAwesomeIcon icon={faPen} className='icon'/>
                <p style={{marginLeft: '1.2vw'}}>Security Approval - (S)</p>
              </div>
            </Link> 
          </li>
          <li className={title===6 ? 'active' : ''}>
            <Link to="/approved-user">
              <div className='list-item'>
                <FontAwesomeIcon icon={faUserCheck} className='icon'/>
                <p style={{marginLeft: '1.2vw'}}>Approved Interns - (S)</p>
              </div>
            </Link> 
          </li>
        </ul>

        <ul className='nav-list'>
          <div className='li-heading' style={{marginTop: '5vh'}}>
              <div className='list-item'>
                <p>Visitor Management</p>
              </div>      
          </div>
          <li className={title===7 ? 'active' : ''}>
            <Link to="/attendence-visitor">
              <div className='list-item'>
                <FontAwesomeIcon icon={faClipboardList} className='icon' />
                <p style={{marginLeft: '1.5vw'}}>Entries - (S)</p>
              </div>
            </Link>       
          </li>
          <li className={title===8 ? 'active' : ''}>
            <Link to="/mark-attendence-visitor">
              <div className='list-item'>
                <FontAwesomeIcon icon={faClipboardList} className='icon' />
                <p style={{marginLeft: '1.5vw'}}>Mark Entry - (S)</p>
              </div>
            </Link>       
          </li>
          <li className={title===9 ? 'active' : ''}>
            <Link to="/visitor">
              <div className='list-item'>
                <FontAwesomeIcon icon={faUser} className='icon'/>
                <p style={{marginLeft: '1.3vw'}}>Entry Request - (All)</p>
              </div>
            </Link> 
          </li>
          <li className={title===10 ? 'active' : ''}>
            <Link to="/security-approval-visitor">
              <div className='list-item'>
                <FontAwesomeIcon icon={faPen} className='icon'/>
                <p style={{marginLeft: '1.2vw'}}>Security Approval - (S)</p>
              </div>
            </Link> 
          </li>
          <li className={title===11 ? 'active' : ''}>
            <Link to="/approved-visitor">
              <div className='list-item'>
                <FontAwesomeIcon icon={faUserCheck} className='icon'/>
                <p style={{marginLeft: '1.2vw'}}>Approved Visitors - (S)</p>
              </div>
            </Link> 
          </li>
        </ul>
        {/* <div className="today-report-generation">
            <button className='today-report-btn'>Today Report</button>
        </div> */}
      </div>
    </div>
  )
}

export default SideBar