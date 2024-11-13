import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './UsersAttendence.css'
import { faClipboardList } from '@fortawesome/free-solid-svg-icons';
import MainHeading from '../Main-Heading/MainHeading';

const UsersAttendence = () => {
    const todayDate = new Date();

    const yesterdayDate = new Date(todayDate);
    yesterdayDate.setDate(todayDate.getDate() - 1);
  
    const today = todayDate.toISOString().split("T")[0];
    const yesterday = yesterdayDate.toISOString().split("T")[0];

    const [fromDate, setFromDate] = useState('2024-11-01');
    const [toDate, setToDate] = useState(today);
  
    const attendanceDates = [
        '2024-10-01',
        '2024-10-03',
        '2024-10-07',
        '2024-10-02',
        '2024-10-20',
        '2024-10-25',
        '2024-11-01',
        '2024-11-04',
        '2024-11-11',
        '2024-11-06',
    ];


    const filteredDates = attendanceDates.filter(date => {
        const attendDate = new Date(date);
        const from = fromDate ? new Date(fromDate) : null;
        const to = toDate ? new Date(toDate) : null;
        return (!from || attendDate >= from) && (!to || attendDate <= to);
    });

    // Convert filtered dates to a Set for fast lookup
    const filteredDatesSet = new Set(filteredDates.map(date => new Date(date).toDateString()));

    // Function to highlight dates in the filtered range
    const tileClassName = ({ date, view }) => {
        if (view === 'month') {
            const dateStr = date.toDateString();
            if (filteredDatesSet.has(dateStr)) {
              return 'attended';
            }
            const day = date.getDay();
            if (day === 0 || day === 6) {
              return 'weekend';
            }
        }
        return null;
    };
  
  return (
  <div className='main-user' style={{overflowX: 'hidden'}}>
      <MainHeading icon={faClipboardList} heading={"Intern Attendence - Aththas"}/>
      <div className="main-section-container">
          <div className="main-content">
              <div className="page-filter-and-add-new">
                  <div className="report-section">
                    <button className='report-btn'>Download Attendence Report</button>
                  </div>
                  <div className='date-container'>
                      <div class="input-group">
                          <input 
                            type="date" name="text" class="input date-input" required 
                            max={yesterday} min="2023-01-01"
                            value={fromDate} 
                            onChange={(e) => setFromDate(e.target.value)}
                           />
                          <label class="label">From</label>
                      </div>
                      <div class="input-group">
                          <input 
                            type="date" name="text" class="input date-input" required 
                            max={today} min="2023-01-01"
                            value={toDate}
                            onChange={(e) => setToDate(e.target.value)}  
                          />
                          <label class="label">To</label>
                      </div>
                  </div>
              </div>
              <div className="user-calender">
                <Calendar
                    tileClassName={tileClassName}
                />
              </div>
          </div>
      </div>
  </div>
  )
}

export default UsersAttendence