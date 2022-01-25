import React, {useState, useEffect} from 'react';
import './inputfields.css'



const StandardInputField = (props) => {

    // the values were saved in state when moving btw pages but the old answers wouldn't show in the fields if you moved back / forward
    //getSavedValue should fix that

    const getSavedValue = () => {
      console.log(props.userChoices)



      //if name type do this


    }

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
   
            <input className={props.incompleteFields ?  'incomplete' : props.cssClass} placeholder={ props.incompleteFields ? props.prefill + ' required' : props.prefill} 
            onChange={handleChange} value = {value} type = {props.type}/>

          
        </div>
    )
}

export default StandardInputField;

//   <input className={props.cssClass} > {props.prefill}</input>