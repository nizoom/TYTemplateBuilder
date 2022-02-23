import React from 'react';
import Popup from 'reactjs-popup';


const MsgStatusPopup = (props) => {
   
    const message = props.status ? 'Email(s) sent successfully!' : 'Oops something went wrong'

    function handlePopUpClick (e) {

        e.preventDefault();
        props.closePopUp();

    }
    return (
        <div className='popup-wrapper'>
          <p>{message} </p>
          <button onClick={handlePopUpClick}> OK </button>
  
        </div>
    )
}

export default MsgStatusPopup;