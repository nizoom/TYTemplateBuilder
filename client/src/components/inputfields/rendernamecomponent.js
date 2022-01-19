import React, {useState} from 'react';
import StandardInputField from './standardinputfield';
import AddDonorBtn from './+donorfield';
import './inputfields.css'



// a component to hold all the js functions and jsx associated with the donor name fields. So that it can be easily imported to all the template types

const RenderNameComponent = (props) => {

    //because there could be multiple names collecting all names is required before updating state at the root. Otherwise each new name would overwrite the last

    function updateNameState(numberOfNewNames){
        //number of donorfields tells updateNameState how many names to expect 
        const totalDonorNames = numberOfNewNames + 1 //new plus original field
        // console.log(numberOfNewNames)
        console.log(names)
        //get names 
        
        //update state at the app.js
    }

    function handleNameChange(name){

            const index = name.index

            const key = Object.keys(name)[0]

            const value = Object.values(name)[0]

            //create shallow copy
   
            let newArr = [...names]

            // establish next element in array that will retain everything that is already there at that index
            newArr[index] = { ... newArr[index]}

            // add value to that object at the [key] property
            newArr[index][key] = value;

            // save array to hook
            setNames(newArr)

        updateNameState(donorFields.numberOfFields)
       
    }



    const [donorFields, setDonorFields] = useState({numberOfFields : 0});

    const [names, setNames] = useState([
        {
            donorFirstName : '',
            donorLastName : ''
        }
    ])
  
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
                    <StandardInputField cssClass = 'short-input-field first-name' prefill = 'First name' updateKey = 'donorFirstName' handleNameChange = {handleNameChange} type = "name" index = {index + 1}/>

                    <StandardInputField cssClass = 'short-input-field last-name' prefill = 'Last name' updateKey = 'donorLastName' handleNameChange = {handleNameChange} type = "name" index = {index + 1}/>

                    <AddDonorBtn changeNumberOfNameFields = {deleteNewDonorName} operation = '-' tooltipMsg = 'Remove this donor name'/>
                </div>


    })

    
    return (
              <div>

            <div className='donor-name-wrapper'>



                <label> Donor Name: </label>
        
            

                <StandardInputField cssClass = 'short-input-field first-name' prefill = 'First name' handleNameChange = {handleNameChange} updateKey = 'donorFirstName' type = "name" index = {0}/>

                <StandardInputField cssClass = 'short-input-field last-name' prefill = 'Last name' handleNameChange = {handleNameChange} updateKey = 'donorLastName' type = "name" index = {0}/>

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


