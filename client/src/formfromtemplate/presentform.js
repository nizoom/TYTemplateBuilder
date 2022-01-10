import React from 'react';
import NewDonorForm from './forms/newdonorform';

const PresentForm = (props) => {

        console.log('yo')

        if(props.templateType === null){
            return null
        }

        if(props.templateType === 'New donor'){
            console.log('new donor')
            return <NewDonorForm/>
        }

        if(props.templateType === 'Recurring donor'){
            return //recurring donor form.js
        }

        //else 

         return //honoree form.js
    
     
    
}

export default PresentForm