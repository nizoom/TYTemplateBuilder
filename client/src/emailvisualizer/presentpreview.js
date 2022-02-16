import React from 'react';
import EmailPreview from './previewemail';
import HonorEmailPreview from './honoremailpreview';


const PresentPreview = (props) => {


    const templateType = props.userChoices.templateType

    if(props.formPage === 2){
        return  <HonorEmailPreview honorState = {props.honorState} donorState = {props.userChoices}/>
    }

    if(templateType === 'New donor'){
        return <EmailPreview  emailData = {props.userChoices} updateUserChoice = {props.updateUserChoice}/>

    }

    if(templateType === 'Recurring donor'){
        return <EmailPreview  emailData = {props.userChoices} updateUserChoice = {props.updateUserChoice}/>
        
        // {`Thank you for continuing to be such a devoted supporter of Common Threads Project. 
        // With a gift of ${props.userChoices.donationAmount} on ${props.userChoices.donationDate} you’re providing hope for survivors of sexual violence. `}
        
     
    }
    //else
   return null

}

export default PresentPreview;