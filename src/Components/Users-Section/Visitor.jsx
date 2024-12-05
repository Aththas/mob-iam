import React, { useCallback, useEffect, useState } from 'react';
import './Users.css';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import MainHeading from '../Main-Heading/MainHeading';
import AddVisitor from './Add-User/AddVisitor';
import { getMyVisitorRequests } from '../../APIs/visitorRequestApi';
import toastr from '../toastr-config/ToastrConfig';
import Loading from '../Loading-Spinner/Loading';

const Visitor = () => {
    const [addForm, setAddForm] = useState(false);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(10);
    const [sortBy, setSortBy] = useState('id');
    const [ascending, setAscending] = useState(false);
    const [visitorRequestList, setVisitorRequestList] = useState([]);
    const [totalPages, setTotalPages] = useState(1);
    const [loading, setLoading] = useState(false);
    // const [updateForm, setUpdateForm] = useState(false);

    const fetchMyVisitorRequests = useCallback(async () =>{
        setLoading(true);
        try{
            const response = await getMyVisitorRequests(page, size, sortBy, ascending);
            
            if(response.data.success){
                setVisitorRequestList(response.data.data);
                setTotalPages(Math.ceil(response.data.message/size));
            }else{
                toastr.error(response.data.message);
            }
        }catch(error){
            console.log(error);
            toastr.error("Network Error");
        }finally{
            setLoading(false);
        }

    },[page, size, sortBy, ascending]);

    useEffect(()=>{
        fetchMyVisitorRequests();
    },[fetchMyVisitorRequests]);

    const toggleForm = (setter, value) => {
        setter(value);
    }

    const getColor = useCallback((status) => {
        if (status === 'accept') return 'green';
        if (status === 'pending') return 'orange';
        if (status === 'reject') return 'red';
        return 'black';
    },[]);

  return (
    <div className='main-user'>
        {loading && <Loading/>}
        <MainHeading icon={faUser} heading={"Visitors"}/>
        <div className="main-section-container">
            <div className="main-content">
                <div className="page-filter-and-add-new">
                    <div className="page-filter">
                        <label>
                            Entries per page: 
                            <select>
                                <option value={10}>10</option>
                                <option value={25}>25</option>
                                <option value={50}>50</option>
                                <option value={75}>75</option>
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
                                <th>#</th>
                                <th>NIC/VID</th>
                                <th>Name</th>
                                <th>Company</th>
                                <th>Allowed Department</th>
                                <th>Start Date</th>
                                <th>End Date</th>
                                <th>Night Stay</th>
                                <th>Permission</th>
                            </tr>
                        </thead>
                        <tbody>
                            {visitorRequestList.map((visitorRequest,index) => (
                                <tr key={index}>
                                    <td>{index + 1 + page * size}</td>
                                    <td>{visitorRequest.visitor.verificationId}</td>
                                    <td>{visitorRequest.visitor.name}</td>
                                    <td>{visitorRequest.visitor.company}</td>
                                    <td>{visitorRequest.department}</td>
                                    <td>{visitorRequest.startDate}</td>
                                    <td>{visitorRequest.endDate}</td>
                                    <td>{visitorRequest.nightStay}</td>
                                    <td style={{color:getColor(visitorRequest.permission), fontWeight:'900'}}>
                                        {visitorRequest.permission}
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
        {addForm && <AddVisitor onClose={() => toggleForm(setAddForm, false)}/>}
        {/* {updateForm && <UpdateVisitor onClose={() => toggleForm(setUpdateForm, false)}/>} */}
    </div>
  )
}

export default Visitor