import React, { useState } from 'react'
import './AttendenceMark.css'
import { faClipboardList } from '@fortawesome/free-solid-svg-icons';
import MainHeading from '../Main-Heading/MainHeading';
import Loading from '../Loading-Spinner/Loading';
import toastr from '../toastr-config/ToastrConfig';
import { getVisitorEntryDetailsByNic } from '../../APIs/visitorRequestApi';
import { markInTime, markOutTime } from '../../APIs/visitorEntryApi';

const VisitorEntryMark = () => {

    const [visitorRequestDetails, setVisitorRequestDetails] = useState([]);
    const [verificationId, setVerificationId] = useState('');
    const [vehicle, setVehicle] = useState('');
    const [pass, setPass] = useState('');
    const [inTime, setInTime] = useState('');
    const [outTime, setOutTime] = useState('');
    const [loading, setLoading] = useState(false);

    const fetchEntryDetails = async () => {
        resetFields();
        setLoading(true);
        try{
            const response = await getVisitorEntryDetailsByNic(verificationId);

            if(response.data.success){
                setVisitorRequestDetails(response.data.data.visitorEntryRequest);
                response.data.data.vehicleNo !== null && setVehicle(response.data.data.vehicleNo);
                response.data.data.passNo !== null && setPass(response.data.data.passNo);
                setInTime(response.data.data.inTime);
                setOutTime(response.data.data.outTime);
            }else{
                resetFields();
                console.log(response);
                toastr.error("No Allowed Entries for the user or Invalid User")  
            }

        }catch(error){
            resetFields();
            console.log(error);
            toastr.error(error.response?.data?.message || "Network Error");
        }finally{
            setLoading(false);
        }
    };

    const resetFields = () => {
        setVisitorRequestDetails([]);
        setInTime(''); 
        setOutTime(''); 
        setVehicle(''); 
        setPass('');
    };

    const recordEntry = async (entryType, visitorEntryRequestId) => {
        setLoading(true);
        const data = entryType === "in"
            ? { visitorEntryRequestId: visitorEntryRequestId, passNo: pass, vehicleNo: vehicle }
            : { visitorEntryRequestId};

        try{
            const response = entryType === "in" ? await markInTime(data) : await markOutTime(data);

            if(response.data.success){
                toastr.success(response.data.message);
                fetchEntryDetails();
            }else{
                console.log(response);
                toastr.error(response.data.message);
            }

        }catch(error){
            console.log(error);
            toastr.error(error.response?.data?.message || "Network Error")
        }finally{
            setLoading(false);
        }
    };
    

return (
<div className='main-user' style={{overflowX: 'hidden'}}>
    {loading && <Loading/>}
    <MainHeading icon={faClipboardList} heading={"Mark Visitor Entry"}/>
    <div className="main-section-container">
        <div className="main-content">
            <div className="search-filter-container">
                <div className="search-mark-attendence">
                    <input className='search-input-mark-attendence' type='text' placeholder='search...' id='search' name='search'
                        value={verificationId}
                        onChange={(e) => setVerificationId(e.target.value)}
                    />
                    <button className='search-btn-mark-attendence' onClick={fetchEntryDetails}>Search</button>
                </div>
            </div>
            <div className="form-style">
                <form>
                  <div className="row">
                        <div className="input-group">
                            <input type="text" name="text" className="input" disabled 
                                value={visitorRequestDetails?.visitor?.name ?? ''}
                            />
                            <label className="label">Visitor Name</label>
                        </div>
                        <div className="input-group">
                            <input type="text" name="text" className="input" disabled 
                                value={visitorRequestDetails?.visitor?.company ?? ''}
                            />
                            <label className="label">Visitor Company</label>
                        </div>
                  </div>
                  <div className="row">
                        <div className="input-group">
                            <input type="text" name="text" className="input" disabled 
                                value={`${visitorRequestDetails?.user?.firstName ?? ''} ${visitorRequestDetails?.user?.lastName ?? ''}`}
                            />
                            <label className="label">Requester Name</label>
                        </div>
                        <div className="input-group">
                            <input type="text" name="text" className="input" disabled 
                                value={visitorRequestDetails?.user?.designation ?? ''}
                            />
                            <label className="label">Requester Designation</label>
                        </div>
                  </div>
                  <div className="row">
                        <div className="input-group">
                            <input type="text" name="text" className="input" disabled 
                                value={visitorRequestDetails?.startDate ?? ''}
                            />
                            <label className="label">Start Date</label>
                        </div>
                        <div className="input-group">
                            <input type="text" name="text" className="input" disabled 
                                value={visitorRequestDetails?.endDate ?? ''}
                            />
                            <label className="label">End Date</label>
                        </div>
                  </div>
                  <div className="row">
                        <div className="input-group">
                            <input type="text" name="text" className="input" disabled 
                                value={visitorRequestDetails?.department ?? ''}
                            />
                            <label className="label">Allowed Department</label>
                        </div>
                        <div className="input-group">
                            <input type="text" name="text" className="input" disabled 
                                value={visitorRequestDetails?.nightStay ?? ''}
                            />
                            <label className="label">Night Stay</label>
                        </div>
                  </div>
                  <div className="row">
                        <div className="input-group">
                            <input type="text" name="text" className="input" 
                                value={vehicle ?? ''}
                                onChange={(e) => setVehicle(e.target.value)}
                            />
                            <label className="label">Vehicle No</label>
                        </div>
                        <div className="input-group">
                            <input type="text" name="text" className="input" 
                                value={pass ?? ''}
                                onChange={(e) => setPass(e.target.value)}
                            />
                            <label className="label">Pass No</label>
                        </div>
                  </div>
                  <div className="row">
                        <div className="input-group">
                            <input type="text" name="text" className="input" disabled 
                                value={inTime ?? ''}
                            />
                            <label className="label">In Time</label>
                        </div>
                        <div className="input-group">
                            <input type="text" name="text" className="input" disabled 
                                value={outTime ?? ''}
                            />
                            <label className="label">Out Time</label>
                        </div>
                  </div>
                  <div className="row">
                    <div className="input-group">
                        <button 
                            type="button" 
                            className={`form-submit-btn ${inTime !== null && 'disabled'}`}
                            disabled={inTime !== null}
                            onClick={() => recordEntry("in", visitorRequestDetails.id)}
                        >
                            Mark IN
                        </button>
                    </div>
                    <div className="input-group">
                        <button 
                            type="button" 
                            className={`form-submit-btn ${outTime !== null && 'disabled'}`}
                            disabled={outTime !== null || inTime === null}
                            onClick={() => recordEntry("out", visitorRequestDetails.id)}
                        >
                            Mark OUT
                        </button>
                    </div>
                  </div>
                </form>
            </div>
        </div>
    </div>
</div>
)
}

export default VisitorEntryMark