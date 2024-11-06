import React from 'react'
import './Dashboard.css' 
import { faTachometerAlt } from '@fortawesome/free-solid-svg-icons';
import MainHeading from '../Main-Heading/MainHeading';

const Dashboard = () => {
  return (
    <div className='main-dashboard'>
        <MainHeading icon={faTachometerAlt} heading={"Dashboard"}/>
        <div className="main-section-container">
            <div className="main-content">
            </div>
        </div>
    </div>
  )
}

export default Dashboard