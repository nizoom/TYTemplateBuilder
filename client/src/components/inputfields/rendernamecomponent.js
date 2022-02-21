import React, {useState, useEffect} from 'react';
import StandardInputField from './standardinputfield';
import AddDonorBtn from './+donorfield';
import './inputfields.css'



// a component to hold all the js functions and jsx associated with the donor name fields. So that it can be easily imported to all the template types

const RenderNameComponent = (props) => {

    //because there could be multiple names collecting all names is required before updating state at the root. Otherwise each new name would overwrite the last

    function updateNames(name){

     

            const index = name.index;

            const key = Object.keys(name)[0]

            const value = Object.values(name)[0]

            //create shallow copy
            const namesState = !Array.isArray(names)? [names] : names;

           

            let newArr = [...namesState]

            // establish next element in array that will retain everything that is already there at that index
            newArr[index] = { ... newArr[index]}

            // add value to that object at the [key] property
            newArr[index][key] = value;

            // save array to hook

            

            // console.log(ogNames);  
            // console.log(name);

            if(props.recentPageChange){
                // hitting the back btn clears the name fields after on change. this block tries to prevent that 
                const ogNames = props.userChoices.donorNames;
                //merge update with ogNames 
                let newNames = {...ogNames} //if no spread doesn't work try drilling down

                //adding new name fields after is problematic bc the names are not in array format 
                // convert existing nested obj to arr of obj and then create a new index where the new name goes

                    newNames[index] = {...newNames[index], [key] : value}

                    //update setNames with merged names
                    
                    setNames(newNames)  

            } else {
                // console.log(newArr)

                setNames(newArr)
            }
    }


    const [donorFields, setDonorFields] = useState({numberOfFields : 0});

    const [names, setNames] = useState([
        {
            donorFirstName : '',
            donorLastName : ''
        }
    ])


    useEffect(() => {
     
        const stateKey =  props.updateKey
        // console.log(({[stateKey] : names}))
        props.updateUserChoice({[stateKey] : names})
    }, [names])
    
  
    function addNewDonorName(){

        let updatedNumber = donorFields.numberOfFields + 1


        setDonorFields({
            ...donorFields,
            numberOfFields: updatedNumber
        });
    }

    function deleteNewDonorName(btnIndex){

        const updatedNumber = donorFields.numberOfFields - 1

        setDonorFields({
            ...donorFields,
            numberOfFields : updatedNumber
        })

        //get index of btn and use that index to delete name element in names hook

        let oldArr = !Array.isArray(names) ? Object.values(names) : [...names];

        // let oldArr = [...names];

        let newArr = oldArr.filter(element => {
            //keep elements that do not have the index of btnIndex - 1 (the -1 compensates for the misalignment of the arrays due to the index + 1 prop below on the renderAdditionalDonor.. function)
            if(oldArr.indexOf(element) !== btnIndex){
                return element
            }
            
        })

        // console.log(names[btnIndex])

        setNames(newArr)


    }

    const numberOfFields = donorFields.numberOfFields;

    //arr of elements where length of arr indicates how many name fields the user has added
    let numberOfNewNames = [];

    for(let i = 1; i <= numberOfFields; i++){
        numberOfNewNames.push(i)
    }



    const AddtionalNameFields = numberOfNewNames.map((index) => {
    
        return  <div key = {index} className='additional-donor-field'>
                    <StandardInputField cssClass = 'short-input-field first-name' prefill = 'First name' updateKey = 'donorFirstName' updateNames = {updateNames} type = "name" index = {index} incompleteFields = {false} value = {getValue(index, 'donorFirstName')}
                    incompleteFields = {getNameValidityStatus(index, 'donorFirstName')}
                    />

                    <StandardInputField cssClass = 'short-input-field last-name' prefill = 'Last name' updateKey = 'donorLastName' updateNames = {updateNames} type = "name" index = {index} incompleteFields = {false} value = {getValue(index, 'donorLastName')} 
                    incompleteFields = {getNameValidityStatus(index, 'donorLastName')}
                    />

                    <AddDonorBtn changeNumberOfNameFields = {deleteNewDonorName} operation = '-' tooltipMsg = 'Remove this donor name' index = {index}/>
                </div>


    })

    function getValue(index, updateKey){
    //   the process to get donor form donor names vs props.value which provides the names related to the honor form
        if(props.userChoices !== undefined){
            if(props.userChoices.donorNames[index] !== undefined) {
                return(props.userChoices.donorNames.length < 1 ?  '' : props.userChoices.donorNames[index][updateKey])
            } //else 
      
            return ''
        }  
    }

    



    
        function getNameValidityStatus(nameFieldIndex, name){
            const fieldValidity = props.fieldValidity
        
          //honoree situation 
          if(fieldValidity === 'invalid'){
              return 'invalid'
          }
          //if all name fields are valid
            if(fieldValidity === 'valid'){
                return 'valid'
            } else { 
                if(!fieldValidity){ //nothing has been entered
                    return null;
                }
                // there are issues

                    //if nameFieldIndex is greater than fieldValidity.length then return 'valid' bc it means the user hasn't entered anything yet on those new fields 

                    if(fieldValidity.length - 1  < nameFieldIndex){
                        return 'invalid'
                    }
                    

                    if(fieldValidity[name] === true){
                        return 'valid'
                    }
                    if(fieldValidity[name] === false){
                       
                        return 'invalid'
                    }

                    if(fieldValidity[nameFieldIndex][name]){
                        return 'valid'
                    }  if(fieldValidity[nameFieldIndex] === true ){
                        return 'valid'
                    }
                    
                
                else {
                    return 'invalid'
                } 
               

            }

    }
 
    return (
              <div>

            <div className={props.cssClass}>



                <label> {props.inputLabel} </label>
        
            

                <StandardInputField cssClass = 'short-input-field first-name' prefill = 'First name' updateNames = {updateNames} updateKey = 'donorFirstName' type = "name" index = {0} 
                
                    incompleteFields = {getNameValidityStatus(0, `${props.validationPropertyName}FirstName`)} //donorFirstName
                    // this value prop forks the proces of receiving values for either the honor form (props.value) or donor form(getValue) 
                    value = {   props.value!== undefined ? props.value[0] : getValue(0, 'donorFirstName')}/>

                <StandardInputField cssClass = 'short-input-field last-name' prefill = 'Last name' updateNames = {updateNames} updateKey = 'donorLastName' type = "name" index = {0} incompleteFields = {''}

                    value = {   props.value!== undefined ? props.value [1]: getValue(0, 'donorLastName')} 
                    
                    incompleteFields = {getNameValidityStatus(0, `${props.validationPropertyName}LastName`)} //donorLastName
                    />

                {props.type === 'donor form' ? <AddDonorBtn changeNumberOfNameFields = {addNewDonorName} operation = '+' tooltipMsg = 'Add another donor name' index = {0} /> : null}

               

            </div>

            <RenderAdditionalDonorNameFields numberOfNewNames = {numberOfNewNames} type = {props.type} AddtionalNameFields = {AddtionalNameFields}/>
        </div>
    )
}

export default RenderNameComponent;


const RenderAdditionalDonorNameFields = (props) => {
       
    if(props.type === 'donor form' && props.numberOfNewNames.length >= 1){
        return <div> {props.AddtionalNameFields} </div>
    }  else {
        return null
    }
}

// typeof(props.value) !== 'object'