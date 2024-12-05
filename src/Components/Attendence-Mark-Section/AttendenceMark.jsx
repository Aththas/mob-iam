import React from 'react'
import './AttendenceMark.css'
import { faClipboardList } from '@fortawesome/free-solid-svg-icons';
import MainHeading from '../Main-Heading/MainHeading';

const AttendenceMark = () => {

    const user ={
            // id: 1,
            // first_name: 'Aththas',
            // last_name: 'Rizwan',
            // nic: '990623686V',
            // department: 'Information Systems',
            // email: 'aththasr.ou@mobitel.lk',
            // start: '2024-03-25',
            // end: '2024-12-25',
            // in_time: '08:30:34',
            // out_time: '08:30:34',
            // approval: 'accept',
            // permission: 'accept',
            // status: 'active',
            // requester: 'Amaya',
            // approver: 'Musthalie'
    };

return (
<div className='main-user' style={{overflowX: 'hidden'}}>
    <MainHeading icon={faClipboardList} heading={"Mark Intern Entry"}/>
    <div className="main-section-container">
        <div className="main-content">
            <div className="search-filter-container">
                <div className="search-mark-attendence">
                    <input className='search-input-mark-attendence' type='text' placeholder='search...' id='search' name='search' />
                    <button className='search-btn-mark-attendence'>Search</button>
                </div>
            </div>
            <div className="form-style">
                <form>
                    <div className="row">
                        <div className="input-group">
                            <input type="text" name="text" className="input" disabled value={user.id || 'Intern ID'}/>
                            <label className="label">Intern ID</label>
                        </div>
                        <div className="input-group">
                            <input type="text" name="text" className="input" disabled value={user.nic || 'NIC'}/>
                            <label className="label">NIC</label>
                        </div>
                  </div>
                  <div className="row">
                        <div className="input-group">
                            <input type="text" name="text" className="input" disabled value={user.last_name || 'First Name'}/>
                            <label className="label">First Name</label>
                        </div>
                        <div className="input-group">
                            <input type="text" name="text" className="input" disabled value={user.first_name || 'Last Name'}/>
                            <label className="label">Last Name</label>
                        </div>
                  </div>
                  <div className="row">
                        <div className="input-group">
                            <input type="text" name="text" className="input" disabled value={user.email || 'Email'}/>
                            <label className="label">Email</label>
                        </div>
                        <div className="input-group">
                            <input type="text" name="text" className="input" disabled value={user.department || 'Department'}/>
                            <label className="label">Department</label>
                        </div>
                  </div>
                  <div className="row">
                        <div className="input-group">
                            <input type="text" name="text" className="input" disabled value={user.start || 'Start Date'}/>
                            <label className="label">Start Date</label>
                        </div>
                        <div className="input-group">
                            <input type="text" name="text" className="input" disabled value={user.end || 'End Date'}/>
                            <label className="label">End Date</label>
                        </div>
                  </div>
                  <div className="row">
                        <div className="input-group">
                            <input type="text" name="text" className="input" disabled value={user.requester || 'Requester'}/>
                            <label className="label">Requester</label>
                        </div>
                        <div className="input-group">
                            <input type="text" name="text" className="input" disabled value={user.approver || 'Approver'}/>
                            <label className="label">Approver</label>
                        </div>
                  </div>
                  <div className="row">
                        <div className="input-group">
                            <input type="text" name="text" className="input" disabled value={user.in_time || 'In Time'}/>
                            <label className="label">In Time</label>
                        </div>
                        <div className="input-group">
                            <input type="text" name="text" className="input" disabled value={user.out_time || 'Out Time'}/>
                            <label className="label">Out Time</label>
                        </div>
                  </div>
                  <div className="row">
                    <div className="input-group">
                        <button 
                            type="button" 
                            className={`form-submit-btn ${user.in_time !== null && 'disabled'}`}
                            disabled={user.in_time !== null}
                        >
                            Mark IN
                        </button>
                    </div>
                    <div className="input-group">
                        <button 
                            type="button" 
                            className={`form-submit-btn ${user.out_time !== null && 'disabled'}`}
                            disabled={user.out_time !== null || user.in_time === null}
                        >
                            Mark OUT
                        </button>
                    </div>
                  </div>
                </form>
            </div>
        </div>
    </div>
</div>
)
}

export default AttendenceMark