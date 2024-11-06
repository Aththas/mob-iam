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
                    <button className='add-btn'>+</button>
                </div>
                <div className="user-table">
                    <table class="styled-table">
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
                            <tr>
                            <td>1</td>
                               <td>John Doe</td>
                                <td>Developer</td>
                                <td>Engineering</td>
                                <td>Active</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Jane Smith</td>
                                <td>Designer</td>
                                <td>Creative</td>
                                <td>Inactive</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Jane Smith</td>
                                <td>Designer</td>
                                <td>Creative</td>
                                <td>Inactive</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Michael Brown</td>
                                <td>Manager</td>
                                <td>Operations</td>
                                <td>Pending</td>
                            </tr>
                            <tr>
                            <td>1</td>
                               <td>John Doe</td>
                                <td>Developer</td>
                                <td>Engineering</td>
                                <td>Active</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Jane Smith</td>
                                <td>Designer</td>
                                <td>Creative</td>
                                <td>Inactive</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Michael Brown</td>
                                <td>Manager</td>
                                <td>Operations</td>
                                <td>Pending</td>
                            </tr>
                            <tr>
                            <td>1</td>
                               <td>John Doe</td>
                                <td>Developer</td>
                                <td>Engineering</td>
                                <td>Active</td>
                            </tr>
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