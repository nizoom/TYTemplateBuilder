import React, {useState, useEffect} from 'react';
import './inputfields.css'



const StandardInputField = (props) => {

    // the values were saved in state when moving btw pages but the old answers wouldn't show in the fields if you moved back / forward
    //getSavedValue should fix that

    //if state value is blank then use callback / ref / saved value : OTHERWISE use state value 

    //probably does need to be passed userChoices and then dynamically find based on updateKEY 

    const [value, setValue] = useState('')



    function handleChange(event){

      const userInput = event.target.value;
      
      setValue(userInput)

      let key = props.updateKey


      if(props.type === 'name') {

        // console.log({[key] : userInput, index : props.index})

        props.updateNames({[key] : userInput, index : props.index})

      } else {

        //not a name field
        
        props.updateUserChoice({[key] : userInput})

      }
      
    }

    
  // useEffect(() => {
  //   console.log(value)
  // }, [value])


    return(
        <div className='input-field-position'> 
   
            <input className={props.incompleteFields ?  'incomplete' : props.cssClass} placeholder= { props.incompleteFields ? props.prefill + ' required' : props.prefill} 
            onChange={handleChange} value = {props.value !== undefined ? props.value : ''} type = {props.type} />

          
        </div>
    )
}

export default StandardInputField;

