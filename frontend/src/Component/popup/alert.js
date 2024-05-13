
import React, { useState } from 'react';
import Popup from './popup';
import './style.css';
function Alert() {
    
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  return <div>
    <input
      type="button"
      value="Click to Open Popup"
      onClick={togglePopup}
    />
     {isOpen && <Popup
      content={<>
      <p> Please contact via for more details</p>
        <p>Tel :  <a href="tel:+918015015080"> +91 - 80150 15080</a>, <a href="tel:+918248096907"> +91 - 82480 96907 </a> </p>
        <p> Email : <a href="mailto:mgmurugesh@gmail.com">mgmurugesh@gmail.com</a></p>
      </>}
      handleClose={togglePopup}
    />}
  </div>
}

export default Alert;