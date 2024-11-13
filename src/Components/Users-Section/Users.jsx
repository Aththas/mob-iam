import React, { useCallback, useState } from 'react';
import './Users.css';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import MainHeading from '../Main-Heading/MainHeading';
import AddUser from './Add-User/AddUser';
import UpdateUser from './Update-User/UpdateUser';
import ExtendInternship from './Extend-Internship/ExtendInternship';

const Users = () => {
    const [addForm, setAddForm] = useState(false);
    const [updateForm, setUpdateForm] = useState(false);
    const [extendForm, setExtendForm] = useState(false);

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
            status: 'active'
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
            status: 'active'
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
            status: 'active'
        }
    ];

    const toggleForm = (setter, value) => {
        setter(value);
    }

    const isExtendable = useCallback((endDate) => {
        const currentDate = new Date();
        const end = new Date(endDate);
        const tenDaysBeforeEndDate = new Date(end);
        tenDaysBeforeEndDate.setDate(end.getDate() - 10);
        const tenDaysAfterEndDate = new Date(end);
        tenDaysAfterEndDate.setDate(end.getDate() + 10);

        return  (tenDaysBeforeEndDate < currentDate && currentDate < tenDaysAfterEndDate);
    },[]);

    const getColor = useCallback((status) => {
        if (status === 'accept') return 'green';
        if (status === 'pending') return 'orange';
        if (status === 'reject') return 'red';
        return 'black';
    },[]);

    const isApproved = (status) =>{
        if(status === 'pending') return false;
        return true;
    };

  return (
    <div className='main-user'>
        <MainHeading icon={faUser} heading={"Interns"}/>
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
                    <button className='add-btn' onClick={() => toggleForm(setAddForm, true)}>+</button>
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
                                <th>Approval</th>
                                <th>Permission</th>
                                <th>Extension</th>
                                <th>Update</th>
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
                                    <td style={{color:getColor(user.approval), fontWeight:'900'}}>{user.approval}</td>
                                    <td style={{color:getColor(user.permission), fontWeight:'900'}}>{user.permission}</td>
                                    <td>
                                        <button 
                                            onClick={() => toggleForm(setExtendForm, true)}
                                            className={`extend-btn ${!isExtendable(user.end) && 'disabled'}`}
                                            disabled={!isExtendable(user.end)}
                                        >
                                            extend
                                        </button>
                                    </td>
                                    <td>
                                        <button 
                                            onClick={() => toggleForm(setUpdateForm, true)}
                                            className={`update-btn ${isApproved(user.approval) && 'disabled'}`}
                                            disabled={isApproved(user.approval)}
                                        >
                                            update
                                        </button>
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
        {addForm && <AddUser onClose={() => toggleForm(setAddForm, false)}/>}
        {updateForm && <UpdateUser onClose={() => toggleForm(setUpdateForm, false)}/>}
        {extendForm && <ExtendInternship onClose={() => toggleForm(setExtendForm, false)}/>}
    </div>
  )
}

export default Users