import React from 'react'
import './HeadBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import logo from './img/mobitel.png'

const HeadBar = () => {
  return (
    <div className='header'>
        <div className='topbar-logo'>
            <img src={logo} alt='icst-logo'></img>
        </div>
        <div className='search'>
          <input className='search-input' type='text' placeholder='search...' id='search' name='search' />
          <hr/>
        </div>
        <div className='topbar-logout'>
            <FontAwesomeIcon icon={faSignOutAlt} className='logout-icon'/>
        </div>
    </div>
  )
}

export default HeadBar