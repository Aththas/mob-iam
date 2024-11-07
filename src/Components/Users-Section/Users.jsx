import React, { useCallback, useState } from 'react'
import './Users.css'
import { faUserEdit } from '@fortawesome/free-solid-svg-icons';
import MainHeading from '../Main-Heading/MainHeading'
import AddUser from './Add-User/AddUser';

const Users = () => {
    const [addForm, setAddForm] = useState(true);

    const userDetails = [
        {
            name: 'Aththas',
            role: 'Software Engineer',
            department: 'Information Systems',
            status: 'Intern'
        },
        {
            name: 'Deelaka',
            role: 'Security Engineer',
            department: 'Information Systems',
            status: 'L3'
        },
        {
            name: 'Amar',
            role: 'Systems Engineer',
            department: 'Information Systems',
            status: 'L5'
        }
    ];

    const openAddForm = useCallback(() => {
        setAddForm(true);
    },[]);
    
    const closeAddForm = useCallback(() =>{
        setAddForm(false);
    },[]);

  return (
    <div className='main-user'>
        <MainHeading icon={faUserEdit} heading={"Users"}/>
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
                    <button className='add-btn' onClick={openAddForm}>+</button>
                    {addForm && <AddUser onClose={closeAddForm}/>}
                </div>
                <div className="user-table">
                    <table className="styled-table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Role</th>
                                <th>Department</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {userDetails.map((user,index) => (
                                <tr key={index}>
                                    <td>{index+1}</td>
                                    <td>{user.name}</td>
                                    <td>{user.role}</td>
                                    <td>{user.department}</td>
                                    <td>{user.status}</td>
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

export default Users