import React from 'react';
import './nextstepbtn.css'
import {donationFormValidation, honorFormValidation} from '../../validation'

const NextStepBtn = (props) => {

    //get state 

    function submitForValidation(e){
        e.preventDefault();

        if(props.page === 1 ){
            const validationStatus = props.page === 1 ? donationFormValidation(props.userChoices) : honorFormValidation();

            //if validation status reports no issues then go to the next page 
            //  else report the issues
        
    
            if(validationStatus === 'go to next page'){
                props.goTotNextPreviousForm(1)
            } else {
                props.reportIncompleteFields(validationStatus)
            }
        } else {
            props.goTotNextPreviousForm(-1)
        }
       
     
    }

    return (
        <div className = 'next-stp-wrapper'>
            <button 
                onClick ={submitForValidation} className = 'next-stp-btn' type = 'submit'> {props.page === 1 ? 
                    <p> Next <span> &#8594;</span>  </p> : 
                    <p> <span> &#8592;</span> Back   </p>} 
            </button>
        </div>
    )
}

export default NextStepBtn;


