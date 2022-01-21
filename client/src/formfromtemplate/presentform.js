import React from 'react';
import DonationForm from './forms/donationform';
import HonorForm from '../components/honoreecomponents/honorform';

const PresentForm = (props) => {

    

        if(props.templateType === 'New donor' || props.templateType === 'Recurring donor'){
            return <DonationForm changeToHonorForm = {props.changeToHonorForm} updateUserChoice = {props.updateUserChoice} userChoices = {props.userChoices} incompleteFields = {props.incompleteFields}/>
        }

       if(props.templateType === 'Honoring'){
           console.log('honoring')
           return <HonorForm/>
       }
       // else

       return null

     
    
     
    
}

export default PresentForm