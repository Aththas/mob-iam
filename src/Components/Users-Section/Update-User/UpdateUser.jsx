import React, { useEffect, useState } from 'react';
import '../PopupForm.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserEdit } from '@fortawesome/free-solid-svg-icons';

const UpdateUser = ({ onClose }) => {
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
                        <FontAwesomeIcon icon={faUserEdit} className='intern-icon'/>
                        <h2>Update Intern Details #1</h2>
                    </div>
                    <div className="popup-header-right">
                        <button className='close-btn' onClick={handleFormClose}>X</button>
                    </div>
                </div>

               <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div class="input-group">
                        <input type="text" name="text" class="input" required/>
                        <label class="label">First Name</label>
                    </div>
                    <div class="input-group">
                        <input type="text" name="text" class="input" required/>
                        <label class="label">Last Name</label>
                    </div>
                  </div>
                  <div className="row">
                    <div class="input-group">
                        <input type="text" name="text" class="input" required/>
                        <label class="label">Intern ID</label>
                    </div>
                    <div class="input-group">
                        <input type="text" name="text" class="input" required/>
                        <label class="label">Email</label>
                    </div>
                  </div>
                  <div className="row">
                    <div class="input-group">
                        <input type="text" name="text" class="input" required/>
                        <label class="label">NIC</label>
                    </div>
                    <div class="input-group">
                        <input type="text" name="text" class="input" required/>
                        <label class="label">Department</label>
                    </div>
                  </div>
                  <div className="row">
                    <div class="input-group">
                        <input type="text" name="text" class="input" required/>
                        <label class="label">Start Date</label>
                    </div>
                    <div class="input-group">
                        <input type="text" name="text" class="input" required/>
                        <label class="label">End Date</label>
                    </div>
                  </div>
                  <div className="row">
                    <div class="input-group">
                        <input type="text" name="text" class="input" required/>
                        <label class="label">Additional Field</label>
                    </div>
                    <div class="input-group">
                        <input type="text" name="text" class="input" required/>
                        <label class="label">Additional Field</label>
                    </div>
                  </div>
                  <div className="row">
                    <div class="input-group">
                        <input type="text" name="text" class="input" required/>
                        <label class="label">Additional Field</label>
                    </div>
                    <div class="input-group">
                        <input type="text" name="text" class="input" required/>
                        <label class="label">Additional Field</label>
                    </div>
                  </div>
                  <div className="row">
                    <div class="input-group">
                        <button type="submit" className='form-submit-btn'>Submit</button>
                    </div>
                    <div class="input-group">
                        <button type="button" onClick={handleFormClose} className='form-close-btn'>Close</button>
                    </div>
                  </div>
              </form>

          </div>
        </div>
    </div>
  )
}

export default UpdateUser