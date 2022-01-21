import React from 'react';
import './nextstepbtn.css'

const NextStepBtn = (props) => {

    

    const defaultInputState = {
      donationAmount: '0',
      donationDate : 'mm/dd/yyyy',
      recipientEmail : '',
      donorNames : [] 
    }

    //remove tax property from props obj because that input can stay as default and template type will have be changed to even see the next btn
    let shallowCopyOfState = {... props.userChoices}

    delete shallowCopyOfState.taxParagraph;
    delete shallowCopyOfState.templateType;


 

    function formValidation(){
        
        //compare user choices to defaultInputState and if any properties are the same then they require changing (except for tax paragraph and templatetype)
        const checkDonation = checkProperty(JSON.stringify(defaultInputState.donationAmount), JSON.stringify(shallowCopyOfState.donationAmount), 'donationAmount')
        const checkDate = checkProperty(JSON.stringify(defaultInputState.donationDate), JSON.stringify(shallowCopyOfState.donationDate), 'donationDate')
        const checkEmail = checkProperty(JSON.stringify(defaultInputState.recipientEmail), JSON.stringify(shallowCopyOfState.recipientEmail), 'recipientEmail')
        const checkName = checkProperty(JSON.stringify(defaultInputState.donorNames), JSON.stringify(shallowCopyOfState.donorNames), 'donorNames')

        //arr of false results AKA the user needs to look at it again 
        let alertUser = []

        const checkResults = [checkDonation, checkDate, checkEmail, checkName]

        checkResults.forEach((result, index) => {
           if(typeof(result) === 'string'){
               alertUser.push(result)
           }
        })
        return alertUser;
    }

    function checkProperty(obj1, obj2, objName){
        // invalid/unchanged ? return field name else return boolean
       return( obj1 === obj2 ? objName : true )
    }

    function handleNextStepClick (e){
        e.preventDefault();
        const blankFields = formValidation();
       
        if(blankFields.length === 0){
             //init next form
        } else {
            // alert user to required fields 
            props.reportIncompleteFields(blankFields)
        }
       

    }
    return (
        <div className = 'next-stp-wrapper'>
            <button onClick ={handleNextStepClick} className = 'next-stp-btn' type = 'submit'> Next <span>&#8594;</span>
  </button>
        </div>
    )
}

export default NextStepBtn;