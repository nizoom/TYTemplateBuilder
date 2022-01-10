import React from 'react';
import StandardInputField from '../../components/inputfields/standardinputfield';

const NewDonorForm = (props) => {

    return(

        <div className='donor-field-name'>


            <label> Donor Name: </label>
            
            <div></div>

            <StandardInputField cssClass = 'short-input-field first-name' prefill = 'First name' />

            <StandardInputField cssClass = 'short-input-field last-name' prefill = 'Last name' />

         

        </div>
    )

}

export default NewDonorForm;