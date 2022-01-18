import React from 'react';
import EmailPreview from './previewemail';


const PresentPreview = (props) => {


    const templateType = props.userChoices.templateType

    if(templateType === 'New donor'){
        return <EmailPreview  emailData = {props.userChoices}/>

    }

    if(templateType === 'Recurring donor'){
        console.log(props.userChoices.donationDate)
        return <EmailPreview  emailData = {props.userChoices}/>
        
        // {`Thank you for continuing to be such a devoted supporter of Common Threads Project. 
        // With a gift of ${props.userChoices.donationAmount} on ${props.userChoices.donationDate} you’re providing hope for survivors of sexual violence. `}
        
     
    }

   if(templateType === 'Honoring'){
       console.log('honoring')
    //    return <HonorForm/>
   }
    //else
   return null

}

export default PresentPreview;