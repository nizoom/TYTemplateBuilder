import React, {useState} from 'react';
import StandardInputField from './standardinputfield';

const EmailField = (props) => {
    
    const determineClass = () => {
       const result = props.cssClass !== undefined ? `email-feild-wrapper ${props.cssClass}` : 'email-field-wrapper'
       return result
    }

    
    return (
        // this class name has the styles needed even though it is the wrong name
        <div className={determineClass()} style = {{display: 'flex', marginTop: '30px', gap: '22px'}}> 
            <label> Recipient Email: </label>

            <StandardInputField type = 'email' cssClass = 'short-input-field' prefill='@' updateKey = {props.updateKey} updateUserChoice = {props.updateUserChoice} 
            value = {props.value} incompleteFields = {props.fieldValidity}/>

        </div>
    )
}

export default EmailField;

