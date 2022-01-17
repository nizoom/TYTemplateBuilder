import React, {useState} from 'react';
import StandardInputField from './standardinputfield';
import AddDonorBtn from './+donorfield';
import './inputfields.css'

// a component to hold all the js functions and jsx associated with the donor name fields. So that it can be easily imported to all the template types



const RenderNameComponent = (props) => {

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
                    <StandardInputField cssClass = 'short-input-field first-name' prefill = 'First name' updateKey = 'donorFirstName'/>

                    <StandardInputField cssClass = 'short-input-field last-name' prefill = 'Last name' updateKey = 'donorLastName'/>

                    <AddDonorBtn changeNumberOfNameFields = {deleteNewDonorName} operation = '-' tooltipMsg = 'Remove this donor name'/>
                </div>


    })

    
    return (
              <div>

            <div className='donor-name-wrapper'>



                <label> Donor Name: </label>
        
            

                <StandardInputField cssClass = 'short-input-field first-name' prefill = 'First name' updateUserChoice = {props.updateUserChoice} updateKey = 'donorFirstName'/>

                <StandardInputField cssClass = 'short-input-field last-name' prefill = 'Last name' updateUserChoice = {props.updateUserChoice} updateKey = 'donorLastName' />

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

export default RenderNameComponent;