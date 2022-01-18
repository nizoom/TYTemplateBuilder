import React from 'react';
import StandardInputField from './standardinputfield';

const DonationDate = (props) => {


    return (
        // this class name has the styles needed even though it is the wrong name
        <div className='donation-amount-wrapper'> 
            <label> Donation Date: </label>

            <StandardInputField type = {'date'} cssClass = 'short-input-field' updateUserChoice = {props.updateUserChoice} updateKey = 'donationDate'/>

        </div>
    )
}

export default DonationDate;