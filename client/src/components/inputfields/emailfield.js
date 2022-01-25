import React, {useState} from 'react';
import StandardInputField from './standardinputfield';

const EmailField = (props) => {

    const [date, setDate] = useState()

    // GOING TO NEED TO WIRE BACK THE ONCHANGE 
    
    const determineClass = () => {

       const result = props.cssClass !== undefined ? `email-feild-wrapper ${props.cssClass}` : 'email-field-wrapper'

       console.log(result)

       return result
    }
    
    return (
        // this class name has the styles needed even though it is the wrong name
        <div className={determineClass()}> 
            <label> Recipient Email: </label>

            <StandardInputField type = 'email' cssClass = 'short-input-field' prefill='abc@123.com' updateKey = 'recipientEmail' updateUserChoice = {props.updateUserChoice} incompleteFields = {props.incompleteFields}/>

        </div>
    )
}

export default EmailField;

// style = { props.cssClass !== undefined ? {marginLeft: '10px'} : {display: 'block'}}