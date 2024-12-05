import React from 'react'
import './Attendence.css'
import { faClipboardList } from '@fortawesome/free-solid-svg-icons';
import MainHeading from '../Main-Heading/MainHeading';
import { Link } from 'react-router-dom';

const Attendence = () => {
  
  const todayDate = new Date();

  const yesterdayDate = new Date(todayDate);
  yesterdayDate.setDate(todayDate.getDate() - 1);

  const today = todayDate.toISOString().split("T")[0];
  const yesterday = yesterdayDate.toISOString().split("T")[0];

  const userDetails = [
    {
        id: 1,
        first_name: 'Aththas',
        last_name: 'Rizwan',
        nic: '990623686V',
        department: 'Information Systems',
        date: '2024-03-25',
        in_time: '08:30:35',
        out_time: '17:40:22',
        status: 'active',
        requester: 'Amaya',
        token: '51',
        approver: 'Musthalie'
    },
    {
        id: 2,
        first_name: 'Deelaka',
        last_name: 'Gamage',
        nic: '990622226V',
        department: 'Information Systems',
        date: '2024-03-25',
        in_time: '08:30:35',
        out_time: '17:40:22',
        status: 'active',
        requester: 'Amaya',
        token: '54',
        approver: 'Musthalie'
    },
    {
        id: 3,
        first_name: 'Amar',
        last_name: 'Shenan',
        nic: '990623386V',
        department: 'Information Systems',
        date: '2024-03-25',
        in_time: '08:30:35',
        out_time: '17:40:22',
        status: 'active',
        requester: 'Amaya',
        token: '53',
        approver: 'Musthalie'
    }
];

return (
<div className='main-user' style={{overflowX: 'hidden'}}>
    <MainHeading icon={faClipboardList} heading={"Intern Entries"}/>
    <div className="main-section-container">
        <div className="main-content">
            <div className="page-filter-and-add-new">
                <div className="page-filter">
                    <label>
                        Entries per page: 
                        <select>
                            <option value={8}>8</option>
                            <option value={10}>10</option>
                            <option value={25}>25</option>
                            <option value={50}>50</option>
                            <option value={100}>100</option>
                        </select>
                    </label>
                </div>
                <div className="search">
                    <input className='search-input' type='text' placeholder='search...' id='search' name='search' />
                    <button className='search-btn'>Search</button>
                </div>
                <div className='date-container'>
                    <div className="input-group">
                        <input type="date" name="text" className="input date-input" required defaultValue="2024-11-01" max={yesterday} min="2023-01-01"/>
                        <label className="label">From</label>
                    </div>
                    <div className="input-group">
                        <input type="date" name="text" className="input date-input" required defaultValue={today} max={today} min="2023-01-01"/>
                        <label className="label">To</label>
                    </div>
                </div>
            </div>
            <div className="user-table">
                <table className="styled-table">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>NIC</th>
                            <th>Name</th>
                            <th>In Time</th>
                            <th>out Time</th>
                            <th>Department</th>
                            <th>Attendence</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userDetails.map((user,index) => (
                            <tr key={index}>
                                <td>{user.date}</td>
                                <td>{user.nic}</td>
                                <td>{`${user.first_name} ${user.last_name}`}</td>
                                <td>{user.in_time}</td>
                                <td>{user.out_time}</td>
                                <td>{user.department}</td>
                                <td>
                                    <Link to="/user-attendence">
                                        <button className='view-attendence-btn'>Attendence</button>
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="pagination">
                <button className='prev-btn'>Previous</button>
                <p>Page 1 of 1</p>
                <button className='next-btn'>Next</button>
            </div>
        </div>
    </div>
</div>
)
}

export default Attendence