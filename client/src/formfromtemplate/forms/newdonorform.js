import React, {useState} from 'react';
import StandardInputField from '../../components/inputfields/standardinputfield';
import AddDonorBtn from '../../components/inputfields/+donorfield';
import '../../components/inputfields/inputfields.css'
import './newdonorform.css'


const NewDonorForm = (props) => {

    const x = true;

    const [donorFields, setDonorFields] = useState({numberOfFields : 0});

  
    function addNewDonorName(){

        let updatedNumber = donorFields.numberOfFields + 1


        setDonorFields({
            ...donorFields,
            numberOfFields: updatedNumber
        });
    }

    function deleteNewDonorName(){

        let updatedNumber = donorFields.numberOfFields - 1

        setDonorFields({
            ...donorFields,
            numberOfFields : updatedNumber
        })
    }

    const numberOfFields = donorFields.numberOfFields;

    //arr of elements where length of arr indicates how many name fields the user has added
    let numberOfNewNames = [];

    for(let i = 1; i <= numberOfFields; i++){
        numberOfNewNames.push(i)
    }


    const renderAdditionalDonorNameFields = numberOfNewNames.map((newName, index) => {
    
        return  <div key = {index} className='additional-donor-field'>
                    <StandardInputField cssClass = 'short-input-field first-name' prefill = 'First name' />

                    <StandardInputField cssClass = 'short-input-field last-name' prefill = 'Last name' />

                    <AddDonorBtn changeNumberOfNameFields = {deleteNewDonorName} operation = '-' tooltipMsg = 'Remove this donor name'/>
                </div>


    })

    return(
        <div className='new-donor-form-wrapper'>

            <div className='donor-name-wrapper'>



                <label> Donor Name: </label>
        
            

                <StandardInputField cssClass = 'short-input-field first-name' prefill = 'First name' />

                <StandardInputField cssClass = 'short-input-field last-name' prefill = 'Last name' />

                <AddDonorBtn changeNumberOfNameFields = {addNewDonorName} operation = '+' tooltipMsg = 'Add another donor name'/>

               

            </div>
         
                    {numberOfNewNames.length >= 1 ? 
                    
                   
                    <div>   
                    
                     {renderAdditionalDonorNameFields} 
                     
                     </div>
                   
                    
                  : null}    
      
        </div>

    )

}

export default NewDonorForm;
