import React from 'react'
import './MainHeading.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MainHeading = ({ icon,heading }) => {
  return (
    <div className="main-heading">
        <FontAwesomeIcon icon={icon} className='icon'/>
        <h3>{heading}</h3>
    </div>
  )
}

export default MainHeading