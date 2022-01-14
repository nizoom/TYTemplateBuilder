import React from 'react';
import PresentNewDonor from './previewnewdonor';

const PresentPreview = (props) => {

    if(props.visualizerType === null){
        return null
    }

    if(props.visualizerType === 'New donor'){
        console.log('new donor preview')
        return <PresentNewDonor/>
    }

    if(props.visualizerType === 'Recurring donor'){
        return //recurring donor form.js
    }

   if(props.visualizerType === 'Honoring'){
       console.log('honoring')
    //    return <HonorForm/>
   }

}

export default PresentPreview;