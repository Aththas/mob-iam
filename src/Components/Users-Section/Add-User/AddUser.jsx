import React from 'react'
import './AddUser.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserEdit } from '@fortawesome/free-solid-svg-icons';

const AddUser = ({ onClose }) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        onClose(); 
      };

  return (
    <div>
        <div className="popup-overlay">
            <div className="popup-content">

                <div className="popup-header">
                    <div className="popup-header-left">
                        <FontAwesomeIcon icon={faUserEdit} className='intern-icon'/>
                        <h2>Add New Intern Details</h2>
                    </div>
                    <div className="popup-header-right">
                        <button className='close-btn' onClick={onClose}>X</button>
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
                        <label class="label">First Name</label>
                    </div>
                  </div>
                  <div className="row">
                    <div class="input-group">
                        <input type="text" name="text" class="input" required/>
                        <label class="label">First Name</label>
                    </div>
                    <div class="input-group">
                        <input type="text" name="text" class="input" required/>
                        <label class="label">First Name</label>
                    </div>
                  </div>
                  <div className="row">
                    <div class="input-group">
                        <input type="text" name="text" class="input" required/>
                        <label class="label">First Name</label>
                    </div>
                    <div class="input-group">
                        <input type="text" name="text" class="input" required/>
                        <label class="label">First Name</label>
                    </div>
                  </div>
                  <div className="row">
                    <div class="input-group">
                        <button type="submit" className='form-submit-btn'>Submit</button>
                    </div>
                    <div class="input-group">
                        <button type="button" onClick={onClose} className='form-close-btn'>Close</button>
                    </div>
                  </div>
              </form>

          </div>
        </div>
    </div>
  )
}

export default AddUser