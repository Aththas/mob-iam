import React, { useEffect, useState } from 'react';
import '../PopupForm.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt,faArrowRight } from '@fortawesome/free-solid-svg-icons';

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
                        <FontAwesomeIcon icon={faCalendarAlt} className='intern-icon'/>
                        <h2>Extend Intern Period</h2>
                    </div>
                    <div className="popup-header-right">
                        <FontAwesomeIcon icon={faArrowRight} onClick={handleFormClose} className='goback-icon'/>
                    </div>
                </div>

               <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="input-group">
                        <input type="text" name="text" className="input" required/>
                        <label className="label">Extend Upto</label>
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

export default ExtendInternship