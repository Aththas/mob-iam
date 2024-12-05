import React, { useEffect, useState } from 'react';
import '../PopupForm.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus,faArrowRight } from '@fortawesome/free-solid-svg-icons';

const AddUser = ({ onClose }) => {

    const [formOpen, setFormOpen] = useState(false);

    useEffect(()=>{
        setFormOpen(true);
    },[]);

    const handleFormClose = () => {
        setFormOpen(false);
        setTimeout(onClose, 1000);
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        setFormOpen(false);
        setTimeout(onClose, 1000);
    };

  return (
    <div>
        <div className={`popup-overlay ${!formOpen && 'close'}`}>
            <div className={`popup-content ${!formOpen && 'close'}`}>

                <div className="popup-header">
                    <div className="popup-header-left">
                        <FontAwesomeIcon icon={faUserPlus} className='intern-icon'/>
                        <h2>Add New Intern Details</h2>
                    </div>
                    <div className="popup-header-right">
                        <FontAwesomeIcon icon={faArrowRight} onClick={handleFormClose} className='goback-icon'/>
                    </div>
                </div>

               <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="input-group">
                        <input type="text" name="text" className="input" required/>
                        <label className="label">First Name</label>
                    </div>
                    <div className="input-group">
                        <input type="text" name="text" className="input" required/>
                        <label className="label">Last Name</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-group">
                        <input type="text" name="text" className="input" required/>
                        <label className="label">Intern ID</label>
                    </div>
                    <div className="input-group">
                        <input type="text" name="text" className="input" required/>
                        <label className="label">Email</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-group">
                        <input type="text" name="text" className="input" required/>
                        <label className="label">NIC</label>
                    </div>
                    <div className="input-group">
                        <input type="text" name="text" className="input" required/>
                        <label className="label">Department</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-group">
                        <input type="text" name="text" className="input" required/>
                        <label className="label">Start Date</label>
                    </div>
                    <div className="input-group">
                        <input type="text" name="text" className="input" required/>
                        <label className="label">End Date</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-group">
                        <button type="submit" className='form-submit-btn'>Submit</button>
                    </div>
                    {/* <div className="input-group">
                        <button type="button" onClick={handleFormClose} className='form-close-btn'>Close</button>
                    </div> */}
                  </div>
              </form>

          </div>
        </div>
    </div>
  )
}

export default AddUser