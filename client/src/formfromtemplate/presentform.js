import React from 'react';
import DonationForm from './forms/donationform';
import HonorForm from '../components/honoreecomponents/honorform';

const PresentForm = (props) => {

    

        if(props.templateType === 'New donor' || props.templateType === 'Recurring donor'){
            return <DonationForm changeToHonorForm = {props.changeToHonorForm} updateUserChoice = {props.updateUserChoice} userChoices = {props.userChoices} incompleteFields = {props.incompleteFields} recentPageChange = {props.recentPageChange}
            updatePageChangeState = {props.updatePageChangeState}
            
            />
        }

       if(props.templateType === 'Honoring'){
           return <HonorForm getHonorState = {props.getHonorState}/>
       }
       // else

       return null

     
    
     
    
}

export default PresentForm