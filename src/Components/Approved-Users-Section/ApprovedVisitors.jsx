import React, { useCallback, useEffect, useState } from 'react';
import './ApprovedUsers.css';
import { faUserCheck } from '@fortawesome/free-solid-svg-icons';
import MainHeading from '../Main-Heading/MainHeading';
import toastr from '../toastr-config/ToastrConfig';
import { getApprovedVisitorRequests } from '../../APIs/visitorRequestApi';
import Loading from '../Loading-Spinner/Loading';

const ApprovedVisitors = () => {

    const sortBy = 'id'; const ascending = false;
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(10);
    const [totalPages, setTotalPages] = useState(1);
    const [visitorRequestList, setVisitorRequestList] = useState([]);
    const [search, setSearch] = useState('');
    const [searchOn, setSearchOn] = useState(false);
    const [loading, setLoading] = useState(false);

    const fetchApprovedVisitorRequests = useCallback( async () => {
        setLoading(true);
        try{
            const response = await getApprovedVisitorRequests(page, size, sortBy, ascending);
            if(response.data.success){
                setVisitorRequestList(response.data.data);
                setTotalPages(Math.ceil(response.data.message/size));
            }else{
                setVisitorRequestList([]);
            }
        }catch(error){
            console.log(error);
            toastr.error(error.response?.data?.message || "Network Error");
        }finally{
            setLoading(false);
        }
    },[page, size, sortBy, ascending]);

    useEffect(() => {
        fetchApprovedVisitorRequests();
    },[fetchApprovedVisitorRequests]);

    const handlePageChange = (newPage) => {
        setPage(newPage);
    };

    const handleSizeChange = (e) => {
        setSize(Number(e.target.value));
        setPage(0);
    };

    const handleSearch = () => {
        if(search === '' || search === null){
            setSearchOn(false);
        }else{
            setSearchOn(true);
        }
    }; 

return (
  <div className='main-user' style={{overflowX: 'hidden'}}>
    {loading && <Loading/>}
      <MainHeading icon={faUserCheck} heading={"Approved Requests"}/>
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
                  <div className="search-approved">
                      <input className='search-input-approved' type='text' placeholder='search...' id='search' name='search'
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                      />
                      <button className='search-btn-approved' onClick={handleSearch}>Search</button>
                  </div>
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
                                    {visitorRequest.user.firstName} {visitorRequest.user.lastName}
                                    <br/>
                                    {visitorRequest.user.designation}
                                    <br/>
                                    {visitorRequest.user.contact}
                                  </td>
                              </tr>
                          ))):(
                            <tr>
                                <td colSpan="9" style={{textAlign:'center', color:'darkgray'}}>No Details Found</td>
                            </tr>
                          )}
                      </tbody>
                  </table>
              </div>
              <div className="pagination">
                  <button className='prev-btn' onClick={()=>handlePageChange(page-1)} disabled={page < 1}>Previous</button>
                  <p>Page {page+1} of {totalPages}</p>
                  <button className='next-btn' onClick={()=>handlePageChange(page+1)} disabled={page+1 === totalPages}>Next</button>
              </div>
          </div>
      </div>
  </div>
)
}

export default ApprovedVisitors