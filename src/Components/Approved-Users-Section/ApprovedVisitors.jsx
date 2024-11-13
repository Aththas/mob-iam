import React from 'react';
import './ApprovedUsers.css';
import { faUserCheck } from '@fortawesome/free-solid-svg-icons';
import MainHeading from '../Main-Heading/MainHeading';

const ApprovedVisitors = () => {

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
          requester: 'Amaya',
          approver: 'Musthalie'
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
          requester: 'Amaya',
          approver: 'Musthalie'
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
          requester: 'Amaya',
          approver: 'Musthalie'
      }
  ];

return (
  <div className='main-user' style={{overflowX: 'hidden'}}>
      <MainHeading icon={faUserCheck} heading={"Approved Visitors"}/>
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
                  <div className="search-approved">
                      <input className='search-input-approved' type='text' placeholder='search...' id='search' name='search' />
                      <button className='search-btn-approved'>Search</button>
                  </div>
              </div>
              <div className="user-table">
                  <table className="styled-table">
                      <thead>
                          <tr>
                              <th>NIC</th>
                              <th>Name</th>
                              <th>Allowed Department</th>
                              <th>Start Date</th>
                              <th>End Date</th>
                              <th>Requester</th>
                          </tr>
                      </thead>
                      <tbody>
                          {userDetails.map((user,index) => (
                              <tr key={index}>
                                  <td>{user.nic}</td>
                                  <td>{`${user.first_name} ${user.last_name}`}</td>
                                  <td>{user.department}</td>
                                  <td>{user.start}</td>
                                  <td>{user.end}</td>
                                  <td>{user.requester}</td>
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

export default ApprovedVisitors