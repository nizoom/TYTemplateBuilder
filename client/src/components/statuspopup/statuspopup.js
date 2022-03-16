import React from 'react';

const MsgStatusPopup = (props) => {
   
    const message = props.status ? 'Email(s) sent successfully!' : 'Oops something went wrong'

    function handlePopUpClick (e) {

        e.preventDefault();
        props.closePopUp();

    }
    return (
        <div className='popup-wrapper'>
          <p>{message} </p>
          <p>Note any bounced emails are directed to RC's CTP Email</p> 
          <button onClick={handlePopUpClick}> OK </button>
  
        </div>
    )
}

export default MsgStatusPopup;