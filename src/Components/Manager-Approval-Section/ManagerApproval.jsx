import React, { useState } from 'react';
import './ManagerApproval.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faHistory, faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';
import MainHeading from '../Main-Heading/MainHeading';

const ManagerApproval = () => {
    const [isHistory, setHistory] = useState(true);

    const userDetails = [
        {
            id: 1,
            first_name: 'Aththas',
            last_name: 'Rizwan',
            nic: '990623686V',
            department: 'Information Systems',
            start: '2024-03-25',
            end: '2024-12-25',
            approval: 'accept',
            permission: 'accept',
            status: 'active',
            requester: 'Amaya'
        },
        {
            id: 2,
            first_name: 'Deelaka',
            last_name: 'Gamage',
            nic: '990622226V',
            department: 'Information Systems',
            start: '2024-03-25',
            end: '2024-11-01',
            approval: 'pending',
            permission: 'pending',
            status: 'active',
            requester: 'Amaya'
        },
        {
            id: 3,
            first_name: 'Amar',
            last_name: 'Shenan',
            nic: '990623386V',
            department: 'Information Systems',
            start: '2024-03-25',
            end: '2024-11-15',
            approval: 'reject',
            permission: 'reject',
            status: 'active',
            requester: 'Amaya'
        }
    ];

    const getColor = (status) =>{
        if(status === 'accept') return "green";
        if(status === 'pending') return "orange";
        if(status === 'reject') return "red";
        return "black";
    }

  return (
    <div className='main-user'>
        <MainHeading icon={isHistory ? faPen : faHistory} heading={`Intern Entry Request ${!isHistory ? 'History' :''}`}/>
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
                    <button className='filter-btn' onClick={() => setHistory((cur) => !cur)}>
                        <FontAwesomeIcon icon={isHistory ? faHistory : faEnvelopeOpenText} className='icon' />
                    </button>
                </div>
                <div className="user-table">
                    <table className="styled-table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>NIC</th>
                                <th>Department</th>
                                <th>Start Date</th>
                                <th>End Date</th>
                                <th>Requester</th>
                                <th>{isHistory ? 'Action':'My Approval'}</th>
                                {!isHistory && (
                                    <th>Security Permission</th>
                                )}
                            </tr>
                        </thead>
                        <tbody>
                            {userDetails.map((user,index) => (
                                <tr key={index}>
                                    <td>{user.id}</td>
                                    <td>{`${user.first_name} ${user.last_name}`}</td>
                                    <td>{user.nic}</td>
                                    <td>{user.department}</td>
                                    <td>{user.start}</td>
                                    <td>{user.end}</td>
                                    <td>{user.requester}</td>
                                    {isHistory ? (
                                        <td>
                                            <button className="accept-btn">accept</button>
                                            <button className="reject-btn">reject</button>
                                        </td>
                                    ) : (
                                        <td style={{color:getColor(user.approval), fontWeight:'900'}}>{user.approval}</td>
                                    )} 

                                    {!isHistory && (
                                        <td style={{color:getColor(user.permission), fontWeight:'900'}}>{user.permission}</td>
                                    )}
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

export default ManagerApproval