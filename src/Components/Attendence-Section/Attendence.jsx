import React from 'react'
import './Attendence.css'
import { faClipboardList } from '@fortawesome/free-solid-svg-icons';
import MainHeading from '../Main-Heading/MainHeading';

const Attendence = () => {
  return (
    <div className='main-attendence'>
        <MainHeading icon={faClipboardList} heading={"Attendence"}/>
    </div>
  )
}

export default Attendence