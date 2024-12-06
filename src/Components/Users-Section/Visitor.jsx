import React, { useCallback, useEffect, useState } from 'react';
import './Users.css';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import MainHeading from '../Main-Heading/MainHeading';
import AddVisitor from './Add-User/AddVisitor';
import { getMyVisitorRequests, searchMyVisitorRequestsByKeyword } from '../../APIs/visitorRequestApi';
import toastr from '../toastr-config/ToastrConfig';
import Loading from '../Loading-Spinner/Loading';

const Visitor = () => {
    const [addForm, setAddForm] = useState(false);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(10);
    // const [sortBy, setSortBy] = useState('id');
    // const [ascending, setAscending] = useState(false);
    const sortBy = 'id'; const ascending = false;
    const [visitorRequestList, setVisitorRequestList] = useState([]);
    const [totalPages, setTotalPages] = useState(1);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState('');
    const [searchOn, setSearchOn] = useState(false);
    const [searchCount, setSearchCount] = useState(0);

    const fetchMyVisitorRequests = useCallback(async () =>{
        setLoading(true);
        try{
            let response;
            if(searchOn){
                response = await searchMyVisitorRequestsByKeyword(page, size, sortBy, ascending, search);
            }else{
                response = await getMyVisitorRequests(page, size, sortBy, ascending);
            }
            
            if(response.data.success){
                setVisitorRequestList(response.data.data);
                setTotalPages(Math.ceil(response.data.message/size));
            }else{
                toastr.error(response.data.message);
                setVisitorRequestList([]);
            }
        }catch(error){
            console.log(error);
            toastr.error(error.response.data.message || "Network Error");
        }finally{
            setLoading(false);
        }

    },[page, size, sortBy, ascending, searchOn, searchCount]);

    useEffect(()=>{
        fetchMyVisitorRequests();
    },[fetchMyVisitorRequests]);

    const toggleForm = (setter, value) => {
        setter(value);
    }

    const getColor = (status) => {
        if (status === 'accept') return 'green';
        if (status === 'pending') return 'orange';
        if (status === 'reject') return 'red';
        return 'black';
    };

    const handlePageChange = (newPage) => {
        setPage(newPage);
    };

    const handleSizeChange = (e) =>{
        setSize(Number(e.target.value));
        setPage(0);
    };

    const handleSearch = () => {
        if(search === '' || search === null){
            setSearchOn(false);
        }else{
            setSearchOn(true);
            setSearchCount((count) => count+1);
            console.log(searchCount);
            
        }
        setPage(0);
    };


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
                            <select value={size} onChange={handleSizeChange}>
                                <option value={10}>10</option>
                                <option value={25}>25</option>
                                <option value={50}>50</option>
                                <option value={75}>75</option>
                                <option value={100}>100</option>
                            </select>
                        </label>
                    </div>
                    <div className="search">
                        <input className='search-input' type='text' placeholder='search...' id='search' name='search'
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <button className='search-btn' onClick={handleSearch}>Search</button>
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
                            
                            {visitorRequestList.length > 0 ?(
                                visitorRequestList.map((visitorRequest,index) => (
                                <tr key={index}>
                                    
                                    <td>{index + 1 + page * size}</td>
                                    <td>{visitorRequest.visitor.verificationId}</td>
                                    <td>{visitorRequest.visitor.name}</td>
                                    <td>{visitorRequest.visitor.company}</td>
                                    <td>{visitorRequest.department}</td>
                                    <td>{visitorRequest.startDate}</td>
                                    <td>{visitorRequest.endDate}</td>
                                    <td>{visitorRequest.nightStay.toUpperCase()}</td>
                                    <td style={{color:getColor(visitorRequest.permission), fontWeight:'900'}}>
                                        {visitorRequest.permission.toUpperCase()}
                                    </td>
                                </tr>
                                ))
                                ):(
                                    <tr>
                                        <td colSpan="9" style={{textAlign:'center'}}> No Details Found</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
                <div className="pagination">
                    <button className='prev-btn' onClick={() => handlePageChange(page-1)} disabled={page < 1}>Previous</button>
                    <p>Page {page+1} of {totalPages}</p>
                    <button className='next-btn' onClick={() => handlePageChange(page+1)} disabled={page+1 === totalPages}>Next</button>
                </div>
            </div>
        </div>
        {addForm && <AddVisitor onClose={() => toggleForm(setAddForm, false)} fetchMyVisitorRequests={fetchMyVisitorRequests}/>}
    </div>
  )
}

export default Visitor