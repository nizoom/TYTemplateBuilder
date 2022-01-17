import React, {useState, useEffect} from 'react';
import './inputfields.css'



const StandardInputField = (props) => {

    const [value, setValue] = useState('')

    function handleChange(event){
      
      const userInput = event.target.value;
      
      setValue(userInput)

      let key = props.updateKey
    //   console.log({[key]: 'poop'}
    //   )
      props.updateUserChoice({[key] : userInput})
     
      // setValue((prevValue ) => {
      //   prevValue.substring(0, )
      // })
   
    }

    // useEffect(() => {
    //     props.updateUserChoice(value)
    // }, [value])
 
 
    return(
        <div className='input-field-position'> 
   
            <input className={props.cssClass} placeholder={props.prefill} onChange={handleChange} value = {value} type = {props.type}/>

          
        </div>
    )
}

export default StandardInputField;

//   <input className={props.cssClass} > {props.prefill}</input>