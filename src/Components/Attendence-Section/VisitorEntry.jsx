import React, { useCallback, useEffect, useState } from 'react'
import './Attendence.css'
import { faClipboardList } from '@fortawesome/free-solid-svg-icons';
import MainHeading from '../Main-Heading/MainHeading';
import Loading from '../Loading-Spinner/Loading';
import toastr from '../toastr-config/ToastrConfig';
import { getAllVisitorEntries, searchAllVisitorEntries } from '../../APIs/visitorEntryApi';

const VisitorEntry = () => {
  
    const todayDate = new Date();

    const yesterdayDate = new Date(todayDate);
    yesterdayDate.setDate(todayDate.getDate() - 1);

    const today = todayDate.toISOString().split("T")[0];
    const yesterday = yesterdayDate.toISOString().split("T")[0];

    const sortBy = 'id'; const ascending = false;
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(10);
    const [totalPages, setTotalPages] = useState(1);
    const [fromDate, setFromDate] = useState(today);
    const [toDate, setToDate] = useState(today);
    const [visitorEntryList, setVisitorEntryList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState('');
    const [searchOn, setSearchOn] = useState(false);
    const [searchCount, setSearchCount] = useState(0);

    const fetchVisitorEntries = useCallback( async () => {
        setLoading(true);
        try{
            const response = searchOn
                ? await searchAllVisitorEntries(page, size, sortBy, ascending, fromDate, toDate, search)
                : await getAllVisitorEntries(page, size, sortBy, ascending, fromDate, toDate);
            if(response.data.success){
                setVisitorEntryList(response.data.data);
                setTotalPages(Math.ceil(response.data.message/size));
            }else{
                setVisitorEntryList([]);
                setTotalPages(1);
            }
        }catch(error){
            console.log(error);
            toastr.error(error.response?.data?.message || "Network Error");
        }finally{
            setLoading(false);
        }
    }, [page, size, sortBy, ascending, fromDate, toDate, searchOn, searchCount]);

    useEffect(() => {
        fetchVisitorEntries();
    }, [fetchVisitorEntries]);

    const handleSizeChange = (e) => {
        setSize(Number(e.target.value));
        setPage(0);
    };

    const handlePageChange = (newPage) => {
        setPage(newPage);
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
<div className='main-user' style={{overflowX: 'hidden'}}>
    {loading && <Loading/>}
    <MainHeading icon={faClipboardList} heading={"Visitor Entries"}/>
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
                    <button className='search-btn' onClick={handleSearch} >Search</button>
                </div>
                <div className='date-container'>
                    <div className="input-group">
                        <input type="date" name="text" className="input date-input" required max={yesterday} min="2023-01-01"
                            value={fromDate}
                            onChange={(e) => setFromDate(e.target.value)}
                        />
                        <label className="label">From</label>
                    </div>
                    <div className="input-group">
                        <input type="date" name="text" className="input date-input" required max={today} min="2023-01-01"
                            value={toDate}
                            onChange={(e) => setToDate(e.target.value)}
                        />
                        <label className="label">To</label>
                    </div>
                </div>
            </div>
            <div className="user-table">
                <table className="styled-table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Date</th>
                            <th>Visitor</th>
                            <th>Allowed Department</th>
                            <th>In Time</th>
                            <th>out Time</th>
                            <th>Vehicle No</th>
                            <th>Pass No</th>
                            <th>Requester</th>
                        </tr>
                    </thead>
                    <tbody>
                        {visitorEntryList.length > 0 ? (
                            visitorEntryList.map((visitorEntryDetails,index) => (
                            <tr key={index}>
                                <td>{index + 1 + page * size}</td>
                                <td>{visitorEntryDetails.date}</td>
                                <td>
                                    {visitorEntryDetails.visitorEntryRequest.visitor.verificationId}<br/>
                                    {visitorEntryDetails.visitorEntryRequest.visitor.name}<br/>
                                    {visitorEntryDetails.visitorEntryRequest.visitor.company}
                                </td>
                                <td>{visitorEntryDetails.visitorEntryRequest.department}</td>
                                <td>{visitorEntryDetails.inTime}</td>
                                <td>{visitorEntryDetails.outTime}</td>
                                <td>{visitorEntryDetails.vehicleNo === '' ? "no vehicle": visitorEntryDetails.vehicleNo}</td>
                                <td>{visitorEntryDetails.passNo}</td>
                                <td>
                                    {visitorEntryDetails.visitorEntryRequest.user.firstName} {visitorEntryDetails.visitorEntryRequest.user.lastName}<br/>
                                    {visitorEntryDetails.visitorEntryRequest.user.designation}<br/>
                                    {visitorEntryDetails.visitorEntryRequest.user.contact}
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
                <button className='prev-btn' onClick={() => handlePageChange(page-1)} disabled={page < 1}>Previous</button>
                <p>Page 1 of 1</p>
                <button className='next-btn' onClick={() => handlePageChange(page+1)} disabled={page + 1 === totalPages}>Next</button>
            </div>
        </div>
    </div>
</div>
)
}

export default VisitorEntry