import React from 'react'
import './Users.css'
import { faUserEdit } from '@fortawesome/free-solid-svg-icons';
import MainHeading from '../Main-Heading/MainHeading'

const Users = () => {
  return (
    <div className='main-user'>
        <MainHeading icon={faUserEdit} heading={"Users"}/>
        <div className="main-section-container">
            <div className="main-content">
            </div>
        </div>
    </div>
  )
}

export default Users