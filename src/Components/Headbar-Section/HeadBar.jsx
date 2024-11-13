import React from 'react'
import './HeadBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import logo from './img/mobitel.png'
import { useNavigate } from 'react-router-dom';

const HeadBar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/");
  }

  return (
    <div className='header'>
        <div className='topbar-logo'>
            <img src={logo} alt='icst-logo'></img>
        </div>
        {/* <div className='search'>
          <input className='search-input' type='text' placeholder='search...' id='search' name='search' />
          <hr/>
        </div> */}
        <div className='topbar-logout'>
            <FontAwesomeIcon icon={faSignOutAlt} className='logout-icon' onClick={handleLogout}/>
        </div>
    </div>
  )
}

export default HeadBar