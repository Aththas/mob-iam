import React, { useEffect, useState } from 'react';
import '../PopupForm.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserEdit } from '@fortawesome/free-solid-svg-icons';

const ExtendInternship = ({ onClose }) => {
  
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
                        <h2>Extend Intern Period</h2>
                    </div>
                    <div className="popup-header-right">
                        <button className='close-btn' onClick={handleFormClose}>X</button>
                    </div>
                </div>

               <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div class="input-group">
                        <input type="text" name="text" class="input" required/>
                        <label class="label">Extend Upto</label>
                    </div>
                    <div class="input-group">
                        <button type="submit" className='form-submit-btn'>Submit</button>
                    </div>
                  </div>
              </form>

          </div>
        </div>
    </div>
  )
}

export default ExtendInternship