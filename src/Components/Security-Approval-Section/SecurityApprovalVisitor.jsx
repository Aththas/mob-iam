import React, { useCallback, useEffect, useState } from 'react';
import './SecurityApproval.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faHistory, faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';
import MainHeading from '../Main-Heading/MainHeading';
import toastr from '../toastr-config/ToastrConfig';
import { getNotPendingVisitorRequests, getPendingVisitorRequests, searchNotPendingVisitorRequests, searchPendingVisitorRequests } from '../../APIs/visitorRequestApi';
import Loading from '../Loading-Spinner/Loading';

const SecurityApprovalVisitor = () => {

    const [isHistory, setHistory] = useState(false);//true means history, it means alreay reacted ones, so notPending ones...
    const sortBy = 'id'; const ascending = true;
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(10);
    const [totalPages, setTotalPages] = useState(1);
    const [visitorRequestList, setVisitorRequestList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState('');
    const [searchOn, setSearchOn] = useState(false);
    const [searchCount, setSearchCount] = useState(0);

    const fetchVisitorRequestDetails = useCallback ( async () => {
        setLoading(true);
        try{
            let response;
            if(isHistory){
                response = searchOn
                    ? await searchNotPendingVisitorRequests(page, size, sortBy, ascending, search)
                    : await getNotPendingVisitorRequests(page, size, sortBy, ascending);
            }else{
                response = searchOn
                    ? await searchPendingVisitorRequests(page, size, sortBy, ascending, search)
                    : await getPendingVisitorRequests(page, size, sortBy, ascending);
            }

            if(response.data.success){
                setVisitorRequestList(response.data.data);
                setTotalPages(Math.ceil(response.data.message/size));
            }else{
                setVisitorRequestList([]);
                setTotalPages(1);
            }
        }catch(error){
            console.log(error);
            toastr.error(error.response?.data?.message || "Network Error");
        }finally{
            setLoading(false);
        }
    }, [page, size, sortBy, ascending, isHistory, searchOn, searchCount]);

    useEffect(() => {
        fetchVisitorRequestDetails();
    }, [fetchVisitorRequestDetails]);

    const getColor = (status) =>{
        if(status === 'accept') return "green";
        if(status === 'pending') return "orange";
        if(status === 'reject') return "red";
        return "black";
    }

    const handlePageChange = (newPage) => {
        setPage(newPage);
    };

    const handleSizeChange = (e) => {
        setSize(Number(e.target.value));
        setPage(0);
    };

    const filterChange = () => {
        setHistory((cur) => !cur);
        setPage(0);
    };

    const handleSearch = () => {
        if(search === '' || search === null){
            setSearchOn(false);
        }else{
            setSearchOn(true);
            setSearchCount((count) => count+1);
        }
        setPage(0);
    }; 

  return (
    <div className='main-user'>
        {loading && <Loading/>}
        <MainHeading icon={isHistory ? faHistory : faPen} heading={`Visitors Entry Approval Request ${isHistory ? 'History' :''}`}/>
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
                    <button className='filter-btn' onClick={filterChange}>
                        <FontAwesomeIcon icon={isHistory ? faEnvelopeOpenText : faHistory} className='icon' />
                    </button>
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
                                <th>Requester</th>
                                <th>{isHistory ? 'My Approval':'Action'}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {visitorRequestList.length > 0 ? (
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
                                    <td>
                                        {visitorRequest.user.firstName} {visitorRequest.user.lastName} <br/>
                                        {visitorRequest.user.designation}<br/>
                                        {visitorRequest.user.contact}
                                    </td>
                                    {isHistory ? (
                                        <td style={{color:getColor(visitorRequest.permission), fontWeight:'900'}}>
                                            {visitorRequest.permission.toUpperCase()}
                                        </td>
                                    ) : (
                                        <td>
                                            <button className="accept-btn">ACCEPT</button>
                                            <button className="reject-btn">REJECT</button>
                                        </td>
                                    )} 
                                </tr>
                            ))):(
                                <tr>
                                    <td colSpan="10" style={{textAlign:'center', color:'darkgray'}}>No Details Found</td>
                                </tr>
                            )}
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
    </div>
  )
}

export default SecurityApprovalVisitor