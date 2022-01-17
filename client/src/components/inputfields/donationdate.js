import React, {useState} from 'react';
import StandardInputField from './standardinputfield';

const DonationDate = (props) => {

    const [date, setDate] = useState()

    // GOING TO NEED TO WIRE BACK THE ONCHANGE 

    return (
        // this class name has the styles needed even though it is the wrong name
        <div className='donation-amount-wrapper'> 
            <label> Donation Date: </label>

            <StandardInputField type = {'date'} cssClass = 'short-input-field' updateUserChoice = {props.updateUserChoice} updateKey = 'donationDate'/>

        </div>
    )
}

export default DonationDate;