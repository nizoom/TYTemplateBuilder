import React, {useState} from 'react';
// import StandardInputField from '../../components/inputfields/standardinputfield';
// import AddDonorBtn from '../../components/inputfields/+donorfield';
// import '../../components/inputfields/inputfields.css'
import './newdonorform.css'
import RenderNameComponent from '../../components/inputfields/rendernamecomponent';


const NewDonorForm = (props) => {

    

    

    return(
        <div className='new-donor-form-wrapper'>
            <RenderNameComponent/>

        </div>

    )

}

export default NewDonorForm;
