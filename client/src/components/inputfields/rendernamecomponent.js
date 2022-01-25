import React, {useState, useEffect} from 'react';
import StandardInputField from './standardinputfield';
import AddDonorBtn from './+donorfield';
import './inputfields.css'



// a component to hold all the js functions and jsx associated with the donor name fields. So that it can be easily imported to all the template types

const RenderNameComponent = (props) => {

    //because there could be multiple names collecting all names is required before updating state at the root. Otherwise each new name would overwrite the last

    function updateNames(name){

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
            // console.log(newArr)
            setNames(newArr)

            
       
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
        // console.log(props.updateKey)
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

        let oldArr = [...names];

        let newArr = oldArr.filter(element => {
            //keep elements that do not have the index of btnIndex - 1 (the -1 compensates for the misalignment of the arrays due to the index + 1 prop below on the renderAdditionalDonor.. function)
            if(oldArr.indexOf(element) !== btnIndex){
                return element
            }
            
        })

        console.log(btnIndex)

        // console.log(names[btnIndex])

        setNames(newArr)


    }

    const numberOfFields = donorFields.numberOfFields;

    //arr of elements where length of arr indicates how many name fields the user has added
    let numberOfNewNames = [];

    for(let i = 1; i <= numberOfFields; i++){
        numberOfNewNames.push(i)
    }



    const AddtionalNameFields = numberOfNewNames.map((newName, index) => {
    
        return  <div key = {index} className='additional-donor-field'>
                    <StandardInputField cssClass = 'short-input-field first-name' prefill = 'First name' updateKey = 'donorFirstName' updateNames = {updateNames} type = "name" index = {index + 1} incompleteFields = {false}/>

                    <StandardInputField cssClass = 'short-input-field last-name' prefill = 'Last name' updateKey = 'donorLastName' updateNames = {updateNames} type = "name" index = {index + 1} incompleteFields = {false}/>

                    <AddDonorBtn changeNumberOfNameFields = {deleteNewDonorName} operation = '-' tooltipMsg = 'Remove this donor name' index = {index + 1}/>
                </div>


    })
    
    return (
              <div>

            <div className={props.cssClass}>



                <label> {props.inputLabel} </label>
        
            

                <StandardInputField cssClass = 'short-input-field first-name' prefill = 'First name' updateNames = {updateNames} updateKey = 'donorFirstName' type = "name" index = {0} incompleteFields = {props.incompleteFields} userChoices = {props.userChoices}/>

                <StandardInputField cssClass = 'short-input-field last-name' prefill = 'Last name' updateNames = {updateNames} updateKey = 'donorLastName' type = "name" index = {0} incompleteFields = {false}/>

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