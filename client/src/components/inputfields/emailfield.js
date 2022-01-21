import React, {useState} from 'react';
import StandardInputField from './standardinputfield';

const EmailField = (props) => {

    const [date, setDate] = useState()

    // GOING TO NEED TO WIRE BACK THE ONCHANGE 

    
    return (
        // this class name has the styles needed even though it is the wrong name
        <div className='email-feild-wrapper'> 
            <label> Recipient Email: </label>

            <StandardInputField type = 'email' cssClass = 'short-input-field' prefill='abc@123.com' updateKey = 'recipientEmail' updateUserChoice = {props.updateUserChoice} incompleteFields = {props.incompleteFields}/>

        </div>
    )
}

export default EmailField;

