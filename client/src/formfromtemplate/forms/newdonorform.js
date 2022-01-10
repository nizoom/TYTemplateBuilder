import React from 'react';
import StandardInputField from '../../components/inputfields/standardinputfield';
import AddDonorBtn from '../../components/inputfields/+donorfield';

const NewDonorForm = (props) => {

    return(

        <div className='donor-name-wrapper'>


            <label> Donor Name: </label>
        
            {/* to help with spacing for flexbox in the donor-field  */}
            <div></div>
            <div></div>
            <div></div>

            <StandardInputField cssClass = 'short-input-field first-name' prefill = 'First name' />

            <StandardInputField cssClass = 'short-input-field last-name' prefill = 'Last name' />

           <AddDonorBtn/>

         

        </div>
    )

}

export default NewDonorForm;