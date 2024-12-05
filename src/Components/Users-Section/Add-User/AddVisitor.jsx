import React, { useEffect, useState } from 'react';
import '../PopupForm.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus,faArrowRight } from '@fortawesome/free-solid-svg-icons';
import toastr from '../../toastr-config/ToastrConfig';
import Loading from '../../Loading-Spinner/Loading';
import { addVisitorRequest } from '../../../APIs/visitorRequestApi';

const AddVisitor = ({ onClose, fetchMyVisitorRequests }) => {

    const todayDate = new Date();

    const maxEndDayDate = new Date(todayDate);
    maxEndDayDate.setDate(todayDate.getDate() + 365);
  
    const today = todayDate.toISOString().split("T")[0];
    const maxEndDay = maxEndDayDate.toISOString().split("T")[0];


    const [formOpen, setFormOpen] = useState(false);
    const [name, setName] = useState('');
    const [company, setCompany] = useState('');
    const [verificationId, setVerificationId] = useState('');
    const [department, setDepartment] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [nightStay, setNightStay] = useState('yes');
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        setFormOpen(true);
    },[]);

    const handleFormClose = () => {
        setFormOpen(false);
        setTimeout(onClose, 1000);
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const data ={
            addVisitorDto: {
                name, company, verificationId
            },
            addVisitorEntryRequestDto: {
                department, startDate, endDate, nightStay
            }
        }

        try{
            const response = await addVisitorRequest(data);

            if(response.data.success){
                toastr.success(response.data.message);
                fetchMyVisitorRequests();
            }else{
                toastr.error(response.data.message);
            }
            
        }catch(error){
            console.log(error);
            toastr.error(error.response.data.message || "Network Error");
        }finally{
            setLoading(false);
            setFormOpen(false);
            setTimeout(onClose, 1000);
        }
    };

  return (
    <div>
        <div className={`popup-overlay ${!formOpen && 'close'}`}>
            {loading && <Loading/>}
            <div className={`popup-content ${!formOpen && 'close'}`}>

                <div className="popup-header">
                    <div className="popup-header-left">
                        <FontAwesomeIcon icon={faUserPlus} className='intern-icon'/>
                        <h2>Add New Visitor Entry Details</h2>
                    </div>
                    <div className="popup-header-right">
                        <FontAwesomeIcon icon={faArrowRight} onClick={handleFormClose} className='goback-icon'/>
                    </div>
                </div>

               <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="input-group">
                        <input type="text" name="text" className="input" required
                            value={verificationId}
                            onChange={(e) => setVerificationId(e.target.value)}
                        />
                        <label className="label">Verification ID</label>
                    </div>
                    <div className="input-group">
                        <input type="text" name="text" className="input" required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <label className="label">Visitor Name</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-group">
                        <input type="text" name="text" className="input" required
                            value={company}
                            onChange={(e) => setCompany(e.target.value)}
                        />
                        <label className="label">Company</label>
                    </div>
                    <div className="input-group">
                        <input type="text" name="text" className="input" required
                            value={department}
                            onChange={(e) => setDepartment(e.target.value)}
                        />
                        <label className="label">Allowed Department</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-group">
                        <input type="date" name="text" className="input date-input" required
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                            min={today}
                            max={maxEndDay}
                        />
                        <label className="label">Start Date</label>
                    </div>
                    <div className="input-group">
                        <input type="date" name="text" className="input date-input" required
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)}
                            min={today}
                            max={maxEndDay}
                        />
                        <label className="label">End Date</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-group drop-down">
                        <select className="input drop-select" required
                            value={nightStay}
                            onChange={(e) => setNightStay(e.target.value)}
                        >
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                        <label className="label">Night Stay</label>
                    </div>
                    <div className="input-group">
                        <button type="submit" className='form-submit-btn'>Submit</button>
                    </div>
                  </div>
              </form>

          </div>
        </div>
    </div>
  )
}

export default AddVisitor