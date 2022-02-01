import React from 'react';
import './nextstepbtn.css'
import {donationFormValidation, honorFormValidation} from '../../validation'

const NextStepBtn = (props) => {

    //get state 

    function submitForValidation(e){
        e.preventDefault();
       
        const validationErrors = props.page === 1 ? donationFormValidation(props.userChoices) : honorFormValidation();
    }

    return (
        <div className = 'next-stp-wrapper'>
            <button 
                onClick ={submitForValidation} className = 'next-stp-btn' type = 'submit'> {props.page === 1 ? 
                    <p> Next <span> &#8594;</span>  </p>: 
                    <p> <span> &#8592;</span> Back   </p>} 
            </button>
        </div>
    )
}

export default NextStepBtn;


