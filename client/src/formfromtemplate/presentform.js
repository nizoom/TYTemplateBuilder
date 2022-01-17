import React from 'react';
import NewDonorForm from './forms/newdonorform';
import HonorForm from '../components/honoreecomponents/honorform';

const PresentForm = (props) => {

        if(props.templateType === null){
            return null
        }

        if(props.templateType === 'New donor'){
            console.log('new donor')
            return <NewDonorForm changeToHonorForm = {props.changeToHonorForm} updateUserChoice = {props.updateUserChoice}/>
        }

        if(props.templateType === 'Recurring donor'){
            return //recurring donor form.js
        }

       if(props.templateType === 'Honoring'){
           console.log('honoring')
           return <HonorForm/>
       }

     
    
     
    
}

export default PresentForm