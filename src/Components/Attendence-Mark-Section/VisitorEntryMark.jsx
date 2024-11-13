import React from 'react'
import './AttendenceMark.css'
import { faClipboardList } from '@fortawesome/free-solid-svg-icons';
import MainHeading from '../Main-Heading/MainHeading';

const VisitorEntryMark = () => {

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
    <MainHeading icon={faClipboardList} heading={"Mark Visitor Entry"}/>
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
                        <div class="input-group">
                            <input type="text" name="text" class="input" disabled value={user.last_name || 'First Name'}/>
                            <label class="label">First Name</label>
                        </div>
                        <div class="input-group">
                            <input type="text" name="text" class="input" disabled value={user.first_name || 'Last Name'}/>
                            <label class="label">Last Name</label>
                        </div>
                  </div>
                  <div className="row">
                        <div class="input-group">
                            <input type="text" name="text" class="input" disabled value={user.nic || 'NIC'}/>
                            <label class="label">NIC</label>
                        </div>
                        <div class="input-group">
                            <input type="text" name="text" class="input" disabled value={user.requester || 'Requester'}/>
                            <label class="label">Requester</label>
                        </div>
                  </div>
                  <div className="row">
                        <div class="input-group">
                            <input type="text" name="text" class="input" disabled value={user.start || 'Start Date'}/>
                            <label class="label">Start Date</label>
                        </div>
                        <div class="input-group">
                            <input type="text" name="text" class="input" disabled value={user.end || 'End Date'}/>
                            <label class="label">End Date</label>
                        </div>
                  </div>
                  <div className="row">
                        <div class="input-group">
                            <input type="text" name="text" class="input" disabled value={user.in_time || 'In Time'}/>
                            <label class="label">In Time</label>
                        </div>
                        <div class="input-group">
                            <input type="text" name="text" class="input" disabled value={user.out_time || 'Out Time'}/>
                            <label class="label">Out Time</label>
                        </div>
                  </div>
                  <div className="row">
                    <div class="input-group">
                        <button 
                            type="button" 
                            className={`form-submit-btn ${user.in_time !== null && 'disabled'}`}
                            disabled={user.in_time !== null}
                        >
                            Mark IN
                        </button>
                    </div>
                    <div class="input-group">
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

export default VisitorEntryMark